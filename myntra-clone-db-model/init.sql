-- CREATE DB
CREATE DATABASE myntraClone;

-- CREATE TABLES
-- [Users]
CREATE TABLE users(
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(200) NOT NULL,
	email VARCHAR(200) NOT NULL,
	password VARCHAR(200) NOT NULL,
	is_admin boolean NOT NULL,
	address varchar(200) NOT NULL,
	phone varchar(200) NOT NULL,
	created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	modified_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO `users` (`name`, `email`, `password`, `is_admin`, `address`,`phone` ,`created_on`, `modified_on`) VALUES 
('Test User', 'testmount@test.com', 'e2fc714c4727ee9395f324cd2e7f331f', '0','Kolkata INDIA 65','7890127418', current_timestamp(), current_timestamp());

-- C:\xampp\htdocs

-- [Products]
CREATE TABLE products(
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(200) NOT NULL,
	price INT(7) NOT NULL,
	description VARCHAR(300) NOT NULL,
	imgPath VARCHAR(200) NOT NULL,
	created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	modified_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO `products` (`name`, `price`, `description`, `imgPath`) VALUES
('Full Sleve Shirt 3', 500, 'Black Shirt french coller Very OP, 100% german cotton', 'https://bit.ly/38Wd3e8');

-- [Order Table]
CREATE TABLE orders(
	id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	ordered_by INT(6) NOT NULL,
	product_id INT(7) NOT NULL,
	quantity INT(7) NOT NULL,
	status VARCHAR(200) NOT NULL DEFAULT "processing",
	created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	modified_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- 3 states for orders.status --> processing, onway, 
INSERT INTO `orders` (ordered_by,product_id,quantity) VALUES (26,11,1);
INSERT INTO `orders` (ordered_by,product_id,quantity) VALUES (26,1,1);
INSERT INTO `orders` (ordered_by,product_id,quantity) VALUES (25,2,2);

 select * from orders  INNER JOIN products ON orders.product_id=products.id where orders.ordered_by=26;
 
 UPDATE orders SET status='processed' WHERE id=23;
 -- ORDER for a SINGLE USER.
 
 select orders.id, orders.status, products.id AS "product_id", products.name, products.price, products.imgPath, products.description, orders.quantity from orders  INNER JOIN products ON orders.product_id=products.id where orders.ordered_by=26;

 -- FOR ADMIN
 select orders.id,orders.status,orders.quantity,
  products.id AS "product_id", products.name, products.price,products.imgPath,
  users.id AS "uid", users.name AS "uname", users.email, users.address, users.phone  
 FROM orders  
 INNER JOIN products ON orders.product_id=products.id 
 INNER JOIN users ON orders.ordered_by=users.id 
 where orders.ordered_by=26 ORDER BY orders.created_on;

 -- KHATAM KAHA NI, BARBAD JAWANI.