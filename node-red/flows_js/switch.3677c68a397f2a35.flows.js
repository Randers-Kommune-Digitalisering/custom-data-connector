const Node = {
  "id": "3677c68a397f2a35",
  "type": "switch",
  "z": "551975e4cbab4f74",
  "g": "e85b2bd4e56c3a58",
  "name": "list or get",
  "property": "req.query",
  "propertyType": "msg",
  "rules": [
    {
      "t": "empty"
    },
    {
      "t": "hask",
      "v": "file",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 460,
  "y": 260,
  "wires": [
    [
      "68573e22ad80a6c4"
    ],
    [
      "df4433f8927ff818"
    ],
    [
      "3d2cf04581b89d09"
    ]
  ],
  "_order": 53
}

module.exports = Node;