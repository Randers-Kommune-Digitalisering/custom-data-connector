const Node = {
  "id": "3a934be9d52d92ba",
  "type": "switch",
  "z": "84314e70c5c07697",
  "name": "create meta ?",
  "property": "meta_already_exists",
  "propertyType": "msg",
  "rules": [
    {
      "t": "false"
    },
    {
      "t": "true"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 240,
  "y": 440,
  "wires": [
    [
      "422f295a10c73416"
    ],
    [
      "53e5f121c8a78c5c"
    ]
  ],
  "_order": 46
}

module.exports = Node;