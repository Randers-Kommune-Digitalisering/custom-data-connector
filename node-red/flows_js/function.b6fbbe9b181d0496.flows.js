const Node = {
  "id": "b6fbbe9b181d0496",
  "type": "function",
  "z": "04aa633ae3a38a7c",
  "g": "2214c2bc20dee325",
  "name": "set group",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [
    {
      "var": "utf8",
      "module": "utf8"
    }
  ],
  "x": 960,
  "y": 180,
  "wires": [
    [
      "07b35197c20d0112"
    ]
  ],
  "_order": 73
}

Node.func = async function (node, msg, RED, context, flow, global, env, util, utf8) {
  
    if (['Meta_', 'Data_'].includes(msg.name.slice(0, 5))) msg.name = msg.name.slice(5);
    
    if(msg.name.split('_').length < 2){
      msg.group = msg.name;
      msg.name = msg.name;
    } else {
      msg.group = msg.name.split('_')[0]
      msg.name = msg.name.split('_').slice(1).join('_');
    }
    
    //if (msg.groups.includes(msg.group)) msg.meta_already_exists = true;
    //else msg.meta_already_exists = false;
    
    return msg;
    
  
}

module.exports = Node;