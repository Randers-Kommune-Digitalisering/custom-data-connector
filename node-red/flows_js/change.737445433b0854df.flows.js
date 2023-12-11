const Node = {
  "id": "737445433b0854df",
  "type": "change",
  "z": "9572a151771bc111",
  "name": "set path",
  "rules": [
    {
      "t": "set",
      "p": "workdir",
      "pt": "msg",
      "to": "REMOTE_IN_FAILED_PATH",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 160,
  "wires": [
    [
      "83c371305695cee9"
    ]
  ],
  "_order": 111
}

module.exports = Node;