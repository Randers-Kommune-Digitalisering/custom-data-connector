const Node = {
  "id": "ce198f7804c42bc0",
  "type": "function",
  "z": "ceab71d708a09018",
  "name": "raise error",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 510,
  "y": 80,
  "wires": [
    []
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.statusCode = 400
  throw new Error(`data_file eller users mangler`);
}

module.exports = Node;