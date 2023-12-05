const Node = {
  "id": "a9d2c5771832b0de",
  "type": "change",
  "z": "7d7aa16e0c80e205",
  "name": "set files",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[$.\"payload\".\"filename\"]",
      "tot": "jsonata"
    },
    {
      "t": "move",
      "p": "payload",
      "pt": "msg",
      "to": "failed_files",
      "tot": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 460,
  "y": 100,
  "wires": [
    [
      "b317410de4c59e81"
    ]
  ],
  "_order": 124
}

module.exports = Node;