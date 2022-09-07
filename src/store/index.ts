import { createStore } from "vuex";
import letsLearnPhraseOptions from "../helpers/dictionaries";
import SpanishLessons from "../helpers/SpanishLessons";
import PortugueseLessons from "../helpers/PortugueseLessons";
import FrenchLessons from "../helpers/FrenchLessons";

export default createStore({
  state: {
    letsLearnPhrase: `Hello`,
    letsLearnPhraseIndex: 1,
    currentLanguageLessons: SpanishLessons,
    cardQuestionObject: {} as object,
    lessonModalOpen: false,
  },
  getters: {
    letsLearnPhrase: (state) => state.letsLearnPhrase,
    letsLearnPhraseIndex: (state) => state.letsLearnPhraseIndex,
    cardQuestionObject: (state) => state.cardQuestionObject,
    currentLanguageLessons: (state) => state.currentLanguageLessons,
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
    toggleLessonModal(state) {
      state.lessonModalOpen = !state.lessonModalOpen;
    },
    setCurrentLanguageLessons(state, payload) {
      if (payload === "spanish") {
        state.currentLanguageLessons = SpanishLessons;
      } else if (payload === "portuguese") {
        state.currentLanguageLessons = PortugueseLessons;
      } else if (payload === "french") {
        state.currentLanguageLessons = FrenchLessons;
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
