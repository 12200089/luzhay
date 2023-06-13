CREATE DATABASE luzhay;

create table music(
	id SERIAL PRIMARY KEY NOT NULL,
	name VARCHAR(255),
	author VARCHAR(255),
	type VARCHAR(255),
	img VARCHAR(255),
	song VARCHAR(255)
	
);

insert into music (name,author,type) VALUES ('Gaa','Kenny','Rigsar');

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

