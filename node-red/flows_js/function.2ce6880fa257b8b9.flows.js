const Node = {
  "id": "2ce6880fa257b8b9",
  "type": "function",
  "z": "04aa633ae3a38a7c",
  "g": "2214c2bc20dee325",
  "name": "set title",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 660,
  "y": 180,
  "wires": [
    [
      "7c23aadd02a45047"
    ]
  ],
  "_order": 61
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.title = msg.req.files.at(-1).originalname.split('.')[0];
  return msg;
}

module.exports = Node;