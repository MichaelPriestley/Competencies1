-- CREATE TABLE songs(
--     song_id SERIAL PRIMARY KEY,
--     song_name VARCHAR(30),
--     artist_name VARCHAR(30),
--     album_name VARCHAR(50),
--     album_id INT REFERENCES albums (album_id),
--     artist_id INT REFERENCES artists (artist_id)
-- );

-- MANY TO MANY EXAMPLE***************************************************

-- CREATE TABLE app_users(
--     user_id SERIAL PRIMARY KEY,
--     user_name VARCHAR(30),
--     username VARCHAR(30),
--     password VARCHAR(30)
-- );

-- CREATE TABLE albums(
--     album_id SERIAL PRIMARY KEY,
--     album_name VARCHAR(30),
--     artist_name VARCHAR(30)
-- );

-- CREATE TABLE artists(
--     artist_id SERIAL PRIMARY KEY,
--     artist_name VARCHAR(30),
--     genre_name VARCHAR(30)
-- );

-- INSERT INTO artists(artist_name, genre_name) VALUES ('Bleachers', 'Rock');
-- INSERT INTO songs(song_name, artist_name, album_name) VALUES ('I Wanna Get Better', 'Bleachers', 'Strange Desire');
-- INSERT INTO albums(album_name, artist_name) VALUES ('Strange Desire', 'Bleachers');

-- INSERT INTO artists(artist_name, genre_name) VALUES ('Manchester Orchestra', 'Alternative Rock');
-- INSERT INTO songs(song_name, artist_name, album_name) VALUES ('My Friend Marcus', 'Manchester Orchestra', 'Mean Everything To Nothing');
-- INSERT INTO albums(album_name, artist_name) VALUES ('Mean Everything To Nothing', 'Manchester Orchestra');

-- INSERT INTO artists(artist_name, genre_name) VALUES ('X Ambassadors', 'Pop Rock');
-- INSERT INTO songs(song_name, artist_name, album_name) VALUES ('Gorgeous', 'X Ambassadors', 'VHS');
-- INSERT INTO albums(album_name, artist_name) VALUES ('VHS', 'X Ambassadors');

-- INSERT INTO artists(artist_name, genre_name) VALUES ('Vacationer', 'Alternative');
-- INSERT INTO songs(song_name, artist_name, album_name) VALUES ('Entrance', 'Vacationer', 'Mindset');
-- INSERT INTO albums(album_name, artist_name) VALUES ('Mindset', 'Vacationer');

-- INSERT INTO artists(artist_name, genre_name) VALUES ('Joywave', 'Alternative Rock');
-- INSERT INTO songs(song_name, artist_name, album_name) VALUES ('Tongues', 'Joywave', 'How Do You Feel Now?');
-- INSERT INTO albums(album_name, artist_name) VALUES ('How Do You Feel Now?', 'Joywave');