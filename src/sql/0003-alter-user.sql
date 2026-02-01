-- change user's password

ALTER USER subashuser WITH PASSWORD 'subashpassword';

-- change the expiration date of the user's password

ALTER USER subashuser VALID UNTIL 'Jan 31 2030';

-- make a password valid forever

ALTER USER subashuser VALID UNTIL 'infinity';

-- give a user the ability to create other users and new databases

ALTER USER subashuser CREATEUSER CREATEDB;