let string = "";
let buttons = document.querySelectorAll('.button1, .button3, .button4');

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '=')
        {
            string = eval(string);
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
            return;
        }
        else {
            string = string + e.target.innerHTML;
        }
        document.querySelector('input').value = string;
    })
});
