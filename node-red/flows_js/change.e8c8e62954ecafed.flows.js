const Node = {
  "id": "e8c8e62954ecafed",
  "type": "change",
  "z": "ba6019643c26475d",
  "name": "set files",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[$.\"payload\".\"name\"]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 120,
  "wires": [
    [
      "336a912ecc32d35f"
    ]
  ],
  "_order": 57
}

module.exports = Node;