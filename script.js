const createAccount = document.querySelector(".create_account"),
  form = document.querySelector("#form"),
  backdrop = document.querySelector(".backdrop");

createAccount.addEventListener("click", (e) => {
  e.preventDefault();
  openBackdrop();
  form.classList.add("active");
});

function openBackdrop() {
  backdrop.classList.add("active");
}
function closeBackdrop() {
  backdrop.classList.remove("active");
}

backdrop.addEventListener("click", (e) => {
  e.preventDefault();
  closeBackdrop();
  form.classList.remove("active");
});

const userName = document.querySelector("#username"),
  email = document.querySelector("#email"),
  parol = document.querySelector("#parol"),
  phone = document.querySelector("#phone"),
  cardlar = document.querySelector(".cardlar");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  cardlar.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="card_total">
        <div class="card_top"> 
            <div class="icn_user">
            <i class="fa fa-user-circle-o" ></i>
            </div>
            <div class="icons_vertical">
            <i class="fa fa-facebook-f" ></i>
            <i class="fa fa-github" ></i>
            <i class="fa fa-phone" ></i>
            </div>
        </div>
            <div class="card_button">
                <h4>${userName.value}</h4>
                <h4>${email.value}</h4>
                <h4>${phone.value}</h4>
                <h3>Front-end Developer</h3>
                <div class="stars">
                <i class="material-icons active" >star</i>
                <i class="material-icons active" >star</i>
                <i class="material-icons active" >star</i>
                <i class="material-icons " >star</i>
                <i class="material-icons " >star</i>
                </div>
            </div>
    </div>
    
    `
  );
});
