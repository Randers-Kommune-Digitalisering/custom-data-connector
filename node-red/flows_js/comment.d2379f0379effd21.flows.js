const Node = {
  "id": "d2379f0379effd21",
  "type": "comment",
  "z": "971a7ae6df987a48",
  "name": "POST with json\\n Content-Type: json/application/json\\n Payload: {\"name\":\"myname\", \"data\":[dataobj...]}\\n Returns {\"success\":true, \"message\":\"myname uploaded\"}\\n \\n POST with files\\n Content-Type: multipart/form-data\\n Payload: csv files\\n Returns {\"success\":true, \"message\":\"myfile.csv uploaded\"}\\n e.g.:\\n ------WebKitFormBoundaryOFmV2opHRYJv7416\\n Content-Disposition: form-data; name=\"myfieldname\"; filename=\"myfile.csv\"\\n Content-Type: text/csv",
  "info": "",
  "x": 300,
  "y": 180,
  "wires": [],
  "_order": 95
}

module.exports = Node;