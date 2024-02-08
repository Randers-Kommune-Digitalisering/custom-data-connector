const Node = {
  "id": "d3abefa1d0ef32cb",
  "type": "function",
  "z": "2a8933e95f6f15b9",
  "name": "set res",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1130,
  "y": 220,
  "wires": [
    []
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = { "success": true, "message": `${msg.name} slettet` };
  return msg;
}

module.exports = Node;