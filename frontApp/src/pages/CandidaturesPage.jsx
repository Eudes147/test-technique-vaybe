import { useState, useEffect } from "react"

import Reveal from "../components/common/Reveal"
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom"
import { getApplications, adminLogout, isAuthenticated } from "../api/linking"

function CandidaturesPage() {
    const [candidatures, setCandidatures] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api"

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/admin')
            return
        }

        getApplications()
            .then(data => setCandidatures(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="max-h-screen overflow-y-auto [scrollbar-gutter:stable]">
            
        
            <header className="flex flex-wrap justify-center md:justify-between items-center px-10 py-5 mt-10">
                <Reveal delay={0.5}>
                    <h1 className="text-3xl text-center md:text-left font-bold">Bonjour Monsieur/Madame</h1>
                </Reveal>
                <Reveal delay={0/5} className="flex gap-4 items-center">
                    <button
                        onClick={() => { adminLogout(); navigate('/admin') }}
                        className="btn btn-error text-white"
                    >
                        <LogOut />
                        Déconnexion
                    </button>
                </Reveal>
            </header>

            {loading ? (
                <p className="text-center mt-20">Chargement...</p>
            ) : (
                <Reveal delay={0.75}>
                    <table className="sm:text-sm table-auto w-full text-center border-collapse border border-gray-300">
                    <thead>
                        <tr className="py-4 bg-cobalt-blue-300">
                            <th className="py-4 border border-gray-200">N°</th>
                            <th className="py-4 border border-gray-200">Nom & Prénoms</th>
                            <th className="py-4 border border-gray-200">Email</th>
                            <th className="py-4 border border-gray-200">Rôle</th>
                            <th className="py-4 border border-gray-200">Score</th>
                            <th className="py-4 border border-gray-200">CV</th>
                        </tr>
                    </thead>
                    <tbody>
                        {candidatures.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="py-8 text-gray-400">
                                    Aucune candidature pour le moment
                                </td>
                            </tr>
                        ) : (
                            candidatures.map((candidat, index) => (
                                <tr key={candidat.id}>
                                    <td className="py-4 border border-gray-200">{index + 1}</td>
                                    <td className="py-4 border border-gray-200">{candidat.nom}</td>
                                    <td className="py-4 border border-gray-200">{candidat.email}</td>
                                    <td className="py-4 border border-gray-200">{candidat.role.toUpperCase()}</td>
                                    <td className="py-4 border border-gray-200">{candidat.score}</td>
                                    <td className="py-4 border border-gray-200">{candidat.cv && (<a href={`${BASE_URL.replace('/api', '')}${candidat.cv}`} target="_blank" className="btn btn-sm">Voir CV</a>)}</td>
                                    
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                </Reveal>
            )}
        </div>                                                                                                        
    )
}

export default CandidaturesPage