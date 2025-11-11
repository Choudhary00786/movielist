const movieInput = document.getElementById('movieInput');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const movieList = document.getElementById('movieList');
const movieCount = document.getElementById('movieCount');

let movies = [];

function updateList() {
    movieList.innerHTML = "";
    movies.forEach((movie, index) => {
        const li = document.createElement('li');
        li.textContent = movie;
        li.addEventListener('click', () => removeMovie(index));
        movieList.appendChild(li);
    });
    movieCount.textContent = `Total Movies: ${movies.length}`;
}


addBtn.addEventListener('click', () => {
    const movieName = movieInput.value.trim();
    if (movieName === "") {
        alert("Please enter a movie name!");
        return;
    }
    movies.push(movieName);
    movieInput.value = "";
    updateList();
});


function removeMovie(index) {
    movies.splice(index, 1);
    updateList();
}


clearBtn.addEventListener('click', () => {
    movies = [];
    updateList();
});

updateList();