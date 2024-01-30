const Node = {
  "id": "c802864e6dbae596",
  "type": "function",
  "z": "2b46aa4477c6e0b0",
  "name": "check meta",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 770,
  "y": 60,
  "wires": [
    [
      "69cddf180406f361"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.meta_already_exists = false;
  
  if(msg.req.headers['new-meta'] !== 'true' && msg.groups.includes(msg.group))
      msg.meta_already_exists = true;
  
  return msg;
}

module.exports = Node;