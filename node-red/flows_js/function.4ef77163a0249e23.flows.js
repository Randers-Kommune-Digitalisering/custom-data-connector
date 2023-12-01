const Node = {
  "id": "4ef77163a0249e23",
  "type": "function",
  "z": "04aa633ae3a38a7c",
  "name": "set res",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 690,
  "y": 80,
  "wires": [
    []
  ],
  "_order": 67
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
  msg.payload = { "success": true, "message": `${msg.uploadedFiles.length} file(s) uploaded as ${msg.uploadedFiles.join()}` }
    msg.statusCode = 200;
    return msg;
  
}

module.exports = Node;