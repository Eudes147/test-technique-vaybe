import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/forms/Input"
import AlertSuccess from "../components/common/AlertSuccess"
import AlertError from "../components/common/AlertError"
import { UserKey,ArrowLeftFromLine  } from "lucide-react"
import { adminLogin } from "../api/linking"

function AdminPage() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async () => {
        setLoading(true)
        try {
            const data = await adminLogin(name, password)
            localStorage.setItem('token', data.token)
            navigate('/dashboard')
        } catch (err) {
            setError(true)
            setTimeout(() => setError(false), 5000)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen">
            
            {error && <AlertError reason="errorAdmin"/>}
            <a href="/" className="absolute top-2 left-5 border border-cobalt-blue-500 w-24 flex gap-2 py-2"><ArrowLeftFromLine/><span>Retour</span></a>
            <h1 className="text-3xl font-bold my-8 text-center">Page de Connexion Admin</h1>
            <div className="form-control max-w-md">
                <Input
                    label="Nom d'utilisateur"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    mandatory={true}
                />
                <Input
                    label="Mot de passe"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    mandatory={true}
                />
            </div>
            <p className="text-center">
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="btn bg-cobalt-blue-700 hover:bg-cobalt-blue-600 text-white mt-4"
                >
                    <UserKey /> {loading ? 'Connexion...' : 'Se connecter'}
                </button>
            </p>
        </div>
    )
}

export default AdminPage