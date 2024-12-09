import crowdAndPlayersCelebrating from "../images/history_cards/crowd_and_players_celebrating.jpg";
import pastPlayers from "../images/history_cards/past_players.jpg";
import crowsMuseum from "../images/history_cards/crows_museum.jpg";
import crowsPremierships from "../images/history_cards/crows_premierships.jpg";
import crowsJumpers from "../images/history_cards/crows_jumpers.jpg";
import hallOfFame from "../images/history_cards/hall_of_fame.jpg";

const OurHistory = () => {
  return (
    <div className="gallery" aria-labelledby="history-page">
      <div className="image-card">
        <img
          src={crowdAndPlayersCelebrating}
          alt="Crowd celebrating with players"
        />
        <div className="overlay">
          <h3>Seasons Through the Years</h3>
          <p className="highlightable">
            Dive into detailed AFL and AFLW stats and stories for each season
            since 1991.
          </p>
          <button>Explore More</button>
        </div>
      </div>
      <div className="image-card">
        <img src={pastPlayers} alt="Past AFC players singing the club song" />
        <div className="overlay">
          <h3>Honoring Past Players</h3>
          <p className="highlightable">
            Discover the legacy and contributions of every past Crows AFL and
            AFLW player.
          </p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="image-card">
        <img src={crowsMuseum} alt="Crows memorabilia" />
        <div className="overlay">
          <h3>The Crows Museum</h3>
          <p className="highlightable">
            Explore a rich collection of memorabilia, awards, photos, and
            unforgettable moments.
          </p>
          <button>Take a Look</button>
        </div>
      </div>
      <div className="image-card">
        <img
          src={crowsPremierships}
          alt="Team captain Mark Bickley holding premiership cup"
        />
        <div className="overlay">
          <h3>Championship Glory</h3>
          <p className="highlightable">
            Relive the triumphs of all AFLW and AFL premiership wins that
            defined the Club’s history.
          </p>
          <button>Relive the Wins</button>
        </div>
      </div>
      <div className="image-card">
        <img src={crowsJumpers} alt="Various Crows jumpers" />
        <div className="overlay">
          <h3>The Iconic Jumpers</h3>
          <p className="highlightable">
            Explore every guernsey design and evolution that’s symbolized the
            Club since 1991.
          </p>
          <button>View Designs</button>
        </div>
      </div>
      <div className="image-card">
        <img src={hallOfFame} alt="Hall of Fame members" />
        <div className="overlay">
          <h3>Hall of Fame Legends</h3>
          <p className="highlightable">
            Since 2015, our Hall of Fame celebrates the 12 remarkable figures
            who shaped Adelaide’s legacy.
          </p>
          <button>Meet the Legends</button>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
