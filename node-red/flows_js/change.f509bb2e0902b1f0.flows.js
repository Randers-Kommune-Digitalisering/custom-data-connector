const Node = {
  "id": "f509bb2e0902b1f0",
  "type": "change",
  "z": "9572a151771bc111",
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
  "x": 480,
  "y": 40,
  "wires": [
    [
      "8702347f7763e4d1"
    ]
  ],
  "_order": 110
}

module.exports = Node;