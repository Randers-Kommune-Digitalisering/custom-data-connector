const Node = {
  "id": "2bf1fee9e19b31f8",
  "type": "change",
  "z": "ba6019643c26475d",
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
  "x": 1130,
  "y": 80,
  "wires": [
    []
  ],
  "_order": 73
}

module.exports = Node;