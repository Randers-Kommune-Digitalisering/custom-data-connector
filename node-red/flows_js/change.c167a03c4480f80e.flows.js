const Node = {
  "id": "c167a03c4480f80e",
  "type": "change",
  "z": "84314e70c5c07697",
  "name": "set payload and path",
  "rules": [
    {
      "t": "move",
      "p": "data",
      "pt": "msg",
      "to": "payload",
      "tot": "msg"
    },
    {
      "t": "move",
      "p": "data_path",
      "pt": "msg",
      "to": "path",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 300,
  "y": 520,
  "wires": [
    [
      "7c98df7b7da2a951"
    ]
  ],
  "_order": 31
}

module.exports = Node;