const Node = {
  "id": "ccf6281e8cebdaac",
  "type": "change",
  "z": "2b46aa4477c6e0b0",
  "name": "set data",
  "rules": [
    {
      "t": "set",
      "p": "group",
      "pt": "msg",
      "to": "payload.group",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "name",
      "pt": "msg",
      "to": "payload.name",
      "tot": "msg"
    },
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "payload.data",
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
  "x": 460,
  "y": 60,
  "wires": [
    [
      "fdd7d1d17dac3292"
    ]
  ]
}

module.exports = Node;