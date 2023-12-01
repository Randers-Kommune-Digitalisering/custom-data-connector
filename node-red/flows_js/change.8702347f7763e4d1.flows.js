const Node = {
  "id": "8702347f7763e4d1",
  "type": "change",
  "z": "9572a151771bc111",
  "name": "set path",
  "rules": [
    {
      "t": "set",
      "p": "workdir",
      "pt": "msg",
      "to": "REMOTE_IN_IMPORTED_PATH",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 100,
  "wires": [
    [
      "2b39be3e75112cb2"
    ]
  ],
  "_order": 105
}

module.exports = Node;