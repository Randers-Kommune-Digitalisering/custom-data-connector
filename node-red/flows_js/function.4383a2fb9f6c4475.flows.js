const Node = {
  "id": "4383a2fb9f6c4475",
  "type": "function",
  "z": "971a7ae6df987a48",
  "g": "295a00dbacfcb968",
  "name": "set file data",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1050,
  "y": 140,
  "wires": [
    [
      "13c07aae45de1361"
    ]
  ],
  "_order": 125
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.req.files = [];
  if(!msg.req.params.file) msg.req.params.file = "Ukendt"
  if(msg.payload) msg.req.files.push({ "originalname": msg.req.params.file, "buffer": Buffer.from(msg.payload, "utf-8"), "mimetype": msg.req.headers["content-type"]})
  else throw Error('No data in request body')
  return msg;
}

module.exports = Node;