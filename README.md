# PT ATOMA TEST
Made with :heart: by b0nz

## Table of contents
* [Installation](https://github.com/b0nz/Prosehat#installations)
* [Soal 1](https://github.com/b0nz/Prosehat#soal-1)
* [Soal 2](https://github.com/b0nz/Prosehat#soal-2)
* [Soal 3](https://github.com/b0nz/Prosehat#soal-3)
* [Soal 4](https://github.com/b0nz/Prosehat#soal-4)
* [Soal 5](https://github.com/b0nz/Prosehat#soal-5)

## Requirements
* Python 3.x
* PHP 7.x
* Apache
* Mysql

## Installations
```
$ git clone https://github.com/b0nz/Prosehat
```

## Soal 1

## Soal 2

## Soal 3

## Soal 4
_before running the file, make sure you have done this command and fill this field($host=..,$user=..,$pass=..,$db=..)_
```
$ cd 4
$ mv config.example.php config.php
$ nano config.php
```
_database settings_
```
**run this query**

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE `love` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `love` (`id`, `product_id`, `user_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 2),
(5, 5, 1),
(6, 6, 2),
(7, 1, 3),
(8, 2, 3),
(9, 3, 4),
(10, 4, 5),
(11, 5, 2),
(12, 6, 1),
(13, 1, 2),
(14, 2, 6),
(15, 3, 6),
(16, 4, 5),
(17, 5, 6),
(18, 6, 3);

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `product` (`id`, `name`) VALUES
(1, 'Popok'),
(2, 'Susu'),
(3, 'Sikat Gigi'),
(4, 'Vitamin'),
(5, 'Obat Mata'),
(6, 'Tusuk Gigi');

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user` (`id`, `name`) VALUES
(1, 'Angga'),
(2, 'Bagus'),
(3, 'Yudi'),
(4, 'Rahmat'),
(5, 'Annisa'),
(6, 'Adi');

ALTER TABLE `love`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `user_id` (`user_id`);

ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `love`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `love`
  ADD CONSTRAINT `love_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `love_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
```

## Soal 5
Installation
```
$ cd 5
$ npm install
$ react-native run-android
$ react-native start //to run react native development server
```

Screenshoot 

. | .
------------|------------
![screenshots1](5/screenshoot/1.png) | ![screenshots2](5/screenshoot/2.png)
![screenshots1](5/screenshoot/3.png) | ![screenshots2](5/screenshoot/4.png)
![screenshots1](5/screenshoot/5.png) |
