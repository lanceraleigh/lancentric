import { createStore } from "vuex";
import letsLearnPhraseOptions from "../helpers/LetsLearnPhrases";
import enDict from "../helpers/i18n/enDict";
import esDict from "../helpers/i18n/esDict";
import frDict from "../helpers/i18n/frDict";
import ptDict from "../helpers/i18n/ptDict";
import SpanishLessons from "../helpers/SpanishLessons";
import PortugueseLessons from "../helpers/PortugueseLessons";
import FrenchLessons from "../helpers/FrenchLessons";

export default createStore({
  state: {
    letsLearnPhrase: `Hello`,
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
        // Set Lessons in localStorage
        state.personalSiteCurrentLanguage = enDict;
        window.localStorage.setItem(
          "personalSiteLanguage",
          JSON.stringify(enDict)
        );
        state.currentLanguageName = payload;
        window.localStorage.setItem(
          "personalSiteLanguageName",
          JSON.stringify(payload)
        );
      } else if (payload === "spanish") {
        // Set Lessons in localStorage
        state.personalSiteCurrentLanguage = esDict;
        window.localStorage.setItem(
          "personalSiteLanguage",
          JSON.stringify(esDict)
        );
        state.currentLanguageName = payload;
        window.localStorage.setItem(
          "personalSiteLanguageName",
          JSON.stringify(payload)
        );
      } else if (payload === "portuguese") {
        // Set Lessons in localStorage
        state.personalSiteCurrentLanguage = ptDict;
        window.localStorage.setItem(
          "personalSiteLanguage",
          JSON.stringify(ptDict)
        );
        state.currentLanguageName = payload;
        window.localStorage.setItem(
          "personalSiteLanguageName",
          JSON.stringify(payload)
        );
      } else if (payload === "french") {
        // Set Lessons in localStorage
        state.personalSiteCurrentLanguage = frDict;
        window.localStorage.setItem(
          "personalSiteLanguage",
          JSON.stringify(frDict)
        );
        state.currentLanguageName = payload;
        window.localStorage.setItem(
          "personalSiteLanguageName",
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
      const personalSiteLanguage = window.localStorage.getItem(
        "personalSiteLanguage"
      );
      const localLanguage = window.localStorage.getItem(
        "currentLanguageLessons"
      );
      const localLanguageName = window.localStorage.getItem(
        "currentLanguageName"
      );
      if (typeof personalSiteLanguage === "string") {
        state.personalSiteCurrentLanguage = JSON.parse(personalSiteLanguage);
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
