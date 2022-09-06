import { createStore } from "vuex";
import letsLearnPhraseOptions from "../helpers/dictionaries";
import SpanishLessons from "../helpers/SpanishLessons";

export default createStore({
  state: {
    letsLearnPhrase: `Hello`,
    letsLearnPhraseIndex: 1,
    spanishLessons: SpanishLessons,
    cardQuestionObject: {} as object,
    lessonModalOpen: false,
  },
  getters: {
    letsLearnPhrase: (state) => state.letsLearnPhrase,
    letsLearnPhraseIndex: (state) => state.letsLearnPhraseIndex,
    cardQuestionObject: (state) => state.cardQuestionObject,
    spanishLessons: (state) => state.spanishLessons,
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
      state.cardQuestionObject = SpanishLessons[group][index];
    },
    toggleLessonModal(state) {
      state.lessonModalOpen = !state.lessonModalOpen;
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
