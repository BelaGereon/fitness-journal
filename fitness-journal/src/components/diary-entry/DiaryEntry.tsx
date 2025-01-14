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
    const nextStepsAreEmpty = Array.isArray(nextSteps) && !nextSteps.length;
    if (!nextSteps || nextStepsAreEmpty) return null;
    return (
      <div className="next-steps-section next-steps">
        <h3>NEXT STEPS</h3>
        <div>{nextSteps}</div>
      </div>
    );
  };

  const renderNotes = () => {
    const notesAreEmpty = Array.isArray(notes) && !notes.length;
    if (!notes || notesAreEmpty) return null;
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
