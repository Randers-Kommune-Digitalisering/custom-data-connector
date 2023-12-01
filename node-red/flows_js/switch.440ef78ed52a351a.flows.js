const Node = {
  "id": "440ef78ed52a351a",
  "type": "switch",
  "z": "7d7aa16e0c80e205",
  "name": "get all or one",
  "property": "req.params",
  "propertyType": "msg",
  "rules": [
    {
      "t": "empty"
    },
    {
      "t": "nempty"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 330,
  "y": 160,
  "wires": [
    [
      "5557d2dc1c2e56c6"
    ],
    [
      "18535dbfdd6ac6bd"
    ]
  ],
  "_order": 121
}

module.exports = Node;