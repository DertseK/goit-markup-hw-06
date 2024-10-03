document.addEventListener('DOMContentLoaded', function () {
    const orderServiceBtn = document.getElementById('orderServiceBtn');
    const backdrop = document.getElementById('backdrop');
    const closeModalBtn = document.getElementById('closeModalBtn');

    function toggleBackdrop() {
        backdrop.classList.toggle('is-open');
    }

    orderServiceBtn.addEventListener('click', toggleBackdrop);
    closeModalBtn.addEventListener('click', toggleBackdrop);

    // Close the modal if the user clicks outside of it
    backdrop.addEventListener('click', function (event) {
        if (event.target === backdrop) {
            toggleBackdrop();
        }
    });
});