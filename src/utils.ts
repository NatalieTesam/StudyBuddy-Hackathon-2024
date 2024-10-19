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

const getRandomName = () => {
  const names = [
    "Aiden",
    "Bella",
    "Charlie",
    "Daisy",
    "Ethan",
    "Flora",
    "Grizzly",
    "Hazel",
    "Ivy",
    "Jasper",
    "Koda",
    "Luna",
    "Milo",
    "Nala",
    "Oliver",
    "Pippa",
    "Quincy",
    "Ruby",
    "Simba",
    "Teddy",
    "Uma",
    "Vinnie",
    "Willow",
    "Xander",
    "Yara",
    "Zoe",
    "Ash",
    "Benny",
    "Coco",
    "Dandelion",
    "Echo",
    "Finn",
    "Ginger",
    "Huckleberry",
    "Juno",
    "Kiwi",
    "Leo",
    "Maple",
    "Nova",
    "Peanut",
    "Quincy",
    "Rocco",
    "Sienna",
    "Tilly",
    "Ulysses",
    "Violet",
    "Winston",
    "Yeti",
    "Zinnia",
    "Archie",
    "Bella",
    "Chai",
    "Doodle",
    "Ember",
    "Fuzzy",
    "Gidget",
    "Honey",
    "Indigo",
    "Juniper",
    "Koala",
    "Lollipop",
    "Mochi",
    "Nimbus",
    "Oatmeal",
    "Pancake",
    "Quokka",
    "Ruffles",
    "Snowball",
    "Tater",
    "Umber",
    "Vixen",
    "Waffles",
    "Yoyo",
    "Zesty",
    "Apple",
    "Brownie",
    "Clover",
    "Dottie",
    "Ember",
    "Fig",
    "Gizmo",
    "Honeybee",
    "Jellybean",
    "Kiki",
    "Latte",
    "Marshmallow",
    "Nugget",
    "Opal",
    "Pixie",
    "Quasar",
    "Razzle",
    "Snickers",
    "Taffy",
    "Umbra",
    "Velvet",
    "Whiskers",
    "Yonder",
    "Zippy",
    "Bubbles",
    "Cuddles",
    "Doodlebug",
    "Fluff",
    "Gummy",
    "Honeybun",
    "Jelly",
    "Kooky",
    "Lolly",
    "Muffin",
    "Nibbles",
    "Olive",
    "Pudding",
    "Quirky",
    "Rascal",
    "Snuggle",
    "Tootsie",
    "Unagi",
    "Wiggles",
  ];

  return names[Math.floor(Math.random() * names.length)];
};

export { getAssignments, processAssignments, getRandomName };
