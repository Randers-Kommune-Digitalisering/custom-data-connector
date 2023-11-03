const Node = {
  "id": "8272b3b4cb2c3081",
  "type": "function",
  "z": "84314e70c5c07697",
  "g": "089d805555301a78",
  "name": "set file paths",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 850,
  "y": 380,
  "wires": [
    [
      "423b6842ac91f858"
    ]
  ],
  "_order": 43
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const remotePath = env.get("REMOTE_IN_PATH");
  msg.meta_filename = remotePath + "/Meta_" + msg.title + ".csv";
  msg.data_filename = remotePath + "/Data_" + msg.title + ".csv";
  return msg;
}

module.exports = Node;