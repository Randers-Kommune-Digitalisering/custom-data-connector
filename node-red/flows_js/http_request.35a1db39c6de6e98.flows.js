const Node = {
  "id": "35a1db39c6de6e98",
  "type": "http request",
  "z": "03715ff8e991446c",
  "g": "2e6fc66263b74e2b",
  "name": "",
  "method": "POST",
  "ret": "txt",
  "paytoqs": "ignore",
  "url": "https://api.jobindsats.dk/v2/tables/y30r21/json/",
  "tls": "",
  "persist": false,
  "proxy": "",
  "insecureHTTPParser": false,
  "authType": "",
  "senderr": false,
  "headers": [
    {
      "keyType": "other",
      "keyValue": "Authorization",
      "valueType": "other",
      "valueValue": "${JOBINDSATS_API_KEY}"
    }
  ],
  "x": 230,
  "y": 160,
  "wires": [
    [
      "11e788d416ba6155"
    ]
  ],
  "_order": 27
}

module.exports = Node;