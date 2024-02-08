const Node = {
  "id": "d3c3041a9f2fcb13",
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
  "x": 470,
  "y": 380,
  "wires": [
    [
      "2c1e9ae35c42491b"
    ],
    [
      "9ac8f413abad1ced"
    ]
  ]
}

module.exports = Node;