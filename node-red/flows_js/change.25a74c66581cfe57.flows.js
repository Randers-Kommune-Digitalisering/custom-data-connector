const Node = {
  "id": "25a74c66581cfe57",
  "type": "change",
  "z": "2a8933e95f6f15b9",
  "name": "set path",
  "rules": [
    {
      "t": "set",
      "p": "workdir",
      "pt": "msg",
      "to": "REMOTE_IN_IMPORTED_PATH",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 100,
  "wires": [
    [
      "bf3a69176d5de1cd"
    ]
  ]
}

module.exports = Node;