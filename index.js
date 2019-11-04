// index.js //
// import "./style.scss";

// import Vue from "vue";

Vue.directive('swipe', {
  bind: function (el, binding, vNode) {
    let start={}, gesture={};  
    
    const gestureStart = function(e) {
      start = {
        pointerType: e.pointerType,
        timeStamp: new Date().getTime(),
        x: e.clientX,
        y: e.clientY,
      }   
      el.setPointerCapture(e.pointerId);
    }
    
    const gestureEnd = function(e) {
      gesture = {
        pointerType: e.pointerType,
        duration: new Date().getTime() - start.timeStamp,
        direction: e.clientX > start.x ? "right" : "left",
        distance: {
          x: Math.round(e.clientX - start.x),
          y: Math.round(e.clientY - start.y)         
        }
      }  
      // console.log(gesture);
      if ( gesture.duration < 500 && 
          Math.abs(gesture.distance.x) > 100 && 
          Math.abs(gesture.distance.y) < 100 )  {

        if (binding.arg === gesture.direction || !binding.arg) {
          binding.value(e, gesture);
        }
      }     
      el.releasePointerCapture(e.pointerId);
    }
    
    el.addEventListener('pointerdown', gestureStart); 
    el.addEventListener('pointerup', gestureEnd);
    el.addEventListener('pointercancel', gestureEnd);
  }
});  

import { mapGetters, mapMutations, mapActions } from 'vuex'


const app = new Vue({ 
  el: '#app',
  store,
  data: {    
    spinDirection: false,
    slide: "slideRight",   
    muted: false,
    selectedIndex: 0,
    selectedItem: null,
    playing: false, 
    audioObj: null,  
    audioEndFx: null,
    progress: 0,
    duration: null,
    currentTime: null,
  },
 
  computed: { 
    ...mapGetters([
      'currentList', 
      'currentPanel',
      'autoplay',
    ]), 

    volume: {
      get() {
        return this.$store.state.volume;
      },
      set(value) {
        this.$store.commit('setVolume', value);
      }
    },

    title() {
      if ( this.playing && this.selectedItem )
        return this.selectedItem.title;
        else return this.currentPanel;
    },
  },

  methods: {
    ...mapMutations([
      'updateCurrentPanel',
      'updateAutoPlay',
    ]),     
    swiped(e, gesture) {
      this.toggleSlide(gesture.direction === "right");
    },
    randomToggle() {
      this.toggleSlide(Math.random() >= 0.5);
    },
    toggleSlide(isTrue) {
      isTrue ? 
        this.slide = "slideRight" :
        this.slide = "slideLeft"
      this.toggleList();
    },
    
    toggleList() {
      let panel = "";
      this.currentPanel === "Radio" ?
        panel = "Music" :
        panel = "Radio";
        
      this.updateCurrentPanel(panel);  
    }, 

    togglePlay() {
      if (!this.selectedItem) {
        this.loadAudio(this.selectedIndex);
        return;
      }    
      
      this.playing === false ?        
        this.play() : 
        this.pause(); 
    },   

    loadAudio(index) {
      // console.log(item);
      this.stop();

      this.selectedIndex = index;      
      this.selectedItem = this.currentList[this.selectedIndex];

      this.audioObj.src = this.selectedItem.url; 
      this.updateVolume();

      this.togglePlay();
    },

    loadNext() {
      this.stop();  
      let x = this.selectedIndex;
      const cl = this.currentList.length;
      
      this.selectedIndex = (x + 1) % cl;
      this.loadAudio(this.selectedIndex);
    },

    play() {
      try {
        this.audioObj.play();
        this.playing = !this.audioObj.paused;
        this.audioObj.ontimeupdate = this.updateProgress; 
      } catch {
        this.title = "error ...";
        this.stop();   
      }
    },
    
    pause() {
      this.audioObj.pause();
      this.playing = !this.audioObj.paused;
    },
    
    stop() {
      this.audioObj.pause();
      this.audioObj.currentTime = 0;       
      this.playing = !this.audioObj.paused;
    },    

    prev() {
      if (!this.selectedItem) {
        this.loadAudio(this.selectedIndex);
        return;
      }

      if (this.audioObj.currentTime > 10) {
        this.audioObj.currentTime = 0;
      } else {      

        if ( this.selectedIndex <= 0 ) { 
          this.selectedIndex = this.currentList.length;
        } 
        this.selectedIndex--;
        this.loadAudio(this.selectedIndex);
      }
    },

    next() {     
      if (!this.selectedItem) {
        this.loadAudio(this.selectedIndex);
      } else {
        this.loadNext();
      }
    },

    toggleMute() {
      this.muted = !this.muted;
      this.audioObj.muted = this.muted ;
    },

    updateVolume() {
      this.audioObj.volume = this.volume;
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
    }, 
    
    toggleAutoPlay() {
      this.audioObj.removeEventListener('ended', this.audioEndFx);
      // this.autoplay = !this.autoplay;   
           
      this.updateAutoPlay(!this.autoplay);  
      this.setEndFx();
    },  

    setEndFx() { 
      this.autoplay ?
        this.audioEndFx = this.loadNext : 
        this.audioEndFx = this.stop;
        
      this.audioObj.addEventListener('ended', this.audioEndFx);
    },

    init() {
      // this.$store.commit("updateSelectedItem", null);
      this.selectedItem = null;
      this.audioObj = this.$refs.audio;
      this.audioObj.crossorigin = "anonymous";
      this.audioObj.type = "audio/mpeg"; 

      this.setEndFx();
      
    },
    
    spin() {      
      this.spinDirection = !this.spinDirection;
      this.spinDirection ? 
        this.$refs.spin.style.transform = "rotate(2880deg)" :
        this.$refs.spin.style.transform = "rotate(-2880deg)";
    }, 

    error(e) {
      // console.log(e);
      this.title = "error ...";
      this.stop();
    },
  },  
  
  watch: {    
    volume: function (val) {
      this.updateVolume();
    }
  },

  beforeCreate() {
    this.$store.commit('initializeStore');
    this.$store.subscribe((mutation, state) => {

      let store = {
        version: state.version,
        volume: state.volume,
        currentPanel: state.currentPanel,
        autoplay: state.autoplay,
      };
      localStorage.setItem(
        'store', JSON.stringify(store)
      );
    });
  },

  mounted() {
    this.init();
  }
});
