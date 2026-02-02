CREATE TABLE my_first_table(
    first_column text,
    second_column integer
)

create table products(
    product_no integer,
    name text,
    price numeric
)

drop table my_first_table;
drop table products;

create table products(
    product_no integer,
    name text,
    price numeric DEFAULT 9.99
)

create table products(
    product_no SERIAL,
    name text;
)