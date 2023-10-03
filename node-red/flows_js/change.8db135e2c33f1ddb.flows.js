const Node = {
  "id": "8db135e2c33f1ddb",
  "type": "change",
  "z": "971a7ae6df987a48",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[\t    {\t    \"cpr_test\": 1201577890,\t    \"num_test\": 123.88908081,\t    \"txt_test\": \"Hej med dig\"\t    },\t    {\t    \"cpr_test\": 1101567890,\t    \"num_test\": 127.808081,\t    \"txt_test\": \"Hej\"\t    }\t]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "title",
      "pt": "msg",
      "to": "hej",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 420,
  "y": 260,
  "wires": [
    [
      "6d4b53efdb8b1699"
    ]
  ],
  "_order": 43
}

module.exports = Node;