const Node = {
  "id": "931394c53f56e313",
  "type": "function",
  "z": "ceab71d708a09018",
  "name": "set response",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1390,
  "y": 40,
  "wires": [
    []
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = { "success": true, "message": "1 fil uploaded", "files": [msg.payload.filename.split('/').pop()]};
  msg.statusCode = 200;
  return msg;
}

module.exports = Node;