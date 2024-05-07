// Fonctionnalités JavaScript à coder pour ce projet

// 1. Gérer l'input "utilisateur", faites-en sorte qu'il passe la validation lorsque le pseudo fait plus de 3 caractères.

// 2. Paramètrez le second input afin qu'il reçoive un email, et qu'il montre un message d'alerte si la chaîne rentrée n'est pas au bon format, le tout à l'aide d'un regex.

// 3. Le mot de passe doit contenir au moins un symbole, une lettre minuscule et un chiffre.

// 4. Montrez la "force" du mot de passe en fonction de ce que l'on rentre dans l'input.
// - Si la longueur du mot de passe est entre 0 et 5 affichez : faible.
// - Si la longueur est supérieure ou égale à 6 et inférieure à 9 et qu'elle contient au moins un symbole ou  un chiffre, affichez : moyen
// - Si la longueur est supérieur ou égale à 9 et quelle contient au moins un symbole et un chiffre affichez : fort
// - Gérez la confirmation de mot de passe.
// - Enfin envoyez un .alert("données envoyées") si on appuie sur le bouton "Création du compte" en ayant passé tous les tets.


// Vérifier le nom d'utilisateur
const userIcon = document.querySelector(".input-group:nth-child(1) .icone-verif");
const userError = document.querySelector(".input-group:nth-child(1) .error-msg");
const userInput = document.querySelector(".input-group:nth-child(1) input");

userInput.addEventListener("blur", userValidation);
userInput.addEventListener("input", userValidation);

function userValidation(){
    if (userInput.value.length >= 3){
        userIcon.style.display = "inline";
        userIcon.src = "check.svg";
        userError.style.display = "none";
    } else {
        userIcon.style.display = "inline";
        userIcon.src = "error.svg";
        userError.style.display = "block";
    }
}

// Vérifier l'email
const emailIcon = document.querySelector(".input-group:nth-child(2) .icone-verif");
const emailError = document.querySelector(".input-group:nth-child(2) .error-msg");
const emailInput = document.querySelector(".input-group:nth-child(2) input");

emailInput.addEventListener("blur", emailValidation);
emailInput.addEventListener("input", emailValidation);

function emailValidation() {
    if (emailInput.value.match(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/)) {
        emailIcon.style.display = "inline";
        emailIcon.src = "check.svg";
        emailError.style.display = "none";
    } else {
        emailIcon.style.display = "inline";
        emailIcon.src = "error.svg";
        emailError.style.display = "block";
    }
}

// Vérifier le mot de passe
const pwdInput = document.querySelector("#password");
const pwdConfirmationInput = document.querySelector("#pwd-confirmation");
const pwdInfoText = document.querySelector(".pwd-info");
const pwdStrengthLines = document.querySelectorAll(".l");

// Fonction pour vérifier la force du mot de passe
function checkPasswordStrength(password) {
  let strength = 0;
  if (password.length > 5) {
    strength++;
    if (/\d/.test(password)) {
      strength++;
    }
    if (/[a-z]/.test(password)) {
      strength++;
    }
    if (/[\W_]/.test(password)) {
      strength++;
    }
  }
  return strength;
}

pwdInput.addEventListener("input", function () {
  const password = pwdInput.value;
  const strength = checkPasswordStrength(password);
  pwdStrengthLines.forEach((line, index) => {
    if (index < strength) {
      line.classList.add("active");
    } else {
      line.classList.remove("active");
    }
  });
});

// Vérifier la confirmation du mot de passe
pwdConfirmationInput.addEventListener("blur", function () {
  if (pwdConfirmationInput.value !== pwdInput.value) {
    alert("Les mots de passe ne correspondent pas !");
  }
});

// Envoyer le formulaire
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = userInput.value;
  const email = mailInput.value;
  const password = pwdInput.value;
  const passwordConfirmation = pwdConfirmationInput.value;
  if (
    username.length >= 3 &&
    regexEmail.test(email) &&
    checkPasswordStrength(password) >= 3 &&
    password === passwordConfirmation
  ) {
    alert("Données envoyées !");
  } else {
    alert("Veuillez remplir correctement tous les champs !");
  }
});
