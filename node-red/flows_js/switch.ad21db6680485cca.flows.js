const Node = {
  "id": "ad21db6680485cca",
  "type": "switch",
  "z": "fcba28c363701f4a",
  "g": "3ec2a23d37bc97d8",
  "name": "json or file",
  "property": "req.headers.content-type",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "application/json",
      "vt": "str"
    },
    {
      "t": "cont",
      "v": "multipart/form-data",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "text/csv",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 4,
  "x": 450,
  "y": 440,
  "wires": [
    [
      "2c1e9ae35c42491b"
    ],
    [
      "ca80a24cc1e9c7d1"
    ],
    [
      "f299cf9d2331978a"
    ],
    [
      "9ac8f413abad1ced"
    ]
  ]
}

module.exports = Node;