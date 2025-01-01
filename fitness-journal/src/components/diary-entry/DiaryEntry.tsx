import React from "react";
import "./DiaryEntry.css";

// Define props type for the DiaryEntry component
interface DiaryEntryProps {
  date: string;
  children?: React.ReactNode; // Optional children prop
}

// DiaryEntry Component
const DiaryEntry: React.FC<DiaryEntryProps> = ({ date, children }) => {
  return (
    <div className="diary-entry">
      <h3>{date}</h3>
      <div className="content">{children}</div>
    </div>
  );
};

export default DiaryEntry;
