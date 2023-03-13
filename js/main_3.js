let formWrap = document.getElementById('form-wrap')
let showPassword = document.getElementById('showPassword')
let password = document.getElementById("password")

let CHAR = ['form-wrap', 'fieldset','form','legend','but','input','password','showPassword','submit'];
let Bool = false;


window.addEventListener('click', function(e) {
    for(let item of CHAR){
        if(item == e.target.id){Bool=true;}
    }

   if(Bool){
        formWrap.classList.add('open');
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


input.onblur = function() {
    if (!this.value.includes('@')) { 
      this.setCustomValidity("ввод не верный. пример: SSD@gmail.com");
    }else{
        this.setCustomValidity("");
    }
    let f =this.value.charCode;
    
};

password.onblur = function(){
    if (this.value.length<6) { 
        this.setCustomValidity("введите не мение 6 символов");
    }else{
        this.setCustomValidity("");
    }
    if (this.value.length>12) {
        password.value=this.value.substr(0, 12)
    }
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
  