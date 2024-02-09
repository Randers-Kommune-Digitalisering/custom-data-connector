const Node = {
  "id": "9a96c032189f672d",
  "type": "function",
  "z": "ba6019643c26475d",
  "name": "set res",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1130,
  "y": 120,
  "wires": [
    []
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = { "success": true, "message": msg.req.params.file + " slettet" }
  return msg;
}

module.exports = Node;