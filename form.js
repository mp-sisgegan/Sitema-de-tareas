const form = document.getElementById("formTask")
form.addEventListener("submit", ev => {
  ev.preventDefault()
  const formData = ev.target

  const days = formData.titleTask.value

  const data = {
    tittle: formData.titleTask.value,
    persona: formData.personTask.value,
    deadline: Number(moment().add(7, "days").format('X')),
    created: Number(moment().add(Number(days), "days").format("X")),
    state: "pendiente"
  }

  axios.post(API_URL, data)
  .then(resp => {
    createTask(resp.data)
    formData.reset()
  })
  .catch(e => console.log(e))
})