const Node = {
  "id": "2bf1fee9e19b31f8",
  "type": "change",
  "z": "ba6019643c26475d",
  "name": "set csv res",
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
      "to": "\"inline; filename=\" & $split(msg.payload.filename, '/')[-1]",
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
  "x": 1310,
  "y": 20,
  "wires": [
    []
  ],
  "_order": 53
}

module.exports = Node;