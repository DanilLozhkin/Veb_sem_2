let formWrap = document.getElementById('form-wrap')
let showPassword = document.getElementById('showPassword')
let password = document.getElementById("password")
let CHAR = ['form-wrap', 'fieldset','form','p','but','input','password','showPassword','submit'];
let newLi = document.getElementById('p');
let strok = '', strok_2 = '';

document.body.addEventListener('click', function (e) {
    if ('but' == e.target.id) {
        formWrap.classList.add('open');
    } else if(!CHAR.includes(e.target.id)) {
        formWrap.classList.remove('open');
    }
    if(strok.length == 0 && strok_2.length == 0){
        newLi.innerHTML ="всё хорошо";
    }

});


showPassword.addEventListener("pointerdown", () => {
    password.type = "text"
})

showPassword.addEventListener("pointerup", () => {
    password.type = "password"
})

input.onblur = function () {
    if (this.validity.typeMismatch) {
        this.setCustomValidity("ввод не верный. пример: SSD@gmail.com");
        strok = 'ввод не верный. пример: SSD@gmail.com,   ';
    } else {
        this.setCustomValidity("");
        strok = '';
    }

    newLi.innerHTML = strok + strok_2;

};

password.onblur = function () {
    if (this.validity.tooShort) {
        this.setCustomValidity("введите не мение 6 символов");
        strok_2 = 'введите не мение 6 символов,  ';
    } else {
        this.setCustomValidity("");
        strok_2 = '';
    }
    if (this.value.length > 12) {
        password.value = this.value.substr(0, 12)
        strok_2 = 'слишком большой пароль был укорочен до 12';
    }
    newLi.innerHTML = strok + strok_2;
    //p.appendChild(newLi);

};


form.addEventListener('submit', (event) => {
    event.preventDefault();
    let formData = new FormData();

    formData.append('email', input.value);
    formData.append('password', password.value);

    for (let [name, value] of formData) {
        console.log(`${name} = ${value}`);
    }
});

