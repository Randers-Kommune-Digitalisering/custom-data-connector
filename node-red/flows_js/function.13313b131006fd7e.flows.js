const Node = {
  "id": "13313b131006fd7e",
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
  "y": 320,
  "wires": [
    [
      "ad21db6680485cca"
    ]
  ],
  "_order": 169
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.req.headers['auth']) msg.filter = msg.req.headers['auth'].split(',')
  return msg;
}

module.exports = Node;