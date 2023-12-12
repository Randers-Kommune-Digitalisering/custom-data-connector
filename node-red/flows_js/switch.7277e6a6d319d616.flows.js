const Node = {
  "id": "7277e6a6d319d616",
  "type": "switch",
  "z": "0e19bfdb5ac72064",
  "name": "get all or one",
  "property": "req.params",
  "propertyType": "msg",
  "rules": [
    {
      "t": "empty"
    },
    {
      "t": "nempty"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 350,
  "y": 220,
  "wires": [
    [
      "5a9c57d868b82e2b"
    ],
    [
      "ab8612597d2066cb"
    ]
  ],
  "_order": 21
}

module.exports = Node;