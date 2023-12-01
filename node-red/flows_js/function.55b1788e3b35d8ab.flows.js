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
  ],
  "_order": 55
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.meta_already_exists) msg.payload = { "success": true, "message": "Source " + msg.name + " uploaded" };
  else msg.payload = { "success": true, "message": "Group and source " + msg.name + " uploaded" };
  msg.statusCode = 200;
  return msg;
}

module.exports = Node;