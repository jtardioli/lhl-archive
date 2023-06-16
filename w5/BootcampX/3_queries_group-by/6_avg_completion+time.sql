SELECT students.name AS student, AVG(assignment_submissions.duration) AS avg_duration
FROM students JOIN assignment_submissions
ON students.id = assignment_submissions.student_id
GROUP BY students.name
ORDER BY avg_duration DESC