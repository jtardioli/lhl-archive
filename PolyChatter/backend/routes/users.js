var express = require("express");
var router = express.Router();
const pool = require("../db");

/* GET all users info */
router.get("/users", async (req, res) => {

  try {
    // query for all userLanguage enteries
    let usersLangData = await pool.query(`
    SELECT userLanguages.user_id as userID,
    userLanguages.nativeLanguage,
    userLanguages.user_level as level,
     languages.shortform,
     languages.longform 
     FROM userLanguages
    JOIN languages ON  languages.id = userLanguages.language_id 
    ;
    `);

    // query for all users with their countries
    let usersData = await pool.query(`
    SELECT users.id,
    users.username,
    users.name,
    users.image,
    users.email,
    users.bio,
    countries.countryname,
    countries.countryshortname,
    countries.emoji
    FROM users
    LEFT JOIN countries on countries.id = users.country_id
    ;
    `);

    usersLangData = usersLangData.rows;
    usersData = usersData.rows;

    let users = {};

    // transform usersData array into an object to be able to grab users by their ID
    for (const userData of usersData) {
      users[userData.id] = userData;
    }

    // loop through the userlang enteries using the userID to insert language data into the user object directly
    for (const userLangData of usersLangData) {
      const userID = String(userLangData.userid);

      if (userLangData.nativelanguage) {
        users[userID].nativeLanguage = userLangData;
      } else {
        users[userID].targetLanguage = userLangData;
      }
    }

    // transform the object back into an array of objects so its easier to work with in react
    users = Object.keys(users).map((k) => users[k]);
    console.log("users");
    console.log(users);
    console.log(req.user);

    // Send users array to front end
    res.send(users);
  } catch (err) {
    console.log("THIS IS THE ERROR _++_+_", err.message);
  }
});

router.get("/user/:id", async (req, res) => {
  const userID = req.params.id;

  try {
    // query for specific userLanguage enteries
    let userLangsData = await pool.query(
      `
    SELECT userLanguages.user_id as userID,
    userLanguages.nativeLanguage,
    userLanguages.user_level as level,
     languages.shortform,
     languages.longform
     FROM userLanguages
    JOIN languages ON  languages.id = userLanguages.language_id
    WHERE userLanguages.user_id = $1
    ;
    `,
      [userID]
    );
    // query for all users with their countries
    let userData = await pool.query(
      `
    SELECT users.id,
    users.username,
    users.name,
    users.image,
    users.email,
    users.bio,
    countries.countryname,
    countries.countryshortname,
    countries.emoji
    FROM users
    LEFT JOIN countries on countries.id = users.country_id
    WHERE users.id = $1
    ;`,
      [userID]
    );
    // Extract data from the gross big request object
    userLangsData = userLangsData.rows;
    userData = userData.rows;
    const user = userData[0];

    // loop through the userlang enteries at add language info to user
    for (userLangData of userLangsData) {
      if (userLangData.nativelanguage) {
        user.nativeLanguage = userLangData;
      } else {
        user.targetLanguage = userLangData;
      }
    }

    res.send(user);
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
