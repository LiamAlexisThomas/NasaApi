const gateway = "https:/api.nasa.gov/plsnrtary/apod";
const api_key = "fmhY1XYjBAzrrFKLxIb0mZNtgQ01YfPJv3vv";

export default api = async (parametros) => {
  try {
    // Prueba el codigo
    const response = await fetch(
      `${gateway}?api_key=${api_key}${parametros.length > 0 ? parametros : ""}`
    );
    return await response.json();
  } catch (error) {
    // Captura el error
    console.error("error en api", error);
  } finally {
    // Ejecucion final
  }
};
