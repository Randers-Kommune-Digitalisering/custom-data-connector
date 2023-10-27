const Node = {
  "id": "a8502c3983352e8f",
  "type": "change",
  "z": "0a430953902bab1f",
  "name": "set data and title",
  "rules": [
    {
      "t": "set",
      "p": "title",
      "pt": "msg",
      "to": "payload.name",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload.data",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 540,
  "y": 40,
  "wires": [
    [
      "648a17ae827f6ad5"
    ]
  ],
  "_order": 75
}

module.exports = Node;