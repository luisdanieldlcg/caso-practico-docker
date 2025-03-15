create table users(
	user_id bigserial primary key,
	email varchar(255) not null CHECK(email like '%@%') UNIQUE,
	password_hash varchar(128) not null CHECK(password_hash <> ''),
	created_at date not null default CURRENT_DATE
);

INSERT INTO users (email, password_hash)
SELECT 
    'user' || i || '@example.com',
    md5(random()::text)
FROM generate_series(1, 200) AS i;
