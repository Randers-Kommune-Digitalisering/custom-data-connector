const Node = {
  "id": "274da430f0ae0e8d",
  "type": "change",
  "z": "9572a151771bc111",
  "name": "set files",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[$.\"payload\".\"filename\"]",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "imported_files",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 100,
  "wires": [
    [
      "737445433b0854df"
    ]
  ],
  "_order": 104
}

module.exports = Node;