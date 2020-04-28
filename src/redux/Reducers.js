import { UNSELECT_SONG, SORTBY_NAME, SORTBY_ARTIST, SORTBY_ALBUM, SORTBY_YEAR, SORTBY_DURATION, SORTBY_POPULARITY, SORTBY_BPM, SORTBY_LOUDNESS,
FILTERBY_ARTIST, FILTERBY_ALBUM, FILTERBY_YEAR, FILTERBY_DURATION, FILTERBY_POPULARITY, FILTERBY_BPM, FILTERBY_LOUDNESS } from './Constants';
import { combineReducers } from 'redux';

export const songList = [
    {
        "name": "Not Afraid",
        "artist": "Eminem",
        "album": "Recovery",
        "year": 2010,
        "duration": 350,
        "popularity": 50,
        "bpm": 3005,
        "loudness": 150,
        "filteredOutBy": {
            "artist": false,
            "album": false,
            "year": false,
            "duration": false,
            "popularity": false,
            "bpm": false,
            "loudness": false
        }
    },
    {
        "name": "Love the Way You Lie",
        "artist": "Eminem",
        "album": "Recovery",
        "year": 2010,
        "duration": 350,
        "popularity": 35,
        "bpm": 4000,
        "loudness": 140,
        "filteredOutBy": {
            "artist": false,
            "album": false,
            "year": false,
            "duration": false,
            "popularity": false,
            "bpm": false,
            "loudness": false
        }
    },
    {
        "name": "Space Bound",
        "artist": "Eminem",
        "album": "Recovery",
        "year": 2010,
        "duration": 350,
        "popularity": 103,
        "bpm": 2005,
        "loudness": 170,
        "filteredOutBy": {
            "artist": false,
            "album": false,
            "year": false,
            "duration": false,
            "popularity": false,
            "bpm": false,
            "loudness": false
        }
    },
    {
        "name": "Redbone",
        "artist": "Childish Gambino",
        "album": "Awaken My Love",
        "year": 2018,
        "duration": 200,
        "popularity": 3,
        "bpm": 1005,
        "loudness": 170,
        "filteredOutBy": {
            "artist": false,
            "album": false,
            "year": false,
            "duration": false,
            "popularity": false,
            "bpm": false,
            "loudness": false
        }
    }
]

const songs = (state = songList, action) => {
    switch(action.type) {
        case UNSELECT_SONG:
            // use filter function
            return state;
        case SORTBY_NAME:
            return [...state.sort((a, b) => (a.name > b.name) ? 1 : -1)];
        case SORTBY_ARTIST:
            return [...state.sort((a, b) => (a.artist > b.artist) ? 1 : -1)];
        case SORTBY_ALBUM:
            return [...state.sort((a, b) => (a.album > b.album) ? 1 : -1)];
        case SORTBY_YEAR:
            return [...state.sort((a, b) => (a.year > b.year) ? 1 : -1)];
        case SORTBY_DURATION:
            return [...state.sort((a, b) => (a.duration > b.duration) ? 1 : -1)];
        case SORTBY_POPULARITY:
            return [...state.sort((a, b) => (a.popularity > b.popularity) ? 1 : -1)];
        case SORTBY_BPM:
            return [...state.sort((a, b) => (a.bpm > b.bpm) ? 1 : -1)];
        case SORTBY_LOUDNESS:
            return [...state.sort((a, b) => (a.loudness > b.loudness) ? 1 : -1)];
        case FILTERBY_ARTIST:
            return state;
        case FILTERBY_ALBUM:
            return state;
        case FILTERBY_YEAR:
            return state;
        case FILTERBY_DURATION:
            return [
                ...state.map(song => {
                    return {...song, 
                        filteredOutBy: {
                            ...song.filteredOutBy,
                            duration: ((song.duration < action.range[0]) || (song.duration > action.range[1]))
                        }
                    }
                })
            ];
        case FILTERBY_POPULARITY:
            return [
                ...state.map(song => {
                    return {...song, 
                        filteredOutBy: {
                            ...song.filteredOutBy,
                            bpm: ((song.popularity < action.range[0]) || (song.popularity > action.range[1]))
                        }
                    }
                })
            ];
        case FILTERBY_BPM:
            return [
                ...state.map(song => {
                    return {...song, 
                        filteredOutBy: {
                            ...song.filteredOutBy,
                            bpm: ((song.bpm < action.range[0]) || (song.bpm > action.range[1]))
                        }
                    }
                })
            ];
        case FILTERBY_LOUDNESS:
            return [
                ...state.map(song => {
                    return {...song, 
                        filteredOutBy: {
                            ...song.filteredOutBy,
                            bpm: ((song.loudness < action.range[0]) || (song.loudness > action.range[1]))
                        }
                    }
                })
            ];
        default:
            return state;
    }
}

export default combineReducers({
    songs
});