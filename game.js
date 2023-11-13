const boardElement = document.getElementById('board');

// 初始化棋盘
for (let i = 0; i < 225; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    boardElement.appendChild(cell);
}

// 添加点击事件监听器
boardElement.addEventListener('click', (event) => {
    // 在这里添加放置棋子的逻辑
});
