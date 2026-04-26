import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Send,ArrowLeftFromLine } from 'lucide-react'

import Reveal from "../components/common/Reveal"
import Input from "../components/forms/Input"
import Select from "../components/forms/Select"
import Textarea from "../components/forms/Textarea"
import FileInput from "../components/forms/FileInput"
import AlertSuccess from "../components/common/AlertSuccess"
import AlertError from "../components/common/AlertError"

import { submitApplication } from "../api/linking"

function SubmitPage() {
    const [nom, setNom] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("dev")
    const [motivation, setMotivation] = useState("")
    const [cv, setCv] = useState(null)
    const [portfolio, setPortfolio] = useState(null)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [msg, setmsg] = useState("")


    const resetForm = ()=> {
        // Reset du formulaire
        setNom("")
        setEmail("")
        setRole("dev")
        setMotivation("")
        setCv(null)
        setPortfolio(null)
    }

    const setDelay =(setter, delay)=> {
        setTimeout(() => setter(false), delay)

    }
    const handleSubmit = async () => {
        if(!nom || !email || !motivation || !cv || !portfolio){
            setError(true)
            setDelay(setError,2000)
            setmsg('Tous les champs ne sont pas remplies.')
            setLoading(false)
            return
        }
        setLoading(true)
        try {
            const formData = new FormData()
            formData.append('nom', nom)
            formData.append('email', email)
            formData.append('role', role)
            formData.append('motivation', motivation)
            if (cv) formData.append('cv', cv)
            if (portfolio) formData.append('portfolio', portfolio)

            await submitApplication(formData)

            setSuccess(true)
            setDelay(setSuccess,5000)
            setmsg("Candidature a été bien prise en Compte. Merci d'attendre notre retour")
            resetForm()

        } catch (err) {
            setError(true)
            setDelay(setError,5000)
            setmsg(err.message)
            
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen">
            <Reveal delay={0.75} className="absolute top-2 left-5">
                <a href="/" className=" border border-cobalt-blue-500 w-24 flex gap-2 py-2"><ArrowLeftFromLine/><span>Retour</span></a>
            </Reveal>

            {success && <AlertSuccess message={msg} />}
            {error && <AlertError message={msg} />}

            <Reveal delay={0.5}>
                <h1 className="my-8 leading-8 text-center">
                    <span className="text-cobalt-blue-500 text-3xl font-bold">BIENVENUE</span> sur la<br />
                    <span className='text-3xl font-bold'>Page de Soumission de Candidature</span>
                </h1>
            </Reveal>

            <Input
                label="Nom complet"
                type="text"
                name="nom"
                placeholder="Ex: Eudes HODONOU"
                value={nom}
                mandatory={true}
                onChange={(e) => setNom(e.target.value)}
            />
            <Input
                label="Email"
                type="email"
                name="email"
                placeholder="Ex: eudes.hodonou@example.com"
                value={email}
                mandatory={true}
                onChange={(e) => setEmail(e.target.value)}
            />
            <Select
                label="Rôle"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                options={[
                    { value: "dev", label: "Développeur" },
                    { value: "designer", label: "Designer" },
                ]}
            />
            <Textarea
                label="Message de Motivation"
                placeholder="Décrivez votre motivation..."
                value={motivation}
                mandatory={true}
                onChange={(e) => setMotivation(e.target.value)}
            />
            <FileInput
                label="CV"
                name="cv"
                mandatory={true}
                onChange={(e) => setCv(e.target.files[0])}
            />
            <FileInput
                label="Portfolio"
                name="portfolio"
                mandatory={false}
                onChange={(e) => setPortfolio(e.target.files[0])}
            />

            <Reveal delay={1} className="text-center">
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`btn btn-wide bg-cobalt-blue-700 hover:bg-cobalt-blue-600 text-white mt-4 ${loading && 'cursor-not-allowed'} `}
                >
                    <Send /> {loading ? 'Envoi en cours...' : 'Soumettre'}
                </button>
            </Reveal>
        </div>
    )
}

export default SubmitPage