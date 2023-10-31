const Node = {
  "id": "8d49d56512a33e06",
  "type": "function",
  "z": "551975e4cbab4f74",
  "g": "e7f688e8e6ed561a",
  "name": "set file names",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 360,
  "y": 420,
  "wires": [
    [
      "4a69f27066402cd2"
    ]
  ],
  "_order": 52
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    if (msg.payload.includes(msg.req.query.file)) {
        const remotePath = env.get("REMOTE_OUT_PATH");
        msg.payload.filename = remotePath + "/" + msg.req.query.file;
        return msg;
    } else throw Error('No such file');
  
}

module.exports = Node;