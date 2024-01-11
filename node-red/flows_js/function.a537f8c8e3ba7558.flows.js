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
  
  if (msg.filter && msg.req.method === "PUT") {
      if (!msg.filter.includes("admin")) {
          let authorized = false
          msg.filter.forEach((fe) => {
              if (authorized) return;
              authorized = msg.name.split('_')[1].slice(0, fe.length) === fe;
          })
          if (!authorized) throw Error("Unauthorized")
      }
  }
  
  if (msg.filter && msg.req.method === "POST") {
      if (!msg.filter.includes("admin")) {
          let authorized = false
          msg.filter.forEach((fe) => {
              if (authorized) return;
              authorized = msg.name.slice(0, fe.length) === fe;
          })
          if (!authorized) throw Error("Unauthorized")
      }
  }
  
  return msg;
}

module.exports = Node;