<template>
  <div class="row">
    <div class="col-md-6 col-sm-12 col-xs-12" color="red">
      <q-form @submit="onSubmit" class="q-gutter-md search-form">
        <div>
          <q-input
            rounded
            outlined
            v-model="name"
            label="Search Word*"
            hint="any word"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />
        </div>
        <div class="icon-search">
          <q-btn type="submit" unelevated round color="primary " icon="search" />
        </div>
      </q-form>
    </div>
    <div class="col-md-6 col-sm-12 col-xs-12">
      <div class="found-word-block">
        <div v-if="foundWord && foundWord !== 'NOTFOUND'">
          <div class="row">
            <h6 class="found-word">Your word is {{ foundWord.word }}</h6>
            <AudioPlay v-bind:audio="foundWord.audios[0]" color="red" />
            <AudioPlay v-bind:audio="foundWord.audios[1]" color="blue" />
          </div>
          <p class="text-subtitle1 text-light-blue-13">{{ foundWord.def }}</p>
          <div>
            <h6 class="phrase-text">Phrases</h6>
            <div
              v-for="(word, index) in foundWord.phrases"
              :key="index"
              class="row"
            >
                <AudioPlay v-bind:audio="word.audio" color="brown" class="col-1 col-xs-2"/>
                <div class="col 11">
                    <p class="text-subtitle1 text-light-blue-13 phrase">{{ word.text }}}</p>
                </div>
            </div>
          </div>
        </div>
        <div v-else-if="foundWord === 'NOTFOUND'">
          <h6>
            Search for a word (hello, great)
          </h6>
        </div>
        <div v-else>
          <h6>Hello there....  This is en-en library you can search words "hello or great" </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AudioPlay from "../components/AudioPlay";
import {mapGetters} from 'vuex';
export default {
  name: "Home.vue",
  components: { AudioPlay },
  data() {
    return {
      name: null,
      foundWord: null,
    };
  },
  methods: {
    onSubmit() {
      this.foundWord  = 'NOTFOUND';
      let searchWord = this.name.trim().toLowerCase();
      for (let word in this.wordList) {
        if (this.wordList[word].word === searchWord) {
          this.foundWord = this.wordList[word];
        }
      }
    },
  },
  computed: {
    ...mapGetters(["wordList"]),
  }
};
</script>

<style scoped>
.search-form {
  margin: 10px;
}
.icon-search {
  position: absolute;
  top: -10px;
  right: 10px;
}

.found-word {
  margin-top: 20px;
  margin-bottom: 0px;
}

.found-word-block {
  margin: 10px;
  margin-left: 30px;
}

.phrase-text {
  margin-top: 0px;
  margin-bottom: 10px;
}
.brown-play-icon {
  margin-top: -10px;
}

.phrase {
  padding-top: 20px;
}
</style>
