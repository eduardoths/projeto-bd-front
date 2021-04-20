import Cookies from 'js-cookie'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Team from '../components/team'
import Board from '../components/board'

function Dashboard({data, loading}) {
    return (
        <div className="container container-center">
            <div className="dashboard">
                <div className="dashboard-teams">
                    <div className="dashboard-section-title">
                        <p>Minhas equipes</p>
                    </div>
                    {
                        (() => {
                            if (loading){
                                return (
                                    <div className="loading">
                                        <img src="loading.svg"/>
                                    </div>
                                )
                            } else {
                                let teams = Array(data.equipes.length).fill(null)
                                for (let i=0; i < data.equipes.length; i++) 
                                    teams[i] = <Team name={data.equipes[i].nome}/>
                                return (
                                    <>
                                        {teams}
                                    </>
                                )
                            }
                        })()
                    }
                </div>
                <div className="dashboard-boards">
                    {
                        (() => {
                            if (loading){
                                return (
                                    <div className="loading">
                                        <img src="loading.svg"/>
                                    </div>
                                )
                            } else {
                                let teams = Array(data.equipes.length+ 1).fill(null)
                                for (let i=0; i < data.equipes.length; i++) {
                                    const boards_arr = Array(data.equipes[i].quadros.length).fill(null)
                                    for (let j=0; j < boards_arr.length; j++) {
                                        const quadro = data.equipes[i].quadros[j]
                                        boards_arr[j] = <Board key={`board-${i}-${j}`}name={quadro.nome} id={quadro.id}/>
                                    }
                                    teams[i] = <Team name={data.equipes[i].nome}>{boards_arr}</Team> 
                                    console.log(i)
                                }
                                const i = data.equipes.length
                                const boards_arr = Array(data.quadros.length).fill(null)
                                for (let j=0; j < boards_arr.length; j++) {
                                    const quadro = data.quadros[j]
                                    boards_arr[j] = <Board key={`board-${i}-${j}`}name={quadro.nome} id={quadro.id}/>
                                }
                                teams[i] = <Team name={"Seus Quadros"}>{boards_arr}</Team>
                                return (<>{teams}</>)
                            }
                        })()
                    }
                    <div className="dashboard-section-title">
                        <p>Meus quadros</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function DashboardFetch({user, setUser}) {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    if (user !== undefined) {
        const load_data = async () => {
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
                    setData(data)
                    setLoading(false)
                })
            })
            .catch(error => {
                return error
            })
        }
        useEffect(() => {
            load_data()
        }, [])
        return (
            <Dashboard data={data} loading={loading}/>
        )
    }
    else {
        return (
            <div className="container container-center flex-col">
                <h1>Sem permissão!</h1>
                <p>Você não está logado!</p>
                <p>Clique <Link href="/"><span className="link">aqui</span></Link> para efetuar login</p>
            </div>
        )
    }
}