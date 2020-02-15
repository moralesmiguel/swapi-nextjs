import Head from "next/head";
//Components
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";


    export default () => {
        return (
            <Layout>
            <div className="App">
                    <Head>
                        <title>Imperial Planet Survey</title>
                        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossOrigin="anonymous" />
                    </Head>
                    <Navbar />
                    <Header />
            </div>
            </Layout>
        );
    } 