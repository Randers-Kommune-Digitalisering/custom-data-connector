const Node = {
  "id": "a0fa929354b106fb",
  "type": "change",
  "z": "04aa633ae3a38a7c",
  "g": "2214c2bc20dee325",
  "name": "set payload and path",
  "rules": [
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "data",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "move",
      "p": "title",
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
  "x": 880,
  "y": 280,
  "wires": [
    [
      "372e597aa7de3081"
    ]
  ],
  "_order": 64
}

module.exports = Node;