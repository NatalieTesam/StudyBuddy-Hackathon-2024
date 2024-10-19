import "./App.css";
import { useEffect, useState } from "react";
import HappyBear from "./components/HappyBear";
import { processAssignments } from "./utils";
// import SpeechBubble from "./components/SpeechBubble";

interface Assignment {
  type: string;
  name: string;
  date: string;
  time: string;
  status?: string;
}

function App() {
  const [color, setColor] = useState(
    localStorage.getItem("color") || "#b25c15"
  );

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [oldAssignments, setOldAssignments] = useState<Assignment[]>([]);
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Check the origin if needed for security
      // if (event.origin !== 'your-origin') return;

      if (event.data && event.data.assignments) {
        setOldAssignments(assignments);
        setAssignments(processAssignments(event.data.assignments));
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  const [buddyHealth, setBuddyHealth] = useState(3);
  useEffect(() => {
    const overdueCount = assignments.filter(
      (assignment) => assignment.status === "overdue"
    ).length;
    const overdueRate = overdueCount / assignments.length;
    const dueSoonCount = assignments.filter(
      (assignment) => assignment.status === "dueSoon"
    ).length;
    // const dueSoonRate = dueSoonCount / assignments.length;
    if (overdueRate > 0.25 || dueSoonCount > 3) {
      setBuddyHealth(buddyHealth - 1);
    }
    if (oldAssignments[0].date !== assignments[0].date) {
      setBuddyHealth(buddyHealth + 1);
    }
  }, []);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    localStorage.setItem("color", e.target.value);
  };
  return (
    <>
      <input type='color' value={color} onChange={handleColorChange} />
      <HappyBear color={color} />
      {/* <SpeechBubble /> */}
    </>
  );
}

export default App;
