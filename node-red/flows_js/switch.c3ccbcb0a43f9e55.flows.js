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
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 690,
  "y": 280,
  "wires": [
    [
      "1fa84a222bb0210f"
    ]
  ],
  "_order": 20
}

module.exports = Node;