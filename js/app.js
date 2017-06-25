document.addEventListener("DOMContentLoaded", function() {
    var placeholder = document.querySelector("#taskInput");
    var span = document.querySelector("#counter");
    var submitButton = document.querySelector("#addTaskButton");
    var taskList = document.querySelector("#taskList");
    var removeFinishedTasksButton = document.querySelector("#removeFinishedTasksButton");
    var counter = 0;

    removeFinishedTasksButton.addEventListener("click", function() {
        var completeList = document.querySelectorAll(".complete");

        for (var i = 0; i < completeList.length; i++) {
            completeList[i].parentElement.removeChild(completeList[i]);
            counter--;
            span.innerHTML = "Things to do: " + counter;
        }
    });

    submitButton.addEventListener("click", function() {
        var task = placeholder.value;

        if (task.length < 5 || task.length > 100) {
            return;
        }

        var newLi = document.createElement("li");
        var tempLi = taskList.appendChild(newLi);

        var newH2 = document.createElement("h2");
        newH2.innerHTML = task;

        var thingDone = tempLi.appendChild(newH2);
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";

        var deleteBtn = tempLi.appendChild(deleteButton);

        var completeButton = document.createElement("button");
        completeButton.innerHTML = "Complete";

        var completeBtn = tempLi.appendChild(completeButton);

        counter++;

        span.innerHTML = "Things to do: " + counter;

        placeholder.value = " ";

        deleteBtn.addEventListener("click", function() {
            this.parentElement.parentElement.removeChild(this.parentElement);
            counter--;
            span.innerHTML = "Things to do: " + counter;
        });

        completeBtn.addEventListener("click", function() {
            this.parentElement.classList.add("complete");
        });
    });
});
