document.addEventListener('DOMContentLoaded', () => {
  listPeeps()
});


const displayUser = () => {
  const url = `https://chitter-backend-api-v2.herokuapp.com/users/1`
  fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
    document.querySelector('#test-class').innerText = data.handle
  });
}

const listPeeps = () => {
  const url =`https://chitter-backend-api-v2.herokuapp.com/peeps`
  fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    document.querySelector('#test-class').innerText = data[0].body
    for (let i = 0; i <= data.length; i++) {
      const newDiv = document.createElement("p")
      const newContent = document.createTextNode(data[i].body)
      newDiv.appendChild(newContent)
      const currentDiv = document.getElementById("test-class")
      document.body.insertBefore(newDiv, currentDiv)
    }
    // console.log(data)
  });
}