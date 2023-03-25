import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Cast = () => {
    useEffect(() => {
        // http-запит
    }, [])

    const {castId} = useParams()
    return <div>
        актори {castId}
    </div>
}

export default Cast