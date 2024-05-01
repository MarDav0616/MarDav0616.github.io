import { useNavigate } from "react-router-dom";
import React,{ useState, useEffect } from 'react';
import cars from '../../Json/ferrari.json';

function Page() {
    const navigate = useNavigate();
    const [carsData, setCars] = useState(cars);
    return (
        <>
            <h2>Auto disponibili</h2>
            <table>
                <thead>
                    <tr>
                        <th>Modello</th>
                        <th>Cv</th>
                        <th>Motore</th>
                        <th>Accelerazione</th>
                        <th>Prezzo</th>
                    </tr>
                </thead>
                <tbody>
                    {carsData.map((car, index) => (
                        <tr key={index}>
                            <td>{car.modello}</td>
                            <td>{car.cv}</td>
                            <td>{car.motore}</td>
                            <td>{car.accelerazione}</td>
                            <td>{car.prezzo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => navigate('/')}>Torna indietro</button>
        </>
    )
}

export default Page;
