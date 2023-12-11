const Node = {
  "id": "9f39a88d5c32dd51",
  "type": "change",
  "z": "864f94e568493dca",
  "name": "set path",
  "rules": [
    {
      "t": "set",
      "p": "workdir",
      "pt": "msg",
      "to": "REMOTE_IN_IMPORTED_PATH",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 420,
  "y": 100,
  "wires": [
    [
      "8604b848eb85f15f"
    ]
  ],
  "_order": 95
}

module.exports = Node;