const eventSource = new EventSource('http://localhost:8000')

const  updateMsg = (message) => {
  const list = document.getElementById('messages')
  const item = document.createElement('p')
  item.textContent = message
  list.appendChild(item)
}

eventSource.onmessage = function (event) {
  updateMessage(event.data)
}

eventSource.onerror = function () {
  updateMsg('Server closed connection')
  eventSource.close()
} 