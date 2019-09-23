UPDATE users
SET
firstname = $1,
email = $2,
username = $3
where id = $4
RETURNING *