// Librairies


// Components
import Navbar from '../components/common/Navbar'
import {Signpost} from 'lucide-react'


function Home() {
    return (
        <div className='max-h-screen'>
            <Navbar actualPage="homePage" />
            <div className="hero min-h-screen">
                <div className="hero-content text-center">
                    <div>
                    <h1 className="text-5xl font-bold">Rejoignez-nous à <span className="text-cobalt-blue-700">Vaybe</span> </h1>
                    <p className="py-6">
                        Envie d'intégrer notre équipe, de bâtir, de construire avec nous ? Rejoignez-nous et participez à l'aventure Vaybe ! Nous sommes à la recherche de personnes passionnées, motivées et prêtes à relever des défis pour faire de Vaybe un succès. Que vous soyez un développeur talentueux, un designer créatif ou un expert en marketing, nous avons une place pour vous dans notre équipe. Ensemble, nous pouvons créer quelque chose d'extraordinaire et faire de Vaybe une référence dans notre domaine. Alors n'hésitez plus, postulez dès maintenant et rejoignez-nous dans cette aventure passionnante !
                    </p>
                    <a href="/submit" className="btn bg-cobalt-blue-700 hover:bg-cobalt-blue-600 text-white p-5 text-lg"><Signpost className="w-5 h-5 mr-2" /> Postuler</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;