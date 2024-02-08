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
      "to": "[payload[type != \"d\" and size > 0].name]",
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
  ]
}

module.exports = Node;