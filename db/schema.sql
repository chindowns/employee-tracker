DROP DATABASE IF EXISTS employee_cms;
CREATE DATABASE employee_cms;

USE employee_cms;

CREATE TABLE department (
    id INT auto_increment Primary Key Not Null,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT auto_increment Primary Key Not Null,
    title varchar(30),
    salary DECIMAL (10),
    department_id INT(10),
    FOREIGN KEY (department_id) REFERENCES department (id)
);

CREATE TABLE employee (
    id INT auto_increment Not Null,
    first_name varchar(30),
    last_name varchar(30),
    role_id INT(10),
    manager_id INT(10) NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role (id),
    FOREIGN KEY (manager_id) REFERENCES employee (id)
);

INSERT INTO department (name)
VALUES
	("Engineering"),
    ("QA"),
    ("Sales"),
    ("Finance"),
    ("Operations"),
    ("Legal");


INSERT INTO role (title, salary, department_id)
VALUES
    ("SW Engineer", "90000", 1),
    ("Manager", "150000", 1),
    ("Manager", "1300000", 6),
    ("Attorney", "180000", 6);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Johnny", "Bench", 2, null),
    ("Johnny", "Cochran", 3, null),
    ("George", "Brett", 1, 1),
    ("Cindy", "Lauper", 1, 1),
    ("Kim", "Kardashian", 4, 2);


