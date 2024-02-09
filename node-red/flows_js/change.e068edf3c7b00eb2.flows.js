const Node = {
  "id": "e068edf3c7b00eb2",
  "type": "change",
  "z": "0e19bfdb5ac72064",
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
      "to": "failed_files",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 160,
  "wires": [
    [
      "92ed4e5a70045925"
    ]
  ]
}

module.exports = Node;