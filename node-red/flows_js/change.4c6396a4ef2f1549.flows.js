const Node = {
  "id": "4c6396a4ef2f1549",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "3586732c31a1341c",
  "name": "set error",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "payload.success",
      "pt": "msg",
      "to": "false",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "payload.message",
      "pt": "msg",
      "to": "error.message",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "statusCode",
      "pt": "msg",
      "to": "400",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1260,
  "y": 380,
  "wires": [
    [
      "904fb9ea5541435e"
    ]
  ],
  "_order": 102
}

module.exports = Node;