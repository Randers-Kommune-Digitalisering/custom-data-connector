const Node = {
  "id": "e5f84826590b063a",
  "type": "function",
  "z": "84314e70c5c07697",
  "g": "089d805555301a78",
  "name": "split datetime",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 610,
  "y": 320,
  "wires": [
    [
      "4ae1a5c1989051b1"
    ]
  ],
  "_order": 40
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    msg.payload = msg.payload.map(item => {
        const updatedItems = { ...item };
    
        for (const key in item) {
            try {
                if (!isNaN(item[key].getMonth())) {
                    updatedItems[key] = item[key].toISOString().split('T')[0];
                    if ('Tid_' + key in item) updatedItems['Tid-' + key] = item[key].toISOString().split('T')[1].split('.')[0];
                }
            }
            catch(e){}
        }
    
        return updatedItems;
    });
    
    return msg
    
  
}

module.exports = Node;