const Node = {
  "id": "2b7d8d003afaaa20",
  "type": "change",
  "z": "03715ff8e991446c",
  "g": "2e6fc66263b74e2b",
  "name": "set title",
  "rules": [
    {
      "t": "set",
      "p": "title",
      "pt": "msg",
      "to": "payload[0].TableName",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1000,
  "y": 160,
  "wires": [
    [
      "b19bbb792b9c5fa0"
    ]
  ],
  "_order": 41
}

module.exports = Node;