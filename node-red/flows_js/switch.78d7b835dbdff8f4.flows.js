const Node = {
  "id": "78d7b835dbdff8f4",
  "type": "switch",
  "z": "2b46aa4477c6e0b0",
  "name": "check data",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "hask",
      "v": "data",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 470,
  "y": 60,
  "wires": [
    [
      "ccf6281e8cebdaac"
    ],
    [
      "c904ba57e4ae803e"
    ]
  ],
  "_order": 91
}

module.exports = Node;