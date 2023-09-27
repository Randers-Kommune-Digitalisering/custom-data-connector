const Node = {
  "id": "ea286421938ec063",
  "type": "switch",
  "z": "971a7ae6df987a48",
  "g": "633b505264d4927a",
  "name": "check for response data",
  "property": "payload",
  "propertyType": "msg",
  "rules": [
    {
      "t": "nempty"
    }
  ],
  "checkall": "true",
  "repair": false,
  "outputs": 1,
  "x": 370,
  "y": 420,
  "wires": [
    [
      "d636b5344f8693ef"
    ]
  ],
  "_order": 10
}

module.exports = Node;