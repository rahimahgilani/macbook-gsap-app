import { useEffect, useRef } from "react"

function Hero() {
    const videoRef = useRef(); 

    useEffect(() => {
        if (videoRef.current) videoRef.current.playbackRate = 5
    },[])

    return (
    <section id="hero">
        <div>
            <h1>Macbook Pro</h1>
            <img src="./title.png" alt="Macbook Title"></img>
            <video src="/videos/hero.mp4" autoPlay muted playsInline></video>
            <button>Buy</button>
            <p>From $1599 to $130/mo for 12 months</p>
        </div>
    </section>
  )
}

export default Hero
