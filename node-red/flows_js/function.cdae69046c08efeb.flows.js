const Node = {
  "id": "cdae69046c08efeb",
  "type": "function",
  "z": "1c2501d645c4f2bb",
  "g": "5ab826cd2f3b1618",
  "name": "check and set file",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1010,
  "y": 160,
  "wires": [
    [
      "8658934556976a2a"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  function checkfile(buff) {
      let string = msg.payload.filedata.toString()
      if(string.split(';').length > 1) {
          msg.statusCode = 400
          throw Error('for mange kolonner - højest én')
      } else if(string.split('\n')[0] !== "Brugernavn") {
          msg.statusCode = 400
          throw Error('kolonnenavn skal være "Brugernavn"')
      } else return true
  }
  
  let file = msg.req.files.pop();
  
  if (file.mimetype === 'text/csv') {
      const remotePath = env.get("REMOTE_IN_PATH");
      const filename = decodeURI(file.originalname);
      msg.payload = { "filename": "", "filedata": "" };
      msg.payload.filename = remotePath + "/" + filename;
      if(checkfile(file.buffer)) msg.payload.filedata = file.buffer
      msg.uploadedFiles.push(msg.name + ".csv")
      return msg;
  } else {
      msg.statusCode = 400
      throw Error(`ukendt filtype: ${file.mimetype}`)
  }
}

module.exports = Node;