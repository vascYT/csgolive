const express = require("express");
const router = express.Router();

router.get("/:id", (request, response) => {
    var io = request.app.get("socketio");
    var id = request.params.id;

    // Join room on connection
    io.on("connection", socket => {
      console.log(`Socket ${socket.id}, joining room ${id}.`);
      socket.join(id);

      console.log(socket.rooms.size);

      socket.on("disconnecting", () => {
        console.log(`Socket ${socket.id} disconnected, destroying it.`)
        socket.leave(id);
      });
    });

    response.render("room.ejs");
});
  
router.post("/:id", (request, response) => {
    var io = request.app.get("socketio");
    var id = request.params.id;
    console.log(`Received json, sending to room ${id}`)
  
    // Send information to client.
    io.to(id).emit("update", request.body);
  
    response.sendStatus(200);
});

module.exports = router;