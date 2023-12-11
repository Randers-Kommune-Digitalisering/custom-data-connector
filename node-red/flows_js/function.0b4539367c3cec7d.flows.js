const Node = {
  "id": "0b4539367c3cec7d",
  "type": "function",
  "z": "84314e70c5c07697",
  "g": "089d805555301a78",
  "name": "fix cpr",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 190,
  "y": 320,
  "wires": [
    [
      "e5f84826590b063a"
    ]
  ],
  "_order": 54
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    
      
        function isCPR(value) {
            if (value == null) return false;
            if (!isNaN(value)) if (value % 1 === 0) { value = value.toString() } else return false;
            if (value.length === 10 || (value.includes('-') && value.length === 11)) return !isNaN(Date.parse(["20" + value.slice(4, 6), value.slice(2, 4), value.slice(0, 2)].join("/")));
        }
        
        function isString(value) {
            return (typeof value === 'string' || value instanceof String)
        }
          msg.data = msg.data.map(item => {
              const updatedItems = { ...item };
          
              for (const key in item) {
                if (isCPR(item[key]) && isString(item[key])) {
                    updatedItems[key] = item[key].replace('-','')
                }
              }
          
              return updatedItems;
          });
          
          return msg
        
        
        
      
    
  
}

module.exports = Node;