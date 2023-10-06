import React from "react"
import { useEffect, useState } from "react"


function aula() {
const [users, setUser]= useState([]);

    function data() {
        fetch ('https://jsonplaceholder.typicode.com/users').then((Response) => Response.json()).then((json) => setUser(json) )
    }

    useEffect(() => {
        data()
    }, []);

    return (
        <div>
            <h1>api</h1>
            <a href="/">home</a>
            <br />
            <br />
            <a href="/aula2">produtos</a>
            <br />
            <br />
            <br />
            <br />
            <ul>
                {users.map( (pessoa) => (
                     <li key={pessoa.id}>{pessoa.name}</li>
                     ))}
            </ul>
        </div>
    )
}

export default aula