import { useReveal } from "../../services/useReveal"
function Reveal({children, delay = 0, className}) {
  const [ref,visible] = useReveal();

  return (
    <div ref={ref} className={className}
      style={
        {
          opacity: visible ? 1: 0,
          transform: visible ? "translateY(0)": "translateY(24px)",
          transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
        }
      }>{children}</div>)
}

export default Reveal;