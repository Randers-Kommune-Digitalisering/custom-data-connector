const Node = {
  "id": "55b1788e3b35d8ab",
  "type": "function",
  "z": "84314e70c5c07697",
  "g": "8d5d84158664e514",
  "name": "set response",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 910,
  "y": 480,
  "wires": [
    []
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.meta_already_exists) msg.payload = { "success": true, "message": "Data fil " + msg.name + ".csv" + " uploaded" };
  else msg.payload = { "success": true, "message": "Meta fil " + msg.name + ".csv " + "data fil " + msg.name + ".csv " + " uploaded" };
  msg.statusCode = 200;
  return msg;
}

module.exports = Node;