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
const wordList = [
  {
    word: "hello",
    def: 'def: "used as a greeting when you see or meet someone',
    audios: [
      "https://d27ucmmhxk51xv.cloudfront.net/media/english/breProns/hello0205.mp3?version=1.2.5",
      "https://d27ucmmhxk51xv.cloudfront.net/media/english/ameProns/hello.mp3?version=1.2.5",
    ],
    phrases: [
      {
        text: "Hello, John! How are you?",
        audio:
          "https://d27ucmmhxk51xv.cloudfront.net/media/english/exaProns/p008-001354151.mp3?version=1.2.5",
      },
      {
        text: "Well, hello there! I haven’t seen you for ages",
        audio:
          "https://d27ucmmhxk51xv.cloudfront.net/media/english/exaProns/p008-001725232.mp3?version=1.2.5",
      },
    ],
  },
  {
    word: "great",
    def: "very large in amount or degree",
    audios: [
      "https://d27ucmmhxk51xv.cloudfront.net/media/english/breProns/brelasdegreat.mp3?version=1.2.5",
      "https://d27ucmmhxk51xv.cloudfront.net/media/english/ameProns/grate1.mp3?version=1.2.5",
    ],
    phrases: [
      {
        text: "The movie was a great success.",
        audio:
          "https://d27ucmmhxk51xv.cloudfront.net/media/english/exaProns/p008-001780990.mp3?version=1.2.5",
      },
      {
        text: "The news came as possibly the greatest shock of my life",
        audio:
          "https://d27ucmmhxk51xv.cloudfront.net/media/english/exaProns/p008-001780991.mp3?version=1.2.5",
      },
    ],
  },
];

export default {
  name: "Home.vue",
  components: { AudioPlay },
  data() {
    return {
      name: null,
      wordList,
      foundWord: null,
    };
  },
  methods: {
    onSubmit() {
      this.foundWord  = 'NOTFOUND';
      for (let word in wordList) {
        if (wordList[word].word === this.name) {
          this.foundWord = wordList[word];
        }
      }
    },
  },
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
