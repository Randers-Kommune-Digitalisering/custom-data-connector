const Node = {
  "id": "41983d3a162a7d2c",
  "type": "function",
  "z": "864f94e568493dca",
  "name": "change name",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 640,
  "y": 100,
  "wires": [
    []
  ],
  "_order": 84
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    if(msg.req.method === "POST") {
        const fileNames = msg.payload.map(file => file = file.split('.')[0].slice(5));
        while(fileNames.includes(msg.title)) {
            msg.title = msg.title + "_kopi";
        }
    }
    
    return msg;
  
}

module.exports = Node;