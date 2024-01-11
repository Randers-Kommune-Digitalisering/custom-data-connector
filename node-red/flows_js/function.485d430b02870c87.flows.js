const Node = {
  "id": "485d430b02870c87",
  "type": "function",
  "z": "1c2501d645c4f2bb",
  "g": "5ab826cd2f3b1618",
  "name": "set name",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 640,
  "y": 160,
  "wires": [
    [
      "8bcef56586da0453"
    ]
  ],
  "_order": 106
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.name = decodeURI(msg.req.files.at(-1).originalname.split('.')[0]);
  if (msg.req.method === "POST" && !(msg.name.slice(0, 4) === "Aut_")) msg.name = "Aut_" + msg.name
  return msg;
}

module.exports = Node;