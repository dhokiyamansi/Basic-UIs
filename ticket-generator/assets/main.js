function showModal(event) {
  event.preventDefault();
  const username = document.getElementById('fullname').value;
  const email = document.getElementById('email').value;
  const github = document.getElementById('github').value;
  const avatarInput = document.getElementById('avatar');
  const ticketAvatar = document.getElementById('ticketAvatar');
  if (username && email && github) {
      document.getElementById('person').textContent = username;
      document.getElementById('getusername').textContent = username;
      document.getElementById('getemail').textContent = email;
      document.getElementById('getgithub').textContent = github;
      if (avatarInput.files.length > 0) {
          const avatarURL = URL.createObjectURL(avatarInput.files[0]);
          ticketAvatar.src = avatarURL;
          ticketAvatar.classList.remove('hidden');
      }
      document.getElementById('modal').classList.remove('hidden');
      document.getElementById('main-content').classList.add('hidden');
  } else {
      alert('Please fill out all fields.');
  }
}
