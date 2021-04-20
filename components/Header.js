import Cookies from 'js-cookie'
import Link from 'next/link'
function MenuLinks({user, setUser}) {
    const handleExit = () => {
        Cookies.remove('user')
        setUser(Cookies.get('user'))
        if (window.location.pathname !== "/")
            window.location.href = "/"
    } 
    if (user === undefined) {
        return <Link href="/">Home</Link>
    }
    else {
        return (
            <>
                <Link href="/dashboard">Meu Dashboard</Link>
                <Link href="/Quadros">Meus Quadros</Link>
                <a onClick={handleExit}>Log out</a>
            </>
        )
    }
}

export default function Header({user, setUser}){
    return (
        <header>
            <nav className="header-nav">
                <Link href="/">
                    <h2>MyTrello</h2>
                </Link>
                <div className="header-nav-menu">
                    <MenuLinks user={user} setUser={setUser} />
                </div>
            </nav>
        </header>
    )
}