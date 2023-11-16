var jokeE1 = document.querySelector("#joke")
var jokebtn = document.querySelector("#jokebtn")
jokebtn.addEventListener("click",generateJoke());

async function generateJoke() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeE1.innerHTML = data.joke
}
