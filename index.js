// script.js
const peopleData = [
    {
        title: "Professor Heller",
        institution: "at Howard University",
        description: "Studies common creative practices in technology and innovation.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s"
    },
    {
        title: "Dr. Emily Green",
        institution: "at MIT",
        description: "Explores advancements in bioinformatics and genetic research.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s"
    },
    {
        title: "Dr. John Smith",
        institution: "at Stanford University",
        description: "Focuses on machine learning algorithms for sustainable technologies.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s"
    },
    {
        title: "Dr. Sarah Johnson",
        institution: "at Oxford University",
        description: "Investigates environmental impacts of AI technologies.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s"
    },
    {
        title: "Dr. Lucas Chen",
        institution: "at UC Berkeley",
        description: "Develops robotics for autonomous vehicle applications.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s"
    }
];

const peoplData = [
    {
        title: "Professor Heller",
        institution: "at Howard University",
        description: "Studies common creative practices in technology and innovation.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqDV-X4JQ42D1BE148V2p9FuvBV0MvxNN4hA&s"
    },
]

const container = document.getElementById('people-container');

// Loop through the data and create cards dynamically
peopleData.forEach(person => {
    const personCard = document.createElement('div');
    personCard.classList.add('my-7', 'card', 'flex', 'flex-row', 'justify-evenly');

    personCard.innerHTML = `
        <div>
            <img src="${person.image}" alt="${person.title}" class="">
        </div>
        <div class="py-3">
            <h1 class="text-4xl">${person.title}</h1>
            <p class="text-red-600 text-3xl">${person.institution}</p>
            <p class="text-2xl">${person.description}</p>
        </div>
    `;

    container.appendChild(personCard);
});
