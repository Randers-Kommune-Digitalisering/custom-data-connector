const Node = {
  "id": "0c528fffa42ec158",
  "type": "change",
  "z": "fcba28c363701f4a",
  "g": "b4a0526eacd24e87",
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
  "x": 1200,
  "y": 60,
  "wires": [
    [
      "398582240f7b0756"
    ]
  ],
  "_order": 99
}

module.exports = Node;