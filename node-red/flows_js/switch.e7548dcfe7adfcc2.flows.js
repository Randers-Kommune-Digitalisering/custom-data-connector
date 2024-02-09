const Node = {
  "id": "e7548dcfe7adfcc2",
  "type": "switch",
  "z": "2a8933e95f6f15b9",
  "name": "real_delete?",
  "property": "real_delete",
  "propertyType": "msg",
  "rules": [
    {
      "t": "true"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 650,
  "y": 220,
  "wires": [
    [
      "fd374186f2634f32"
    ],
    [
      "eaecd0e58142bf7e"
    ]
  ]
}

module.exports = Node;