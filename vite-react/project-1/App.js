import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                id={item.id}
                title={it}
                
            />
        )
    })        
    
    return (
        <div>
            <Hero />
            <Navbar />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}