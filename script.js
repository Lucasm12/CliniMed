document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message');

    // Dummy credentials for demonstration
    var credentials = {
        doctor: { username: '1', password: '1' },
        assistant: { username: '2', password: '2' },
        patient: { username: '3', password: '3' }
    };

    if (username === credentials.doctor.username && password === credentials.doctor.password) {
        message.style.color = 'green';
        message.textContent = 'Login Realizado com Sucesso!';
        window.location.href = 'doctor.html';
    } else if (username === credentials.assistant.username && password === credentials.assistant.password) {
        message.style.color = 'green';
        message.textContent = 'Login Realizado com Sucesso!';
        window.location.href = 'assistant.html';
    } else if (username === credentials.patient.username && password === credentials.patient.password) {
        message.style.color = 'green';
        message.textContent = 'Login Realizado com Sucesso!';
        window.location.href = 'patient.html';
    } else {
        message.style.color = 'red';
        message.textContent = 'Login ou Senha Inválidos';
    }
});
