const Node = {
  "id": "d7f0874632588730",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "g": "e42aa7e73ba0efec",
  "name": " content-type",
  "property": "req.headers.content-type",
  "propertyType": "msg",
  "rules": [
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
  "outputs": 2,
  "x": 290,
  "y": 420,
  "wires": [
    [
      "4e9e5a1d158efae1"
    ],
    [
      "9b99ef07b5e1c312"
    ]
  ],
  "_order": 180
}

module.exports = Node;