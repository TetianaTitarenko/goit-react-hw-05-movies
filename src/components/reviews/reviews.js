import { useEffect } from "react"
import { useParams } from "react-router-dom"

const Reviews = () => {
    useEffect(() => {
        // http-запит
    }, [])

    const {reviewsId} = useParams()
    return <div>
        про фільм: {reviewsId}
    </div>
}

export default Reviews