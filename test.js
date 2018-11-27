function delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}

async function delayedLog(item){
    await delay();
    console.log(item);
}

delay()
.then(() => {
    
})
async function processArray(array){

    for(const item of array){
        await delayedLog(item);
    }
    // array.forEach(async(item) => {
    //     await delayedLog(item);
    // });
    console.log("Done");
}

processArray([1,2,3]);