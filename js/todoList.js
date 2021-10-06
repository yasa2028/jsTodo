/**
 * タスク一覧のリストを作成します。
 */
window.onload = function () {
    var todo = ["Task1", "Task2", "Task3", "Task4", "Task5"];
    todo.forEach(task => {
        var li = document.createElement('li');
            li.textContent = task;
            document.getElementById('todolist').appendChild(li);
    })
}

/**
 * 登録済みのタスク一覧をファイルから取得します。
 * 空やファイルが存在しない場合は空のコレクションを返します。
 * @returns ファイルから読み込んだタスク一覧
 */
function readFile() {
    const file_path = "../data/todolist.txt";
    var reader = new FileReader(file_path);
    var todo_list = [];
    while (reader != null) {
        var line = reader.readAsText(file_path, "UTF-8");
        todo_list.push(reader.readAsText(file_path, "UTF-8"));
    }
    return todo_list;
}