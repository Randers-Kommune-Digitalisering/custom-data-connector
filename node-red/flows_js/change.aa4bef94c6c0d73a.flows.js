const Node = {
  "id": "aa4bef94c6c0d73a",
  "type": "change",
  "z": "bd9e443681a102ca",
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
  "x": 460,
  "y": 40,
  "wires": [
    [
      "26554a76c93fe39b"
    ]
  ],
  "_order": 131
}

module.exports = Node;