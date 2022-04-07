const fetchProjectData = async(endpoint, method) =>{ 
    const apiURL = "http://localhost:9000/api/" + endpoint; 
    const response = await fetch(apiURL, { 
        method: method, 
        // mode: "no-cors", 
        headers: {
            'Content-type' : "application/json"
        }, 
        body: JSON.stringify() 
    })
    return await response.json(); 
}


export const fetchDataFromDatabase = async(endpoint, method) =>{ 
    const apiURL = "http://localhost:9000/api/" + endpoint; 
    const response = await fetch(apiURL, { 
        method: method, 
        // mode: "no-cors", 
        headers: {
            'Content-type' : "application/json"
        }, 
        body: JSON.stringify() 
    })
    return await response.json(); 
}
export const fetchProjectDataWithParams = async(endpoint, method, par) =>{ 
    const apiURL = `http://localhost:9000/api/` + endpoint + `/` + `${par}`; 
    const response = await fetch(apiURL, { 
        method: method, 
        // mode: "no-cors", 
        headers: {
            'Content-type' : "application/json"
        }, 
        body: JSON.stringify() 
    })
    return await response.json(); 
}




export default fetchProjectData; 

