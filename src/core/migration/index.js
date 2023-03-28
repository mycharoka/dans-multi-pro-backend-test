const { client } = require("./db")
const auth = require("../auth/migration")

let migration = async () => {
  try {
    await client.connect();

    await auth.migration(client)

    await client.end();
  } catch (err) {
    console.log(err.message);
    await client.end();
  }
};

migration();