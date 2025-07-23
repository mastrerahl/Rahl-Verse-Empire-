// app.js import { auth } from './firebase-config.js'; import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Signup logic const signupForm = document.getElementById('signupForm'); if (signupForm) { signupForm.addEventListener('submit', (e) => { e.preventDefault(); const email = document.getElementById('email').value; const password = document.getElementById('password').value; createUserWithEmailAndPassword(auth, email, password) .then(() => { alert('Signup successful!'); window.location.href = 'dashboard.html'; }) .catch((error) => alert(error.message)); }); }

// Login logic const loginForm = document.getElementById('loginForm'); if (loginForm) { loginForm.addEventListener('submit', (e) => { e.preventDefault(); const email = document.getElementById('email').value; const password = document.getElementById('password').value; signInWithEmailAndPassword(auth, email, password) .then(() => { alert('Login successful!'); window.location.href = 'dashboard.html'; }) .catch((error) => alert(error.message)); }); }

// Logout logic function logout() { signOut(auth).then(() => { alert('Logged out'); window.location.href = 'index.html'; }); }

// Generator logic function generateContent() { const type = document.getElementById('typeSelector').value; const input = document.getElementById('userInput').value; const output = document.getElementById('outputText');

if (!input.trim()) { output.textContent = 'Please enter some keywords.'; return; }

let generated = ''; switch (type) { case 'bio': generated = I'm a passionate creator focused on ${input}. Let’s connect and grow!; break; case 'caption': generated = Just posted about ${input} 💬✨ #RahlLaunchpad; break; case 'template': generated = Template: "Your daily dose of ${input}" 🔁 Save & Share!; break; default: generated = 'Unsupported type.'; }

output.textContent = generated; }

