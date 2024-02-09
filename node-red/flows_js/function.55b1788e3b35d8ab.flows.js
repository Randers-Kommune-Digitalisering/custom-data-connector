const Node = {
  "id": "55b1788e3b35d8ab",
  "type": "function",
  "z": "84314e70c5c07697",
  "g": "8d5d84158664e514",
  "name": "set response",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 910,
  "y": 480,
  "wires": [
    []
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.payload = { "success": true, "message": "", "files": []};
  
  if (msg.uploadedFiles) msg.uploadedFiles.push("Data_" + msg.name + ".csv")
  msg.payload.files.push("Data_" + msg.name + ".csv")
  
  if (msg.meta_already_exists) msg.payload.message = "1 fil uploaded";
  else  {
      msg.payload.message = "2 filer uploaded";
      if (msg.uploadedFiles) msg.uploadedFiles.push("Meta_" + msg.group + ".csv")
      msg.payload.files.push("Meta_" + msg.group + ".csv")
  }
  
  msg.statusCode = 200;
  return msg;
}

module.exports = Node;