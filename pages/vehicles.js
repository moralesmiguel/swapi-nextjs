import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import Navbar from "../components/Navbar";
import Link from "next/link";
import Head from "next/head";

const Species = props => (
    <Layout>
        <Head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
        </Head>
        <div className="Species-Container">
        <Navbar />
        <Link href="/"><a><i className="fab fa-empire fa-4x"></i></a></Link>
            <h1 className="header-text">Species</h1>
            <h2 className="header2-text">Browse files:</h2>
            <ul className="file-list">
                {props.Species.results.map((result,id)=> (
                    <li key={result.name}>
                        <Link href={`post2?id=${id+1}`}>
                        {/*Had to use numeration instead of names since swapi has an error with ids being empty and order not matching*/}
                            <a className="file-links">Species File {id+1}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </Layout>
);

Species.getInitialProps = async function(){
    const res = await fetch("https://swapi.co/api/species");
    const data = await res.json();

    return {
        Species: data
    };
};

export default Species;

