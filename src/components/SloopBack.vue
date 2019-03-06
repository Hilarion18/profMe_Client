<template>
  <div class="sloopback">
    <div class="splash">
      <!-- <div class="flex-container"> -->
      <div class="se-slope"></div>
      </div>
        <div class="text">
        <h1>Example County Water Supply</h1>
        <hr>
          <p>Serving Example County for over 65 years.</p>
          </div>
        <a class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></a>
    <!-- </div> -->
  </div>
</template>
<style scoped>
.flex-container {
  display: flex;
}

html, body, splash {
  margin: 0;
  height: 100%;
    max-width: 100%;
  overflow: hidden;
}

splash {
   overflow-y: hidden;
  background: radial-gradient(rgba(196, 102, 0, 0.2), rgba(0, 51, 102, 0.75)), url('http://www.euclidlibrary.org/images/tickle-your-brain/water-wallpapers-12.jpg?sfvrsn=0') center center;
  background-size: cover;
  -webkit-filter: grayscale(25%) ; /* Chrome, Safari, Opera */
    filter: grayscale(25%);
}

.text{
    position: absolute;
  z-index: 2;
    width: 100%;
    text-align:center;
  font-family: 'Poiret One', sans-serif;
    color: #fff;
}

splash hr {width: 150px; height: 3px;
display: block;
border: none;
  border-radius: 10px;
color: #fff;
background-color:#fff;}

splash h1 {
  margin-bottom: 5px;
  text-transform: uppercase;
  font-size: 3em;
}

.se-slope{
  background-color:#003a6f;
  opacity: .75;
  position: fixed;
  width: 150%;
  height: 80%;
  z-index: 1;
  transform: rotate(-10deg);
  margin-top: -200px;
  margin-left: -100px;
  box-shadow: 0px -1px 3px rgba(0,0,0,0.4);
}

button {
  font-family: 'Poiret One', sans-serif;
  position: absolute;
  bottom: 20px;
  background: rgba(255,255,255,.5);
  border: none;
  padding: 5px;
  font-size: 1.2em;
  border-radius: 5px;
  left: 45%;
  text-align: center;
  display: block;
  margin: 0 auto;
  width: 150px;
}

html body [data-ca3_iconfont="ETmodules"]::before {
    font-family: "ETmodules";
}

[data-ca3_icon]::before {
  font-weight: normal;
  content: attr(data-ca3_icon);
}

.ca3-scroll-down-arrow {
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2hldnJvbl90aGluX2Rvd24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBmaWxsPSJ3aGl0ZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE3LjQxOCw2LjEwOWMwLjI3Mi0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwYzAuMjcsMC4yNjgsMC4yNzEsMC43MDEsMCwwLjk2OWwtNy45MDgsNy44M2MtMC4yNywwLjI2OC0wLjcwNywwLjI2OC0wLjk3OSwwbC03LjkwOC03LjgzYy0wLjI3LTAuMjY4LTAuMjctMC43MDEsMC0wLjk2OWMwLjI3MS0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwTDEwLDEzLjI1TDE3LjQxOCw2LjEwOXoiLz48L3N2Zz4=);
  background-size: contain;
  background-repeat: no-repeat;
}

.ca3-scroll-down-link {
  cursor:pointer;
  height: 60px;
  width: 80px;
  margin: 0px 0 0 -40px;
  line-height: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  color: #FFF;
  text-align: center;
  font-size: 70px;
  z-index: 100;
  text-decoration: none;
  text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);
  -webkit-animation: ca3_fade_move_down 2s ease-in-out infinite;
  -moz-animation: ca3_fade_move_down 2s ease-in-out infinite;
  animation: ca3_fade_move_down 2s ease-in-out infinite;
}

/*animated scroll arrow animation*/
@-webkit-keyframes ca3_fade_move_down {
  0%   { -webkit-transform:translate(0,-20px); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -webkit-transform:translate(0,20px); opacity: 0; }
}
@-moz-keyframes ca3_fade_move_down {
  0%   { -moz-transform:translate(0,-20px); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -moz-transform:translate(0,20px); opacity: 0; }
}
@keyframes ca3_fade_move_down {
  0%   { transform:translate(0,-20px); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:translate(0,20px); opacity: 0; }
}
</style>
