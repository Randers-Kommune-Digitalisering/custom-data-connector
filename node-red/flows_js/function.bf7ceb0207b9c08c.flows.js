const Node = {
  "id": "bf7ceb0207b9c08c",
  "type": "function",
  "z": "864f94e568493dca",
  "name": "set groups var",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 860,
  "y": 160,
  "wires": [
    []
  ],
  "_order": 102
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const groups = msg.payload.filter(file => file.slice(0, 4) === 'Meta').map(file => file.split('.')[0].slice(5));
  msg.groups = groups;
  return msg;
}

module.exports = Node;