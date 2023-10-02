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
      "c0693bf0aef567cf"
    ]
  ],
  "_order": 42
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  msg.num = 0;
  msg.date = 0;
  msg.string = 0;
  msg.cpr = 0;
  msg.time = 0;
  
  const item = msg.payload[0];
  for (const key in item) {
      const key_LC = key.toLowerCase();
      if (key_LC.includes('cpr') || key_LC.includes('personnummer')) {
          if (item[key] instanceof String || typeof item[key] === 'string') {
              if (item[key].length === 10) {
                  msg.cpr += 1;
                  //console.log("could be cpr 1")
              } else if (item[key].includes('-')) {
                  let str_arr = item[key].split('-');
                  if (str_arr[0].length === 6 && str_arr[1].length === 4) {
                      msg.cpr += 1;
                      //console.log("could be cpr 2")
                  }
              }
  
          } else if (!isNaN(item[key])) {
              if (Number.isInteger(item[key]) && item[key].toString().length === 10) {
                  msg.cpr += 1;
                  //console.log("could be cpr 3")
              }
          }
      } else {
          try {
              if (!isNaN(item[key].getMonth())) {
                  msg.date += 1;
                  //console.log('datetime')
              }
          }
          catch (e) {
              if (!isNaN(item[key])) {
                  msg.num += 1;
                  //console.log("number")
              } else if (typeof item[key] === 'string' || item[key] instanceof String) {
                  msg.string += 1;
                  //console.log("string")
              } else {
                  msg.unknown += 1;
                  //console.log("Unknown type")
              }
          }
      }
  };
  
  return msg;
}

module.exports = Node;