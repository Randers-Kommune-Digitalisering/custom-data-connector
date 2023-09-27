const Node = {
  "id": "47d3088421d1338e",
  "type": "http request",
  "z": "971a7ae6df987a48",
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
  "x": 430,
  "y": 360,
  "wires": [
    [
      "ea286421938ec063",
      "1fa84a222bb0210f"
    ]
  ],
  "_order": 7
}

module.exports = Node;