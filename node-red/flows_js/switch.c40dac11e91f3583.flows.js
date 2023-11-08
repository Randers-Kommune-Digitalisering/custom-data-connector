const Node = {
  "id": "c40dac11e91f3583",
  "type": "switch",
  "z": "0a430953902bab1f",
  "name": "check for data",
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
  "x": 360,
  "y": 60,
  "wires": [
    [
      "a8502c3983352e8f"
    ],
    [
      "671ff63c1cc1202d"
    ]
  ],
  "_order": 70
}

module.exports = Node;