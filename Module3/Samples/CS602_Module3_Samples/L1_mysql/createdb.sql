drop table if exists Weather;
create table Weather (
  city varchar(100) not null,
  temperature integer not null
);
	
insert into Weather (city, temperature) values ('Austin', 48);
insert into Weather (city, temperature) values ('Baton Rouge', 57);
insert into Weather (city, temperature) values ('Jackson', 50);
insert into Weather (city, temperature) values ('Montgomery', 53);
insert into Weather (city, temperature) values ('Phoenix', 67);
insert into Weather (city, temperature) values ('Sacramento', 66);
insert into Weather (city, temperature) values ('Santa Fe', 27);
insert into Weather (city, temperature) values ('Tallahassee', 59);

