const Node = {
  "id": "4597670980931f9a",
  "type": "change",
  "z": "84314e70c5c07697",
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
      "to": "REMOTE_IN_PATH",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 160,
  "y": 180,
  "wires": [
    [
      "4551886e011e0c27"
    ]
  ],
  "_order": 42
}

module.exports = Node;