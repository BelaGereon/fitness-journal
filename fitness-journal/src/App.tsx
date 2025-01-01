import "./App.css";
import DiaryEntry from "./components/diary-entry/DiaryEntry";

function App() {
  return (
    <>
      <body>
        <DiaryEntry date="07. Dec 2024">
          <div>
            First week of maintenance is basically done, went ok so far. Got
            sick and had to pause training again, and I was snacking a lot
            lately because I didn't feel like cooking... Will work on that next
            week. <br />
            Average kcals/day are at ±2350 kcal for the week, overate a bit on
            some days.
          </div>
          <div className="popout">
            Average weight went <b>DOWN</b> by ±0,5kg over the week, so I should
            definitely start to increase my kcals and see where it goes from
            there.
          </div>
          <div>
            If I go by the formulas, I should increase kcals to about
            2700kcals/day... Feels a bit much to be honest, but that would also
            fit the weightloss-rate of ±1lbs/week... <br />
            I'll set my goal to <b>2700kcals</b> and then see what my weight
            does the next week. <br />
            Hopefully with weight-training starting again on wednesday, I won't
            gain that much weight and just maintain my weight, maybe even recomp
            a little...
          </div>
          <div className="popout">
            I'll stay at 2700kcals at least on week, maybe even two to make sure
            I account for water-weight-fluctuations in case my weight shoots up
            the next week.
          </div>
          <div className="feature">
            <b>TAKEAWAY FOR NEXT DIET:</b>
            <br />
            I think it's a good idea for me to incorporate diet-breaks into the
            next fatloss-phase, maybe at a 3:1-ratio (3 weeks fatloss, 1 week
            maintenance) and use the maintenance-weeks or -days for deloading as
            well.
            <br />
            That way I can hopefully offset metaboloc adaptations and also get a
            little periodization for my training going.
          </div>
        </DiaryEntry>
      </body>
    </>
  );
}

export default App;
