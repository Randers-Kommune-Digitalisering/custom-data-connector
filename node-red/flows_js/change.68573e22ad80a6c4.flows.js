const Node = {
  "id": "68573e22ad80a6c4",
  "type": "change",
  "z": "551975e4cbab4f74",
  "g": "e85b2bd4e56c3a58",
  "name": "set  res",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "headers.content-type",
      "pt": "msg",
      "to": "application/json",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"success\": true, \"files\": payload}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "statusCode",
      "pt": "msg",
      "to": "200",
      "tot": "num"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 240,
  "wires": [
    []
  ],
  "_order": 61
}

module.exports = Node;