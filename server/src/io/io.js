import { Server } from "socket.io";
import { EmitChatHistory } from "./events/ChatHistory.js";
import { emitChatMessage } from "./events/ChatHistory.js";
let io;
export const registerSocketServer = (server)=>{
    io = new Server(server, {
        cors:{
            origin: "*",
            methods: ["GET", "POST"],

        },
    })

    io.on("connection", (socket)=>{
        console.log("new user connection");
        console.log(socket.id);

        socket.on("chat-history", (channelId)=>{
            socket.join(channelId);
            EmitChatHistory(socket, channelId);

        })

        socket.on("chat-message", (data)=>{
            emitChatMessage(io, {toChannel: data.toChannel, message: data.message})
        })
        socket.on("chat-unsubscribe", (channelId)=>{
            socket.leave(channelId)
        })
    })
}