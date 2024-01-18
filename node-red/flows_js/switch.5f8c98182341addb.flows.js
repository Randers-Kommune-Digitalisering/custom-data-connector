const Node = {
  "id": "5f8c98182341addb",
  "type": "switch",
  "z": "2b46aa4477c6e0b0",
  "name": "check name",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "hask",
      "v": "name",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 310,
  "y": 80,
  "wires": [
    [
      "78d7b835dbdff8f4"
    ],
    [
      "c904ba57e4ae803e"
    ]
  ]
}

module.exports = Node;