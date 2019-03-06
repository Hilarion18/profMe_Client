<template>
  <div id="contentGuessWord">
    <div class="container">
    <div v-if="isLogin === false">
      <h1 class="display-7 text-left my-4">Choose your level</h1>
        <div class="row">
          <div class="col-md-3">
            <div class="dropdown">
              <button class="btn btn-primary btn-block dropdown-toggle" type="button" data-toggle="dropdown">
                Level
              </button>
              <div class="dropdown-menu">
                <a class="dropdown-item" @click="level = 1">Lv. 1: 3-5 alphabet</a>
                <a class="dropdown-item" @click="level = 2">Lv. 2: 6-8 alphabet</a>
                <a class="dropdown-item" @click="level = 3">Lv. 3: 9-13 alphabet</a>
                <a class="dropdown-item" @click="level = 4">Lv. god: over 12 alphabet</a>
              </div>
            </div>
          </div>
        </div>
        <h5 class="text-left" style="margin-top: 10px" href="">Level: {{ level }}</h5>
        <p href="" v-if="this.level <= 0">Please choose level</p>
        <p>{{ wrongWord }}</p>
        <button @click="selectLevel()" type="submit">Show me the word</button>
        <h4 style="margin-top: 20px" >{{ word }}</h4>
        <p>
          <input v-model="wordToCheck" class="text-left" style="margin-top: 30px" type="text">
        </p>
        <button type="submit" @click="checkWord()" >Check!</button> ||
        <button type="submit" @click="addingScore()" onclick="location.reload();" >Next!</button>
        <h4 style="margin-top: 20px">Score: {{ score }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import config from '@/config.js'
import { log } from 'async';

export default {
  components: {
  },
  data() {
    return {
      word: '',
      wordToCheck: '',
      isLogin: false,
      level: 0,
      score: 0,
      todoList: [],
      wrongWord: '',
      checked: false
    }
  },
  methods: {
    selectLevel: function() {
      axios({
        method: 'POST',
        url: `${config.port}/guessWord/getWord`,
        data: {
          level: this.level
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((getWord) => {
        console.log(`ini getWord `, getWord);
        
          this.word = getWord.data.output
          console.log(`this is word`,word);
          console.log(`word has been found`)
          this.$emit(`sendWord`, this.word)
      })
      .catch(err => {
        console.log(`getWord err `+err); 
      })
    },
    
    checkWord: function() {
      axios({
        method: 'POST',
        url: `${config.port}/guessWord/catchWord`,
        data: {
          word: this.wordToCheck
        },
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .then((getWord) => {
        console.log(`ini catchWord `, getWord);
        this.score += 10
        this.result = getWord.data.output
        console.log(`this is word`,word);
        console.log(`word has been found`)
        this.$emit(`sendWord`, this.word)
        this.word = this.wordToCheck
        this.checked = true
      })
      .catch(err => {
        // this.wrongWord = `Try Again bruv!`
        console.log(`catchWord err `+err); 
      })
    },

    addingScore: function() {
      axios({
        method: 'PUT',
        url: `${config.port}/user`,
        data: {
          score: this.score
        },
        headers: {
          token: localStorage.getItem('token'),
          id: localStorage.getItem('userId')
        }
      })
      .then((response) => {
        console.log(`ini adding score `, response);
      })
      .catch(err => {
        console.log(`catchWord err `+err); 
      })
    }
  },
  created() {
    // this.selectLevel()
    this.level,
    this.word,
    this.checked
  },
  computed: {
    
  }
}
</script>

<style scoped>

</style>
