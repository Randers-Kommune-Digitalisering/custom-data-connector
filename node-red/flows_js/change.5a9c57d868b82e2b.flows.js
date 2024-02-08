const Node = {
  "id": "5a9c57d868b82e2b",
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
      "p": "imported_files",
      "pt": "msg",
      "to": "payload.files.imported",
      "tot": "msg"
    },
    {
      "t": "move",
      "p": "waiting_files",
      "pt": "msg",
      "to": "payload.files.waiting",
      "tot": "msg"
    },
    {
      "t": "move",
      "p": "deleted_files",
      "pt": "msg",
      "to": "payload.files.deleting",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 200,
  "wires": [
    []
  ]
}

module.exports = Node;