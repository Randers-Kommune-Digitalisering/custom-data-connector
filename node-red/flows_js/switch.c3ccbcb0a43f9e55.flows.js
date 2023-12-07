const Node = {
  "id": "c3ccbcb0a43f9e55",
  "type": "switch",
  "z": "03715ff8e991446c",
  "g": "633b505264d4927a",
  "name": "check status",
  "property": "statusCode",
  "propertyType": "msg",
  "rules": [
    {
      "t": "neq",
      "v": "200",
      "vt": "num"
    },
    {
      "t": "eq",
      "v": "200",
      "vt": "num"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 690,
  "y": 280,
  "wires": [
    [
      "1fa84a222bb0210f"
    ],
    [
      "ea286421938ec063"
    ]
  ],
  "_order": 39
}

module.exports = Node;