const Node = {
  "id": "b920fbca099f98d9",
  "type": "change",
  "z": "84314e70c5c07697",
  "name": "set file names",
  "rules": [
    {
      "t": "set",
      "p": "meta_name",
      "pt": "msg",
      "to": "Meta_test",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "data_name",
      "pt": "msg",
      "to": "Data_test",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 640,
  "y": 140,
  "wires": [
    [
      "76db6cd38f0c8c81"
    ]
  ],
  "_order": 32
}

module.exports = Node;