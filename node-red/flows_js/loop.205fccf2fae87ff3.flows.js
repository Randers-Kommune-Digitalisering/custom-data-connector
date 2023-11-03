const Node = {
  "id": "205fccf2fae87ff3",
  "type": "loop",
  "z": "04aa633ae3a38a7c",
  "g": "2214c2bc20dee325",
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
      "4ef77163a0249e23"
    ],
    [
      "2ce6880fa257b8b9"
    ]
  ],
  "_order": 63
}

module.exports = Node;