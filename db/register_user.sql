INSERT INTO app_users(user_name, username, password)
VALUES($1, $2, $3)
returning user_id, user_name, username