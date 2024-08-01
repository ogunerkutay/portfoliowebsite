function createMatrixBackground() {
    const background = document.createElement('div');
    background.className = 'matrix-background';
    document.body.appendChild(background);

    const characters = '日月水火木金土天地人子母父年中国大小ABCDEFGHIJKLMNOPQRSTUVWXYZабвгдежзийклмнопрстуфхцчшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ0123456789ابتثجحخدذرزسشصضطظعغفقكلمنهوي';
    const colors = ['#ff0000','#00ff00', '#0000ff', '#00ffff'];

    const columnCount = Math.floor(window.innerWidth / 20);

    for (let i = 0; i < columnCount; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${i * 20}px`;
        column.style.color = colors[Math.floor(Math.random() * colors.length)];
        column.style.animationDuration = `${15 + Math.random() * 10}s`;
        column.style.opacity = Math.random() * 0.5 + 0.5;

        let content = '';
        for (let j = 0; j < 50; j++) {
            content += characters[Math.floor(Math.random() * characters.length)] + '<br>';
        }
        column.innerHTML = content;
        background.appendChild(column);
    }
}

window.addEventListener('load', createMatrixBackground);