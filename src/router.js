const auth = require("./core/auth/auth");

const registerRoute = (app) => {
    app.get("/api/safe", async (req, res) => {
        return res.json({ msg: "safe" });
    });

    app.use("/api/auth", require("./core/auth/controller"));
    app.use("/api/job", require('./modules/controller'));
};

module.exports = {
    registerRoute,
};
