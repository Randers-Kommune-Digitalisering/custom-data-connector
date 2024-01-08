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
  ],
  "_order": 70
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          
            
              if (msg.req.method === "POST" && (msg.name.slice(0, 5) === 'Meta_' || msg.name.slice(0, 5) === 'Data_')) throw Error('Name cannot start with "Data_" or "Meta_"')
              if (msg.req.method === "PUT" && !['Meta_', 'Data_'].includes(msg.name.slice(0, 5))) throw Error('All files starts "Data_" or "Meta_", no such file as ' + msg.name)
              return msg;
            
          
        
      
    
  
}

module.exports = Node;