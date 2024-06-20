const api = "https://api.nasa.gov/planetary/apod"
const api_key = "fmhY1XYjBAzrrFKLxIb0ImZNtgQ01YfP8aPJv3vv"

export default requests = async (parametros) => {
    try {
        // prueba este codigo
        const Data = await fetch(
            `${api}?api_key=${api_key}&${parametros.length > 0 ? parametros : ""}`	
        )
        return await Data.json();
    } catch (error) {
        // captura el error 
        // trabaja con el error
        console.error("Error desde api", error)
    }
    finally{
        //Algo que sucede si o si
    }
    
}