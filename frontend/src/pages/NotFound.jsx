import { FaTriangleExclamation } from "react-icons/fa6";
const NotFound = () => {
  return (
    <div
    style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px"
    }}
    >
        <FaTriangleExclamation style={{width: "150px", height: "150px", color: "red"}}/>
        <h1>Not Found</h1>
        <p>The page you are looking for does not exist</p>
    </div>
  )
}

export default NotFound