<template>
  <div class="language-study">
    <button @click="setWord">Show a random word</button>
    <div class="details">
      <div class="translation">Portuguese: {{ randomWord.portuguese }}</div>
      <div class="translation">English: {{ randomWord.english }}</div>
      <div class="translation">Spanish: {{ randomWord.spanish }}</div>
    </div>
    <button v-if="randomWord" @click="searchDefinitions">
      Search definitions
    </button>
    <div v-if="defineWords" class="definitions">
      <div class="heading-2">Portuguese definition:</div>
      <div>Word: {{ randomWord.portuguese }}</div>
      <div>Part of speech: {{ portugueseDefinition.partOfSpeech }}</div>
      <div>Etymology: {{ portugueseDefinition.etymology }}</div>
      <div
        v-for="(meaning, index) in portugueseDefinition.meanings"
        :key="meaning + index"
      >
        {{ index + 1 }}. {{ meaning }}
      </div>
      <div class="heading-2">English definition:</div>
      <div>Word: {{ englishDefinition.word }}</div>
      <div>Phonetic: {{ englishDefinition.phonetic }}</div>
      <div>Phonetics: {{ englishDefinition.phonetics }}</div>
      <div>Meanings:</div>
      <div
        v-for="(meaning, index) in englishDefinition.meanings"
        :key="meaning + index"
      >
        <div>{{ index + 1 }}.</div>
        <div>{{ meaning.partOfSpeech }}</div>
        <div
          v-for="(definition, index) in meaning.definitions"
          :key="definition + index"
        >
          {{ index + 1 }}. {{ definition.definition }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import languageStudyList from "../helpers/language-study.json";
export default {
  name: "LanguageStudyTools",
  data() {
    return {
      languageStudyList: languageStudyList,
      randomWord: "",
      defineWords: false,
      portugueseDefinition: "",
      englishDefinition: "",
    };
  },
  methods: {
    setWord() {
      this.defineWords = false;
      this.randomWord = this.languageStudyList[Math.ceil(Math.random() * 2844)];
      this.englishDefinition = "";
      this.portugueseDefinition = "";
    },
    async searchDefinitions() {
      await fetch(
        `https://dicio-api-ten.vercel.app/v2/${this.randomWord.portuguese}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.portugueseDefinition = data[0];
        });
      await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${this.randomWord.english}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.englishDefinition = data[0];
          console.log(data[0].phonetics[0].audio);
        });
      this.defineWords = true;
    },
  },
  mounted() {
    if (!window.localStorage.getItem("languageStudyList")) {
      window.localStorage.setItem(
        "languageStudyList",
        JSON.stringify(this.languageStudyList)
      );
    } else {
      this.languageStudyList = JSON.parse(
        window.localStorage.getItem("languageStudyList")
      );
    }
  },
};
</script>
<style lang="scss" scoped>
.language-study {
  color: #fff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.translation {
  padding: 0.5rem;
  border: 1px solid #fff;
}
button {
  font-size: 1.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
}
button:hover {
  cursor: pointer;
  transform: scale(1.2);
}
.details {
  display: flex;
  padding: 0.5rem;
}
.heading-2 {
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
