const Node = {
  "id": "93d1596b39ecfd38",
  "type": "function",
  "z": "84314e70c5c07697",
  "g": "089d805555301a78",
  "name": "validate and assign data columns",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 780,
  "y": 260,
  "wires": [
    [
      "e5f84826590b063a"
    ]
  ],
  "_order": 42
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  const time_max = 2;
  const date_max = 5;
  const cpr_max = 1;
  const txt_max = 30;
  const num_max = 15;
  
  var time_cnt = 0;
  var date_cnt = 0;
  var cpr_cnt = 0;
  var txt_cnt = 0;
  var num_cnt = 0;
  
  var i = 0;
  
  msg.columns = [];
  
  function hasTime(date_time) {
      return date_time.toISOString().split('T')[1] === "00:00:00.000Z" ? false : true;
  }
  
  function setDateTime(key) {
      time_cnt += 1;
      if (time_cnt <= time_max) msg.columns.push({ "Kolonnenummer": i, "TekniskNavn": "Klokkeslæt" + time_cnt, "EgetNavn": "Tid-" + key });
      else throw new Error("Too many time columns");
      setDate(key);
  }
  
  function setDate(key) {
      date_cnt += 1;
      if (date_cnt <= date_max) msg.columns.push({ "Kolonnenummer": i, "TekniskNavn": "Dato" + date_cnt, "EgetNavn": key });
      else throw new Error("Too many date columns");
  }
  
  function isCPR(value) {
      if (!isNaN(value)) if(value % 1 != 0) { value = value.toString() } else return false;
      if (value.length === 10 || (value.includes('-') && value.length === 11)) return !isNaN(Date.parse(["20" + value.slice(4, 6), value.slice(2, 4), value.slice(0, 2)].join("/")));
  }
  
  function setCPR(key) {
      cpr_cnt += 1;
      if (cpr_cnt <= cpr_max) msg.columns.push({ "Kolonnenummer": i, "TekniskNavn": "CPR", "EgetNavn": key });
      else throw new Error("Too many CPR columns");
  }
  
  function setNum(key) {
      num_cnt += 1;
      if (num_cnt <= num_max) msg.columns.push({ "Kolonnenummer": i, "TekniskNavn": "Numerisk" + num_cnt, "EgetNavn": key});
      else throw new Error("Too many numeric columns");
  }
  
  function setTxt(key) {
      txt_cnt += 1;
      if (txt_cnt <= txt_max) msg.columns.push({ "Kolonnenummer": i, "TekniskNavn": "Tekst" + txt_cnt, "EgetNavn": key });
      else throw new Error("Too many text columns");
  }
  
  // Check types in the first object (assuming all objects are the same)
  const item = msg.data[0];
  for (const key in item) {
      i += 1; 
      try {
          // Datetime objects
          if (!isNaN(item[key].getMonth())) {
              if(hasTime(item[key])) setDateTime(key);
              else setDate(key);
          }
      }
      catch (e) {
          // Numeric (also strings with just numbers)
          if (!isNaN(item[key])) {
              if (isCPR(item[key])) setCPR(key);
              else setNum(key);
          // Text/strings
          } else if (typeof item[key] === 'string' || item[key] instanceof String) {
              if (isCPR(item[key])) setCPR(key);
              else setTxt(key);
          } else {
              throw new Error("Unknown type/column");
          }
      }
  };
      
  return msg;
}

module.exports = Node;