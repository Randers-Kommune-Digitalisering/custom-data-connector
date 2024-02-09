const Node = {
  "id": "59ae1e592ce250c5",
  "type": "change",
  "z": "0e19bfdb5ac72064",
  "name": "set files",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"waiting_files\": [payload[type != \"d\" and size > 0].name],\t    \"deleted_files\": [payload[type != \"d\" and size = 0].name]\t}",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload.waiting_files",
      "pt": "msg",
      "to": "waiting_files",
      "tot": "msg"
    },
    {
      "t": "move",
      "p": "payload.deleted_files",
      "pt": "msg",
      "to": "deleted_files",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 40,
  "wires": [
    [
      "18b1226d5ed936dc"
    ]
  ]
}

module.exports = Node;