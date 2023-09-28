const Node = {
  "id": "47d3088421d1338e",
  "type": "http request",
  "z": "03715ff8e991446c",
  "g": "633b505264d4927a",
  "name": "",
  "method": "POST",
  "ret": "txt",
  "paytoqs": "query",
  "url": "https://api.jobindsats.dk/v2/data/y30r21/csv/",
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
  "x": 490,
  "y": 280,
  "wires": [
    [
      "ea286421938ec063",
      "c3ccbcb0a43f9e55"
    ]
  ],
  "_order": 8
}

module.exports = Node;