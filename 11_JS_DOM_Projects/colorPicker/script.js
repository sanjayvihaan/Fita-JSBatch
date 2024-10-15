let colorPicker = document.getElementById('colorPicker');
let colorBox = document.getElementById('colorBox');

colorPicker.addEventListener('input', function() {
    colorBox.style.backgroundColor = colorPicker.value;
})
