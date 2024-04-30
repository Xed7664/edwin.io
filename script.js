document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.name').addEventListener('animationend', function() {
        
        document.querySelector('.heart-container').style.display = 'block';
    });
});