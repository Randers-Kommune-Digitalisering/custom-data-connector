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
  "x": 430,
  "y": 320,
  "wires": [
    [
      "9ac8f413abad1ced"
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
  ],
  "_order": 156
}

module.exports = Node;