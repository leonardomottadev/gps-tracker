interface State {
    positions: L.LatLng[],
    speed: number,
    distance: number,
    timestamp: number,
    showpath: boolean
}

type Action = { type: 'add_position'; payload: L.LatLng } 
| { type: 'set_positions'; payload: L.LatLng[] } 
| { type: 'set_speed'; payload: number }
| { type: 'set_distance'; payload: number }
| { type: 'add_time'; payload: number }
| { type: 'set_showpath'; payload: boolean };

export default function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'add_position':
            return { ...state, positions: [...state.positions, action.payload] };
        case 'set_positions':
            return { ...state, positions: action.payload };
        case 'set_speed':
            return { ...state, speed: action.payload };
        case 'set_distance':
            return { ...state, distance: action.payload + state.distance };
        case 'add_time':
            return {...state, timestamp: action.payload + state.timestamp };
        case 'set_showpath':
            return {...state, showpath: !state.showpath };
        default:
            throw new Error();
    }
}