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
  "x": 1030,
  "y": 140,
  "wires": [
    []
  ],
  "_order": 88
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    throw new Error(`Unknown Content-Type`)
    return msg;
  
}

module.exports = Node;