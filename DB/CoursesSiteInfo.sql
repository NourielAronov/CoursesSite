CREATE DATABASE NourielDB
USE NourielDB

CREATE TABLE Courses (
  CourseID int NOT NULL PRIMARY KEY IDENTITY (1, 1),
  CourseName varchar(255) NOT NULL,
  CourseDescription varchar(255) NOT NULL,
  gmush int NOT NULL,
);

INSERT INTO Courses (CourseName, CourseDescription, gmush)
  VALUES ('MongoDB', 'Mongo not Longo', 20),
  ('Python', 'Learn about snakes', 40),
  ('Safe coding', 'Keep the hackers away', 10),
  ('SQL', 'Gotta know how to receive the datao', 15),
  ('Cyber Warfare', 'Hacking to the pentagon', 70),
  ('React', 'Hello Web World', 45),
  ('C++', 'sea plus plus', 35),
  ('Basic java', 'java basics', 30),
  ('CI/CD', 'Good luck guys', 80);

GO

CREATE TABLE Dates (
  DateID int NOT NULL PRIMARY KEY IDENTITY (1, 1),
  startDate date NOT NULL,
);

INSERT INTO Dates (startDate)
  VALUES ('2021-01-01'),
  ('2020-07-25'),
  ('2020-12-14');

GO

CREATE TABLE CoursesDateRelation (
  CourseDateId int NOT NULL PRIMARY KEY IDENTITY (1, 1),
  CourseID int NOT NULL FOREIGN KEY REFERENCES Courses (CourseID),
  DateID int NOT NULL FOREIGN KEY REFERENCES Dates (DateID),
);

INSERT INTO CoursesDateRelation (CourseID, DateID)
  VALUES (1,1),
  (1,2),
  (1,3),
  (2,1),
  (2,2),
  (2,3),
  (3,2),
  (3,1),
  (3,3),
  (4,1),
  (4,2),
  (4,3),
  (5,1),
  (5,2),
  (5,3),
  (6,1),
  (6,2),
  (6,3),
  (7,1),
  (7,2),
  (7,3),
  (8,1),
  (8,2),
  (8,3),
  (9,1),
  (9,2),
  (9,3);
