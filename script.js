function render (output, value) {
  output.innerHTML = value
}

const input = document.querySelector('input')
const output = document.querySelector('b')

input.addEventListener('input', function (e) {
  render(output, e.target.value)
}, false)

render(output, input.value)
