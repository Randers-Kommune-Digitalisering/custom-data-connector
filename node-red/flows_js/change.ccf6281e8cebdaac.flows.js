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
      "tot": "str"
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 620,
  "y": 40,
  "wires": [
    [
      "fdd7d1d17dac3292"
    ]
  ],
  "_order": 92
}

module.exports = Node;