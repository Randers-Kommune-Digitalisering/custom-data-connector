const Node = {
  "id": "f80f44fb6233a5b9",
  "type": "function",
  "z": "84314e70c5c07697",
  "name": "convert to csv",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 180,
  "y": 140,
  "wires": [
    [
      "5f3e8906e8898d6e"
    ]
  ],
  "_order": 25
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const items = msg.payload;
  const replacer = (key, value) => value === null ? '' : value;
  const header = Object.keys(items[0]);
  msg.meta = header.join(';')
  msg.data = [...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'))].join('\r\n');
  delete msg.payload;
  return msg;
}

module.exports = Node;