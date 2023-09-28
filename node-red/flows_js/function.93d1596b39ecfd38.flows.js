const Node = {
  "id": "93d1596b39ecfd38",
  "type": "function",
  "z": "84314e70c5c07697",
  "name": "validate data fields",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 950,
  "y": 320,
  "wires": [
    [
      "e5f84826590b063a"
    ]
  ],
  "_order": 42
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const item = msg.payload[0];
  for (const key in item) {
      if(!isNaN(item[key])) console.log("number") //
      try {
          if (!isNaN(item[key].getMonth())) {
              console.log('datetime')
          }
      }
      catch (e) {
          //if (e.message === "Too many datetimes") throw e;
      }
  };
  return msg;
}

module.exports = Node;