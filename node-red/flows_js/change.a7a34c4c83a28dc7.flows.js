const Node = {
  "id": "a7a34c4c83a28dc7",
  "type": "change",
  "z": "b94f8a12e390ede3",
  "name": "set files",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[payload[$substring(longname,0,1) != \"d\"].name]",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "waiting_files",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 700,
  "y": 40,
  "wires": [
    [
      "bb9af0f940ca6eaf"
    ]
  ]
}

module.exports = Node;