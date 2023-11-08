const Node = {
  "id": "f3e5c581a47981f9",
  "type": "function",
  "z": "04aa633ae3a38a7c",
  "g": "2214c2bc20dee325",
  "name": "set path",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 700,
  "y": 280,
  "wires": [
    [
      "a0fa929354b106fb"
    ]
  ],
  "_order": 66
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const remotePath = env.get("REMOTE_IN_PATH");
  msg.title = remotePath + "/" + msg.title + ".csv";
  return msg;
}

module.exports = Node;