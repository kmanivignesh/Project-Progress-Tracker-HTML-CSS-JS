  
        function addRow() {
            var projectName = document.getElementById("projectName").value;
            var progressPercentage = document.getElementById("progressPercentage").value;
            var taskList = document.getElementById("taskList").innerHTML;
            var status = progressPercentage == "100" ? "Completed" : "Incomplete";

            var table = document.getElementById("progressTable").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.rows.length);
            newRow.innerHTML = `<td>${projectName}</td>
                                <td>
                                    <div class="progress-bar">
                                        <div class="progress" style="width: ${progressPercentage}%;"></div>
                                    </div>
                                    <p>${progressPercentage}%</p>
                                </td>
                                <td>${taskList}</td>
                                <td style="background-color: ${status == 'Completed' ? 'green' : 'red'};color:white;">${status}</td>`;
        }

        function deleteRow() {
            var table = document.getElementById("progressTable").getElementsByTagName('tbody')[0];
            if (table.rows.length > 0) {
                table.deleteRow(table.rows.length - 1);
            }
        }

    

        function deleteItem() {
            var taskList = document.getElementById("taskList");
            if (taskList.children.length > 0) {
                taskList.removeChild(taskList.lastChild);
            }
        }

        function clearList() {
            var taskList = document.getElementById("taskList");
            taskList.innerHTML = '';
        }

        function addTask() {
            var taskList = document.getElementById("taskList");
            var newTask = document.createElement('li');
            newTask.textContent = document.getElementById("taskName").value;
            taskList.appendChild(newTask);
        }