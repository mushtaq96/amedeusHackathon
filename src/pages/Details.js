import {useContext, useEffect} from "react";
import DestinationContext from "../context/DestinationContext";
import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {CITES, DETAILS} from "../context/types/DestinationTypes";
import Header from "../components/Header";
import DestinationInfo from "../components/DestinationInfo";
import Cities from "../components/cities/Cities";
import Footer from "../components/footer/Footer";
// import Map from "../components/map/Map";
import Map from "./Map";

const Details = () => {
    const {destinationsData, dispatch} = useContext(DestinationContext);
    const {details, filteredCities} = destinationsData;
    const {id} = useParams();
    useEffect(()=>{
        dispatch({type: DETAILS, payload: id});
        dispatch({type: CITES, payload: id });
        window.scrollTo(0, 0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);

    console.log('details', details)
    return <>
        <Helmet>
            <title>{details.name}</title>
        </Helmet>
        <Header
            heading={details.name}
            image={details.bigImage}>
            
        </Header>
        <DestinationInfo details={details}/>
        <Cities cities={filteredCities} name={details.name}/>
        <Map Latitude={details.Latitude} Longitude={details.Longitude} />
        
        <Footer/>
    </>
}

export default Details;
