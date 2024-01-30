const Node = {
  "id": "8cb2fee56f876b3e",
  "type": "change",
  "z": "fcba28c363701f4a",
  "g": "b4a0526eacd24e87",
  "name": "set status",
  "rules": [
    {
      "t": "set",
      "p": "statusCode",
      "pt": "msg",
      "to": "500",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 420,
  "y": 720,
  "wires": [
    [
      "0c528fffa42ec158"
    ]
  ]
}

module.exports = Node;