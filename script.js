function addTextBox() {
    const canvas = document.getElementById('canvas');
    const textBox = document.createElement('div');
    textBox.className = 'text-box';
    textBox.contentEditable = true;
    textBox.style.left = '50px';
    textBox.style.top = '50px';
    textBox.style.width = '150px';
    textBox.innerHTML = '<textarea placeholder="Type here..."></textarea>';
    canvas.appendChild(textBox);

    makeDraggable(textBox);
}

function addImage() {
    const imageUrl = prompt('Enter the URL of the image:');
    if (imageUrl) {
        const canvas = document.getElementById('canvas');
        const img = document.createElement('img');
        img.src = imageUrl;
        img.style.position = 'absolute';
        img.style.left = '50px';
        img.style.top = '50px';
        img.draggable = true;
        canvas.appendChild(img);

        makeDraggable(img);
    }
}

function addShape() {
    const canvas = document.getElementById('canvas');
    const shape = document.createElement('div');
    shape.className = 'shape';
    shape.style.left = '100px';
    shape.style.top = '100px';
    canvas.appendChild(shape);

    makeDraggable(shape);
}

function makeDraggable(element) {
    element.onmousedown = function(event) {
        const shiftX = event.clientX - element.getBoundingClientRect().left;
        const shiftY = event.clientY - element.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            element.style.left = pageX - shiftX + 'px';
            element.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.addEventListener('mousemove', onMouseMove);

        element.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            element.onmouseup = null;
        };
    };

    element.ondragstart = function() {
        return false;
    };
}
