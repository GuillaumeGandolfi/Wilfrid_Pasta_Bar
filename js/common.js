document.addEventListener('DOMContentLoaded', function () {
    loadHeader();
});

function loadHeader() {
    fetch('../html/commons/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error.message);
        });
}