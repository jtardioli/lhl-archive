SELECT cohorts.name, COUNT(*) AS total_students 
FROM students JOIN cohorts 
ON students.cohort_id = cohorts.id
GROUP BY cohorts.name
ORDER BY total_students
