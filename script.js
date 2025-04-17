function openNav() {
    document.getElementById('navBar').style.width = "250px"
}

function closeNav() {
    document.getElementById('navBar').style.width = "0";
}

document.addEventListener("DOMContentLoaded", () => { 
    const randomBtn = document.getElementById('random'); 
    const allCategories = ['mains', 'sides', 'appetizers', 'nons', 
'alchs']; 
 
    randomBtn.addEventListener('click', () => { 
        let allDishes = []; 
 
        allCategories.forEach(categoryId => { 
            const categoryElement = document.getElementById(categoryId); 
            const items = categoryElement.getElementsByTagName('li'); 
 
            for (let item of items) { 
                allDishes.push(item.textContent); 
            } 
        }); 
 
        const resultDiv = document.getElementById('random-result'); 
 
        if (allDishes.length > 0) { 
            const randomDish = allDishes[Math.floor(Math.random() * 
allDishes.length)]; 
            resultDiv.textContent = `Try this dish: ${randomDish}`; 
        } else { 
            resultDiv.textContent = "No dishes found!"; 
        } 
    }); 
}); 