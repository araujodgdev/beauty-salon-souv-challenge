CREATE TABLE IF NOT EXISTS "reservations" (
	"id" serial PRIMARY KEY NOT NULL,
	"client_name" varchar(256) NOT NULL,
	"client_email" varchar(50) NOT NULL,
	"client_phone" varchar(50) NOT NULL,
	"reservation_date" date NOT NULL
);
