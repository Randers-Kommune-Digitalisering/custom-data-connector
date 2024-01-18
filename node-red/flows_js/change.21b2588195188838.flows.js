const Node = {
  "id": "21b2588195188838",
  "type": "change",
  "z": "b94f8a12e390ede3",
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
      "1cf212faa2a567d7"
    ]
  ]
}

module.exports = Node;