const Node = {
  "id": "8416e08411d3c0d9",
  "type": "change",
  "z": "864f94e568493dca",
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
  "x": 700,
  "y": 40,
  "wires": [
    [
      "9f39a88d5c32dd51"
    ]
  ],
  "_order": 94
}

module.exports = Node;