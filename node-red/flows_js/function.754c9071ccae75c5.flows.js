const Node = {
  "id": "754c9071ccae75c5",
  "type": "function",
  "z": "971a7ae6df987a48",
  "g": "e42aa7e73ba0efec",
  "name": "set res",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 750,
  "y": 620,
  "wires": [
    [
      "04553a2c9b2b110e"
    ]
  ],
  "_order": 187
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.headers = { "content-type": "application/json"};
  msg.payload = { "success": true, "message": `Group ${msg.payload.filename.split("_")[1].split('.')[0]} uploaded` };
    msg.statusCode = 200;
    return msg;
  
}

module.exports = Node;