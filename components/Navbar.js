import Link from 'next/link';

const Navbar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link href="/planets">
                        <a className="nav-link">Planets</a>
                    </Link>
                </li>
                <li>
                    <Link href="/species">
                        <a className="nav-link">Species</a>
                    </Link>
                </li>
            </ul>
        </nav>
);}

export default Navbar;