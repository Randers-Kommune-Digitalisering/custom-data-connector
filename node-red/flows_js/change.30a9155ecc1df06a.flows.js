const Node = {
  "id": "30a9155ecc1df06a",
  "type": "change",
  "z": "2a8933e95f6f15b9",
  "name": "set name",
  "rules": [
    {
      "t": "set",
      "p": "name",
      "pt": "msg",
      "to": "req.params.file",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 160,
  "y": 40,
  "wires": [
    [
      "133538cd54b6419b"
    ]
  ]
}

module.exports = Node;