const Node = {
  "id": "e297f2dc3bfbbbd0",
  "type": "function",
  "z": "b94f8a12e390ede3",
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
    []
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const aut_names = msg.payload.filter(file => file.slice(0, 4) === 'Aut_').map(file => file.split('.').slice(0, -1).join('.'));
  const data_names = msg.payload.filter(file => file.slice(0, 5) === 'Data_').map(file => file.split('.')[0].slice(5));
  msg.test1 = aut_names
  msg.test2 = data_names
  if (msg.req.method === "POST" && aut_names.includes(msg.name)) {
      msg.statusCode = 400
      throw Error(msg.name + ' already exists');
  }
  if (!data_names.includes(msg.name.slice(4))) {
      msg.statusCode = 400
      throw Error('No data file exists for ' + msg.name);
  }
  return msg;
}

module.exports = Node;