const Node = {
  "id": "6304795c22340df5",
  "type": "loop",
  "z": "1c2501d645c4f2bb",
  "g": "5ab826cd2f3b1618",
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
  "x": 510,
  "y": 140,
  "wires": [
    [
      "025c5cb7c59d02c7"
    ],
    [
      "485d430b02870c87"
    ]
  ],
  "_order": 105
}

module.exports = Node;