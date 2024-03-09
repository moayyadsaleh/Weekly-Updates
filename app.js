// Retrieve saved instructors from local storage
let instructors = JSON.parse(localStorage.getItem("instructors")) || [];

// Function to render instructors list
function renderInstructors() {
  const instructorList = document.getElementById("instructorList");
  instructorList.innerHTML = "<h3>Saved Instructors:</h3>";
  instructors.forEach((instructor, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
          <p><strong>Name:</strong> ${instructor.name}</p>
          <p><strong>Location:</strong> ${instructor.location}</p>
          <p><strong>Number of Students:</strong> ${instructor.students}</p>
          <p><strong>Class Start Date:</strong> ${instructor.startDate}</p>
          <p><strong>Class End Date:</strong> ${instructor.endDate}</p>
          <p><strong>Students' Level:</strong> ${instructor.level}</p>
          <p><strong>Delivery Method:</strong> ${instructor.deliveryMethod}</p>
          <p><strong>Notes:</strong> ${instructor.notes}</p>
          <button onclick="editInstructor(${index})">Edit</button>
          <button onclick="deleteInstructor(${index})">Delete</button>
        `;
    instructorList.appendChild(div);
  });
}

// Function to add new instructor
function addInstructor(event) {
  event.preventDefault();
  const form = event.target;
  const newInstructor = {
    name: form.name.value,
    location: form.location.value,
    students: form.students.value,
    startDate: form.startDate.value,
    endDate: form.endDate.value,
    level: form.level.value,
    deliveryMethod: form.deliveryMethod.value,
    notes: form.notes.value,
  };
  instructors.push(newInstructor);
  localStorage.setItem("instructors", JSON.stringify(instructors));
  form.reset();
  renderInstructors();
}

// Function to edit instructor
function editInstructor(index) {
  const editedInstructor = instructors[index];
  // Display the edited instructor in the form for editing
  document.getElementById("name").value = editedInstructor.name;
  document.getElementById("location").value = editedInstructor.location;
  document.getElementById("students").value = editedInstructor.students;
  document.getElementById("startDate").value = editedInstructor.startDate;
  document.getElementById("endDate").value = editedInstructor.endDate;
  document.getElementById("level").value = editedInstructor.level;
  document.getElementById("deliveryMethod").value =
    editedInstructor.deliveryMethod;
  document.getElementById("notes").value = editedInstructor.notes;

  // Remove the edited instructor from the list
  instructors.splice(index, 1);
  localStorage.setItem("instructors", JSON.stringify(instructors));

  // Render the updated list
  renderInstructors();
}

// Function to delete instructor
function deleteInstructor(index) {
  instructors.splice(index, 1);
  localStorage.setItem("instructors", JSON.stringify(instructors));
  renderInstructors();
}

// Event listener for form submission
document
  .getElementById("instructorForm")
  .addEventListener("submit", addInstructor);

// Initial rendering of instructors
renderInstructors();
