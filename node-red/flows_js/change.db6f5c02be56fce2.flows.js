const Node = {
  "id": "db6f5c02be56fce2",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "295a00dbacfcb968",
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
  "x": 840,
  "y": 220,
  "wires": [
    [
      "f813bff96a7efade"
    ]
  ],
  "_order": 119
}

module.exports = Node;