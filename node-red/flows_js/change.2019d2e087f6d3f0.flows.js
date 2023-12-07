const Node = {
  "id": "2019d2e087f6d3f0",
  "type": "change",
  "z": "971a7ae6df987a48",
  "g": "e42aa7e73ba0efec",
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
  "x": 600,
  "y": 400,
  "wires": [
    [
      "372e597aa7de3081"
    ]
  ],
  "_order": 185
}

module.exports = Node;