const Node = {
  "id": "4ef77163a0249e23",
  "type": "function",
  "z": "04aa633ae3a38a7c",
  "name": "set response",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 670,
  "y": 80,
  "wires": [
    []
  ],
  "_order": 57
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
  msg.payload = { "success": true, "message": `"${msg.uploadedFiles.join()}" uploaded as "${msg.uploadedFilesNew.join()}"` }
    msg.statusCode = 200;
    return msg;
  
}

module.exports = Node;