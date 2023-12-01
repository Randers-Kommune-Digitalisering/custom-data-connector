const Node = {
  "id": "469dd819c21d4c25",
  "type": "function",
  "z": "971a7ae6df987a48",
  "g": "ccbd6188c8e31fd0",
  "name": "set res",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 750,
  "y": 480,
  "wires": [
    [
      "415dc8be0201ad0c"
    ]
  ],
  "_order": 190
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.headers = { "content-type": "application/json"};
  msg.statusCode = 200;
  return msg;
  
}

module.exports = Node;