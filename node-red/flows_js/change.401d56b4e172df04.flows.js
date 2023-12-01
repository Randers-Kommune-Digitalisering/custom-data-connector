const Node = {
  "id": "401d56b4e172df04",
  "type": "change",
  "z": "03715ff8e991446c",
  "g": "633b505264d4927a",
  "name": "clean",
  "rules": [
    {
      "t": "delete",
      "p": "columns",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "statusCode",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "headers",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "responseUrl",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "redirectList",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "retry",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 690,
  "y": 340,
  "wires": [
    [
      "d30615658ee89df1"
    ]
  ],
  "_order": 38
}

module.exports = Node;