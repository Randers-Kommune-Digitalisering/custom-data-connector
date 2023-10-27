const Node = {
  "id": "8db135e2c33f1ddb",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "9cfc3b10ed20b06f",
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
  "x": 1080,
  "y": 460,
  "wires": [
    []
  ],
  "_order": 79
}

module.exports = Node;