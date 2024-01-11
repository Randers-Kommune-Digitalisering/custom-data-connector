const Node = {
  "id": "cdae69046c08efeb",
  "type": "function",
  "z": "1c2501d645c4f2bb",
  "g": "5ab826cd2f3b1618",
  "name": "set file",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 970,
  "y": 160,
  "wires": [
    [
      "8658934556976a2a"
    ]
  ],
  "_order": 108
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let file = msg.req.files.pop();
  
  if (file.mimetype === 'text/csv') {
      const remotePath = env.get("REMOTE_IN_PATH");
      const filename = decodeURI(file);
      msg.payload = { "filename": "", "filedata": "" };
      msg.payload.filename = remotePath + "/" + file.originalname;
      msg.payload.filedata = file.buffer//.toString('utf8').replace(/\r/g, "");
      msg.uploadedFiles.push(msg.name)
      return msg;
  } else throw Error(`Unknown file type: ${file.mimetype}`)
}

module.exports = Node;