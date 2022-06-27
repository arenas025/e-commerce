const url = 'https://aqueous-journey-76702.herokuapp.com/products'

const api = async () => {
    const data = await fetch(url)
    const dataJson = data.json()
    return dataJson
}

const getData = async () => {
    const arr = await api().then(data=>{
        const resultado = data
        return resultado
    })
    console.log(arr)
}


export default getData