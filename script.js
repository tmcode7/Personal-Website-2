const toggleSwitch = document.querySelector('.switch')

toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})