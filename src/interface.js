document.addEventListener('DOMContentLoaded', () => {
  displayUser()
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