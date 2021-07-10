import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './peopleList.css'


export default function Personas() {
    const [ listado, setData ] = useState([])
    useEffect(() => {
        try {
            const myFetch = async () => {
                const url = 'http://localhost:3000/libro/'
                const result = await axios.get(url);
                if (result.status === 200) {
                    setData(result.data.respuesta)
                }
            }
            myFetch()
        }
        catch (error) {
            console.log(error)
        }
    }, [])
    const Viewinfo = () => {
        return (
            listado.map(myInfo => {
                return <li keys='myInfo.id'>{ myInfo.id + ' - ' + myInfo.nombre }</li>
            })
        )
    }
    return (
        <div className="contenMain">
            <h1>Libros ingresados</h1>
            <div className="contenMain___chlid" >
                <ul>
                    <Viewinfo />
                </ul>
            </div>
        </div>

    )


}



