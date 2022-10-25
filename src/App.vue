<template>
  <div id="app">
  
  <h1>
  Which US State is the Worst?
  </h1>


  <br><br>
    
    <div class="examples__block__map examples__block__map--usa">
      <SvgMap :map="USA" :location-class="getLocationClass" 
        @mouseover="pointLocation"
				@mouseout="unpointLocation"
				@mousemove="moveOnLocation"
			/>

      <div
				class="examples__block__map__tooltip"
				:style="tooltipStyle"
			>
				{{ pointedLocation }}
			</div>
		</div>

    <div class="DividerInfo">
        <vs-divider color="default">Information</vs-divider>
         <vs-row vs-type="flex" vs-justify="center" vs-align="center">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center">
      <vs-collapse accordion>
      <vs-collapse-item>
        <div slot="header">
          What are the worst states?
        </div>
          According to a survey taken by <a href="https://forms.gle/JtedZd1XcBqeUb777" color = "#ad3939">50 participants</a>
          Florida, Ohio, California, New York, Texas, Alabama, and Wyoming <a href="https://wyomingisntreal.com/" color = "#ad3939">(not real)</a> are by far the worst states.
          Ohio comes in first with 25.7% of participants deeming it the worst state, in second is Florida with 14.3%, and finally a three way tie for third between California Wyoming and Texas.
      </vs-collapse-item>
  
      <vs-collapse-item>
        <div slot="header">
          Why make this?
        </div>
        For the bit.
      </vs-collapse-item>
      <vs-collapse-item>
        <div slot="header">
          About
        </div>
        Built with <a href="https://vuejs.org/" color = "#ad3939">Vue Js</a> by <a href="https://www.instagram.com/nel_kett/" color = "#ad3939"> Neil K </a>
      </vs-collapse-item>
      
      </vs-collapse>
    </vs-col>

    </vs-row>
    </div>

    </div>
</template>

<script>
import { getLocationName } from './util'
import { getLocationIndex } from './util'
import { SvgMap } from "vue-svg-map";
import USA from "@svg-maps/usa";

export default {
  
  name: 'App',
  components: {
    SvgMap
  },
    data() {
    return {
      USA,
      States: [2,12,6,4,10,2,1,0,6,9,3,1,5,4,2,6,4,6,5,1,3,1,3,1,1,3,3,3,4,1,3,5,3,1,7,11,3,1,3,1,1,4,2,10,5,1,3,2,3,5,8],
      pointedLocation: null,
			tooltipStyle: null,
      PercentHate: 0 
    };
  },
  mounted(){
    this.unpointLocation();
  },
  methods:{
    pointLocation() {
      this.PercentHate = this.States[getLocationIndex(event.target)]/0.31; 
			this.pointedLocation = getLocationName(event.target) + " " + this.PercentHate.toFixed(2) + "%";
		},
		unpointLocation() {
			this.pointedLocation = null
			this.tooltipStyle = { display: 'none' }
		},
		moveOnLocation() {
			this.tooltipStyle = {
				display: 'block',
				top: `${event.clientY + 10}px`,
				left: `${event.clientX - 100}px`,
			}
		},
    getLocationClass(location, index) {
			// Generate heat map
      if(this.States[index]/194 < 0.006) return `svg-map__location svg-map__location--heat0`
      else if (this.States[index]/194 < 0.02) return `svg-map__location svg-map__location--heat1`
      else if (this.States[index]/194 < 0.03) return `svg-map__location svg-map__location--heat2`
      else if (this.States[index]/194 < 0.04) return `svg-map__location svg-map__location--heat3`
      else if (this.States[index]/194 >= 0.04) return `svg-map__location svg-map__location--heat4`
		},
  }
};
</script>

<style>
html{
  background-color: #0f0f0f;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
  background-color: #0f0f0f; 
}

.InfoCont{
  margin-left:auto;
  margin-right:auto;
}

a:link {
  color: #ffb5b5;
  background-color: transparent;
    text-decoration: none;
}

a:visited {
  color: #ffb5b5;
  background-color: transparent;
    text-decoration: none;
}

a:hover {
  color: #ff6666;
  background-color: transparent;
  text-decoration: none;
}

a:active {
  color: #ffb5b5;
  background-color: transparent;
  text-decoration: none;
}

.DividerInfo{
  width:70%;
  margin:auto;
}

.svg-map {
  width: 50%;
  height: auto;
  stroke: #212121;
  stroke-width: 0.75;
  stroke-linecap: round;
  stroke-linejoin: round; }
  .svg-map__location {
    cursor: pointer; }
    .svg-map__location:focus, .svg-map__location:hover {
      opacity: 0.95;
      outline: 0; }
      .svg-map__location--heat0{
        fill: #ffd1d1;
      }
      .svg-map__location--heat1{
        fill: #ffb3b3;
      }

      .svg-map__location--heat2{
        fill: #ff7373;
      }

      .svg-map__location--heat3{
        fill: #fc3f3f;
      }
      .svg-map__location--heat4{
        fill: #ff0000;
      }
            .svg-map__location--heat5{
        fill: blue;
      }

       .examples__block__map__tooltip {
        position: fixed;
        width: 150px;
        padding: 10px;
        margin-left:30px;
        border: 1px solid darkgray;
        background-color: #212121;
      }
</style>