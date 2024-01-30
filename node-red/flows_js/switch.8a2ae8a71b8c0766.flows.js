const Node = {
  "id": "8a2ae8a71b8c0766",
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
  "y": 560,
  "wires": [
    [
      "23af0ee27c380259"
    ],
    [
      "36c1189be536e1be"
    ]
  ]
}

module.exports = Node;