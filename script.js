const form = document.getElementById("expense-form");
const submitBtn = document.getElementById("submit-button");

function submitForm () {
    form.preventDefault();
    console.log(form);
}


submitBtn.addEventListener('click', submitForm(form));