const Node = {
  "id": "d97ca7c31f609819",
  "type": "switch",
  "z": "2b46aa4477c6e0b0",
  "name": "check group",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "hask",
      "v": "group",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 150,
  "y": 100,
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