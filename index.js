const inputResponse1 = document.querySelector(".input-response-1");
const inputResponse2 = document.querySelector(".input-response-2");
const responseCorrect1 = document.querySelector(".response-correct-1");
const responseCorrect2 = document.querySelector(".response-correct-2");
const formResponse = document.querySelector(".form-response");
const boxSelect = document.querySelector(".input-box-select");
const options = document.querySelector(".options");
const content = document.querySelector(".content");
const error = document.querySelector('.error');

inputResponse1.addEventListener('change', ()=>{
    const value = inputResponse1.value;
    if(value === '20'){
        inputResponse1.classList.remove('input-response-1');
        inputResponse1.classList.add('response-off-1');
        responseCorrect1.classList.add('response-correct-on-1');
        responseCorrect1.innerHTML = value;

    }else{
        error.classList.remove('error');
        error.classList
        .add('error-on');
        inputResponse1.style.borderTopLeftRadius = '0';
        inputResponse1.style.borderBottomLeftRadius = '0';
    }
});

error.addEventListener('click', ()=>{
    error.classList
    .remove('error-on');
    error.classList.add('error');
    inputResponse1.focus();
    inputResponse1.value = '';
})

inputResponse1.addEventListener('focus', ()=>{
    inputResponse1.addEventListener('keydown', (e)=>{
        if(e.keyCode === 13){
            e.preventDefault();
            const value = inputResponse1.value;
            if(value === '20'){
                inputResponse1.classList.remove('input-response-1');
                inputResponse1.classList.add('response-off-1');
                responseCorrect1.classList.add('response-correct-on-1');
                responseCorrect1.innerHTML = value;

            }else{
                error.classList.remove('error');
                error.classList
                .add('error-on');
                inputResponse1.style.borderTopLeftRadius = '0';
                inputResponse1.style.borderBottomLeftRadius = '0';
            }
        }
    })
});

boxSelect.addEventListener('mouseenter', ()=>{
    options.classList.remove('options');
    options.classList.add('options-on');
    const optionsList = options.querySelectorAll('.option');

    optionsList.forEach(option => {

        option.addEventListener('click', ()=>{
            const value = option.innerHTML;
            if(value == 2){
                inputResponse2.classList.remove('input-response-2');
                inputResponse2.classList.add('response-off-2');
                responseCorrect2.classList.add('response-correct-on-2');
                options.classList.remove('options-on');
                options.classList.add('options');
                responseCorrect2.innerHTML = value;
            }else{
                inputResponse2.value = value;
            }
        })
    });
});

content.addEventListener('mouseleave', ()=>{
    
    options.classList.remove('options-on');
    options.classList.add('options');
});


inputResponse2.addEventListener('click', ()=>{
    inputResponse2.disabled = true;
    options.classList.remove('options');
    options.classList.add('options-on');
    const optionsList = options.querySelectorAll('.option');

    optionsList.forEach(option => {
    option.addEventListener('click', ()=>{
        const value = option.innerHTML;
        if(value == 2){
            inputResponse2.classList.remove('input-response-2');
            inputResponse2.classList.add('response-off-2');
            responseCorrect2.classList.add('response-correct-on-2');
            options.classList.remove('options-on');
            options.classList.add('options');
            responseCorrect2.innerHTML = value;
        }else{
            inputResponse2.value = value;
        }
    })
    });
})