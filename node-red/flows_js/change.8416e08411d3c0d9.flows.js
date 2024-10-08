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
      "to": "[payload[type != 'd' and size > 0].name]",
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
  ]
}

module.exports = Node;