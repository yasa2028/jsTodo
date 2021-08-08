window.onload = function () {
    var todo = ['デザインカンプ作成', 'データ整理', '勉強会申し込み', '牛乳買う'];
    todo.forEach(task => {
        var li = document.createElement('li');
            li.textContent = task;
            document.getElementById('list').appendChild(li);
    })
}