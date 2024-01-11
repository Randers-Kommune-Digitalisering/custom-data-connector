const Node = {
  "id": "c67c67f5c6b3f38a",
  "type": "loop",
  "z": "cf20bd9b26e00f6d",
  "g": "1e03a3b784249401",
  "name": "loop",
  "kind": "cond",
  "count": "",
  "initial": "1",
  "step": "1",
  "condition": "msg.req.files.length > 0",
  "conditionType": "js",
  "when": "before",
  "enumeration": "",
  "enumerationType": "msg",
  "limit": "10000",
  "loopPayload": "loop-keep",
  "finalPayload": "final-last",
  "x": 530,
  "y": 160,
  "wires": [
    [
      "2eb371f429e5bc33"
    ],
    [
      "9dd84c7fde4848de"
    ]
  ],
  "_order": 83
}

module.exports = Node;