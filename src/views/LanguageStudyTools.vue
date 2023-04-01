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
      <div v-if="portugueseDefinition?.partOfSpeech">
        Part of speech: {{ portugueseDefinition.partOfSpeech }}
      </div>
      <div v-if="portugueseDefinition.etymology">
        Etymology:
        <div
          v-for="word in portugueseDefinition.etymology.split(` `)"
          :key="index + word"
          @click="searchSpecificPortugueseWord(word)"
          :aria-label="`click to see definition`"
          class="single-words"
        >
          {{ `${word} ` }}
        </div>
      </div>
      <div
        v-for="(meaning, index) in portugueseDefinition.meanings"
        :key="meaning + index"
      >
        {{ index + 1 }}.
        <div
          v-for="word in meaning.split(` `)"
          :key="index + word"
          @click="
            searchSpecificPortugueseWord(word, index);
            showSpecificWord = !showSpecificWord;
          "
          :aria-label="`click to see definition`"
          class="single-words"
        >
          {{ `${word} ` }}
          <div
            v-if="
              specificWordDefinition &&
              specificWord === word &&
              specificWordIndex === index
            "
            class="extra-definition"
          >
            <span
              @click.stop="
                specificWordDefinition = null;
                specificWord = null;
              "
              class="close-def"
              >[close]</span
            >
            <div
              v-for="(meaning, index) in specificWordDefinition.meanings"
              :key="meaning + index"
            >
              {{ index + 1 }}. {{ meaning }}
            </div>
          </div>
        </div>
      </div>
      <div class="heading-2">English definition:</div>
      <div>Word: {{ englishDefinition.word }}</div>
      <div v-if="englishDefinition.phonetic">
        Phonetic: {{ englishDefinition.phonetic }}
      </div>
      <div v-if="englishDefinition.phonetics">
        Phonetics: {{ englishDefinition.phonetics }}
      </div>
      <div>Meanings:</div>
      <div
        v-for="(meaning, index) in englishDefinition.meanings"
        :key="meaning + index"
      >
        <div>{{ index + 1 }}.</div>
        <div v-if="meaning.partOfSpeech">{{ meaning.partOfSpeech }}</div>
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
      specificWord: "",
      specificWordIndex: null,
      showSpecificWord: false,
      specificWordDefinition: {},
      languageStudyList: languageStudyList,
      randomWord: "",
      defineWords: false,
      portugueseDefinition: "",
      englishDefinition: "",
    };
  },
  methods: {
    wordSearchChecks(word) {
      let workingWord = word;
      word.slice(-3) === "ais"
        ? (workingWord = word.replace(/..$/, "l"))
        : word.slice(-3) === "oes" || word.slice(-3) === "aes"
        ? (workingWord = word.replace(/..$/, "ao"))
        : word.slice(-2) === "as" || word.slice(-2) === "os"
        ? (workingWord = word.replace(/..$/, "o"))
        : word.slice(-1) === "s"
        ? (workingWord = word.replace(/.$/, ""))
        : (workingWord = word);
      // : word.slice(-2) === "es"
      // ? (workingWord = word.replace(/..$/, ""))
      // : word.slice(-1) === "a"
      // ? (workingWord = word.replace(/.$/, "o"))
      return workingWord;
    },
    //
    async addToPortugueseNoSearchList(word) {
      if (window.localStorage.getItem("portugueseNoSearch")) {
        let noSearchList = [
          ...JSON.parse(window.localStorage.getItem("portugueseNoSearch")),
        ];
        noSearchList.includes(word) ? null : noSearchList.push(word);
        window.setItem("portugueseNoSearch", JSON.stringify(noSearchList));
      }
    },
    setWord() {
      this.defineWords = false;
      this.randomWord = this.languageStudyList[Math.ceil(Math.random() * 2844)];
      this.englishDefinition = "";
      this.portugueseDefinition = "";
    },
    normalizeForeignWords(word) {
      return word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "")
        .replace(/\s{2,}/g, " ");
    },
    async searchSpecificPortugueseWord(word, index) {
      this.specificWord = word;
      this.specificWordIndex = index;
      await fetch(
        `https://dicio-api-ten.vercel.app/v2/${this.wordSearchChecks(
          this.normalizeForeignWords(word)
        )}`
      )
        .then((response) => {
          if (!response.ok) {
            alert(word, " was not found, try another");
            this.addToPortugueseNoSearchList(word);
            this.defineWords = false;
            return;
          }
          return response.json();
        })
        .then((data) => {
          !data[0] ? alert(`${word} was not found, try another`) : null;
          this.specificWordDefinition = data[0];
        });
    },
    async searchDefinitions() {
      await fetch(
        `https://dicio-api-ten.vercel.app/v2/${this.normalizeForeignWords(
          this.randomWord.portuguese
        )}`
      )
        .then((response) => {
          if (!response.ok) {
            alert(`${this.randomWord.portuguese} was not found, try another`);
            return;
          }
          return response.json();
        })
        .then((data) => {
          !data[0]
            ? alert(`${this.randomWord.portuguese} was not found, try another`)
            : null;
          this.portugueseDefinition = data[0];
        });
      await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${this.randomWord.english}`
      )
        .then((response) => response.json())
        .then((data) => {
          !data[0]
            ? alert(`${this.randomWord.english} was not found, try another`)
            : null;
          this.englishDefinition = data[0];
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
  padding: 2rem;
  padding-top: 75px;
  color: #fff;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  width: 100%;
  min-height: 100vh;
  height: 100%;
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
.single-words {
  display: inline;
}
.single-words:hover {
  background: #323f80;
}
.extra-definition {
  background: #34469f;
  border: 1px solid #fff;
  padding: 0.5rem;
  z-index: 2;
}
</style>
