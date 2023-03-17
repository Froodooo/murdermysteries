export function getPeople() {
  return [
    {
      params: {
        id: "person1",
        name: 'Freida Convict',
        question: "Waar staat CPU voor?",
        answers: [
          {
            text: "Computer Processor Uninstall",
            correct: false,
          },
          {
            text: "Computerised Procedural Unit",
            correct: false,
          },
          {
            text: "Central Processing Unit",
            correct: true,
          }
        ],
        statement: `Ik werk in het museumrestaurant met Gordon Blue. Luke werkte als een van die
        slimme types die mensen rondleidden, een curator of zoiets, zo worden ze geloof ik
        genoemd. Het is gewoon verschrikkelijk wat er met hem is gebeurd, ik zou niet
        weten waarom iemand dat zou doen. Hij zei altijd 'hallo' tegen me als ik 's ochtends
        zijn thee inschonk. Maar ik merkte dat hij altijd alleen in de kantine zat, misschien
        was hij verlegen.`,
        followup: [
          {
            question: "Kun je een reden bedenken waarom iemand hem iets aan zou doen?",
            answer: "Ik roddel niet graag, maar je zou met Helen kunnen praten. Ik denk dat zij en Luuk meer waren dan gewoon goede vrienden.",
          },
          {
            question: "Weet je waarom hij daar was na sluitingstijd?",
            answer: "Geen idee. Ik ga altijd meteen naar huis als mijn shift erop zit."
          }
        ],
        link: "person1",
      },
    },
    {
      params: {
        id: "person2",
        name: "Persoon 2",
        link: "person2",
      }
    },
    {
      params: {
        id: "person3",
        name: "Persoon 3",
        link: "person3",
      }
    },
  ];
}

export function getPersonData(id) {
  const people = getPeople();
  const personData = people.find((p) => p.params.id === id);

  return {
    id,
    ...personData,
  };
}