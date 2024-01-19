const Node = {
  "id": "f299cf9d2331978a",
  "type": "function",
  "z": "fcba28c363701f4a",
  "g": "3ec2a23d37bc97d8",
  "name": "set file data",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 570,
  "y": 380,
  "wires": [
    [
      "ca80a24cc1e9c7d1"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.req.files = [];
  if(msg.payload) msg.req.files.push({ "originalname": msg.req.params.file, "buffer": Buffer.from(msg.payload, "utf-8"), "mimetype": msg.req.headers["content-type"]})
  else throw Error('No data in request body')
  return msg;
}

module.exports = Node;