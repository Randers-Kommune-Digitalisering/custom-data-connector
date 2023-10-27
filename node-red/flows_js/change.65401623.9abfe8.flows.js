const Node = {
  "id": "65401623.9abfe8",
  "type": "change",
  "z": "551975e4cbab4f74",
  "g": "e7f688e8e6ed561a",
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
      "to": "text/csv",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "headers.content-disposition",
      "pt": "msg",
      "to": "\"inline; filename=\" & $substringAfter(msg.payload.filename, '/')",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload.filedata",
      "tot": "msg"
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
  "y": 420,
  "wires": [
    []
  ],
  "_order": 55
}

module.exports = Node;