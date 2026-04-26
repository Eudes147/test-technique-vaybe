import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/forms/Input"
import AlertSuccess from "../components/common/AlertSuccess"
import AlertError from "../components/common/AlertError"
import { UserKey,ArrowLeftFromLine  } from "lucide-react"
import { adminLogin } from "../api/linking"
import Reveal from "../components/common/Reveal"

function AdminPage() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const [success, setSuccess] = useState(false)
    const [msg, setmsg] = useState("")
    const navigate = useNavigate()

    const resetForm = ()=> {
        // Reset du formulaire
        setName('')
        setPassword('')
    }

    const setDelay =(setter, delay)=> {
        setTimeout(() => setter(false), delay)
    }
    const handleSubmit = async () => {
        if(!name || !password){
            setError(true)
            setDelay(setError,2000)
            setmsg('Tous les champs ne sont pas remplies.')
            setLoading(false)
            return
        }
        setLoading(true)
        try {
            const data = await adminLogin(name, password)
            localStorage.setItem('token', data.token)
            setmsg("Vous êtes connecté en tant qu'admin. Félicitations. ✨✨")
            setSuccess(true)
            setDelay(setSuccess,2000)
            navigate('/dashboard')
        } catch (err) {
            setError(true)
            setDelay(setError,2000)
            setmsg(err.message)
            resetForm()
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen">
            
            {error && <AlertError message={msg}/>}
            {success && <AlertSuccess message={msg}/>}

            <Reveal delay={0.75} className="absolute top-2 left-5">
                <a href="/" className="border border-cobalt-blue-500 w-24 flex gap-2 py-2"><ArrowLeftFromLine/><span>Retour</span></a>

            </Reveal>
            <Reveal delay={0.65}>
                <h1 className="text-3xl font-bold my-8 text-center">Page de Connexion <span className="bg-cobalt-blue-700 text-white">Admin</span></h1>
            </Reveal>
            <div className="form-control max-w-md">
                <Input
                    label="Nom d'utilisateur"
                    type="text"
                    name="name"
                    placeholder="Username"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    mandatory={true}
                />
                <Input
                    label="Mot de passe"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    mandatory={true}
                />
            </div>
            <Reveal delay={0.85} className="text-center">
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="btn bg-cobalt-blue-700 hover:bg-cobalt-blue-600 text-white mt-4"
                >
                    <UserKey /> {loading ? 'Connexion...' : 'Se connecter'}
                </button>
            </Reveal>
        </div>
    )
}

export default AdminPage