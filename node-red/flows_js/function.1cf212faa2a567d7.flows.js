const Node = {
  "id": "1cf212faa2a567d7",
  "type": "function",
  "z": "b94f8a12e390ede3",
  "name": "combine files",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 470,
  "y": 160,
  "wires": [
    [
      "e297f2dc3bfbbbd0"
    ]
  ],
  "_order": 116
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.success_files) msg.payload = msg.success_files.concat(msg.waiting_files);
  else msg.payload = msg.waiting_files;
  
  delete msg.waiting_files;
  delete msg.success_files;
  
  return msg;
}

module.exports = Node;