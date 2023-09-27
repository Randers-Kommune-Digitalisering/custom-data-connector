const Node = {
  "id": "7208316b0728a773",
  "type": "function",
  "z": "971a7ae6df987a48",
  "name": "validate consistency of columns",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 190,
  "y": 800,
  "wires": [
    [
      "e5f84826590b063a"
    ]
  ],
  "_order": 18
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const keyCount = Object.keys(msg.payload[0]).length
  if (!msg.payload.every(obj => Object.keys(obj).length === keyCount)) msg.node.error('Validation error', 'inconsistent number of keys');
  return msg;
}

module.exports = Node;