const forms = document.querySelectorAll('.needs-validation')

// Bucle
Array.from(forms).forEach(form => {
  form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
      event.preventDefault()
      event.stopPropagation()
    }

    form.classList.add('was-validated')
  }, false)
})



// const formm = document.getElementById("formm")
// const sendMail = document.getElementById("emailA")

// function handleSendEmail(event) {
//   event.preventDefault()
//   const fd = new FormData(this)

//   sendMail.setAttribute(
//     'href',
//     `mailTo:capellomalena05@gmail.com?validationCustom01=${fd.get("validationCustom01")}&validationCustom02=${fd.get("validationCustom02")}&validationCustomUsername=${fd.get("validationCustomUsername")}&Escriba su mensaje aquí ...=${fd.get("Escriba su mensaje aquí ...")}`
//     )
  
   
//   sendMail.click()

// }

// formm.addEventListener("submit", handleSendEmail)














