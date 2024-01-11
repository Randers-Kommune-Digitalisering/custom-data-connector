const Node = {
  "id": "18b1226d5ed936dc",
  "type": "change",
  "z": "0e19bfdb5ac72064",
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
      "e7b121ee49598b1e"
    ]
  ],
  "_order": 21
}

module.exports = Node;