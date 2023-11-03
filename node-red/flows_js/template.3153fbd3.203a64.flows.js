const Node = {
  "id": "3153fbd3.203a64",
  "type": "template",
  "z": "971a7ae6df987a48",
  "g": "9cfc3b10ed20b06f",
  "name": "html",
  "field": "payload",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 1210,
  "y": 640,
  "wires": [
    [
      "737e44d2.373a64"
    ]
  ],
  "_order": 99
}

Node.template = `
<form action="/universe" method="POST" enctype="multipart/form-data">
    <input multiple type="file" name="heehee"/>
    <input type="submit" >
</form>
`

module.exports = Node;