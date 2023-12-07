const Node = {
  "id": "f80f44fb6233a5b9",
  "type": "function",
  "z": "84314e70c5c07697",
  "g": "089d805555301a78",
  "name": "convert to csv",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 740,
  "y": 320,
  "wires": [
    [
      "8272b3b4cb2c3081"
    ]
  ],
  "_order": 43
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const replacer = (value) => value === null ? '' : value;
  
  const data_items = msg.data;
  const meta_items = msg.columns;
  
  const meta_header = Object.keys(meta_items[0]);
  const data_header = Object.keys(data_items[0]);
  
  let meta_first_row = meta_header.join(';') + '\r\n';
  let meta_rows = [...meta_items.map(row => meta_header.map(fieldName => String(replacer(row[fieldName]))).join(';'))].join('\r\n');
  msg.meta = meta_first_row + meta_rows;
  
  let data_first_row = data_header.join(';') + '\r\n';
  let data_rows = [...data_items.map(row => data_header.map(fieldName => String(replacer(row[fieldName]))).join(';'))].join('\r\n');
  msg.data = data_first_row + data_rows
  
  return msg;
}

module.exports = Node;