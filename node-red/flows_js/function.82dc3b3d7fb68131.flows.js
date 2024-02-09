const Node = {
  "id": "82dc3b3d7fb68131",
  "type": "function",
  "z": "fcba28c363701f4a",
  "g": "3ec2a23d37bc97d8",
  "name": "Aut?",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 290,
  "y": 340,
  "wires": [
    [
      "8112c811eb60e0ef"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if(msg.req.params.file.slice(0,4) !== 'Aut_') {
      msg.statusCode = 400
      throw Error('ikke en aut fil')
  }
  return msg;
}

module.exports = Node;