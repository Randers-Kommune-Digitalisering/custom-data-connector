const Node = {
  "id": "f877ee3ea089a49f",
  "type": "change",
  "z": "2a8933e95f6f15b9",
  "name": "set files",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[payload.(name)]",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "failed_files",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 160,
  "wires": [
    [
      "5ed21c8d0e068ee4"
    ]
  ]
}

module.exports = Node;