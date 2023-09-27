const Node = {
  "id": "bf8ce59b057c3667",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "633b505264d4927a",
  "name": "Create data request",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"area\": \"*\",\t    \"period\": payload[0].Period,\t    \"_ygrp_y30r21\": [\t        \"Ydelsesgrupper i alt\",\t        \"A-dagpenge mv.\",\t        \"Sygedagpenge mv.\",\t        \"Kontanthjælp mv.\"\t    ]\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 200,
  "y": 360,
  "wires": [
    [
      "47d3088421d1338e"
    ]
  ],
  "_order": 9
}

module.exports = Node;