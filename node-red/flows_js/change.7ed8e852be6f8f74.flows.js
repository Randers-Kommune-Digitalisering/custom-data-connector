const Node = {
  "id": "7ed8e852be6f8f74",
  "type": "change",
  "z": "7d7aa16e0c80e205",
  "name": "set path",
  "rules": [
    {
      "t": "set",
      "p": "workdir",
      "pt": "msg",
      "to": "REMOTE_IN_FAILED_PATH",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 180,
  "y": 100,
  "wires": [
    [
      "e6fca9f3c2b9d7c6"
    ]
  ],
  "_order": 123
}

module.exports = Node;