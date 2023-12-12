const Node = {
  "id": "59ae1e592ce250c5",
  "type": "change",
  "z": "0e19bfdb5ac72064",
  "name": "set files",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[payload[$substring(longname,0,1) != \"d\"].name]",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "waiting_files",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 40,
  "wires": [
    [
      "18b1226d5ed936dc"
    ]
  ],
  "_order": 23
}

module.exports = Node;