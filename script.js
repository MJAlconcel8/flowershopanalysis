/* SIDEBAR */
function toggleSidebar() {
  sidebar.classList.toggle("closed");
}

function navigate(id, btn) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".sidebar button").forEach(b => b.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  btn.classList.add("active");
}

/* BIO */
function submitBio(e) {
  e.preventDefault();
  bioMsg.classList.remove("hidden");
}

/* SECURITY */
function checkPassword() {
  if (password.value === "rehearsal123") secureContent.classList.remove("hidden");
  else alert("Incorrect password");
}

/* CALENDAR */
const today = new Date();
let currentDate = new Date(today.getFullYear(), today.getMonth(), 1);
const calendarDays = document.getElementById("calendar-days");
const monthYear = document.getElementById("monthYear");

const events = {
  [`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-10`]: ["Rehearsal"],
  [`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,"0")}-18`]: ["Costume Fitting"]
};

function renderCalendar() {
  const y = currentDate.getFullYear();
  const m = currentDate.getMonth();
  monthYear.textContent = currentDate.toLocaleString("en", { month: "long", year: "numeric" });
  calendarDays.innerHTML = "";

  const firstDay = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();

  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += `<div class="day"></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const key = `${y}-${String(m+1).padStart(2,"0")}-${String(d).padStart(2,"0")}`;
    const isToday = d === today.getDate() && m === today.getMonth() && y === today.getFullYear();

    let html = `<div class="day ${isToday ? "today" : ""}"><strong>${d}</strong>`;
    if (events[key]) events[key].forEach(e => html += `<div class="event">${e}</div>`);
    html += `</div>`;
    calendarDays.innerHTML += html;
  }
}

function changeMonth(n) {
  currentDate.setMonth(currentDate.getMonth() + n);
  renderCalendar();
}

renderCalendar();
