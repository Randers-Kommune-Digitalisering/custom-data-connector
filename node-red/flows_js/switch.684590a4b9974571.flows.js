const Node = {
  "id": "684590a4b9974571",
  "type": "switch",
  "z": "0a430953902bab1f",
  "name": "check for name",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "hask",
      "v": "name",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 160,
  "y": 80,
  "wires": [
    [
      "c40dac11e91f3583"
    ],
    [
      "671ff63c1cc1202d"
    ]
  ],
  "_order": 64
}

module.exports = Node;