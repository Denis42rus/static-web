document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const button = document.getElementById("add-button");
  const ul = document.querySelector("ul");

  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const taskText = input.value.trim();

      if (taskText !== "") {
        createTask(taskText);
      }
    }
  });

  button.addEventListener("click", () => {
    const taskText = input.value.trim();

    if (taskText !== "") {
      createTask(taskText);
    }
  });

  const createTask = () => {
    const task = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = () => {
      if (checkbox.checked) {
        task.style.textDecoration = "line-through";
      } else {
        task.style.textDecoration = "none";
      }
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      task.remove();
    };

    const text = document.createElement("span");
    text.textContent = input.value;

    task.appendChild(checkbox);
    task.appendChild(text);
    task.appendChild(deleteButton);
    ul.appendChild(task);

    input.value = "";
  };
});
