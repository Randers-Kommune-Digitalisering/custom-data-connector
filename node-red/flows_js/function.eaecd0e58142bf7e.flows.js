const Node = {
  "id": "eaecd0e58142bf7e",
  "type": "function",
  "z": "2a8933e95f6f15b9",
  "name": "set file name",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 830,
  "y": 240,
  "wires": [
    [
      "0bdc061e6fe77c56"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const remotePath = env.get("REMOTE_IN_PATH");
  msg.payload.filename = remotePath + "/" + msg.name;
  msg.payload.filedata = Buffer.alloc(0);
  return msg;
}

module.exports = Node;