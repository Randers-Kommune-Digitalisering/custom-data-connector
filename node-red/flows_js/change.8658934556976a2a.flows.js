const Node = {
  "id": "8658934556976a2a",
  "type": "change",
  "z": "1c2501d645c4f2bb",
  "g": "5ab826cd2f3b1618",
  "name": "set ftp env vars",
  "rules": [
    {
      "t": "set",
      "p": "host",
      "pt": "msg",
      "to": "FTP_HOST",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "port",
      "pt": "msg",
      "to": "FTP_PORT",
      "tot": "env"
    },
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
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1200,
  "y": 160,
  "wires": [
    [
      "e0319e6e730a8360"
    ]
  ]
}

module.exports = Node;