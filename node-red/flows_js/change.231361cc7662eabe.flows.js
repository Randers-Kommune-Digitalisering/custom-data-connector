const Node = {
  "id": "231361cc7662eabe",
  "type": "change",
  "z": "0e19bfdb5ac72064",
  "name": "set files",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[$.\"payload\".\"name\"]",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "imported_files",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 100,
  "wires": [
    [
      "539d605e6b1091c2"
    ]
  ]
}

module.exports = Node;