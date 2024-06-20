import { useEffect, useState } from "react"
import Header from "../components/header"
import Layout from "./layout"
import requests from "../utility/requests"

export default Home = ({navigatio}) => {
    const [imageDay , setImageDay] = useState({})

    useEffect(() => {
        const getImageDay = async () =>{
            const img = await requests("")
            setImageDay(img)
            console.log(imageDay)
        }
        getImageDay()
    }, [])

    return <Layout>
        <Header texto = "Descubre"></Header>
    </Layout>
}