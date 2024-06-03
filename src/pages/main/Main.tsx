import Slider from './slider/Slider';
import Photos from './photos/Photos';
import Map from './map/Map';
import Banner from '../../components/banner/Banner';

const Main:React.FC = () => {

    return (
        <>
            <Banner />
            <Slider />
            <Photos  />
            <Map  />
        </>
    )
}

export default Main;
