const Node = {
  "id": "f6d32f1569345598",
  "type": "function",
  "z": "1c2501d645c4f2bb",
  "name": "raise error",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 350,
  "y": 60,
  "wires": [
    []
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.statusCode = 400
  throw new Error(`No files`)
}

module.exports = Node;