const Node = {
  "id": "6b88de73b7f2653a",
  "type": "change",
  "z": "551975e4cbab4f74",
  "name": "set credentials",
  "rules": [
    {
      "t": "set",
      "p": "user",
      "pt": "msg",
      "to": "FTP_USER",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "password",
      "pt": "msg",
      "to": "FTP_PASS",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "workdir",
      "pt": "msg",
      "to": "REMOTE_OUT_PATH",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 180,
  "y": 160,
  "wires": [
    [
      "01fa7c9bbed05c2a"
    ]
  ],
  "_order": 58
}

module.exports = Node;