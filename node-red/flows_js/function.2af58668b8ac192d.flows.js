const Node = {
  "id": "2af58668b8ac192d",
  "type": "function",
  "z": "fcba28c363701f4a",
  "g": "034543fb886eaefe",
  "name": "set auth",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 280,
  "y": 560,
  "wires": [
    [
      "8a2ae8a71b8c0766"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    msg.authorized = true
    if (msg.req.headers['auth'])
        if (!msg.req.headers['auth'].includes('admin'))
            msg.authorized = false
    return msg;
  
}

module.exports = Node;