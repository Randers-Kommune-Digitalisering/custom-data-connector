const Node = {
  "id": "e99164358072e3da",
  "type": "switch",
  "z": "ceab71d708a09018",
  "name": "check users",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "hask",
      "v": "users",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 350,
  "y": 60,
  "wires": [
    [
      "404ca3ba4ee505a1"
    ],
    [
      "ce198f7804c42bc0"
    ]
  ]
}

module.exports = Node;