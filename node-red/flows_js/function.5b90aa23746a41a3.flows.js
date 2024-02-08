const Node = {
  "id": "5b90aa23746a41a3",
  "type": "function",
  "z": "ceab71d708a09018",
  "name": "set filename and filedata",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1070,
  "y": 40,
  "wires": [
    [
      "eb72a139ac03ec69"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const remotePath = env.get("REMOTE_IN_PATH");
  let filename = remotePath + '/' + msg.name + '.csv'
  let data = 'Brugernavn\n' + msg.users.join('\n')
  
  msg.payload = {}
  msg.payload.filename = filename
  msg.payload.filedata = Buffer.from(data, 'utf-8');
  
  return msg;
}

module.exports = Node;