const Node = {
  "id": "a747333426960ead",
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
  "y": 520,
  "wires": [
    [
      "101f447019a4648a"
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