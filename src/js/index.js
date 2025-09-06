/* Your JS here. */
console.log('Hello World!')

const button = document.getElementById('button');

const colors = ['white','red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let i = 0;

button.addEventListener('click', function() {
    document.body.style.backgroundColor = colors[i];
    i++;

    if (i >= colors.length) {
        i = 0;
    }
});