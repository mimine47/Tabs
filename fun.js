const tabs = document.querySelectorAll('.tab'); 
const tabContents = document.querySelectorAll('.tab-content'); 

tabs.forEach(tab => {
    tab.addEventListener('click',() =>{
        tabs.forEach( t=> t.classList.remove('active'));
        tabContents.forEach(content=> content.classList.remove('active')) ;
        tab.classList.add('active');
        const activeTab = tab.getAttribute('data-tab');
        const activeContent = document.querySelector(`.tab-content[data-tab="${activeTab}"]`);
        activeContent.classList.add('active');        
    });
});





