// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

const Version = "0.0.1";
  
export default new Vuex.Store({
  state: { 
    version: '',
    songs: [
      {
        title: "Well All Right",
        description: "Traffic",
        url: "https://raw.githubusercontent.com/robertleroy/radio/master/audio/Well%20All%20Right.mp3"
      },
      {
        title: "Watermelon Man",
        description: "Herbie Hancock",
        url: "https://robertleroy.github.io/radio/audio/Watermelon%20man.mp3"
      },
      {
        title: "Caravan",
        description: "Thelonious Monk",
        url: "https://raw.githubusercontent.com/robertleroy/radio/master/audio/Caravan.mp3"
      },
      {
        title: "Fried Neckbones",
        description: "Willie Bobo",
        url: "https://raw.githubusercontent.com/robertleroy/radio/master/audio/Fried%20Neck%20Bones.mp3"
      }
    ],
    stations: [
      { // http://wrau.streamguys1.com/msnbc-free
        title: "MSNBC",
        description: "News & Politics",
        url: "http://198.178.123.5:12386/home.pls?sid=1"
      },
      {
        title: "CNN",
        description: "News & Politics",
        url: "http://tunein.streamguys1.com/cnn"
      },
      {
        title: "KGOU",
        description: "NPR",
        url: "http://20603.live.streamtheworld.com:80/KGOUFM_64_SC"
      },
      {
        title: "KQED",
        description: "NPR",
        url: "http://kqed.ice.lbdns-streamguys.com/kqedradio"
      },      
      {
        title: "C-SPAN",
        description: "C-Span",
        url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CSPANRADIO.mp3"
      }
    ],
    currentPanel: "Music",
    volume: 0.5,
    autoplay: true,
  },
  getters: { 
    currentList( state ) {
      if ( state.currentPanel === "Radio" ) 
        return state.stations;
        else return state.songs;
    },
    currentPanel( state ) {
      return state.currentPanel;
    },
    autoplay( state ) {
      return state.autoplay;
    },
  },
  mutations: {
    initializeStore(state) {
      if ( localStorage.getItem('store') ) {
        let store = JSON.parse( 
          localStorage.getItem('store') 
        );

        if ( store.version === Version ) {
          this.replaceState(
            Object.assign(state, store)
          );
        } else {
          state.version = Version;
        }
      }      
    },
    setVolume ( state, payload ) {
      state.volume = payload;
    },
    updateAutoPlay ( state, payload ) {
      console.log(payload);
      state.autoplay = payload;
    },
    updateCurrentPanel( state, payload ) {
      state.currentPanel = payload;
    },

  },
  actions: {
      
  }
})

