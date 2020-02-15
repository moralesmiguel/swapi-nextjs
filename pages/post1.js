import Layout from "../components/Layout.js";
import fetch from "isomorphic-unfetch";
import Typing from 'react-typing-animation';
import Error from './_error';

const Post1 = ({errorCode, planet}) => {
    if(errorCode){
        return <Error statusCode={errorCode} />;
    }
    return(
    <Layout>
        <div className="black-background">
            <Typing>
            <h4>NAME: {planet.name}</h4>
            <p>CLIMATE: {planet.climate}</p>
            <p>TERRAIN: {planet.terrain}</p>
            <p>GRAVITY: {planet.gravity}</p>
            <p>ORBITAL PERIOD: {planet.orbital_period}</p>
            <p>ROTATION PERIOD: {planet.rotation_period}</p>
            <p>POPULATION: {planet.population}</p>
            <p>Type any letter in the field and click enter to return</p>
            <input type="text" id="one" onKeyUp={handleKeyPress} />
            </Typing>
        </div>
    </Layout>
    )
    };

const handleKeyPress=(event)=>{
    if (event.key === 'Enter'){
        window.location.href="/planets"
    }
}

Post1.getInitialProps = async function(context) {
    const{id} = context.query;
    const res = await fetch(`https://swapi.co/api/planets/${id}`);
    const errorCode = res.statusCode > 200 ? res.statusCode : false
    const planet = await res.json();

    console.log(`Fetched planet: ${planet.name}`);

    return{errorCode, planet:planet};
};

export default Post1;