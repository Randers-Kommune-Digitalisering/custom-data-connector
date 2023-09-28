const Node = {
  "id": "11e788d416ba6155",
  "type": "switch",
  "z": "03715ff8e991446c",
  "g": "2e6fc66263b74e2b",
  "name": "check status",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "200",
      "vt": "num"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 430,
  "y": 120,
  "wires": [
    [
      "768abdf9ed7f7bb4"
    ]
  ],
  "_order": 19
}

module.exports = Node;