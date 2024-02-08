const Node = {
  "id": "5ed21c8d0e068ee4",
  "type": "function",
  "z": "2a8933e95f6f15b9",
  "name": "check if exist",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 350,
  "y": 220,
  "wires": [
    [
      "ff4639ca1b49e23f"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  //if (msg.success_files) msg.payload = msg.success_files.concat(msg.waiting_files);
  //else msg.payload = msg.waiting_files;
  
  //delete msg.waiting_files;
  //delete msg.success_files;
  
  //return msg;
  
  if (!msg.waiting_files.includes(msg.name) && !msg.success_files.includes(msg.name) && !msg.failed_files.includes(msg.name)) {
      msg.statusCode = 400
      throw Error('filen findes ikke')
  }
  
  if (msg.failed_files.includes(msg.name)) msg.real_delete = true
  else msg.real_delete = false
  
  return msg;
}

module.exports = Node;