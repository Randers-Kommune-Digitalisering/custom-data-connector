const Node = {
  "id": "777898645fba1b33",
  "type": "change",
  "z": "551975e4cbab4f74",
  "g": "e85b2bd4e56c3a58",
  "name": "set files",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[$.\"payload\".\"filename\"]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 320,
  "y": 260,
  "wires": [
    [
      "3677c68a397f2a35"
    ]
  ],
  "_order": 63
}

module.exports = Node;