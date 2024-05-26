function dobavit_otziv() {
      debugger
      let textarea =  document.getElementById("textarea")
      let delo = textarea.value
      let div =  document.createElement("div")
      div.innerText = delo
      div.classList.add("css-delo")
     let new_otziv = document.getElementById("new_otziv")
     new_otziv.append(div)
      textarea.value=""
   }