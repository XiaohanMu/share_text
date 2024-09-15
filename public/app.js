function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
  
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      fetch('/upload', {
        method: 'POST',
        body: formData
      }).then(response => response.text())
        .then(result => {
          console.log(result);
          alert('File uploaded successfully');
        }).catch(err => console.error('Error:', err));
    } else {
      alert('No file selected');
    }
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value;
  
    if (message) {
      fetch('/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message })
      }).then(response => response.text())
        .then(result => {
          document.getElementById('messageDisplay').innerHTML += `<p>${message}</p>`;
          messageInput.value = '';
        }).catch(err => console.error('Error:', err));
    } else {
      alert('Message cannot be empty');
    }
}
  