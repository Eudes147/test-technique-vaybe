import { useEffect,useRef, useState } from "react";
// UseReveal: fonction qui gère le reveal avec un threshold par défaut de 0.15
export function useReveal(threshold=0.15){
    const ref = useRef(null);
    const [visible,setVisisble] = useState(false);

    useEffect(()=>{
        // C'est l'observer qui prend une entrée, vérifie si elle est intercepté par le viewport et passe le visible à true
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting) setVisisble(true);
        },{threshold}
        )
        if(ref.current) observer.observe(ref.current); // Ici on vérifie si chaque élément qui entre dans le DOM, il est observé par Inters...
        return () => observer.disconnect(); // Dans le cas contraire, on déconnecte l'observer à chaque fois sur l'élément. 
    },[]);
    return [ref,visible];
}