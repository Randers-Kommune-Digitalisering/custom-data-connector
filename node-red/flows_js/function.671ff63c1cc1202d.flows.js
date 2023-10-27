const Node = {
  "id": "671ff63c1cc1202d",
  "type": "function",
  "z": "0a430953902bab1f",
  "name": "raise error",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 530,
  "y": 80,
  "wires": [
    []
  ],
  "_order": 74
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  throw new Error(`Missing data in request`)
  return msg;
}

module.exports = Node;