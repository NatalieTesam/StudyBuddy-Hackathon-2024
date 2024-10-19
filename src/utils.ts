const getAssignments = () => {
  return [
    {
      type: "assignment",
      name: "homework1",
      date: "2021-09-01",
      time: "23:59",
    },
    {
      type: "assignment",
      name: "homework2",
      date: "2021-09-02",
      time: "23:59",
    },
  ];
};

interface Assignment {
  type: string;
  name: string;
  date: string;
  time: string;
}

const processAssignments = (assignments: Assignment[]) => {
  const rawAssignments = assignments;
  const today = new Date();
  return rawAssignments
    .map((assignment) => {
      const dueDate = new Date(`${assignment.date} ${assignment.time}`);
      if (dueDate < today) {
        return {
          ...assignment,
          status: "overdue",
        };
      } else if (dueDate.valueOf() - today.valueOf() < 14400000) {
        // 4 hours
        return {
          ...assignment,
          status: "dueSoon",
        };
      } else return assignment;
    })
    .filter(
      (assignment): assignment is Assignment & { status: string } =>
        assignment !== null
    );
};

export { getAssignments, processAssignments };
