const Node = {
  "id": "befd73ac1d69e926",
  "type": "function",
  "z": "fcba28c363701f4a",
  "g": "3ec2a23d37bc97d8",
  "name": "set auth",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 260,
  "y": 140,
  "wires": [
    [
      "a53dfa2a3fd12f36"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.req.headers['auth']) msg.filter = msg.req.headers['auth'].split(',')
  return msg;
}

module.exports = Node;