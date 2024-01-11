const Node = {
  "id": "53e5f121c8a78c5c",
  "type": "change",
  "z": "84314e70c5c07697",
  "g": "8d5d84158664e514",
  "name": "set payload and path",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "move",
      "p": "data_filename",
      "pt": "msg",
      "to": "payload.filename",
      "tot": "msg"
    },
    {
      "t": "move",
      "p": "data",
      "pt": "msg",
      "to": "payload.filedata",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 580,
  "y": 480,
  "wires": [
    [
      "fa8a793a724660e7"
    ]
  ],
  "_order": 46
}

module.exports = Node;