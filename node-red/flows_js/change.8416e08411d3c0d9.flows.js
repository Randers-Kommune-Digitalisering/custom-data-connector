const Node = {
  "id": "8416e08411d3c0d9",
  "type": "change",
  "z": "864f94e568493dca",
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
  "x": 480,
  "y": 100,
  "wires": [
    [
      "41983d3a162a7d2c"
    ]
  ],
  "_order": 88
}

module.exports = Node;