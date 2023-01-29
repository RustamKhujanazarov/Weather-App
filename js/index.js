



const key = 'cd9631912774f54de65311442c60d09c'

const getData = async (city)=>{
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&units=metric&appid=${key}`

    const req = await fetch(base + query)
    const data = await req.json()

    return data
}

// getData("london").then((data) => console.log(data))