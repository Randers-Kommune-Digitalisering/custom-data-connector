const Node = {
  "id": "556a0649c474c2e9",
  "type": "switch",
  "z": "fcba28c363701f4a",
  "g": "b4a0526eacd24e87",
  "name": "statusCode?",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "gt",
      "v": "0",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 250,
  "y": 780,
  "wires": [
    [
      "0c528fffa42ec158",
      "ecd7c11282a62a50"
    ],
    [
      "8cb2fee56f876b3e",
      "ecd7c11282a62a50"
    ]
  ]
}

module.exports = Node;