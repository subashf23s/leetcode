-- Check constraints

create table products(
    product_no integer,
    name text,
    price numeric CHECK (price > 0)
)

create table products(
    product_no integer,
    name text,
    price numeric constraint positive_price (price > 0)
)

create table products(
    product_no integer,
    name text,
    price numeric CHECK (price > 0 ),
    discounted_price numeric CHECK (discounted_price > 0),
    CHECK ( price > discounted_price)
)