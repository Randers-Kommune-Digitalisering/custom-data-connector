const Node = {
  "id": "053ffc7a6825a2c9",
  "type": "change",
  "z": "fcba28c363701f4a",
  "g": "034543fb886eaefe",
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
  "x": 580,
  "y": 360,
  "wires": [
    [
      "1fc6c96744519ec0"
    ]
  ],
  "_order": 102
}

module.exports = Node;