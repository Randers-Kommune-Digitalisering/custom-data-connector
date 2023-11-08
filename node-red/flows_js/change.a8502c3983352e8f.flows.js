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
      "p": "data",
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
      "7f393cbd0691f791"
    ]
  ],
  "_order": 72
}

module.exports = Node;