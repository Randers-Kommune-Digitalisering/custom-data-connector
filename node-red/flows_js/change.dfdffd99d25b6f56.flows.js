const Node = {
  "id": "dfdffd99d25b6f56",
  "type": "change",
  "z": "03715ff8e991446c",
  "g": "2e6fc66263b74e2b",
  "name": "convert string to JSON",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "$substring(payload,1,$length(payload)-1)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 600,
  "y": 160,
  "wires": [
    [
      "9a46c36cf9371a2b"
    ]
  ],
  "_order": 16
}

module.exports = Node;