import Link from 'next/link';

const Header=()=>{
    return(
       <div className="header-section">
           <header>
           <Link href="/"><a><i className="fab fa-empire fa-4x"></i></a></Link>
               <h1 className="header-text">Imperial Planet Survey</h1>
           </header>
           <h2 className="header2-text">Welcome, select your inquiry:</h2>
           <div className="options-container">
               <Link href="/planets">
                   <a><img src="/static/planets.jpg" alt="artwork of Star Wars planets" className="options-image" />
                   </a>
               </Link>
               <Link href="/species">
                   <a><img src="/static/people.jpg" alt="people riding hovering vehicles" className="options-image" />
                   </a>
               </Link>
            </div>
       </div>
    )
}

export default Header;