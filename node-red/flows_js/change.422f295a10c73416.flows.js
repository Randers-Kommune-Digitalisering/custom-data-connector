const Node = {
  "id": "422f295a10c73416",
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
      "p": "meta_filename",
      "pt": "msg",
      "to": "payload.filename",
      "tot": "msg"
    },
    {
      "t": "move",
      "p": "meta",
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
  "x": 200,
  "y": 480,
  "wires": [
    [
      "23f91589fcc6522f"
    ]
  ],
  "_order": 47
}

module.exports = Node;