document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  //form submission
  form.addEventListener("submit", (event) => {
    event.preventDefault()

    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;

    if (taskDescription.trim() !== "") {
      //new list item
      const newTask = document.createElement("li");
      newTask.textContent = taskDescription;

      // Color-code tasks by priority
      if (priority === "high") {
        newTask.style.color = "red";
      } else if (priority === "medium") {
        newTask.style.color = "orange";
      } else {
        newTask.style.color = "green";
      }

      //delete button that is added next to each task
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "x";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.style.cursor = "pointer";

      // Remove task when delete button is clicked
      deleteBtn.addEventListener("click", () => {
        newTask.remove();
      });

      newTask.appendChild(deleteBtn);

      // Add the task to the list
      taskList.appendChild(newTask);

      // Clear the form in order to perform the next task
      form.reset();
    }
  });
});


