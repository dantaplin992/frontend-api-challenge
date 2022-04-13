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
    const peepsDiv = document.getElementById("peeps-list")
    for (let i = 0; i <= data.length; i++) {
      const newDiv = document.createElement("p")
      const peepName = document.createTextNode(`${data[i].user.handle} peeped: `)
      const newContent = document.createTextNode(data[i].body)
      const peepTime = document.createTextNode(` at: ${data[i].created_at}`)
      newDiv.appendChild(peepName)
      newDiv.appendChild(newContent)
      newDiv.appendChild(peepTime)
      const currentDiv = document.getElementById("peeps-list")
      document.body.insertBefore(newDiv, currentDiv)
    }
  });
}