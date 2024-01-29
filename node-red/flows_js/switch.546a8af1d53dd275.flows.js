const Node = {
  "id": "546a8af1d53dd275",
  "type": "switch",
  "z": "fcba28c363701f4a",
  "g": "3ec2a23d37bc97d8",
  "name": "json?",
  "property": "req.headers.content-type",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "application/json",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 430,
  "y": 100,
  "wires": [
    [
      "0de32293be5a4d04"
    ],
    [
      "50a2ea13c4a64b03"
    ]
  ]
}

module.exports = Node;