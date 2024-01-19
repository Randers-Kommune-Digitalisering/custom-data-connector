const Node = {
  "id": "fdea897deced7d4f",
  "type": "change",
  "z": "864f94e568493dca",
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
      "to": "success_files",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 700,
  "y": 100,
  "wires": [
    [
      "015b34ebf9473316"
    ]
  ]
}

module.exports = Node;