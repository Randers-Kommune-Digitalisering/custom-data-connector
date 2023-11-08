const Node = {
  "id": "cbf725a7eaf153e7",
  "type": "change",
  "z": "864f94e568493dca",
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
  "x": 180,
  "y": 100,
  "wires": [
    [
      "5692a72c0953add1"
    ]
  ],
  "_order": 86
}

module.exports = Node;