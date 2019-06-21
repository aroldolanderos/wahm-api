# WAHM API - (what and how much)

API to store in what I wpend my money and how much destiny for it.


## Setup

Clone the repo and then run `npm install`.

```
Create a database, like: db_wahm
```

Enviroment variables:
```
cp .env.example .env
```

```
APP_KEY=<generate_key>

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=<db_user>
DB_PASSWORD=<db_password>
DB_DATABASE=<db_name>

```

Generate app key:
```bash
adonis key:generate
```


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

For dummy data, run:
```js
adonis migration:refresh && adonis seed 
```

For more adonis commands just run:
```js
adonis
```
