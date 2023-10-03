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
  "x": 240,
  "y": 300,
  "wires": [
    [
      "5f3e8906e8898d6e"
    ]
  ],
  "_order": 25
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const data_items = msg.payload;
  const meta_items = msg.columns;
  const replacer = (key, value) => value === null ? '' : value;
  const meta_header = Object.keys(meta_items[0]);
  const data_header = Object.keys(data_items[0]);
  msg.meta = [meta_header.join(';'), ...meta_items.map(row => meta_header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'))].join('\r\n');
  msg.data = [...data_items.map(row => data_header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'))].join('\r\n');
  delete msg.payload;
  return msg;
  
}

module.exports = Node;