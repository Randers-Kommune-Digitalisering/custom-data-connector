const Node = {
  "id": "dc7a46e993002b5c",
  "type": "switch",
  "z": "cf20bd9b26e00f6d",
  "name": "check for files",
  "property": "req",
  "propertyType": "msg",
  "rules": [
    {
      "t": "hask",
      "v": "files",
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
      "afc4d089525deadd"
    ],
    [
      "ba4d27ce8e6844e7"
    ]
  ],
  "_order": 72
}

module.exports = Node;