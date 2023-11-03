const Node = {
  "id": "ed8f7dd334014f75",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "295a00dbacfcb968",
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
  "x": 1140,
  "y": 200,
  "wires": [
    [
      "5fc433f19104ec0f"
    ]
  ],
  "_order": 112
}

module.exports = Node;