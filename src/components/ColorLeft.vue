<template>
  <div class="colorleft">
    <leftside :style="bgc" v-if="colorFilled === 0">
        <div class="insidetext">
          <div class="talk-bubble tri-right round btm-left">
            <div class="talktext">
              <p>Try to change your color here...</p>
              </div>
            </div>
          </div>
      <input type="text" @input="bgc.backgroundColor = $event.target.value" />
    </leftside>
  </div>
</template>

<script>

  export default {
    props: ['leftColor'],
    components: {
    },
    data() {
      return {
        bgc: {
          backgroundColor: ''
        },
        colorFilled: 0
      }
    },
    methods: {
      changeBackground(event) {
        this.bgc.backgroundColor = event.target.value
        this.$emit("sendColor", this.backgroundColor)
        this.colorFilled = 1
      }
    },
  }
</script>

<style>
leftside {
  position: fixed;
  top: 0;
  right: 65%;
  width: 35%;
  height: 100%;
  overflow-y: auto;
  overflow-x: auto;
  background-color: rgb(69, 100, 157);
  /* transform: rotate(-45deg); */
}

.insidetext {
  margin-top: 80px;
}

input {
		background-color: transparent;
		border-color: transparent;
		border-bottom-color: black;
    background-repeat: no-repeat;
}
</style>
