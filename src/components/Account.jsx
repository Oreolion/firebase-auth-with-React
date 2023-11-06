import { useNavigate } from 'react-router-dom'
import {UserAuth} from '../AuthContext'

const Account = () => {

    const {user, logout} = UserAuth()
    const navigate = useNavigate()


    const handleLogOut = async () => {
        try {
            await logout()
            navigate("/")
            alert("You are logged out")

        } catch (e) {
            console.log(e.message);
        }
    }


  return (
    <>
        <section className="max-w-[700px] mx-auto my-16 p-4">
            <h1 className="text-2xl font-bold py-4">Account</h1>
            <p>User Email: {user?.email}</p>
            <p>User Unique ID: {user?.uid}</p>
            <button onClick={handleLogOut} className="border px-6 py-2 my-4">Logout</button>
        </section>
    
    </>
  )
}

export default Account