

DROP SCHEMA `stock`;

CREATE DATABASE `stock`
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE `stock`;

CREATE TABLE `sector` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `brief` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8


CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `turnover` varchar(255) DEFAULT NULL,
  `ceo` varchar(255) DEFAULT NULL,
  `boardOfDirectors` varchar(255) DEFAULT NULL,
  `stockExchanges` varchar(255) DEFAULT NULL,
  `sectorId` int(11) NOT NULL,
  `writeup` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `company_FK_sector` (`sectorId`),
  CONSTRAINT `company_FK_sector` FOREIGN KEY (`sectorId`) REFERENCES `sector` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8


CREATE TABLE `stock_exchange` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `brief` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8


CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `roles` varchar(10) NOT NULL DEFAULT '1' COMMENT '1:admin|2:normal user',
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `confirmed` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8


CREATE TABLE `ipo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `companyId` int(11) NOT NULL,
  `stockExchangeId` int(11) NOT NULL,
  `price` float NOT NULL,
  `total` int(11) NOT NULL,
  `openTime` datetime NOT NULL,
  `remarks` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ipo_FK_company` (`companyId`),
  KEY `ipo_FK_stock_exchange` (`stockExchangeId`),
  CONSTRAINT `ipo_FK_company` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`),
  CONSTRAINT `ipo_FK_stock_exchange` FOREIGN KEY (`stockExchangeId`) REFERENCES `stock_exchange` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8


CREATE TABLE `price` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `companyId` int(11) NOT NULL,
  `stockExchangeId` int(11) NOT NULL,
  `code` varchar(255) NOT NULL COMMENT 'company/stock code',
  `price` float NOT NULL,
  `createdTime` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `price_FK_company` (`companyId`),
  KEY `price_FK_stock_exchange` (`stockExchangeId`),
  CONSTRAINT `price_FK_company` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`),
  CONSTRAINT `price_FK_stock_exchange` FOREIGN KEY (`stockExchangeId`) REFERENCES `stock_exchange` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8