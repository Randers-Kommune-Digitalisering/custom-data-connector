const Node = {
  "id": "315f456e1cd717e3",
  "type": "switch",
  "z": "ba6019643c26475d",
  "name": "GET or DELETE",
  "property": "req.method",
  "propertyType": "msg",
  "rules": [
    {
      "t": "eq",
      "v": "GET",
      "vt": "str"
    },
    {
      "t": "eq",
      "v": "DELETE",
      "vt": "str"
    },
    {
      "t": "else"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 3,
  "x": 820,
  "y": 120,
  "wires": [
    [
      "6cef729fccbfcc52"
    ],
    [
      "629a545d46b91db3"
    ],
    [
      "39420e28e1653d71"
    ]
  ],
  "_order": 79
}

module.exports = Node;