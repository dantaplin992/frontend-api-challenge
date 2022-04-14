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
    for (let i = 0; i < data.length; i++) {
      const newDiv = document.createElement("p")
      newDiv.insertAdjacentText('beforeend', `${data[i].user.handle} peeped: `)
      newDiv.insertAdjacentText('beforeend', data[i].body)
      newDiv.insertAdjacentText('beforeend', ` at: ${data[i].created_at}`)
      const currentDiv = document.getElementById("peeps-list")
      //document.body.insertBefore(newDiv, currentDiv)
      currentDiv.insertAdjacentElement('beforeend', newDiv)
    }
  });
}