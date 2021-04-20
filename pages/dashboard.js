import Cookies from 'js-cookie'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Dashboard({data, loading}) {
    if (loading) {
        return (
            <div className="error">
                <h1>Carregando</h1>
                <img src="/loading.svg"/>
            </div>
        )
    } else {
        return (
            <div className="error">
                <h1>AAA</h1>
            </div>
        )
    }
}

export default function DashboardFetch({user, setUser}) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    if (user === undefined) {
        return (
            <div className="error">
                <h1>Sem permissão!</h1>
                <p>Você não está logado!</p>
                <p>Clique <Link href="/"><span className="link">aqui</span></Link> para efetuar login</p>

            </div>
        )
    }
    else {
        const carregar_dados = async () => {
            const url = "https://pcs3623-mytrello-api.herokuapp.com/dashboard/"
            fetch(url, {
                method: 'GET',
                headers: new Headers({
                    Authorization: 'JWT ' + user
                })
            })
            .then(response => {
                response.json()
                .then(data => {
                    console.log(data)
                    setData(data)
                    setLoading(false)
                })
            })
            .catch(error => {
                return error
            })
        }
        useEffect(() => {
            carregar_dados()
        }, [])
        return (
            <Dashboard data={data} loading={loading}/>
        )
    }
}