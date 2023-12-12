const Node = {
  "id": "a65017d953de79db",
  "type": "change",
  "z": "0e19bfdb5ac72064",
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
  "x": 630,
  "y": 240,
  "wires": [
    []
  ],
  "_order": 20
}

module.exports = Node;