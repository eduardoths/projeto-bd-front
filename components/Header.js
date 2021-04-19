import Link from 'next/link'
export default function Header(){
    return (
        <header>
            <nav className="header-nav">
                <Link href="/">
                    <h2>G4</h2>
                </Link>
                <div className="header-nav-menu">
                    <Link href="/perfil">Meus Quadros</Link>
                </div>
            </nav>
        </header>
    )
}