const Node = {
  "id": "a8502c3983352e8f",
  "type": "change",
  "z": "0a430953902bab1f",
  "name": "set data",
  "rules": [
    {
      "t": "set",
      "p": "group",
      "pt": "msg",
      "to": "payload.group",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "name",
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
  "x": 620,
  "y": 40,
  "wires": [
    [
      "7f393cbd0691f791"
    ]
  ],
  "_order": 76
}

module.exports = Node;