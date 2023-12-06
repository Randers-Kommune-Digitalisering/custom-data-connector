const Node = {
  "id": "5bed34a819cf1142",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "ccbd6188c8e31fd0",
  "name": "hardcoded groups",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"success\":true, \"groups\": [\"HR\",\"TEST\"]}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 310,
  "y": 480,
  "wires": [
    [
      "469dd819c21d4c25"
    ]
  ],
  "_order": 194
}

module.exports = Node;