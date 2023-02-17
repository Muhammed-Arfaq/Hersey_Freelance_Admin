import { Navigate } from "react-router-dom"

const reRoute = ({ children }) => {
    const token = localStorage.getItem("jwt")

    if(token) {
        return <Navigate to = {"/admin/dashboard"} replace = {true}></Navigate>
    }
    return children
}

export default reRoute