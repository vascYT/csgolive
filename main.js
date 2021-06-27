const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const morgan = require("morgan");
const PORT = 5000;

app.set("socketio", io);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(morgan("dev"))

http.listen(PORT, () => {console.log(`Server started -> http://localhost:${PORT}`)});

app.get("/", (request, response) => {
  response.render("index.ejs");
});

app.get("/download", (request, response) => {
  response.download(__dirname + "/gamestate_integration_csgolive.cfg");
});

app.use("/room", require("./router/room"));