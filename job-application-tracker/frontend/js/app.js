const API_URL = "http://localhost:5000/api/applications";
const form = document.getElementById("applicationForm");
const tableBody = document.getElementById("tableBody");

// Fetch and display all applications
async function fetchApplications() {
  const res = await fetch(API_URL);
  const data = await res.json();

  tableBody.innerHTML = "";
  data.forEach(app => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${app.company}</td>
      <td>${app.position}</td>
      <td>${app.status}</td>
      <td>${app.date || ""}</td>
      <td>${app.notes || ""}</td>
      <td>
        <button class="delete-btn" onclick="deleteApplication('${app._id}')">Delete</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

// Add new application
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newApp = {
    company: document.getElementById("company").value,
    position: document.getElementById("position").value,
    status: document.getElementById("status").value,
    date: document.getElementById("date").value,
    notes: document.getElementById("notes").value
  };

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newApp)
  });

  form.reset();
  fetchApplications();
});

// Delete application
async function deleteApplication(id) {
  if (confirm("Are you sure you want to delete this application?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchApplications();
  }
}

// Load data initially
fetchApplications();
