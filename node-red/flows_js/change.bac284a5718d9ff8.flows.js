const Node = {
  "id": "bac284a5718d9ff8",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "c69abb2622d3c303",
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
  "x": 580,
  "y": 940,
  "wires": [
    [
      "c55ea0f0799b96bc"
    ]
  ],
  "_order": 153
}

module.exports = Node;