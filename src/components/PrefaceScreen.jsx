import React from "react";
import "./PrefaceScreen.css";

const PrefaceScreen = ({ onContinue }) => {
  return (
    <div className="preface-screen">
      <h1>Preface</h1>
      <p>
        The story of the mutiny aboard the HMS Bounty is one of treachery,
        survival, and impossible choices. It begins on a voyage meant to bring
        breadfruit plants from the lush islands of Tahiti to the West Indies, a
        mission of imperial ambition under the command of Captain William Bligh.
        <p>
          On the unforgiving seas of the South Pacific, personalities clashed
          and tempers frayed. The lure of paradise was irresistible, and the
          harsh life aboard the Bounty only sharpened the crew’s longing for
          freedom. What followed was an act of rebellion that would change the
          lives of all aboard forever—a mutiny that tore the ship, and its crew,
          apart.
        </p>
        You are now a part of this unfolding drama. As the tension rises aboard
        the Bounty, your actions will shape the fate of this historic voyage.
        Will you navigate the delicate balance of loyalty and ambition? Will you
        side with order, or with the dream of a freer life? Step aboard the
        Bounty, where the winds of history and adventure await you. The journey
        begins now, but how it ends...
      </p>
      <div className="button-group">
        <button onClick={onContinue}>Continue</button>
      </div>
    </div>
  );
};

export default PrefaceScreen;
