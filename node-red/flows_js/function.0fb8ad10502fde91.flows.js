const Node = {
  "id": "0fb8ad10502fde91",
  "type": "function",
  "z": "04aa633ae3a38a7c",
  "g": "2214c2bc20dee325",
  "name": "set prefix",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 1160,
  "y": 180,
  "wires": [
    [
      "a53c947e5719a216"
    ]
  ],
  "_order": 67
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const prefixes = ["Data_", "Meta_"];
  msg.prefix = false;
  if(prefixes.includes(msg.title.slice(0,5))) msg.prefix = true;
  return msg;
}

module.exports = Node;