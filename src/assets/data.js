const data = {
  connections: [
    {
      _id: {
        $oid: "653a8963eef460254b9ecd68",
      },
      name: "Ustanove",
      colname: "institutions",
      id: "0",
      connected: [1,2,3,4,5],
    },
    {
      _id: {
        $oid: "653a8963eef460254b9ecd69",
      },
      name: "Analize",
      colname: "analysis",
      id: "1",
      connected: [0,2,5],
    },
    {
      _id: {
        $oid: "653a8963eef460254b9ecd6a",
      },
      name: "Mikroorganizmi",
      colname: "microorganisms",
      id: "2",
      connected: [0,1,5],
    },
    {
      _id: {
        $oid: "653a8963eef460254b9ecd6b",
      },
      name: "Instrumenti",
      colname: "instruments",
      id: "3",
      connected: [0,5],
    },
    {
      _id: {
        $oid: "653a8963eef460254b9ecd6c",
      },
      name: "Istrazivaci",
      colname: "researchers",
      id: "4",
      connected: [0,5],
    },
    {
      _id: {
        $oid: "653a8963eef460254b9ecd6d",
      },
      name: "KljucneReci",
      colname: "keywords",
      id: "5",
      connected: [0,1,2,3,4],
    },
  ],
  institutions: [
    {
      id: 1,
      name: "Institution 1",
      analysis: [1],
      researchers: [1],
      microorganisms: [1],
      instruments: [1],
      keywords: [1],
    },
    {
      id: 2,
      name: "Institution 2",
      analysis: [2],
      researchers: [2],
      microorganisms: [2],
      instruments: [2],
      keywords: [2],
    },
    {
      id: 3,
      name: "Institution 3",
      analysis: [3],
      researchers: [3],
      microorganisms: [3],
      instruments: [3],
      keywords: [3],
    },
    {
      id: 4,
      name: "Institution 4",
      analysis: [1,2],
      researchers: [2,3],
      microorganisms: [1,3],
      instruments: [3,1],
      keywords: [3,3],
    },
    {
      id: 5,
      name: "Institut za mikrobiologiju i imunologiju",
      analysis: [3,5],
      researchers: [3],
      microorganisms: [4,5,6,7],
      instruments: [4,5,6],
      keywords: [4,5,6],
    },
    {
      id: 6,
      name: "Institut za javno zdravlje Srbije ''Dr Milan Jovanović Batut''",
      analysis: [3,4,5],
      researchers: [4],
      microorganisms: [4,5,6,7,8],
      instruments: [4,6],
      keywords: [7,8,9],
    },
    // Add more institutions as needed
  ],
  analysis: [
    {
      id: 1,
      name: "Analysis 1",
      microorganisms: [2, 1],
    },
    {
      id: 2,
      name: "Analysis 2",
      microorganisms: [1, 2],
    },
    {
      id: 3,
      name: "PCR",
      microorganisms: [4, 2],
    },
    {
      id: 4,
      name: "Real-Time PCR",
      microorganisms: [4, 2],
    },
    {
      id: 5,
      name: "Serologija",
      microorganisms: [4, 2],
    },
    // Add more analysis as needed
  ],
  researchers: [
    {
      id: 1,
      name: "Researcher 1",
    },    {
      id: 2,
      name: "Researcher 2",
    },    {
      id: 3,
      name: "Researcher 3",
    },    {
      id: 4,
      name: "Researcher 4",
    },
    // Add more researchers as needed
  ],
  microorganisms: [
    {
      id: 1,
      name: "Microorganism 1",
    },
    {
      id: 2,
      name: "Microorganism 2",
    },
    {
      id: 3,
      name: "Microorganism 3",
    },
    {
      id: 4,
      name: "SARS-CoV-2",
    },
    {
      id: 5,
      name: "Cytomegalovirus",
    },
    {
      id: 6,
      name: "Chlamydia sp.",
    },
    {
      id: 7,
      name: "Helicobacter sp.",
    },
    {
      id: 8,
      name: "Herpes simplex virus",
    },
  ],
  instruments: [
    {
      id: 1,
      name: "Instrument 1",
    },
    {
      id: 2,
      name: "Instrument 2",
    },
    {
      id: 3,
      name: "Instrument 3",
    },
    {
      id: 4,
      name: "PCR Thermocycler",
    },
    {
      id: 5,
      name: "ABI 7500 ",
    },
    {
      id: 6,
      name: "ELISA Reader 270",
    },
  ],
  keywords: [
    {
      id: 1,
      name: "keyword 1",
    },
    {
      id: 2,
      name: "keyword 2",
    },
    {
      id: 3,
      name: "keyword 3",
    },
    {
      id: 4,
      name: "Cytomegalovirus",
    },
    {
      id: 5,
      name: "Sequencing",
    },
    {
      id: 6,
      name: "Chlamydia sp.",
    },
    {
      id: 7,
      name: "Helicobacter sp.",
    },
    {
      id: 8,
      name: "PCR",
    },
    {
      id: 9,
      name: "Serology",
    },
  ],
};

export default data;
