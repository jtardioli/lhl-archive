const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return pool.query('SELECT * from users WHERE users.email = $1;',[email])
    .then((result) => {
      console.log(result.rows);
      if (!result.rows[0]) {
        return null;
      }
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
};
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return pool.query('SELECT * from users WHERE users.id = $1;',[id])
    .then((result) => {
      if (!result.rows[0]) {
        return null;
      }
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
      return null;
    });
};
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  pool.query('INSERT INTO users VALUES (DEFAULT, $1, $2, $3 ) RETURNING *;', [user.name, user.email, user.password])
    .then((user) => {
      console.log(user.rows);
      return user.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.addUser = addUser;

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  return pool.query(`
  SELECT *
  FROM reservations
  JOIN properties ON reservations.property_id = properties.id
  WHERE reservations.guest_id = $1
  AND reservations.end_date < now()::date
  ORDER BY reservations.start_date
  LIMIT $2;`,
  
  [guest_id, limit])
    .then((result) => {
      console.log(result.rows);
      if (!result.rows) {
        return null;
      }
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */


const getAllProperties = (options, limit = 10) => {
  // 1
  const queryParams = [];
  // 2
  let queryString = `
    SELECT *
    FROM properties
    `;
  
  // 3
  if (options.city) {
    queryParams.push(`%${options.city}%`);
    if (queryParams.length === 1) {
      queryString += 'WHERE ';
    } else {
      queryString += 'AND ';
    }
    queryString += `city LIKE $${queryParams.length} `;
  }
  
  if (options.owner_id) {
    queryParams.push(`${options.owner_id}`);
    if (queryParams.length === 1) {
      queryString += 'WHERE';
    } else {
      queryString += 'AND ';
    }
    queryString += `owner_id = $${queryParams.length} `;
  }
  
  if (options.minimum_price_per_night) {
    queryParams.push(`${options.minimum_price_per_night * 100}`);
    if (queryParams.length === 1) {
      console.log('min complete');
      queryString += 'WHERE';
    } else {
      queryString += 'AND ';
    }
    queryString += `cost_per_night >= $${queryParams.length} `;
  }
  
  if (options.maximum_price_per_night) {
    queryParams.push(`${options.maximum_price_per_night * 100}`);
    if (queryParams.length === 1) {
      console.log('max complete');
      queryString += 'WHERE';
    } else {
      queryString += 'AND ';
    }
    queryString += `cost_per_night <= $${queryParams.length} `;
  }


  // 4
  queryParams.push(limit);
  queryString += `
    GROUP BY properties.id
    ORDER BY cost_per_night
    LIMIT $${queryParams.length};
    `;
  
  // 5
  console.log(queryString, queryParams);
  
  // 6
  return pool.query(queryString, queryParams)
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });

};

exports.getAllProperties = getAllProperties;


/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const newArr = Object.keys(property).map(key => property[key]);
  console.log('hi');
  console.log(newArr);
  return pool.query(` INSERT INTO properties (
    title, 
    description, 
    owner_id, 
    cover_photo_url, 
    thumbnail_photo_url, 
    cost_per_night, 
    parking_spaces, 
    number_of_bathrooms, 
    number_of_bedrooms, 
    active, 
    province, 
    city, 
    country, 
    street, 
    post_code) 
    VALUES (
    $1,
    $2,
    $14,
    $8,
    $7,
    $6,
    $5,
    $4,
    $3,
    true,
    $12,
    $11,
    $10,
    $9,
    $13
    )
  RETURNING *
  `, newArr)
    .then((res) => {
      console.log(res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
exports.addProperty = addProperty;
