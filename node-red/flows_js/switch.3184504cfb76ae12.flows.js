const Node = {
  "id": "3184504cfb76ae12",
  "type": "switch",
  "z": "ceab71d708a09018",
  "name": "check data_file",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "hask",
      "v": "data_file",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 180,
  "y": 80,
  "wires": [
    [
      "e99164358072e3da"
    ],
    [
      "ce198f7804c42bc0"
    ]
  ]
}

module.exports = Node;