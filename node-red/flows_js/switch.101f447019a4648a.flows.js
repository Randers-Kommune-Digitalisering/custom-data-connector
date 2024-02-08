const Node = {
  "id": "101f447019a4648a",
  "type": "switch",
  "z": "fcba28c363701f4a",
  "g": "034543fb886eaefe",
  "name": "auth?",
  "property": "authorized",
  "propertyType": "msg",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 410,
  "y": 600,
  "wires": [
    [
      "e7f5fb77169eb051"
    ],
    [
      "36c1189be536e1be"
    ]
  ]
}

module.exports = Node;