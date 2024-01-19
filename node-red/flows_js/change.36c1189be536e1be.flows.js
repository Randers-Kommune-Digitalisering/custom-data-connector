const Node = {
  "id": "36c1189be536e1be",
  "type": "change",
  "z": "fcba28c363701f4a",
  "g": "034543fb886eaefe",
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
      "to": "Access denied",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "statusCode",
      "pt": "msg",
      "to": "401",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 600,
  "y": 560,
  "wires": [
    [
      "2e70a2975c70acdd"
    ]
  ]
}

module.exports = Node;