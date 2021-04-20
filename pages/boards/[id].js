import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Task from '../../components/task'
import Category from '../../components/category'
function Board({data, loading}) {
    if (loading) {
        return (
            <div className="container container-center">
                <img src="/loading.svg" />
            </div>
        )
    } else{
        const categories = Array(data.length).fill(null)
        for (let i=0; i < data.length; i++) {
            const tasks = Array(data[i].tarefas.length).fill(null)
            for (let j=0; j< data[i].tarefas.length; j++)
                tasks[j] = <Task key={`task-${i}-${j}`} name={data[i].tarefas[j].nome} />
            categories[i] = <Category key={`category-${i}`} name={data[i].legenda} tasks={tasks}/>
        }
        return <div className="container container-center">{categories}</div>
    }
}

export default function BoardFetch({user, setUser}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()
    const id = router.query.id
    const load_data = () => {
        const url = "https://pcs3623-mytrello-api.herokuapp.com/quadro/"
        fetch(url + id,{method: 'GET'})
        .then(r => {
            r.json()
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(e => {return;})
        })
        .catch(e => {return;})
    }
    useEffect(() => {
        load_data()
    }, [])
    if (user === undefined){
        return (
            <div className="container container-center flex-col">
                <h1>Sem permissão!</h1>
                <p>Você não está logado!</p>
                <p>Clique <Link href="/"><span className="link">aqui</span></Link> para efetuar login</p>
            </div>
        )
    }
    else {
        return(<Board data={data} loading={loading} />)
    }
}