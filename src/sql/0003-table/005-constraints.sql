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

-- Not-Null Constraints

create table products(
    product_no integer not null,
    name text not null,
    price numeric
)

create table products(
    product_no integer not null,
    name text not null,
    price numeric not null Check (price > 0)
)

-- unique constraints

create table products(
    product_no integer unique,
    name text,
    price numeric
)

-- primary keys

create table products(
    product_no integer primary key,
    name text,
    price numeric
)

-- foreign keys

create table products(
    product_no integer primary key,
    name text,
    price numeric
)
create table orders(
    order_id integer primary key,
    product_no integer references products(product_no),
    quantity integer
)
-- or
create table orders(
    order_id integer primary key,
    product_no integer references products,
    quantity integer
)