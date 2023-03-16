let formWrap = document.getElementById('form-wrap')
let showPassword = document.getElementById('showPassword')
let password = document.getElementById("password")

let CHAR = ['form-wrap', 'fieldset','form','legend','but','input','password','showPassword','submit'];
let Bool = false;


document.body.addEventListener('click', function(e) {
    for(let item of CHAR){
        if(item == e.target.id){Bool=true;}
    }

   if(Bool){
        if('but'==e.target.id){
            formWrap.classList.add('open');
        }
        
    }else{
        formWrap.classList.remove('open');
    }
    Bool = false;
});


showPassword.addEventListener("pointerdown", ()=>{
    password.type="text"
})

showPassword.addEventListener("pointerup", ()=>{
    password.type="password"
})

let newLi = document.createElement('p');

input.onblur = function() {
    if (this.validity.typeMismatch) { 
      this.setCustomValidity("ввод не верный. пример: SSD@gmail.com");
      newLi.innerHTML = 'ввод не верный. пример: SSD@gmail.com';
     
    }else{
        this.setCustomValidity("");
        newLi.innerHTML = '';
        
    }
    //let f =this.value.charCode;
    p.appendChild(newLi);
};

password.onblur = function(){
    if (this.validity.tooShort) { 
        this.setCustomValidity("введите не мение 6 символов");
        newLi.innerHTML = 'введите не мение 6 символов';
    }else{
        this.setCustomValidity("");
        newLi.innerHTML = '';
    }
    if (this.value.length>12) {
        password.value=this.value.substr(0, 12)
        newLi.innerHTML = 'слишком большой пароль был укорочен до 12';
    }
    p.appendChild(newLi);
};


form.addEventListener('submit', (event) => { 
    event.preventDefault();
    let formData = new FormData();

    formData.append('email', input.value);
    formData.append('password', password.value);

    for(let [name, value] of formData) {
        console.log(`${name} = ${value}`);
      }
   });
   
