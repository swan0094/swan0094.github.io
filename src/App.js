import { Route, Routes } from "react-router";
import NavBar from "./components/navbar";
import SearchBar from "./components/search_bar";
import Footer from "./components/footer";

import Home from "./pages/home";
import ContactUs from "./pages/contact_us";
import FanEngagement from "./pages/fan_engagement";
import OurHistory from "./pages/our_history";
import PlayerProfile from "./pages/player_profile";
import PlayerUpdates from "./pages/player_updates";
import TermsPrivacy from "./pages/terms_privacy";

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
        <SearchBar />
      </header>
      <main id="content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="contact_us" element={<ContactUs />} />
          <Route path="fan_engagement" element={<FanEngagement />} />
          <Route path="our_history" element={<OurHistory />} />
          <Route path="player_profile" element={<PlayerProfile />} />
          <Route path="player_updates" element={<PlayerUpdates />} />
          <Route
            path="terms_and_conditions_and_privacy"
            element={<TermsPrivacy />}
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
