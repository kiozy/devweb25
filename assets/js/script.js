// Carrega o menu externo
$(function () {
  $("#menu").load("menu.html", function () {
    const current =
      location.pathname.split("/").pop().replace(".html", "") || "index";
    $(`#menu a[data-page="${current}"]`).addClass("active");
  });
});

// Mover card na página principal
function allowDrop(ev) {
        ev.preventDefault();
      }

      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        ev.target.classList.add("dragging");
      }

      function drop(ev) {
        ev.preventDefault();
        const data = ev.dataTransfer.getData("text");
        const card = document.getElementById(data);
        const target = ev.currentTarget;
        if (target.classList.contains("kanban-column")) {
          target.appendChild(card);

          // Estilização condicional
          if (target.querySelector(".kanban-title").innerText === "Concluída") {
            card.classList.add("completed-card");
            card.querySelectorAll(".card-title, .card-text").forEach(el => el.classList.add("text-muted"));
          } else {
            card.classList.remove("completed-card");
            card.querySelectorAll(".card-title, .card-text").forEach(el => el.classList.remove("text-muted"));
          }
        }
        card.classList.remove("dragging");
      }