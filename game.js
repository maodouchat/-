document.addEventListener('DOMContentLoaded', () => {
    const boardElement = document.getElementById('board');

    // 初始化棋盘
    for (let i = 0; i < 225; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => {
            cell.classList.add('occupied');
        });
        boardElement.appendChild(cell);
    }
});
