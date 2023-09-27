const Node = {
  "id": "5f3e8906e8898d6e",
  "type": "function",
  "z": "971a7ae6df987a48",
  "name": "change decimal seperator",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 970,
  "y": 880,
  "wires": [
    [
      "76db6cd38f0c8c81"
    ]
  ],
  "_order": 20
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.data = msg.data.replaceAll('.', ',');
  return msg;
}

module.exports = Node;