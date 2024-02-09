const Node = {
  "id": "8112c811eb60e0ef",
  "type": "function",
  "z": "fcba28c363701f4a",
  "g": "3ec2a23d37bc97d8",
  "name": "auth?",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 450,
  "y": 300,
  "wires": [
    [
      "0934a9fb67bbdaa6"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.req.headers['auth']) {
      if(!msg.req.headers['auth'].includes("admin")) {
          let filter = msg.req.headers['auth'].split(',')
          let authorized = false
          filter.forEach((fe) => {
              if (authorized) return;
              authorized = msg.name.split('_')[1].slice(0, fe.length) === fe;
          })
          if (!authorized) {
              msg.statusCode = 401
              throw Error("Access denied")
          }
          
      }
  } 
  return msg;
}

module.exports = Node;