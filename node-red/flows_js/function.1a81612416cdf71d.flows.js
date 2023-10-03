const Node = {
  "id": "1a81612416cdf71d",
  "type": "function",
  "z": "84314e70c5c07697",
  "name": "set file paths",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 650,
  "y": 300,
  "wires": [
    [
      "c6ad3bb96d56c3c2"
    ]
  ],
  "_order": 36
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    const outPath = env.get("OUT_PATH");
    msg.meta_path = outPath + "/Meta_" + msg.title + ".csv";
    msg.data_path = outPath + "/Data_" + msg.title + ".csv";
    return msg;
  
}

module.exports = Node;