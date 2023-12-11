const Node = {
  "id": "70aa95dd455db8a9",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "a4403add202fad14",
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
  "x": 340,
  "y": 260,
  "wires": [
    [
      "abb5e9815eb8ac37"
    ]
  ],
  "_order": 141
}

module.exports = Node;