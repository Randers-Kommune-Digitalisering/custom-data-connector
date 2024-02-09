const Node = {
  "id": "2eb371f429e5bc33",
  "type": "function",
  "z": "cf20bd9b26e00f6d",
  "name": "set res",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 630,
  "y": 80,
  "wires": [
    []
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = { "success": true, "message": `${msg.uploadedFiles.length} file(er) uploaded`, "files":msg.uploadedFiles }
  msg.statusCode = 200;
  return msg;
}

module.exports = Node;