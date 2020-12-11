const express = require("express");
const app=express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const path = require("path");

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/public")));
}

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.use(express.json());
app.use(cors());

app.use("/auth",require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
})


