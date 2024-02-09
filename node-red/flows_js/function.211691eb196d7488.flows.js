const Node = {
  "id": "211691eb196d7488",
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
  "x": 280,
  "y": 140,
  "wires": [
    [
      "546a8af1d53dd275"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.req.headers['auth']) msg.filter = msg.req.headers['auth'].split(',')
  return msg;
}

module.exports = Node;