const Node = {
  "id": "26fdf2dddeed7bf7",
  "type": "switch",
  "z": "9572a151771bc111",
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
  "x": 350,
  "y": 220,
  "wires": [
    [
      "bcbc8dbca2016ff9"
    ],
    [
      "93c3d473cf9f4659"
    ]
  ],
  "_order": 108
}

module.exports = Node;