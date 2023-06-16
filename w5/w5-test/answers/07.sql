-- ===================== --
-- QUESTION 07 (STRETCH) --
-- ===================== --
--
-- List all store names, along with how many books each is assigned, regardless of their in-stock situation
-- The resultset should include two columns: store_name and book_count
-- Tip: you will need to rename the columns in the resultset accordingly

-- ============ --
-- TEST COMMAND --
-- ============ --
--
-- sqlite3 -column -header supporting-files/test.sqlite3 < answers/07.sql

-- ================ --
-- EXPECTED RESULTS --
-- ================ --
-------------------------
-- store_name  book_count
-- ----------  ----------
-- Montreal    2
-- Toronto     2
-- Vancouver   3
-------------------------

-- ============ --
-- SQL SOLUTION --
-- ============ --
--
-- MODIFY THE QUERY BELOW:

SELECT stores.name as store_name, COUNT(books.id) as book_count from books
JOIN stores ON books.store_id = stores.id
GROUP BY stores.name
