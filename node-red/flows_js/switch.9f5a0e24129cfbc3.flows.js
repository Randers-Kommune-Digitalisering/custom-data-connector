const Node = {
  "id": "9f5a0e24129cfbc3",
  "type": "switch",
  "z": "1c2501d645c4f2bb",
  "name": "check for files",
  "property": "req",
  "propertyType": "msg",
  "rules": [
    {
      "t": "hask",
      "v": "files",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 160,
  "y": 40,
  "wires": [
    [
      "f34387b08596a887"
    ],
    [
      "f6d32f1569345598"
    ]
  ]
}

module.exports = Node;