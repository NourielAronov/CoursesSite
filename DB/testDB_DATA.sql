USE testDB

GO

INSERT INTO courses
  (name, description, gmush)
VALUES
  ('MongoDB', 'Mongo not Longo', 20),
  ('Python', 'Learn about snakes', 40),
  ('Safe coding', 'Keep the hackers away', 10),
  ('SQL', 'Gotta know how to receive the datao', 15),
  ('Cyber Warfare', 'Hacking to the pentagon', 70),
  ('React', 'Hello Web World', 45),
  ('C++', 'sea plus plus', 35),
  ('Basic java', 'java basics', 30),
  ('CI/CD', 'Good luck guys', 80);

GO

INSERT INTO dates
  (startDate)
VALUES
  ('2021-01-01'),
  ('2020-07-25'),
  ('2020-12-14');

GO

INSERT INTO course_date
  (course_id, date_id)
VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (2, 1),
  (2, 2),
  (2, 3),
  (3, 2),
  (3, 1),
  (3, 3),
  (4, 1),
  (4, 2),
  (4, 3),
  (5, 1),
  (5, 2),
  (5, 3),
  (6, 1),
  (6, 2),
  (6, 3),
  (7, 1),
  (7, 2),
  (7, 3),
  (8, 1),
  (8, 2),
  (8, 3),
  (9, 1),
  (9, 2),
  (9, 3);
