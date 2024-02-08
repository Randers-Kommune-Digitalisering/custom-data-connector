const Node = {
  "id": "3965d02f2fdc3e88",
  "type": "change",
  "z": "2a8933e95f6f15b9",
  "name": "set files",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[payload[type != 'd' and size > 0].name]",
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
  "x": 620,
  "y": 40,
  "wires": [
    [
      "25a74c66581cfe57"
    ]
  ]
}

module.exports = Node;