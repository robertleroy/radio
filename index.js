// index.js //
// import "./style.scss";

// import Vue from "vue";

const Version = "0.0.1";
const app = new Vue({
  el: "#app",

  data: {
    title: "Audio Tests",
    menu: ["Radio", "Music"],
    currentList: [],
    currentTitle: "",
    show: false,
    spinDirection: false,
    songs: [
      {
        title: "Well All Right",
        description: "Traffic",
        url:
          "https://raw.githubusercontent.com/robertleroy/radio/master/audio/Well%20All%20Right.mp3"
      },
      {
        title: "Watermelon Man",
        description: "Herbie Hancock",
        url: "https://robertleroy.github.io/radio/audio/Watermelon%20man.mp3"
      },
      {
        title: "Caravan",
        description: "Thelonious Monk",
        url:
          "https://raw.githubusercontent.com/robertleroy/radio/master/audio/Caravan.mp3"
      },
      {
        title: "Fried Neckbones",
        description: "Willie Bobo",
        url:
          "https://raw.githubusercontent.com/robertleroy/radio/master/audio/Fried%20Neck%20Bones.mp3"
      }
    ],
    stations: [
      {
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
        title: "C-Span",
        description: "C-Span",
        url: "https://playerservices.streamtheworld.com/api/livestream-redirect/CSPANRADIO.mp3"
      },
    ],

    selectedIndex: 0,
    audioObj: null,
    volume: 1.0,
    progress: 0,
    duration: null,
    currentTime: null,
    playing: false,
    mute: false,
    autoplay: true,
  },

  methods: {
    innerWidth() {
      return window.innerWidth;
    },

    showMenu() {
      if (window.innerWidth < 800) {
        this.show = !this.show;
      } else {
        this.show = true;
      }
      return this.show;
    },

    toggleMenu() {
      if (this.showMenu()) {
        this.$refs.aside.style.transform = "translate(0)";
        this.$refs.main.style.marginLeft = "100vw";
      } else {
        this.$refs.aside.style.transform = "translate(-100vw)";
        this.$refs.main.style.marginLeft = "0";
      }
    },

    menuClick(item) {
      this.title = item;
      this.toggleMenu();
      if (item === "Radio") {
        this.currentList = this.stations;
      } else if (item === "Music") {
        this.currentList = this.songs;
      } else {
        this.currentList = [];
      }
    },

    spin() {
      this.spinDirection = !this.spinDirection;
      if (this.spinDirection) {
        this.$refs.spin.style.transform = "rotate(2880deg)";
      } else {
        this.$refs.spin.style.transform = "rotate(-2880deg)";
      }
    },

    togglePlay() {
      if (this.audioObj === null) {
        this.loadSound(this.selectedIndex);
        return;
      } 

      if (this.audioObj.paused) {
        this.play();
      } else {
        this.pause();
      }
    },

    loadSound(index) {
      if (this.audioObj) {
        this.stop();
      }

      this.selectedIndex = index;
      this.currentTitle = this.currentList[this.selectedIndex].title;
      this.audioObj = new Audio(this.currentList[this.selectedIndex].url);
      this.audioObj.volume = this.volume;
      this.audioObj.type = "audio/mpeg";

      this.togglePlay();

      this.audioObj.addEventListener('ended', this.loadNext);
    },

    loadNext() {

      this.pause();
      this.currentTime = 0;
      if ( !this.autoplay ) { return; }
      
      this.selectedIndex++;
      
      if (this.selectedIndex >= this.currentList.length) {
        this.selectedIndex = 0; 
      }
      this.loadSound(this.selectedIndex);
    },  

    play() {
      try {
        this.audioObj.play();
        this.playing = !this.audioObj.paused;
        this.audioObj.ontimeupdate = this.updateProgress; 
      } catch {
        this.title = "error ...";
      }
    },

    pause() {
      this.audioObj.pause();
      this.playing = !this.audioObj.paused;
    },
    
    stop() {
      if (this.audioObj === null) { return; } 

      if ( this.currentList === this.stations ) {
        this.audioObj.src = "";
        this.audioObj.currentTime = 0; 
        this.audioObj = null;  
        this.playing = false;
        return;
      }    
      
      this.audioObj.pause();
      this.audioObj.currentTime = 0; 
      this.playing = !this.audioObj.paused;
    },

    prev() {
      if (this.audioObj === null) { 
        this.loadSound(0);
        return;
      } 

      if (this.audioObj.currentTime > 10) {
        this.audioObj.currentTime = 0;
      } else {      

        if ( this.selectedIndex <= 0 ) { 
          this.selectedIndex = this.currentList.length;
        }        
        this.selectedIndex--;
        this.loadSound(this.selectedIndex);
      }
    },

    next() {
      if (this.audioObj === null) { 
        this.loadSound(0);
      } else {
        this.loadNext();
      }
    },

    updateVolume() { 
      this.audioObj.volume = this.volume;
    },

    toggleMute() {
      this.mute = !this.mute;
      if (this.mute) {
        this.audioObj.muted = true;
      } else {
        this.audioObj.muted = false;
      }
    },

    updateProgress() {
      if (this.audioObj === null) { return; } 

      this.duration = this.audioObj.duration;
      this.currentTime = this.audioObj.currentTime;
      
      if (!this.audioObj || !this.audioObj.currentTime) return this.progress = 0;
      this.progress = (this.audioObj.currentTime / this.audioObj.duration) * 100;
    },    // updateProgress
    
    progressClick(e) {         
      if (this.duration === Infinity || this.duration === null ) { 
        return; 
      }
      
      var rect = e.target.getBoundingClientRect();
      var x = e.clientX - rect.left;
      // var clickedValue = x * this.$refs.progress.max / this.$refs.progress.offsetWidth;   
      var clickedValue = x * 100 / this.$refs.progress.offsetWidth;    


      this.audioObj.currentTime = this.duration * (clickedValue/100);    
    },  // progressClick


    formatSeconds(s) {      
      if (!s) return "...";
      if (s === Infinity) {
        return s;
      }
      if (s === "0:00") {
        return s;
      }
      s = Math.floor(s);
      return(s-(s%=60))/60+(9<s?':':':0')+s ;
    },  // formatSeconds
  },

  mounted() {
    // this.currentList = this.songs;
    // this.title = "Music";

    this.currentList = this.stations;
    this.title = "Radio";
  },

  watch: {    
    volume: function (val) {
      this.updateVolume();
    }  
  },

  beforeDestroy() {    
      this.audioObj.src = "";
      this.audioObj.load();
      this.audioObj = null;
  }
});
