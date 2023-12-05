const Node = {
  "id": "85749a0bd374853b",
  "type": "change",
  "z": "7d7aa16e0c80e205",
  "name": "set files",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[payload[$substring(longname,0,1) != \"d\"].filename]",
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
  "x": 460,
  "y": 40,
  "wires": [
    [
      "7ed8e852be6f8f74"
    ]
  ],
  "_order": 123
}

module.exports = Node;