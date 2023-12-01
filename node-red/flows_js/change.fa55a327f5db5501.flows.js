const Node = {
  "id": "fa55a327f5db5501",
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
      "to": "failed_files",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 160,
  "wires": [
    [
      "843bb353b9b1c083"
    ]
  ],
  "_order": 114
}

module.exports = Node;