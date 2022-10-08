import { createStore } from "vuex";
import letsLearnPhraseOptions from "../helpers/LetsLearnPhrases";
import enDict from "../helpers/i18n/enDict";
import esDict from "../helpers/i18n/esDict";
import frDict from "../helpers/i18n/frDict";
import ptDict from "../helpers/i18n/ptDict";
import EnglishFromSpanishLessons from "../helpers/EnglishFromSpanishLessons";
import SpanishLessons from "../helpers/SpanishLessons";
import PortugueseLessons from "../helpers/PortugueseLessons";
import FrenchLessons from "../helpers/FrenchLessons";

export default createStore({
  state: {
    letsLearnPhrase: `Hi, I'm `,
    personalSiteCurrentLanguage: enDict,
    personalSiteCurrentLanguageName: "english",
    letsLearnPhraseIndex: 1,
    currentLanguageLessons: [] as object[][],
    currentLanguageName: "",
    cardQuestionObject: {} as object,
    lessonModalOpen: false,
  },
  getters: {
    letsLearnPhrase: (state) => state.letsLearnPhrase,
    personalSiteCurrentLanguage: (state) => state.personalSiteCurrentLanguage,
    personalSiteCurrentLanguageName: (state) =>
      state.personalSiteCurrentLanguageName,
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
    setPersonalSiteCurrentLanguage(state, payload) {
      if (payload === "english") {
        // Set Display Language in localStorage
        state.personalSiteCurrentLanguage = enDict;
        window.localStorage.setItem(
          "personalSiteCurrentLanguage",
          JSON.stringify(enDict)
        );
        state.personalSiteCurrentLanguageName = payload;
        window.localStorage.setItem(
          "personalSiteCurrentLanguageName",
          JSON.stringify(payload)
        );
      } else if (payload === "spanish") {
        // Set Display Language in localStorage
        state.personalSiteCurrentLanguage = esDict;
        window.localStorage.setItem(
          "personalSiteCurrentLanguage",
          JSON.stringify(esDict)
        );
        state.personalSiteCurrentLanguageName = payload;
        window.localStorage.setItem(
          "personalSiteCurrentLanguageName",
          JSON.stringify(payload)
        );
      } else if (payload === "portuguese") {
        // Set Display Language in localStorage
        state.personalSiteCurrentLanguage = ptDict;
        window.localStorage.setItem(
          "personalSiteCurrentLanguage",
          JSON.stringify(ptDict)
        );
        state.personalSiteCurrentLanguageName = payload;
        window.localStorage.setItem(
          "personalSiteCurrentLanguageName",
          JSON.stringify(payload)
        );
      } else if (payload === "french") {
        // Set Display Language in localStorage
        state.personalSiteCurrentLanguage = frDict;
        window.localStorage.setItem(
          "personalSiteCurrentLanguage",
          JSON.stringify(frDict)
        );
        state.personalSiteCurrentLanguageName = payload;
        window.localStorage.setItem(
          "personalSiteCurrentLanguageName",
          JSON.stringify(payload)
        );
      }
    },
    setCardQuestionObject(state, { group, index }) {
      state.cardQuestionObject = state.currentLanguageLessons[group][index];
    },
    toggleLessonModal(state, payload) {
      state.lessonModalOpen = payload;
    },
    setCurrentLanguageLessons(state, payload) {
      if (payload === "english") {
        // Set Lessons in localStorage
        state.currentLanguageLessons = EnglishFromSpanishLessons;
        window.localStorage.setItem(
          "currentLanguageLessons",
          JSON.stringify(EnglishFromSpanishLessons)
        );
        state.currentLanguageName = payload;
        window.localStorage.setItem(
          "currentLanguageName",
          JSON.stringify(payload)
        );
      } else if (payload === "spanish") {
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
      // Get language settings from local storage
      const personalSiteCurrentLanguage = window.localStorage.getItem(
        "personalSiteCurrentLanguage"
      );
      const personalSiteCurrentLanguageName = window.localStorage.getItem(
        "personalSiteCurrentLanguageName"
      );
      const localLanguage = window.localStorage.getItem(
        "currentLanguageLessons"
      );
      const localLanguageName = window.localStorage.getItem(
        "currentLanguageName"
      );
      if (typeof personalSiteCurrentLanguage === "string") {
        state.personalSiteCurrentLanguage = JSON.parse(
          personalSiteCurrentLanguage
        );
      }
      if (typeof personalSiteCurrentLanguageName === "string") {
        state.personalSiteCurrentLanguageName = JSON.parse(
          personalSiteCurrentLanguageName
        );
      }
      if (typeof localLanguage === "string") {
        state.currentLanguageLessons = JSON.parse(localLanguage);
      }
      if (typeof localLanguageName === "string") {
        state.currentLanguageName = JSON.parse(localLanguageName);
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
