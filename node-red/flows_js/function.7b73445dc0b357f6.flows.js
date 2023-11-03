const Node = {
  "id": "7b73445dc0b357f6",
  "type": "function",
  "z": "971a7ae6df987a48",
  "g": "295a00dbacfcb968",
  "name": "raise error",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1130,
  "y": 160,
  "wires": [
    []
  ],
  "_order": 96
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  throw new Error(`Unknown Content-Type`)
}

module.exports = Node;