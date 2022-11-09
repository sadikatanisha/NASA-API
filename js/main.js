//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = 'https://api.nasa.gov/planetary/apod?api_key=qir79PnkR1H4dpdgGAmzFYcAKsqn34eYfOm2Q2Vp&date='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title 
        document.querySelector('h3').innerText = data.explanation
        if(data.media_type==='image'){
          document.querySelector('img').src = data.hdurl
          document.querySelector("iframe").style.display ="none"
        }else if(data.media_type ==='video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('img').style.display = "none"
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

