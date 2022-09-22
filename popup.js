document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        const div = document.querySelector('div');
        if (div) div.remove();
        fetch('https://excuser.herokuapp.com/v1/excuse')
        .then(res => res.json())
        .then(data => {
            const div = document.createElement('div');
            div.innerText = data[0].excuse;
            document.body.appendChild(div);            
            })
            
          })
})

// add additonal buttons to provide excuse based on categories https://excuser.herokuapp.com/
//based on category clicked need to add category to end of endpoint
// EX: children button clicked - concatenate excuse url with string children