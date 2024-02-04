let Add = document.querySelector('.Add');
let Minus = document.querySelector('.Minus');
let Multiply = document.querySelector('.Multiply');
let Divide = document.querySelector('.Divide');
let sum;


Add.addEventListener('click', function(e){
    let first_number = parseInt(document.querySelector('.firstnum').value);
    let second_number = parseInt(document.querySelector('.secondnum').value);
    sum = first_number + second_number;
    
    document.querySelector('.ans').innerHTML = sum.toLocaleString();
        
        if(!first_number){
            alert('First number is not filled')
        }else if(!second_number){
            alert('Second number is not filled')
        }

        
    
})

Minus.addEventListener('click', function(e){
    let first_number = parseInt(document.querySelector('.firstnum').value);
    let second_number = parseInt(document.querySelector('.secondnum').value);
    sum = first_number - second_number;
    
    document.querySelector('.ans').innerHTML = sum.toLocaleString();
   
    
})
Multiply.addEventListener('click', function(e){
    let first_number = parseInt(document.querySelector('.firstnum').value);
    let second_number = parseInt(document.querySelector('.secondnum').value);
    sum = first_number * second_number;
    
    document.querySelector('.ans').innerHTML = sum.toLocaleString();
  
    
    
})
Divide.addEventListener('click', function(e){
    let first_number = parseInt(document.querySelector('.firstnum').value);
    let second_number = parseInt(document.querySelector('.secondnum').value);
    sum = first_number / second_number;
    
    document.querySelector('.ans').innerHTML = sum.toFixed(2);
 
    
})


