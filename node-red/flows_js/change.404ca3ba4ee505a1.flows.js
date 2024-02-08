const Node = {
  "id": "404ca3ba4ee505a1",
  "type": "change",
  "z": "ceab71d708a09018",
  "name": "set data",
  "rules": [
    {
      "t": "set",
      "p": "name",
      "pt": "msg",
      "to": "$substringBefore(\"Aut_\" & $substringAfter(payload.data_file, \"_\"), \".\")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "users",
      "pt": "msg",
      "to": "payload.users",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "is_json",
      "pt": "msg",
      "to": "true",
      "tot": "bool"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 500,
  "y": 40,
  "wires": [
    [
      "5c227a261c9c23f2"
    ]
  ]
}

module.exports = Node;