import express from "express";
import cors from "cors";
import http from "http"; 
import { Server } from "socket.io";

const app = express();
 
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log("User with ID:", socket.id, "joined room:", data);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data)
    })

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id)
    })
})

const PORT = process.env.PORT || 3001;
  
server.listen(3001, ()=> {
    console.log(`Server is running on port ${PORT}`);
})