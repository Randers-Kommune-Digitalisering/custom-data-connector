const Node = {
  "id": "9b99ef07b5e1c312",
  "type": "function",
  "z": "971a7ae6df987a48",
  "g": "e42aa7e73ba0efec",
  "name": "raise error",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 450,
  "y": 620,
  "wires": [
    []
  ],
  "_order": 184
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    throw new Error(`Unknown Content-Type`)
  
}

module.exports = Node;