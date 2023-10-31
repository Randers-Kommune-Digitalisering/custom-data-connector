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
  "x": 770,
  "y": 40,
  "wires": [
    []
  ],
  "_order": 71
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    msg.payload = { "success": true, "msg": `${msg.uploadedFiles.join()} uploaded` }
    return msg;
  
}

module.exports = Node;