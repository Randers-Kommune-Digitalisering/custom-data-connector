const Node = {
  "id": "32e3b69c6e84055e",
  "type": "switch",
  "z": "bd9e443681a102ca",
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
  "x": 310,
  "y": 100,
  "wires": [
    [
      "e6e3bc3ee0117b80"
    ],
    [
      "1364268b515ff815"
    ]
  ],
  "_order": 129
}

module.exports = Node;