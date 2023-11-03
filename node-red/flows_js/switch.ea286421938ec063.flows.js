const Node = {
  "id": "ea286421938ec063",
  "type": "switch",
  "z": "03715ff8e991446c",
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
  "x": 270,
  "y": 340,
  "wires": [
    [
      "d636b5344f8693ef"
    ]
  ],
  "_order": 24
}

module.exports = Node;