const Node = {
  "id": "015b34ebf9473316",
  "type": "function",
  "z": "864f94e568493dca",
  "name": "combine files",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 470,
  "y": 160,
  "wires": [
    [
      "41983d3a162a7d2c"
    ]
  ]
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        
          
            
              if (msg.success_files) msg.payload = msg.success_files.concat(msg.waiting_files);
              else msg.payload = msg.waiting_files;
              
              delete msg.waiting_files;
              delete msg.success_files;
              
              return msg;
            
          
        
      
    
  
}

module.exports = Node;