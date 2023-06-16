const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

let limit = 2;
let c = 'FEB';

const values = [`%${c}%`, limit];

pool.query(`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, values)
  .then(res => {
    console.log(res.rows);
  })
  .catch(err => console.error('query error', err.stack));

