import React, {Component} from 'react';
import { YMaps, Map } from "react-yandex-maps";

const mapData = {
    center: [53.9254459, 27.5942589],
    zoom: 10,
};

class QuestLocation extends Component {
    render() {
        return <div className='quest-location'>
        <div className='title'>Quest location</div>
        <YMaps>
            <Map defaultState={mapData} width='800px' height='600px' class='map' />
        </YMaps>
    </div>
    }
}

export default QuestLocation;