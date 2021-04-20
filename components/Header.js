import Link from 'next/link'
export default function Header(){
    return (
        <header>
            <nav className="header-nav">
                <Link href="/">
                    <h2>MyTrello</h2>
                </Link>
                <div className="header-nav-menu">
                    <Link href="/perfil">Meu perfil</Link>
                    <Link href="/Quadros">Meus Quadros</Link>
                    <Link href="/exit">Log out</Link>
                </div>
            </nav>
        </header>
    )
}