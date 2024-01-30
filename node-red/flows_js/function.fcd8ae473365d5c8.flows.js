const Node = {
  "id": "fcd8ae473365d5c8",
  "type": "function",
  "z": "864f94e568493dca",
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
      "cbf725a7eaf153e7"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  let name = msg.name
  if (name && msg.group) name = msg.group + '_' + msg.name
  else if (!name) name = msg.group
  
  if (msg.req.method === "POST" && (name.slice(0, 5) === 'Meta_' || name.slice(0, 5) === 'Data_')) {
      msg.statusCode = 400
      throw Error('Name cannot start with "Data_" or "Meta_"')
  }
  
  if (msg.req.method === "PUT" && !['Meta_', 'Data_'].includes(name.slice(0, 5)) && !msg.is_json) {
      msg.status = 400
      throw Error('All files starts "Data_" or "Meta_", no such file as ' + name)
  }
  
  if (msg.filter && msg.req.method === "PUT") {
      let temp_name = name
      if(msg.group) temp_name = msg.group
  
      if (!msg.filter.includes("admin")) {
          let authorized = false
          msg.filter.forEach((fe) => {
              if (authorized) return;
              authorized = temp_name.split('_')[1].slice(0, fe.length) === fe;
          })
          if (!authorized) {
              msg.statusCode = 401
              throw Error("Unauthorized")
          }
      }
  }
  
  if (msg.filter && msg.req.method === "POST") {
      let temp_name = name
      if (msg.group) temp_name = msg.group
  
      if (!msg.filter.includes("admin")) {
          let authorized = false
          msg.filter.forEach((fe) => {
              if (authorized) return;
              authorized = temp_name.slice(0, fe.length) === fe;
          })
          if (!authorized) {
              msg.statusCode = 401
              throw Error("Unauthorized")
          }
      }
  }
  
  return msg;
}

module.exports = Node;