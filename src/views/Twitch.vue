<template>
  <div class="twitch">
    <!-- <div class="flex-container">
      <div>Halo 1</div>
      <div>Halo 2</div>
    </div> -->
    <!-- <div class="flex-container">
      <ul class="list-inline" :key="index" v-for="(stream, index) in streams">
        <div>
          <div class="col-sm-4 col-md-3">
            <div class="thumbnail" style="height: 500px; padding-top: 20px">
              <li class="list-inline-item"><a :href="stream.stream.channel.url">
                <img :src="stream.stream.preview.medium">
              </a></li>
              <li class="list-inline-item">{{stream.stream.game}}</li>
            </div>
          </div>
        </div>
      </ul>
    </div> -->
    <div class="container-fluid">
    <div id="carouselExample" class="carouselPrograms carousel slide" data-ride="carousel" data-interval="false">
        <div class="carousel-inner row w-100 mx-auto" role="listbox">
          <ul class="list-inline" :key="index" v-for="(stream, index) in streams">
            <div class="carousel-item col-md-4  active">
            <li>
               <div class="panel panel-default">
                  <div class="panel-thumbnail">
                    <a :href="stream.stream.channel.url">
                      <img class="img-fluid mx-auto d-block" :src="stream.stream.preview.medium" alt="slide 1">
                    </a>
                    <a class="list-inline-item">{{stream.stream.game}}</a>
                  </div>
                </div>
            </li>
            </div>
          </ul>
        </div>
        <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
  </div>
</template>

<script>
import config from '@/config.js'

export default {
  components: {

  },
  data() {
    return {
      streams: []
    }
  },
  created() {
    this.streamsReady()
  },
  methods: {
    streamsReady: function() {
      axios({
        method: 'GET',
        url: `${config.port}/twitch/home`
      })
        .then((data) => {
          let result = data.data.featured
          console.log(result);
          this.streams = result
        })
        .catch((err) => {
          console.log(err)
          console.log(`error to get stream videos`)
        })
    }
  }
}
</script>

<style>
.flex-container {
  display: flex;
  /* background-color: DodgerBlue; */
}

.flex-container > div {
  /* background-color: #f1f1f1; */
  margin: 10px;
  padding: 20px;
  font-size: 30px;
}

@media (min-width: 768px) {

    /* show 3 items */
    .carouselPrograms .carousel-inner .active,
    .carouselPrograms .carousel-inner .active + .carousel-item,
    .carouselPrograms .carousel-inner .active + .carousel-item + .carousel-item {
        display: block;
    }

    .carouselPrograms .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),
    .carouselPrograms .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item,
    .carouselPrograms .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item {
        transition: none;
    }

    .carouselPrograms .carousel-inner .carousel-item-next,
    .carouselPrograms .carousel-inner .carousel-item-prev {
        position: relative;
        transform: translate3d(0, 0, 0);
    }

    .carouselPrograms .carousel-inner .active.carousel-item + .carousel-item + .carousel-item + .carousel-item {
        position: absolute;
        top: 0;
        right: -33.333%;
        z-index: -1;
        display: block;
        visibility: visible;
    }

    /* left or forward direction */
    .carouselPrograms .active.carousel-item-left + .carousel-item-next.carousel-item-left,
    .carouselPrograms .carousel-item-next.carousel-item-left + .carousel-item,
    .carouselPrograms .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item,
    .carouselPrograms .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item {
        position: relative;
        transform: translate3d(-100%, 0, 0);
        visibility: visible;
    }

    /* farthest right hidden item must be abso position for animations */
    .carouselPrograms .carousel-inner .carousel-item-prev.carousel-item-right {
        position: absolute;
        top: 0;
        left: 0%;
        z-index: -1;
        display: block;
        visibility: visible;
    }

    /* right or prev direction */
    .carouselPrograms .active.carousel-item-right + .carousel-item-prev.carousel-item-right,
    .carouselPrograms .carousel-item-prev.carousel-item-right + .carousel-item,
    .carouselPrograms .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item,
    .carouselPrograms .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item {
        position: relative;
        transform: translate3d(100%, 0, 0);
        visibility: visible;
        display: block;
        visibility: visible;
    }
}
</style>
