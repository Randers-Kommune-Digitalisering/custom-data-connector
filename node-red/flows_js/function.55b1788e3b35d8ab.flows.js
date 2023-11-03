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
  "x": 530,
  "y": 540,
  "wires": [
    []
  ],
  "_order": 49
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = { "success": true, "message": msg.title + " uploaded" };
  msg.statusCode = 200;
  return msg;
}

module.exports = Node;