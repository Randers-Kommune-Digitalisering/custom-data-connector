const Node = {
  "id": "a537f8c8e3ba7558",
  "type": "function",
  "z": "b94f8a12e390ede3",
  "name": "check for illegal name",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 200,
  "y": 40,
  "wires": [
    [
      "c6e1fac3c70306ed"
    ]
  ],
  "_order": 117
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  if (msg.req.method === "PUT" && !(msg.name.slice(0, 4) === "Aut_")) throw Error('All files starts "Aut_", no such file as ' + msg.name)
  return msg;
}

module.exports = Node;