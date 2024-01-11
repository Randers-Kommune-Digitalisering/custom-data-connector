const Node = {
  "id": "bb9af0f940ca6eaf",
  "type": "change",
  "z": "b94f8a12e390ede3",
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
  "x": 420,
  "y": 100,
  "wires": [
    [
      "7b46af41b2897f42"
    ]
  ],
  "_order": 114
}

module.exports = Node;