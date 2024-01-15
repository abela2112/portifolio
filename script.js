const button = document.querySelector('.menu');

button.addEventListener('click', () => {
    document.querySelector('.side-bar').classList.toggle('hidden');
    // document.querySelector('.side-bar').classList.toggle('hidden');

});
const menuButton = document.querySelector('.menu-button');
const navbarLinks = document.querySelector('.navbar-links');

document.addEventListener('DOMContentLoaded', (event) => {
    // Your code here
    const closeBtn = document.querySelector(".close-btn");
    if(closeBtn) { // check if closeBtn is not null
        closeBtn.addEventListener('click', () => {
            document.querySelector('.side-bar').classList.add('hidden');
        });
    }
});

// menuButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
// });

// const closeBtn = document.querySelector(".close-btn")
// console.log("closebtn",closeBtn);
// closeBtn?.addEventListener('click', () => {
//     console.log('closing')
//    // document.querySelector('.side-bar').remove();
// });
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
       
        const img=entry.target
     
        if(entry.isIntersecting){
            console.log('value',entry.isIntersecting) 
            img.classList.add('img-bg-animation')
            return
        }
        img.classList.remove('img-bg-animation')
    })
})
observer.observe(document.querySelector('.img-bg'))