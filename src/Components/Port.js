
const divs = document.querySelectorAll('.gallery-wrapper div');
const fullscreenView = document.querySelector('.image-view');
const cancelBtn = document.getElementById('cancel-btn');

divs.forEach(function(BG, idx){
    BG.addEventListener('click', function(){
        fullscreenView.style.display = "block";

        fullscreenView.style.background = `url(gallery/img${idx + 1}.jpg) center/cover no-repeat`;
    })
})

cancelBtn.addEventListener('click', function(){
    fullscreenView.style.display = "none";
})