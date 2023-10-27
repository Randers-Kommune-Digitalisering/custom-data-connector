const Node = {
  "id": "d30615658ee89df1",
  "type": "function",
  "z": "03715ff8e991446c",
  "g": "633b505264d4927a",
  "name": "add dates and fix data types",
  "func": "",
  "outputs": 1,
  "noerr": 0,
  "initialize": "",
  "finalize": "",
  "libs": [],
  "x": 940,
  "y": 340,
  "wires": [
    []
  ],
  "_order": 27
}

Node.func = async function (node, msg, RED, context, flow, global, env, util) {
  
    function getQuarterStartDate(periode_string) {
        let year = parseInt(periode_string.split("QMAT")[0]);
        let quarter = parseInt(periode_string.split("QMAT")[1]);
        year = quarter < 4 ? year - 1 : year;
        //quarter = quarter +1;
        quarter = quarter < 4 ? quarter + 1 : 1;
        const startDate = new Date(year, (quarter - 1) * 3, 1);
        return startDate;
    }
    
    function getQuarterEndDate(periode_string) {
        let year = parseInt(periode_string.split("QMAT")[0]);
        let quarter = parseInt(periode_string.split("QMAT")[1]);
        const endDate = new Date(year, (quarter * 3), 0);
    
        return endDate;
    }
    
    msg.payload = msg.payload.map(item => {
        const updatedItems = {...item};
        updatedItems["Start dato"] = getQuarterStartDate(item.Periode);
        updatedItems["Slut dato"] = getQuarterEndDate(item.Periode);
        
        Object.keys(updatedItems).forEach(key => {
            if (key.includes('pct.')) {
                updatedItems[key] = parseFloat(updatedItems[key].replace(',','.'));
            }
        });
    
        return updatedItems;
    });
    
    return msg;
  
}

module.exports = Node;