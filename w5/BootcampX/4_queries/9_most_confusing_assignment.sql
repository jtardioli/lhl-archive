SELECT 
assignments.id,
assignments.name, 
assignments.day, 
assignments.chapter, 
total_requests_table.total_requests FROM 

(SELECT assignment_id, COUNT(*) AS total_requests FROM assistance_requests
JOIN assignments ON assignments.id = assistance_requests.assignment_id
GROUP BY assignment_id) AS total_requests_table

JOIN assignments ON assignments.id = total_requests_table.assignment_id
ORDER BY total_requests_table.total_requests DESC
