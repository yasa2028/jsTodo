/**
 * ページ読み込み時
 */
window.onload = function () {
    // 検索ボタンにイベント追加
    const searchButton = document.getElementById('searchButton');
    searchButton.setAttribute('click', 'searchTodo()');

    // 登録済みToDoの初期表示
    var todo = ["Task1", "Task2", "Task3", "Task4", "Task5"];
    todo.forEach(task => {
        var li = document.createElement('li');
            li.textContent = task;
            document.getElementById('todoList').appendChild(li);
    })
}

/**
 * 検索ボタンクリック時の絞り込みを行います。
 * 部分一致で検索します。
 */
function searchTodo(keyword) {
    // 引数チェック
    if (!keyword) {
        return;
    }

    // 絞り込み
    // list を読み込む
    const todoList = document.getElementById('todoList');
    // if で 指定のキーワードを含んでいるtodoのみで再度配列を作成する
    todoList.forEach(task => {
        if (task.indexOf(keyword, 0) > 0) {
            // li への追加、初期化も必要？
        }
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