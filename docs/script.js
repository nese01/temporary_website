const display = document.getElementById('display');
let expression = '';
let result = '';

const buttons = document.querySelectorAll('.b');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        input(value);
    })
});

function input(value){
    if(value === 'C'){
        expression = '';
        result = '';
        updateDisplay('0');
    }
    else if(value === '=') {
        if(expression) {
            try{
            const temp_result = eval(expression);

            result = temp_result.toString();
            updateDisplay(result);
            expression = result;

            } catch {
                updateDisplay('error')
                expression = ''; 
            }
        }
    } else {
        if ((!['+','-','*','/'].includes(value)) && expression === result) {expression = value; result ='';}
        else {expression += value};
        updateDisplay(expression);
    }
}
function updateDisplay(value){
    display.textContent = value;
};