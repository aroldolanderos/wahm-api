# WAHM API - (what and how much)

API to store in what I wpend my money and how much destiny for it.


## Setup

Clone the repo and then run `npm install`.

```mysql
create database wham_db;
```

```bash
Generate app key:

adonis key:generate
```

Enviroment variables:

```
APP_KEY=<generate_key>

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=<user>
DB_PASSWORD=<password>
DB_DATABASE=wham_db

```

### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

For more adonis commands just run:
```js
adonis
```
