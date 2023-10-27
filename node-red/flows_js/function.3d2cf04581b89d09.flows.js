const Node = {
  "id": "3d2cf04581b89d09",
  "type": "function",
  "z": "551975e4cbab4f74",
  "g": "e85b2bd4e56c3a58",
  "name": "raise error",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 610,
  "y": 320,
  "wires": [
    []
  ],
  "_order": 54
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  throw new Error('Incorrect query for GET /universe, only param available is file')
  return msg;
}

module.exports = Node;