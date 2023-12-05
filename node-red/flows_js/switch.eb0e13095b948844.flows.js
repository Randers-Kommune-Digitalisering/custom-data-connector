const Node = {
  "id": "eb0e13095b948844",
  "type": "switch",
  "z": "0a430953902bab1f",
  "name": "check group",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "hask",
      "v": "group",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 2,
  "x": 150,
  "y": 100,
  "wires": [
    [
      "684590a4b9974571"
    ],
    [
      "671ff63c1cc1202d"
    ]
  ],
  "_order": 80
}

module.exports = Node;