const Node = {
  "id": "73551581643cbe99",
  "type": "change",
  "z": "2a8933e95f6f15b9",
  "name": "set files",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[payload[size > 0].(name)]",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "success_files",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 100,
  "wires": [
    [
      "b14792ce60497c31"
    ]
  ]
}

module.exports = Node;