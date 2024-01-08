const Node = {
  "id": "539d605e6b1091c2",
  "type": "change",
  "z": "0e19bfdb5ac72064",
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
  "x": 200,
  "y": 160,
  "wires": [
    [
      "a451daede3d91c89"
    ]
  ],
  "_order": 27
}

module.exports = Node;