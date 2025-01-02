import React from "react";
import "./DiaryEntry.css";

interface DiaryEntryProps {
  date: string;
  entry: React.ReactNode;
  nextSteps?: React.ReactNode;
  notes?: React.ReactNode;
}

// DiaryEntry Component
const DiaryEntry: React.FC<DiaryEntryProps> = ({
  date,
  entry,
  nextSteps,
  notes,
}) => {
  const renderNextSteps = () => {
    if (!nextSteps) return null;
    return (
      <div className="next-steps-section next-steps">
        <h3>NEXT STEPS</h3>
        <div>{nextSteps}</div>
      </div>
    );
  };

  const renderNotes = () => {
    if (!notes) return null;
    return (
      <div className="notes-section notes">
        <h4>NOTES</h4>
        <div>{notes}</div>
      </div>
    );
  };

  return (
    <div className="diary-entry">
      <h3>{date}</h3>
      <div className="content">
        {entry}
        {renderNextSteps()}
        {renderNotes()}
      </div>
    </div>
  );
};

export default DiaryEntry;
