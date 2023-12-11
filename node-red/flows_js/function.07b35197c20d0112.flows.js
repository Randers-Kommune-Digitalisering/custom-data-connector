const Node = {
  "id": "07b35197c20d0112",
  "type": "function",
  "z": "04aa633ae3a38a7c",
  "g": "2214c2bc20dee325",
  "name": "set data",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 820,
  "y": 240,
  "wires": [
    [
      "60b51345c824e5f3"
    ]
  ],
  "_order": 58
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
  
    let file = msg.req.files.pop();
    if (file.mimetype === 'text/csv') {
      msg.payload = file.buffer.toString('utf8').replace(/\r/g, "").trim();
      msg.uploadedFiles.push(msg.name)
      return msg;
    } else throw Error(`Unknown file type: ${file.mimetype}`)
  
  
}

module.exports = Node;