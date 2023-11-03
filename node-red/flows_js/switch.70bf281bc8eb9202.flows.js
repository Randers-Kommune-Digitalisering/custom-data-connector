const Node = {
  "id": "70bf281bc8eb9202",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "g": "295a00dbacfcb968",
  "name": "json or file",
  "property": "req.headers.content-type",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "application/json",
      "vt": "str"
    },
    {
      "t": "cont",
      "v": "multipart/form-data",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 870,
  "y": 120,
  "wires": [
    [
      "35379f79e5ae3afc"
    ],
    [
      "13c07aae45de1361"
    ],
    [
      "7b73445dc0b357f6"
    ]
  ],
  "_order": 95
}

module.exports = Node;