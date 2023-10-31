#const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    organization: "org-A607kOg9mazKTmUZKRiaMTxo",
    apiKey: "sk-G2yBWV9PjkR8yOXHeHiT3BlbkFJ4TNWG6TO0aliLrBjg3TD",// // Replace with your actual API key
});

//sk-G2yBWV9PjkR8yOXHeHiT3BlbkFJ4TNWG6TO0aliLrBjg3TD

const openai = new OpenAIApi(configuration);

try {
    const response = await openai.listEngines();
    console.log(response.data);
} catch (error) {
    console.error("Error:", error);
}


const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    }
});

function kill(){
  const axios = require('axios');

	const options = {
  	method: 'POST',
  	url: 'https://api.render.com/v1/services/srv-ckud7cmb0mos738u2ssg/suspend',
  	headers: {
    	accept: 'application/json',
    	authorization: 'Bearer rnd_dbjVtRsFHMVGqUPbdHtlPLN4ulbq'
  	}
	};

	axios
  	.request(options)
  	.then(function (response) {
    	console.log(response.data);
      io.emit("server" , "server shut down succesfully");
  	})
  	.catch(function (error) {
    	console.error(error);
  	});
}


io.on("connection", (socket) => {
    socket.on("server-kill" , (data) =>{
      if (data.akc === "I like amelie" && data.acc === "260908180608"){
       
      }else{
        io.emit("server" , "Authentication failed , unable to shutdown server");
      }
    });
});

const PORT = process.env.PORT || 5500;

server.listen(PORT, () => {
    console.log(`Server is up and running, server listening on port ${PORT}.`);
});
