const btn = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.card');
// const search = document.getElementById(search);

for (i = 0; i < btn.length; i++) {

    btn[i].addEventListener('click', (e) => {
        e.preventDefault()
        
        const filter = e.target.dataset.filter;
        console.log(filter);
        
        storeProducts.forEach((product)=> {
            if (filter === 'all'){
                product.style.display = 'flex'
            } else {
                if (product.classList.contains(filter)){
                    product.style.display = 'flex'
                } else {
                    product.style.display = 'none'
                }
            }
        });
    });
};