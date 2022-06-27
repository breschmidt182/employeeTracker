INSERT INTO department(name)
VALUES ('HR');

INSERT INTO role(title, salary, department_id)
VALUES ('Manager', 25.00, 1);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUE ('Jack', 'Write', 1, NULL);