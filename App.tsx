import * as React from 'react';
import './App.css';
import Post from './Post';
import 'typeface-open-sans';
import 'typeface-permanent-marker';

export default function App() {
  return (
    <div className="App">
      <div className="App-head">
        <img
          className="App-logotype"
          src="https://github.com/filipfur/sus-web/blob/master/assets/sus-logo.png?raw=true"
        />
      </div>
      <Post title="Svenska Spelutvecklingssällskapet">
        <p>
          Svenska Spelutvecklingssällskapet, förkortat SUS, är en ideell
          förening för spelutvecklare som är verksamma i Sverige. Vi riktar oss
          till glada amatörer såväl som branschledande industriproffs. Har du
          ett intresse för spelutveckling och vill träffa människor som delar
          ditt intresse? Då tror vi att SUS är helt rätt forum för dig.
        </p>

        <p>
          SUS är en ideell förening. Vi håller till på discord. Ingen
          medlemsansökan krävs, utan följ länken nedan för att komma direkt till
          discorden.
        </p>
      </Post>
      <Post title="SUS Game Jam 2023">
        <p>
          Vi presenterar stolt, SUS Game Jam 2023! Vårat första Game Jam! Hoppas
          ni är lika laddade som oss moderatorer.
        </p>
        <p>
          Tävlingen drar igång den 19:e februari och sträcker sig fram till den
          21:e.
        </p>
        <p>
          Temat för tävlingen är <i>AI-skapade assets</i>.
        </p>
      </Post>
      <Post title="Bli medlem">
        <p>
          Medlemsansökan är nu öppen. Ansök genom att fylla i formuläret nedan.
        </p>
        <p>
          Medlemskapet kostar en symbolisk summa om <i>30.00 SEK</i>.
        </p>
      </Post>
    </div>
  );
}
