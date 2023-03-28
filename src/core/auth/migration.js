const bcrypt = require("bcryptjs");

let migration = async (client) => {
    try {
        await client.query(
            "CREATE TABLE IF NOT EXISTS users( id serial PRIMARY KEY, username VARCHAR (50) UNIQUE NOT NULL, password VARCHAR (100) NOT NULL, name VARCHAR (50), role VARCHAR (10))"
        );

        const username = process.env.ADMIN_USERNAME;
        const password = process.env.ADMIN_PASSWORD;

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        let queryFirstUser =
            "INSERT INTO users (username, password, name, role) VALUES($1, $2, $3, $4) RETURNING *";
        let valueFirstUser = [username, hashPassword, "admin", "admin"];

        let res = await client.query(queryFirstUser, valueFirstUser);
        if (res) {
            console.log("Username and password have been created");
            console.log({
                username,
                password,
            });
        }
    } catch (err) {
        console.log(err.message);
        console.log({
            username,
            password,
        });
    }
};

module.exports = {
    migration,
};
