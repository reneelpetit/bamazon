

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price FLOAT,
    stock_quantity INT,
	primary key(item_id)
);

INSERT INTO products (product_name, department_name, price,
 stock_quantity)
VALUES ("cinnamon incense", "home and garden", 4.30, 250);

INSERT INTO products (product_name, department_name, price,
 stock_quantity)
VALUES ("saraswati statue", "home and garden", 55.25, 175);

INSERT INTO products (product_name, department_name, price,
 stock_quantity)
VALUES ("khichadi spices", "kitchen", 5.00, 300);

INSERT INTO products (product_name, department_name, price,
 stock_quantity)
VALUES ("cat toy", "pets", 1.75, 500);

INSERT INTO products (product_name, department_name, price,
 stock_quantity)
VALUES ("skinny pop popcorn", "food and pantry", 3.25, 613);

INSERT INTO products (product_name, department_name, price,
 stock_quantity)
VALUES ("traditional medicinals throat coat tea", "food and pantry",
 5.00, 435);
 
INSERT INTO products (product_name, department_name, price,
 stock_quantity)
VALUES ("yoga mat", "sports and exercise",
 25.00, 50);
 
INSERT INTO products (product_name, department_name, price,
 stock_quantity)
VALUES ("sunscreen", "medicine cabinet",
 8.95, 75);
 
INSERT INTO products (product_name, department_name, price,
 stock_quantity)
VALUES ("hair diffuser", "beauty",
 30.60, 25);
 
INSERT INTO products (product_name, department_name, price,
 stock_quantity)
VALUES ("everlast lipstick", "beauty",
 5.45, 10);
