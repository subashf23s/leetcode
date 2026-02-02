-- Create a user with no password

CREATE USER subashuser;

-- Create a user with a password

CREATE USER subashuser WITH PASSWORD 'subashpassword';

-- password is valid until the end of 2004. After one second has ticked in 2005, the password is no longer valid.

CREATE USER subashuser WITH PASSWORD 'subashpassword' VALID UNTIL '2005-01-01';

-- user can create databases;

CREATE USER subashuser WITH PASSWORD 'subashpassword' CREATEDB;