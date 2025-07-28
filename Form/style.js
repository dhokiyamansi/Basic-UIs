
        const form = document.getElementById('userForm');
                const jsonOutput = document.getElementById('jsonOutput');
   const pre = jsonOutput.querySelector('pre');
        const passwordField = document.getElementById('password');
        const togglePassword = document.getElementById('togglePassword');
    
        form.addEventListener('submit', (event) => {
          event.preventDefault();
    
          const formData = new FormData(form);
          const jsonData = Object.fromEntries(formData.entries());
    
        
          pre.textContent = JSON.stringify(jsonData, null, 2);
          jsonOutput.classList.remove('hidden');
        });
    
        togglePassword.addEventListener('click', () => {
          const type = passwordField.type === 'password' ? 'text' : 'password';
          passwordField.type = type;
          togglePassword.textContent = type === 'password' ? 'Show' : 'Hide';
        });
