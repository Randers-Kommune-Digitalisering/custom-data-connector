const Node = {
  "id": "fd374186f2634f32",
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
  "y": 200,
  "wires": [
    [
      "82bd25558759ebe7"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const remotePath = env.get("REMOTE_IN_FAILED_PATH");
  msg.payload.filename = remotePath + "/" + msg.name;
  return msg;
}

module.exports = Node;