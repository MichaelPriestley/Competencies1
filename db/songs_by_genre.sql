SELECT * FROM songs
WHERE artist_id IN (
  SELECT artist_id FROM artists
  WHERE genre_name = $1
)

--EXAMPLE OF DB-STATEMENTS-SUBQUERIES**************

