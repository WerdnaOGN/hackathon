document.addEventListener('DOMContentLoaded', () => {
    const random = document.querySelector('#random');
    random.addEventListener('click', async () => {
        const excuse = document.querySelector('#excuse');
        const res = await fetch('https://excuser.herokuapp.com/v1/excuse');
        const data = await res.json();
        excuse.innerText = data[0].excuse;
    })

    const categories = document.querySelectorAll('.category');
    categories.forEach(category => category.addEventListener('click', () => {
        const id = category.getAttribute('id');
        fetchExcuse(id);
    }))
})

async function fetchExcuse(category) {
    const res = await fetch(`https://excuser.herokuapp.com/v1/excuse/${category}`);
    const data = await res.json();
    const excuse = document.querySelector('#excuse');
    excuse.innerText = data[0].excuse;
}

// add additonal buttons to provide excuse based on categories https://excuser.herokuapp.com/
//based on category clicked need to add category to end of endpoint
// EX: children button clicked - concatenate excuse url with string children