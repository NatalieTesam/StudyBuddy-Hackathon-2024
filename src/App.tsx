import "./App.css";
import { useEffect, useState, useRef } from "react";
import HappyBear from "./components/HappyBear";
import HungryBear from "./components/HungryBear";
import StarvingBear from "./components/StarvingBear";
import DeadBear from "./components/DeadBear";
import { getRandomName } from "./utils";
// import { processAssignments } from "./utils";
// import SpeechBubble from "./components/SpeechBubble";

// interface Assignment {
//   type: string;
//   name: string;
//   date: string;
//   time: string;
//   status?: string;
// }

function App() {
  const [color, setColor] = useState(
    localStorage.getItem("color") || "#b25c15"
  );

  // const [assignments, setAssignments] = useState<Assignment[]>([]);
  // const [oldAssignments, setOldAssignments] = useState<Assignment[]>([]);

  // useEffect(() => {
  //   const handleMessage = (event: MessageEvent) => {
  //     // Check the origin if needed for security
  //     // if (event.origin !== 'your-origin') return;

  //     if (event.data && event.data.assignments) {
  //       setOldAssignments(assignments);
  //       setAssignments(processAssignments(event.data.assignments));
  //     }
  //   };

  //   window.addEventListener("message", handleMessage);

  //   return () => {
  //     window.removeEventListener("message", handleMessage);
  //   };
  // }, []);
  // useEffect(() => {
  //   const overdueCount = assignments.filter(
  //     (assignment) => assignment.status === "overdue"
  //   ).length;
  //   const overdueRate = overdueCount / assignments.length;
  //   const dueSoonCount = assignments.filter(
  //     (assignment) => assignment.status === "dueSoon"
  //   ).length;
  //   // const dueSoonRate = dueSoonCount / assignments.length;
  //   if (overdueRate > 0.25 || dueSoonCount > 3) {
  //     setBuddyHealth(buddyHealth - 1);
  //   }
  //   if (oldAssignments[0]?.date !== assignments[0]?.date) {
  //     setBuddyHealth(buddyHealth + 1);
  //   }
  // }, []);
  const [buddyHealth, setBuddyHealth] = useState(3);

  const buddyHealthRef = useRef(buddyHealth);

  useEffect(() => {
    buddyHealthRef.current = buddyHealth;
  }, [buddyHealth]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (buddyHealthRef.current > 0) {
        setBuddyHealth((prev) => prev - 1);
      } else {
        setBuddyHealth(3);
      }
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
    localStorage.setItem("color", e.target.value);
  };

  const [name, setName] = useState(
    localStorage.getItem("name") || getRandomName()
  );
  const [regen, setRegen] = useState(false);
  useEffect(() => {
    localStorage.setItem("name", name);
  });

  useEffect(() => {
    if (buddyHealth == 0) {
      setRegen(true);
    }
  }, [buddyHealth]);

  useEffect(() => {
    if (regen && buddyHealth == 3) {
      setName(getRandomName());
      setRegen(false);
    }
  }, [buddyHealth]);

  return (
    <>
      <input type='color' value={color} onChange={handleColorChange} />
      <p className='bearName'>{name}</p>
      {buddyHealth == 3 && <HappyBear color={color} />}
      {buddyHealth == 2 && <HungryBear color={color} />}
      {buddyHealth == 1 && <StarvingBear color={color} />}
      {buddyHealth == 0 && <DeadBear color={color} />}
      {/* <SpeechBubble /> */}
    </>
  );
}

export default App;
