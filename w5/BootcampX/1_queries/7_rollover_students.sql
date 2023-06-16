SELECT 
students.name AS student_name, 
cohorts.name AS cohort_name, 
cohorts.start_date AS cohort_start_date,
cohorts.end_date AS cohort_end_date
FROM students JOIN cohorts 
ON students.cohort_id = cohorts.id
WHERE cohorts.start_date != students.start_date
ORDER BY cohort_start_date;