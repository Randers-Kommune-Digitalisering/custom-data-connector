const Node = {
  "id": "541efd2c9ea9a8cf",
  "type": "function",
  "z": "cf20bd9b26e00f6d",
  "g": "1e03a3b784249401",
  "name": "set group",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 680,
  "y": 240,
  "wires": [
    [
      "f503bc3a55ca8571"
    ]
  ],
  "_order": 82
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        msg.test = msg.name
        if (['Meta_', 'Data_'].includes(msg.name.slice(0, 5))) msg.name = msg.name.slice(5);
        
        msg.is_meta = false
        
        if (msg.name.split('_').length < 2) {
          msg.group = msg.name;
          msg.name = null;
        } else {
          msg.group = msg.name.split('_')[0]
          msg.name = msg.name.split('_').slice(1).join('_');
        }
        
        if (msg.groups.includes(msg.group)) msg.meta_already_exists = true;
        else msg.meta_already_exists = false;
        
        return msg;
      
    
  
}

module.exports = Node;