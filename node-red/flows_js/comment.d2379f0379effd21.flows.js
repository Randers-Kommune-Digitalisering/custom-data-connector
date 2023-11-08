const Node = {
  "id": "d2379f0379effd21",
  "type": "comment",
  "z": "971a7ae6df987a48",
  "name": "POST: create new file\\n PUT: create or overwrite file\\n \\n POST/PUT with json\\n Content-Type: application/json\\n Payload: {\"name\":\"myname\", \"data\":[dataobj...]}\\n Returns {\"success\":true, \"message\":\"myname uploaded\"}\\n \\n POST with files\\n Content-Type: multipart/form-data\\n Payload: csv files\\n Returns {\"success\":true, \"message\":\"myfile.csv uploaded\"}\\n e.g.:\\n ------WebKitFormBoundaryOFmV2opHRYJv7416\\n Content-Disposition: form-data; name=\"myfieldname\"; filename=\"myfile.csv\"\\n Content-Type: text/csv\\n \\n PUT with file\\n Content-Type: text/csv\\n Payload: file data\\n Returns {\"success\":true, \"message\":\"myname uploaded\"}\\n",
  "info": "",
  "x": 300,
  "y": 260,
  "wires": [],
  "_order": 108
}

module.exports = Node;