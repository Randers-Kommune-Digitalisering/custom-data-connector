const Node = {
  "id": "0b539f9aec50819b",
  "type": "change",
  "z": "fcba28c363701f4a",
  "g": "3ec2a23d37bc97d8",
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
      "edee0da30a9c80f7"
    ]
  ],
  "_order": 145
}

module.exports = Node;