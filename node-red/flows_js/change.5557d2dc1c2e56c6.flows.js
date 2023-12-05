const Node = {
  "id": "5557d2dc1c2e56c6",
  "type": "change",
  "z": "7d7aa16e0c80e205",
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
      "to": "{\"success\": true, \"files\": {}}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "statusCode",
      "pt": "msg",
      "to": "200",
      "tot": "num"
    },
    {
      "t": "move",
      "p": "failed_files",
      "pt": "msg",
      "to": "payload.files.failed",
      "tot": "msg"
    },
    {
      "t": "move",
      "p": "waiting_files",
      "pt": "msg",
      "to": "payload.files.waiting",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 610,
  "y": 140,
  "wires": [
    []
  ],
  "_order": 122
}

module.exports = Node;