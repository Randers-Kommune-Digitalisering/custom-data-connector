const Node = {
  "id": "a53dfa2a3fd12f36",
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
  "x": 330,
  "y": 140,
  "wires": [
    [
      "0de32293be5a4d04"
    ],
    [
      "192fb42efd261fdc"
    ],
    [
      "ac58d3835e6a2dd6"
    ],
    [
      "50a2ea13c4a64b03"
    ]
  ],
  "_order": 112
}

module.exports = Node;