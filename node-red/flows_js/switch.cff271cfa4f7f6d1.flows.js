const Node = {
  "id": "cff271cfa4f7f6d1",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "g": "a4403add202fad14",
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
  "outputs": 4,
  "x": 330,
  "y": 780,
  "wires": [
    [
      "6f30d50b8212499c",
      "f39a7aa83fda8853"
    ],
    [
      "132afc7346e495d9",
      "f39a7aa83fda8853"
    ],
    [
      "dc1b37d3502c11c7",
      "f39a7aa83fda8853"
    ],
    [
      "b11b67c12cba48dc",
      "f39a7aa83fda8853"
    ]
  ],
  "_order": 163
}

module.exports = Node;