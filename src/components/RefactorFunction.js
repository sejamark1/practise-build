export function returnHTMLOptions(arr){ 

    return (
        arr.map(user =>
            <option value={user}>{user}</option> )
    )
}


export function returnHTMLOptionsSelected(arr, current){ 
    return (
        arr.map(value =>
            current == value  ? <option selected value={value}>{value}</option>  
            :
            <option value={value}>{value}</option>
            )
    )
}