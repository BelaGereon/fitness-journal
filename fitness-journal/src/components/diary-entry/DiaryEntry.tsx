import React from "react";
import "./DiaryEntry.css";

interface DiaryEntryProps {
  date: string;
  entry: React.ReactNode[];
  nextSteps?: React.ReactNode;
  notes?: React.ReactNode; // Optional children prop
}

// DiaryEntry Component
const DiaryEntry: React.FC<DiaryEntryProps> = ({
  date,
  entry,
  nextSteps,
  notes,
}) => {
  return (
    <div className="diary-entry">
      <h3>{date}</h3>
      <div className="content">
        {entry}
        {nextSteps && (
          <div className="next-steps-section next-steps">
            <h3>NEXT STEPS</h3>
            <div>{nextSteps}</div>
          </div>
        )}
        {notes && (
          <div className="notes-section notes">
            <h4>NOTES</h4>
            <div>{notes}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiaryEntry;
