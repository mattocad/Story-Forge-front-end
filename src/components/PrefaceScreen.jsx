import React from "react";
import "./PrefaceScreen.css";
import sampleImage from "../assets/hms-bounty.png";

const PrefaceScreen = ({ onContinue }) => {
  return (
    <div className="preface-screen">
      <div className="preface-left">
        <h1 className="title">
          {" "}
          <em>The Mutiny of H.M.S. Bounty</em>
        </h1>
        <img src={sampleImage} alt="Title" className="title-image" />
        <div className="title-info">
          <p>
            <em>
              The Eventful History of the Mutiny and Piratical Seizure of HMS
              Bounty
            </em>
          </p>
          <p>Sir John Barrow</p>
          <p>
            London: <em>The Folio Society</em> MCMLXXVI
          </p>
          <p>✵</p>
          <p>llama3:8b</p>
          <p>arch llama · parameters 8.03B · quantization Q4_0 4.7GB</p>
          <p>April 18, 2024</p>
        </div>
      </div>
      <div className="preface-right">
        <h2>Preface</h2>
        <p>
          The story of the mutiny aboard the HMS Bounty is one of treachery,
          survival, and impossible choices. It begins on a voyage meant to bring
          breadfruit plants from the lush islands of Tahiti to the West Indies,
          a mission of imperial ambition under the command of Captain William
          Bligh.
        </p>
        <p>
          On the unforgiving seas of the South Pacific, personalities clashed
          and tempers frayed. The lure of paradise was irresistible, and the
          harsh life aboard the Bounty only sharpened the crew’s longing for
          freedom. What followed was an act of rebellion that would change the
          lives of all aboard forever—a mutiny that tore the ship, and its crew,
          apart.
        </p>
        <p>
          You are now a part of this unfolding drama. As the tension rises
          aboard the Bounty, your actions will shape the fate of this historic
          voyage. Will you navigate the delicate balance of loyalty and
          ambition? Will you side with order, or with the dream of a freer life?
          Step aboard the Bounty, where the winds of history and adventure await
          you. The journey begins now, but how it ends...
        </p>
        <div className="button-group">
          <button onClick={onContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default PrefaceScreen;
