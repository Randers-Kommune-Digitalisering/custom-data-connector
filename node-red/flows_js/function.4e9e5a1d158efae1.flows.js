const Node = {
  "id": "4e9e5a1d158efae1",
  "type": "function",
  "z": "971a7ae6df987a48",
  "g": "e42aa7e73ba0efec",
  "name": "set file",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 430,
  "y": 400,
  "wires": [
    [
      "2019d2e087f6d3f0"
    ]
  ],
  "_order": 181
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      if (msg.req.params.file.split("_")[0] != "Meta") throw Error(msg.req.params.file + " is not a meta / group file");
      else if (msg.req.params.file.split(".").pop().toLowerCase() != "csv") throw Error(msg.req.params.file + " does not have the csv file extension");
      
      if(!msg.payload) msg.payload = " ";
      
      const remotePath = env.get("REMOTE_IN_PATH");
      const filename = decodeURI(msg.req.params.file);
      const filedata = msg.payload;
      msg.payload = {"filename":"", "filedata":""};
      msg.payload.filename = remotePath + "/" + filename;
      msg.payload.filedata = filedata;
      
      return msg;
    
  
}

module.exports = Node;