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
      "to": "[\t    {\t    \"cpr_test_1\": 1234567890,\t    \"cpr_test_2\": \"1234567890\",\t    \"cpr_test_3\": \"123456-7890\"\t    },\t    {\t    \"cpr_test_1\": 1234567890,\t    \"cpr_test_2\": \"1234567890\",\t    \"cpr_test_3\": \"123456-7890\"\t    }\t]",
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
  "_order": 48
}

module.exports = Node;