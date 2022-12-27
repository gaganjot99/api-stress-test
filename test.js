const async = require('async');
const axios = require('axios');

let successCount = 0;
let errorCount = 0;

async function requestToServer(){
    try{
        const url = 'http://localhost:3000/lop';
        const config = {
            method: 'get',
            url,
            headers: {}
        };
        const {data} = await axios(config);
        console.log(data);
        successCount += 1;
    } catch(error){
        errorCount += 1;
    }
}

async function runner(numberOfRequest){
    console.time("test-time")
    let requests = new Array(numberOfRequest);
    async.each(requests, async ()=>{
        await requestToServer();
    }, ()=> {
        console.log("-----------------------");
        console.timeEnd("test-time");
        console.log("----------------");
        console.log("number of successful requests: ", successCount)
        console.log("number of failed:", errorCount);
        console.log("-----------------")
    })
}

runner(500);
