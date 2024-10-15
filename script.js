body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

.toolbar {
    background-color: #ffffff;
    padding: 10px;
    display: flex;
    gap: 10px;
    border-bottom: 1px solid #ddd;
}

button {
    padding: 8px 12px;
    border: 1px solid #ddd;
    background: #fff;
    cursor: pointer;
    border-radius: 4px;
}

button:hover {
    background-color: #f2f2f2;
}

.canvas {
    position: relative;
    height: calc(100vh - 50px);
    background-color: #ffffff;
    overflow: auto;
    padding: 10px;
}

.element {
    position: absolute;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    resize: both;
    overflow: hidden;
    cursor: move;
}

.text-box {
    padding: 8px;
    font-size: 14px;
    background: #ffffff;
    min-width: 100px;
    min-height: 30px;
}

.shape {
    width: 100px;
    height: 100px;
    background-color: #e0e0e0;
    border-radius: 0;
}

.shape.circle {
    border-radius: 50%;
}
