const util = {
    setlocal : (key,value)=>{
        localStorage[key] = JSON.stringify(value)
    },
    getlocal : key => localStorage[key]
    // getlocal : key =>{
    //     if (localStorage[key] !== '' && undefined){
    //         return JSON.parse(localStorage[key]);
    //     }
    // }
}

export default util