import { FaTriangleExclamation } from 'react-icons/fa6'

function NotFound() {
    return <div>
        <FaTriangleExclamation style={{height: "200px", width: "200px", color: "red"}} />
        <h1>404 Not Found</h1>
        <p>The page you are looking for does not exist!</p>
    </div>
}

export default NotFound