const Node = {
  "id": "e6e3bc3ee0117b80",
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
  "x": 570,
  "y": 100,
  "wires": [
    []
  ],
  "_order": 133
}

module.exports = Node;