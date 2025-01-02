import "./App.css";
import DiaryEntry from "./components/diary-entry/DiaryEntry";

function App() {
  return (
    <>
      <body>
        <DiaryEntry
          date="07. Dec 2024"
          entry={[
            <div>
              First week of maintenance is basically done, went ok so far. Got
              sick and had to pause training again, and I was snacking a lot
              lately because I didn't feel like cooking... Will work on that
              next week. <br />
              Average kcals/day are at ±2350 kcal for the week, overate a bit on
              some days.
            </div>,
            <div className="notes">
              Average weight went <b>DOWN</b> by ±0,5kg over the week, so I
              should definitely start to increase my kcals and see where it goes
              from there.
            </div>,
            <div>
              If I go by the formulas, I should increase kcals to about
              2700kcals/day... Feels a bit much to be honest, but that would
              also fit the weightloss-rate of ±1lbs/week... <br />
              I'll set my goal to <b>2700kcals</b> and then see what my weight
              does the next week. <br />
              Hopefully with weight-training starting again on wednesday, I
              won't gain that much weight and just maintain my weight, maybe
              even recomp a little...
            </div>,
            <div className="notes">
              I'll stay at 2700kcals at least on week, maybe even two to make
              sure I account for water-weight-fluctuations in case my weight
              shoots up the next week.
            </div>,
            <div className="next-steps">
              <b>TAKEAWAY FOR NEXT DIET:</b>
              <br />
              I think it's a good idea for me to incorporate diet-breaks into
              the next fatloss-phase, maybe at a 3:1-ratio (3 weeks fatloss, 1
              week maintenance) and use the maintenance-weeks or -days for
              deloading as well.
              <br />
              That way I can hopefully offset metaboloc adaptations and also get
              a little periodization for my training going.
            </div>,
          ]}
        ></DiaryEntry>
        <DiaryEntry
          date="02. Jan 2025"
          entry={[
            <div>
              I managed to rougly maintain my weight over the holidays and new
              years eve, sitting at ±82kg this morning. A bit on the heavier
              side compared to the last few weeks.
            </div>,
            <div>
              I was slacking off a bit in regards to my daily step count,
              hitting only ±5000 steps on some days. And tracking calories was
              not as consistent as I would liek it, but with the holiday dinners
              I wouldn't have been avle to accurately track anyways.
            </div>,
            <div>
              I will make an effort to reliavly hit my steps again, that should
              stabilize my weight at about 81kg again and then I can maybe
              increase my kcals again while maintaining at that weight.
            </div>,
          ]}
          nextSteps={[
            <div className="step">
              Hit daily step goal of ±8000 steps consistently.
            </div>,
            <div className="step">
              Track calories and hit daily goal of ±2500kcals consistently.
            </div>,
            <div className="step">
              Go through last years diary and reflext on learnings.
            </div>,
          ]}
          notes={[
            <div>
              Potential new diary entry structure with "NEXT STEPS" and "NOTES"?
            </div>,
          ]}
        ></DiaryEntry>
      </body>
    </>
  );
}

export default App;
