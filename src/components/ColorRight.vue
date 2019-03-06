<template>
  <div class="colorright">
    <rightside :style="bgc">
      <div class="insidetext">
        <div class="talk-bubble tri-right round btm-left">
          <div class="talktext">
            <p>Try to change your color here...</p>
            </div>
          </div>
        </div>
      <input type="text" @input="changeBackground" />
    </rightside>
  </div>
</template>

<script>

  export default {
    components: {
    },
    data() {
      return {
        bgc: {
          backgroundColor: ''
        }
      }
    },
    methods: {
      changeBackground(event) {
        this.bgc.backgroundColor = event.target.value
        this.$emit("sendColor", this.backgroundColor)
      }
    },
  }
</script>

<style>
rightside {
  position: fixed;
  top: 0;
  left: 35%;
  width: 65%;
  height: 100%;
  /* background-repeat: no-repeat; */
  overflow-y: auto;
  overflow-x: auto;
  background-color: pink;
  /* transform: rotate(-45deg); */
}

.insidetext {
  margin-top: 80px;
}

colorright {
  background-color: pink;
}

input {
		background-color: transparent;
		border-color: transparent;
		border-bottom-color: black;
    background-repeat: no-repeat;
}
</style>
