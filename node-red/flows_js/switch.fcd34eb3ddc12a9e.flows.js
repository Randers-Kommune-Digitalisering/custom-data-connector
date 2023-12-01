const Node = {
  "id": "fcd34eb3ddc12a9e",
  "type": "switch",
  "z": "04aa633ae3a38a7c",
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
      "a2321dae2237034c"
    ],
    [
      "1894d28fcf3dbe61"
    ]
  ],
  "_order": 61
}

module.exports = Node;