DROP  DATABASE goodNight;
CREATE DATABASE goodNight;

Use goodNight;

CREATE TABLE roles (
    role_id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (role_id)
);


CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    userName VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(role_id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);
CREATE TABLE city(
 id INT AUTO_INCREMENT NOT NULL,
 name VARCHAR(255) NOT NULL,
 image VARCHAR(255) NOT NULL,
 description VARCHAR(255) NOT NULL,
 is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);


CREATE TABLE hotels(
id INT AUTO_INCREMENT NOT NULL,
hotelName VARCHAR(255) NOT NULL,
image VARCHAR(255) NOT NULL,
image2 VARCHAR(255) NOT NULL,
image3 VARCHAR(255) NOT NULL,
image4 VARCHAR(255) NOT NULL,
image5 VARCHAR(255) NOT NULL,
guests INT(7) NOT NULL,
bedrooms INT(7) NOT NULL,
beds INT(7) NOT NULL,
bathrooms INT(7) NOT NULL,
description  VARCHAR(255) NOT NULL,
price INT(7) NOT NULL,
city_id INT,
FOREIGN KEY(city_id) REFERENCES city(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE wishList(
id INT AUTO_INCREMENT NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id),
hotels_id INT,
FOREIGN KEY (hotels_id) REFERENCES hotels(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE comments(
    id INT AUTO_INCREMENT NOT NULL,
    comment VARCHAR(255),
    commenter VARCHAR(255),
    hotels_id INT,
FOREIGN KEY (hotels_id) REFERENCES hotels(id),
    commenter_id INT,
    FOREIGN KEY (commenter_id) REFERENCES users(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE ratings(
    id INT AUTO_INCREMENT NOT NULL,
    rating DECIMAL(2,1),
    hotels_id INT,
FOREIGN KEY (hotels_id) REFERENCES hotels(id),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

insert into roles(role) values('admin'),('user');

INSERT INTO city (name,image,description) VALUES ('Amman','https://touristjourney.com/wp-content/uploads/2020/07/Where-to-Stay-in-Amman0-scaled.jpg','The capital of Jordan, is a modern city with numerous ancient ruins');
INSERT INTO city (name,image,description) VALUES ('Aqaba','https://stepintojordan.com/wp-content/uploads/2019/09/Wadi-Musa-Restaurants-Petra-Jordan.jpg',"Aqaba is a Jordanian port city on the Red Sea's Gulf of Aqaba");
INSERT INTO city (name,image,description) VALUES ('Wadi Musa','https://stepintojordan.com/wp-content/uploads/2019/09/Wadi-Musa-Restaurants-Petra-Jordan.jpg',"Wadi Musa is a town located in the Ma'an Governorate in southern Jordan.");
INSERT INTO city (name,image,description) VALUES ('Madaba','https://media.tacdn.com/media/attractions-splice-spp-674x446/09/76/3e/69.jpg
','Madaba is an ancient town in Jordan, southwest of the capital Amman');

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Private Room","https://hyra.cron24.com/images/rooms/10001/room_01605165005.jpg","https://hyra.cron24.com/images/rooms/10006/room_01606547084.jpg","https://hyra.cron24.com/images/rooms/10006/room_11606547085.jpg","https://hyra.cron24.com/images/rooms/10006/room_01606547079.jpg","https://hyra.cron24.com/images/rooms/10006/room_01606547084.jpg","5","4","8","3","Located in the heart of Sydney with fantastic city views, the room is excellent for single/couple who want to take the flight (Available for long term rent)","80","1")