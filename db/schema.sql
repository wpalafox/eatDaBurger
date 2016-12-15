CREATE DATABASE burgerzDB;
USE burgerzDB;

CREATE TABLE `burgerz` (
  
  id Int( 11 ) AUTO_INCREMENT NOT NULL,
  burgerName VARCHAR( 255) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  created_at DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) 

  );



