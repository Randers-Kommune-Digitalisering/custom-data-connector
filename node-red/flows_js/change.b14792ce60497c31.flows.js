const Node = {
  "id": "b14792ce60497c31",
  "type": "change",
  "z": "2a8933e95f6f15b9",
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
  "x": 340,
  "y": 160,
  "wires": [
    [
      "9c834c4d9243af66"
    ]
  ]
}

module.exports = Node;