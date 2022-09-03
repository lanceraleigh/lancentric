import { createStore } from "vuex";
import letsLearnPhraseOptions from "../helpers/dictionaries";

export default createStore({
  state: {
    letsLearnPhrase: `Let's learn!`,
    letsLearnPhraseIndex: 1,
    cardQuestionObject: {
      question: "Fill in the blank.",
      questionContext: "Mi nombre ____ Lance",
      questionAnswer: "es",
    },
  },
  getters: {
    letsLearnPhrase: (state) => state.letsLearnPhrase,
    letsLearnPhraseIndex: (state) => state.letsLearnPhraseIndex,
    cardQuestionObject: (state) => state.cardQuestionObject,
  },
  mutations: {
    setLetsLearnPhrase(state, payload) {
      state.letsLearnPhrase = payload;
    },
    setLetsLearnPhraseIndex(state, payload) {
      state.letsLearnPhraseIndex = payload;
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
