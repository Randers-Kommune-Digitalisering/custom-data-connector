const Node = {
  "id": "dc1b37d3502c11c7",
  "type": "function",
  "z": "971a7ae6df987a48",
  "g": "a4403add202fad14",
  "name": "set file data",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 510,
  "y": 800,
  "wires": [
    [
      "132afc7346e495d9"
    ]
  ],
  "_order": 166
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.req.files = [];
  if(msg.payload) msg.req.files.push({ "originalname": msg.req.params.file, "buffer": Buffer.from(msg.payload, "utf-8"), "mimetype": msg.req.headers["content-type"]})
  else throw Error('No data in request body')
  return msg;
}

module.exports = Node;