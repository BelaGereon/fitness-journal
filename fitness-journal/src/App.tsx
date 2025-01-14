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
            <div>
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
            <div>
              I'll stay at 2700kcals at least on week, maybe even two to make
              sure I account for water-weight-fluctuations in case my weight
              shoots up the next week.
            </div>,
          ]}
          notes={[
            <div>
              I think it's a good idea for me to incorporate diet-breaks into
              the next fatloss-phase, maybe at a 3:1-ratio (3 weeks fatloss, 1
              week maintenance) and use the maintenance-weeks or -days for
              deloading as well.
            </div>,
            <div>
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
        <DiaryEntry
          date="03. January 2025"
          entry={[
            <div>
              Workout-consistency is a bit off the last week, but I have / had a
              lot of disruptions like holidays, NYE and tattoo-sessions to deal
              with. <br />
              Next week will probably be the same again because of
              tattoo-appointments and the linked rest-days I have to take
              because of them. <br />I will try to at least track my calories
              accurately and hit my step goal, that should be okay for now to
              keep me on track.
            </div>,
            <div>
              I spoke with <b>REDACTED</b> about coaching him, we'll start that
              around March when we both have more time for working out and don't
              have too much other stuff going on in our lifes at the same time.
              And the gym will probably be less crowded by then as well, so
              win-win I would say.
            </div>,
            <div>
              I'll get one more good workout in today before my
              tattoo-appointment tomorrow, I'll try to make the most of it so
              the days after can be used to build some new muscle.
            </div>,
            <div>
              Oh, and I must not forget to do some more reasearch on building
              and progressing a meso-cycle for beginners, tho I have some ideas
              already.
            </div>,
          ]}
          nextSteps={[
            <div>
              Build two basic workouts for one week, full-body training with
              some variation.
            </div>,
            <div>
              Guestimate first nutritional requirements for <b>REDACTED</b> and
              see how we can roughly start him in the right direction.
            </div>,
          ]}
        ></DiaryEntry>
        <DiaryEntry
          date="05. January 2025"
          entry={[
            <div>
              Weight is down to ±80,5kgs, if this continues I can increase my
              kcals to ±2600-2700kcals, but ONLY if I can also maintain an
              appropriate training volume and activity level as well.
            </div>,
            <div>
              Since I will be getting tattooed again on Thursday and the week
              after on Saturday, it might be a good idea to do full-body
              workouts twice per week instead of trying to hit 4
              training-sessions, because the days after getting tattooed I can't
              train anyway. <br /> I will decide if I change my trainings until
              March soon, but not today.
            </div>,
            <div>
              I created a first draft for <b>REDACTED</b> training for March,
              interested to see how I will adapt to it and if / how much extra
              sessions I will do between Wednesdays and Sundays. Maybe some
              extra arm- and shoulder-workouts, depending on the soreness-levels
              on the days after training with <b>REDACTED</b>.
            </div>,
          ]}
          nextSteps={[
            <div>
              Build specialization-days to fill gaps between training-sessions
              with <b>REDACTED</b>.
            </div>,
            <div>
              Adjust calory-intake starting from Monday 06th and see how weight
              reacts.
            </div>,
          ]}
        ></DiaryEntry>
        <DiaryEntry
          date="12. January 2025"
          entry={[
            <div>
              I ate a LOT of sweet stuff yesterday and over-ate by ±500kcals,
              should takt it easy ont he snacks today and focus on protein.
            </div>,
            <div>
              Training has been lacking a bit the last week, but that was mainly
              due to the tattoo-session on Thursday and the soreness that
              followed, so I'm not too worried about that. <br />I was able to
              maintain my weight throughout the last week, mainly because I
              collected more steps on avery I think, at least compared to the
              week before that (±8380 vs. ±9741 steps/day, tendency rising
              because it is morning as I am currently writing this entry.)
            </div>,
            <div>
              This shows that my maintenance right now actually is around 2600 -
              2700 kcals/day, together with working out for ±2 h ours / week and
              averaging ±9000 - 10.000 steps / day. <br />
              If I can get a more intense workout routine going I might be able
              to push it to ±2800 - 2900 kcals/day, but let's not get ahead of
              myself.
            </div>,
          ]}
          nextSteps={[
            <div>
              Stay consistent with activity level and kcals until the 19th
              January
            </div>,
            <div>
              Get at least two full-body workouts in until the 19th January.
            </div>,
          ]}
          notes={[
            <div>
              It looks like I lost some weight after increasing my kcals to
              ±2600kcals/day, probably due to the higher step count. I will try
              to replicate this next week and then adjust my macros and kcals
              accordingly.
            </div>,
          ]}
        ></DiaryEntry>
      </body>
    </>
  );
}

export default App;
