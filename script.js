function goBack() {
    window.history.back();
}

const params = new URLSearchParams(window.location.search);
const query = params.get("query")?.toLowerCase();

const mockData = {
    "Naruto": {
        thumbnail: "Naruto.jpeg",
        trailer: "Naruto.mp4",
        description: "Naruto Uzumaki is a young ninja with a dream to become the Hokage.",
        writer: "Masashi Kishimoto",
        genre: "Action/Adventure"
    },
    "Bleach": {
        thumbnail: "Bleach.jpeg",
        trailer: "Bleach.mp4",
        description: "Follow Ichigo Kurosaki as he becomes a Soul Reaper to protect the living world.",
        writer: "Tite Kubo",
        genre: "Action/Fantasy"
    },
    "Attack on Titan": {
        thumbnail: "Aot.jpeg",
        trailer: "AOT.mp4",
        description: "Eren Yeager vows to destroy the Titans that threaten humanity's survival.",
        writer: "Hajime Isayama",
        genre: "Action/Drama"
    },
    "One Piece": {
        thumbnail: "Onepiece.jpeg",
        trailer: "Op.mp4",
        description: "Join Monkey D. Luffy and his crew on a quest to find the One Piece treasure.",
        writer: "Eiichiro Oda",
        genre: "Adventure/Comedy"
    },
    "Demon Slayer": {
        thumbnail: "DemonSlayer.jpeg",
        trailer: "DS.mp4",
        description: "Tanjiro Kamado battles demons to save his sister and avenge his family.",
        writer: "Koyoharu Gotouge",
        genre: "Action/Dark Fantasy"
    }
};

const relatedTerms = {
    "naruto": "Naruto",
    "kishimoto": "Naruto",
    "action": "Naruto",
    "bleach": "Bleach",
    "kubo": "Bleach",
    "fantasy": "Bleach",
    "attack on titan": "Attack on Titan",
    "isayama": "Attack on Titan",
    "drama": "Attack on Titan",
    "one piece": "One Piece",
    "oda": "One Piece",
    "adventure": "One Piece",
    "demon slayer": "Demon Slayer",
    "gotouge": "Demon Slayer",
    "dark fantasy": "Demon Slayer"
};

const resultsContainer = document.getElementById("results-container");

if (query && relatedTerms[query]) {
    const resultKey = relatedTerms[query];
    const data = mockData[resultKey];

    const card = `
        <div class="card">
            <img src="images/${data.thumbnail}" alt="${resultKey}">
            <div class="card-content">
                <h3>${resultKey}</h3>
                <p>${data.description}</p>
                <p><strong>Writer:</strong> ${data.writer}</p>
                <p><strong>Genre:</strong> ${data.genre}</p>
                <a href="videos/${data.trailer}" target="_blank"><button>Watch Trailer</button></a>
            </div>
        </div>
    `;
    resultsContainer.innerHTML = card;
}
 else if (query) {
    resultsContainer.innerHTML = `<p>No results found for "${query}". Try a different search term.</p>`;
} else {
    resultsContainer.innerHTML = `<p>No search query provided. Go back and try searching for something.</p>`;
}



function goToLoginPage() {
    window.location.href = "login.html";
}

function search(type) {
    const inputId = {
        anime: "anime-search",
        writer: "writer-search",
        genre: "genre-search"
    }[type];

    const query = document.getElementById(inputId).value.trim();

    if (query) {
        window.location.href = `results.html?query=${encodeURIComponent(query)}&type=${type}`;
    } else {
        alert(`Please enter a ${type} to search.`);
    }
}

