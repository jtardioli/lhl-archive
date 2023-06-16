SELECT 
students.name AS student, 
AVG(assignment_submissions.duration) AS avg_duration,
AVG(assignments.duration) AS estimated_avg_duration
FROM assignment_submissions 
JOIN students
ON assignment_submissions.student_id = students.id
JOIN assignments
ON assignment_submissions.assignment_id = assignments.id
GROUP BY student
HAVING AVG(assignment_submissions.duration) < AVG(assignments.duration)
ORDER BY avg_duration;