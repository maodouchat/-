document.getElementById('height-form').onsubmit = function(event) {
    // 阻止表单默认提交行为
    event.preventDefault();

    // 获取用户输入的身高值
    var height = document.getElementById('height').value;

    // 检查身高值是否合法
    if (height <= 0) {
        alert("请输入有效的身高！");
        return;
    }

    // 显示结果
    document.getElementById('result').textContent = "您的身高是 " + height + " 厘米。";
};
