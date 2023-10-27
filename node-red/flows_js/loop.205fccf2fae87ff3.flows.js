const Node = {
  "id": "205fccf2fae87ff3",
  "type": "loop",
  "z": "04aa633ae3a38a7c",
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
  "x": 570,
  "y": 60,
  "wires": [
    [
      "4ef77163a0249e23"
    ],
    [
      "07b35197c20d0112"
    ]
  ],
  "_order": 67
}

module.exports = Node;