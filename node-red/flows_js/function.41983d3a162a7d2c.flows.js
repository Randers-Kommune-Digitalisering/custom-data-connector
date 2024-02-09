const Node = {
  "id": "41983d3a162a7d2c",
  "type": "function",
  "z": "864f94e568493dca",
  "name": "check existing name",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 660,
  "y": 160,
  "wires": [
    [
      "bf7ceb0207b9c08c"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const names = msg.payload.filter(file => file.slice(0, 4) === 'Data').map(file => file.split('.')[0].slice(5));
  
  let name = msg.name
  if (name && msg.group) name = msg.group + '_' + msg.name
  else if (!name) name = msg.group
  
  if (msg.req.headers['overwrite'] !== 'true') {
      if (msg.req.method === "POST" && names.includes(name)) {
          msg.statusCode = 400
          throw Error(name + ' findes allerede');
      }
  }
  
  return msg;
}

module.exports = Node;