const Node = {
  "id": "b920fbca099f98d9",
  "type": "change",
  "z": "84314e70c5c07697",
  "name": "set file paths",
  "rules": [
    {
      "t": "set",
      "p": "meta_name",
      "pt": "msg",
      "to": "Outgoing/Meta_test.csv",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "data_name",
      "pt": "msg",
      "to": "Outgoing/Data_test.csv",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 140,
  "wires": [
    [
      "c6ad3bb96d56c3c2"
    ]
  ],
  "_order": 32
}

module.exports = Node;