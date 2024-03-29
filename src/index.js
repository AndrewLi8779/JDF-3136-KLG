import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/Home";
import AboutPage from "./components/AboutPage/About";
import Navbar from "./components/Navbar/Navbar";
import RedLightGreenLightPage from "./components/RedLightGreenLightPage/RedLightGreenLightPage";
import StudyOptionsPage from "./components/StudyOptionsPage/StudyOptionsPage";
import TugOfWarPage from "./components/TugOfWarPage/TugOfWarPage";
import SugarHoneycombsPage from "./components/SugarHoneycombsPage/SugarHoneycombsPage";
import UnitsListPage from "./components/UnitsListPage/UnitsListPage";
import FlashcardStudyPage from "./components/FlashcardPage/FlashcardStudyPage";
import ProgressPage from './components/ProgressPage/Progress'

import {
  HOME_PATH,
  ABOUT_PATH,
  RED_LIGHT_GREEN_LIGHT_PATH,
  STUDY_OPTIONS_PATH,
  TUG_OF_WAR_PATH,
  SUGAR_HONEYCOMBS,
  UNITS_LIST_PATH,
  FLASHCARD_STUDY_PATH,
  PROGRESS_PATH
} from "./constants";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path={HOME_PATH} element={<HomePage />} />
      <Route path={ABOUT_PATH} element={<AboutPage />} />
      <Route path={UNITS_LIST_PATH} element={<UnitsListPage />} />
      <Route path={STUDY_OPTIONS_PATH} element={<StudyOptionsPage />} />
      <Route
        path={RED_LIGHT_GREEN_LIGHT_PATH}
        element={<RedLightGreenLightPage />}
      />
      <Route path={TUG_OF_WAR_PATH} element={<TugOfWarPage />} />
      <Route path={SUGAR_HONEYCOMBS} element={<SugarHoneycombsPage />} />
      <Route path={FLASHCARD_STUDY_PATH} element={<FlashcardStudyPage />} />
      <Route path={PROGRESS_PATH} element={<ProgressPage />} />
    </Routes>
  </Router>
);
