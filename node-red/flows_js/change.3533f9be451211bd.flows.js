const Node = {
  "id": "3533f9be451211bd",
  "type": "change",
  "z": "bd9e443681a102ca",
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
  "x": 570,
  "y": 140,
  "wires": [
    []
  ],
  "_order": 135
}

module.exports = Node;