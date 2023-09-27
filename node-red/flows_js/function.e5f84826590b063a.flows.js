const Node = {
  "id": "e5f84826590b063a",
  "type": "function",
  "z": "971a7ae6df987a48",
  "name": "split datetime",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 410,
  "y": 800,
  "wires": [
    [
      "4ae1a5c1989051b1"
    ]
  ],
  "_order": 22
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const datetime = {
      0: "start",
      1: "stop"
  }
  
  msg.payload = msg.payload.map(item => {
      const updatedItems = { ...item };
  
      let numDates = 0;
  
      for (const key in item) {
          try {
              if (!isNaN(item[key].getMonth())) {
                  updatedItems[key] = item[key].toISOString().split('T')[0];
                  updatedItems['Tid_' + datetime[numDates]] = item[key].toISOString().split('T')[1].split('.')[0];
                  if (datetime[numDates] === undefined) throw new Error("Too many datetimes");
                  numDates++;
              }
          }
          catch(e){
              if (e.message === "Too many datetimes") throw e;
          }
      }
  
      return updatedItems;
  });
  
  return msg
}

module.exports = Node;