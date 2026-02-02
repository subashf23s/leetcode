-- Create a Database
CREATE DATABASE subashdb;

-- db owned by user with a tablespace
CREATE DATABASE subashdb OWNER subashuser TABLESPACE subashtablespace;

-- create db with a different locale
CREATE DATABASE subashdb LOCALE 'sv_SE.utf8' TEMPLATE template0;

