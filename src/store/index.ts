import { createStore } from "vuex";
import letsLearnPhraseOptions from "../helpers/dictionaries";
import SpanishLessons from "../helpers/SpanishLessons";
import PortugueseLessons from "../helpers/PortugueseLessons";
import FrenchLessons from "../helpers/FrenchLessons";

export default createStore({
  state: {
    letsLearnPhrase: `Hello`,
    letsLearnPhraseIndex: 1,
    currentLanguageLessons: [] as object[][],
    currentLanguageName: "",
    cardQuestionObject: {} as object,
    lessonModalOpen: false,
  },
  getters: {
    letsLearnPhrase: (state) => state.letsLearnPhrase,
    letsLearnPhraseIndex: (state) => state.letsLearnPhraseIndex,
    cardQuestionObject: (state) => state.cardQuestionObject,
    currentLanguageLessons: (state) => state.currentLanguageLessons,
    currentLanguageName: (state) => state.currentLanguageName,
    lessonModalOpen: (state) => state.lessonModalOpen,
  },
  mutations: {
    setLetsLearnPhrase(state, payload) {
      state.letsLearnPhrase = payload;
    },
    setLetsLearnPhraseIndex(state, payload) {
      state.letsLearnPhraseIndex = payload;
    },
    setCardQuestionObject(state, { group, index }) {
      state.cardQuestionObject = state.currentLanguageLessons[group][index];
    },
    toggleLessonModal(state, payload) {
      state.lessonModalOpen = payload;
    },
    setCurrentLanguageLessons(state, payload) {
      if (payload === "spanish") {
        // Set Lessons in localStorage
        state.currentLanguageLessons = SpanishLessons;
        window.localStorage.setItem(
          "currentLanguageLessons",
          JSON.stringify(SpanishLessons)
        );
        state.currentLanguageName = payload;
        window.localStorage.setItem(
          "currentLanguageName",
          JSON.stringify(payload)
        );
      } else if (payload === "portuguese") {
        state.currentLanguageLessons = PortugueseLessons;
        window.localStorage.setItem(
          "currentLanguageLessons",
          JSON.stringify(PortugueseLessons)
        );
        state.currentLanguageName = payload;
        window.localStorage.setItem(
          "currentLanguageName",
          JSON.stringify(payload)
        );
      } else if (payload === "french") {
        state.currentLanguageLessons = FrenchLessons;
        window.localStorage.setItem(
          "currentLanguageLessons",
          JSON.stringify(FrenchLessons)
        );
        state.currentLanguageName = payload;
        window.localStorage.setItem(
          "currentLanguageName",
          JSON.stringify(payload)
        );
      }
    },
    initState(state) {
      const localLanguage = window.localStorage.getItem(
        "currentLanguageLessons"
      );
      if (typeof localLanguage === "string") {
        console.log(JSON.parse(localLanguage));
        state.currentLanguageLessons = JSON.parse(localLanguage);
      }
      const localLanguageName = window.localStorage.getItem(
        "currentLanguageName"
      );
      if (typeof localLanguageName === "string") {
        state.currentLanguageLessons = JSON.parse(localLanguageName);
      }
    },
  },
  actions: {
    SET_LETS_LEARN_PHRASE({ commit }, payload) {
      commit("setLetsLearnPhrase", letsLearnPhraseOptions[payload]);
    },
    SET_LETS_LEARN_PHRASE_INDEX({ commit }, payload) {
      commit("setLetsLearnPhraseIndex", payload);
    },
  },
  modules: {},
});
