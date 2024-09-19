
let logged;

function sendAnalytics(data: string){
    console.log(data);
    logged = true;
    logged = 'Abiola'
    console.log(logged)
}

sendAnalytics('The data is bulky...')