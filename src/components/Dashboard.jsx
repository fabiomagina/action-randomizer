import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./templates/Card"
import './Dashboard.css'

const baseUrl = 'http://localhost:3000'

function Dashboard({ reload }) {
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function getCards() {

            const res = await axios.get(`${baseUrl}/pures`);
            const cards = res.data
            setCards(cards)
        }
        getCards()
    }, [reload]);

    useEffect(() => {
        console.log(reload)
    }, [reload])



    function renderCards(id, title, value) {
        return <Card key={id} title={title} value={value} color="#133677" />
    }

    return (
        <div className="dashboard-row">
            {cards.map((card) => renderCards(card.id, card.title, card.list.length))

            }
        </div>
    )
}
export default Dashboard
