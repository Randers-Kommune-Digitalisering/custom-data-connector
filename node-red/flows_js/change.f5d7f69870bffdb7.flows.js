const Node = {
  "id": "f5d7f69870bffdb7",
  "type": "change",
  "z": "fcba28c363701f4a",
  "g": "8577f15b082caf72",
  "name": "set payload",
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
      "to": "true",
      "tot": "bool"
    },
    {
      "t": "set",
      "p": "payload.message",
      "pt": "msg",
      "to": "all good",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "statusCode",
      "pt": "msg",
      "to": "200",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 290,
  "y": 940,
  "wires": [
    [
      "378e311046ee6a60"
    ]
  ]
}

module.exports = Node;