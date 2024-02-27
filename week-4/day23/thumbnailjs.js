document.querySelectorAll('.thumbnail').forEach(function(element) {
    element.addEventListener('click', function(event) {
        document.getElementById('main-img').src = event.target.src;
    });
});