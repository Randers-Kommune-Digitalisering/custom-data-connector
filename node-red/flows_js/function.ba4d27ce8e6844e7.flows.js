const Node = {
  "id": "ba4d27ce8e6844e7",
  "type": "function",
  "z": "cf20bd9b26e00f6d",
  "name": "raise error",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 370,
  "y": 100,
  "wires": [
    []
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.statusCode = 400
  throw new Error(`ingen fil(er)`)
}

module.exports = Node;