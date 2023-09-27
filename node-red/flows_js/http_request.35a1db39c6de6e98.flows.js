const Node = {
  "id": "35a1db39c6de6e98",
  "type": "http request",
  "z": "971a7ae6df987a48",
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
  "x": 330,
  "y": 220,
  "wires": [
    [
      "dfdffd99d25b6f56",
      "768abdf9ed7f7bb4"
    ]
  ],
  "_order": 13
}

module.exports = Node;