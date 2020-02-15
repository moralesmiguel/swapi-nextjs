import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import Typing from 'react-typing-animation';
import Error from './_error';

const Post2 = ({errorCode, species}) => {
    if(errorCode){
        return <Error statusCode={errorCode} />;
    }
    return(
    <Layout>
        <div className="black-background">
            <Typing>
            <h4>NAME: {species.name}</h4>
            <p>LANGUAGE: {species.language}</p>
            <p>CLASSIFICATION: {species.classification}</p>
            <p>DESIGNATION: {species.designation}</p>
            <p>AVERAGE HEIGHT: {species.average_height}</p>
            <p>AVERAGE LIFESPAN: {species.average_lifespan}</p>
            <p>Type any letter in the field and click enter to return</p>
            <input type="text" id="three" onKeyUp={handleKeyPress} />
            </Typing>
        </div>
    </Layout>
    )
    };

const handleKeyPress=(event)=>{
    if (event.key === 'Enter'){
        window.location.href="/species"
    }
}

Post2.getInitialProps = async function(context) {
    const{id} = context.query;
    const res = await fetch(`https://swapi.co/api/species/${id}`);
    const errorCode = res.statusCode > 200 ? res.statusCode : false
    const species = await res.json();

    console.log(`Fetched species: ${species.name}`);

    return{errorCode, species:species};
};

export default Post2;