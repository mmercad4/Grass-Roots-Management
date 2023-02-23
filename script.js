const player1Drag = document.querySelector("#player-1");

player1Drag.addEventListener("dragstart", (ev) => {
  console.log("Drag Started");

  ev.currentTarget.classList.add("dragging");

  ev.dataTransfer.clearData();

  ev.dataTransfer.setData("text/plain", ev.target.id);
});

player1Drag.addEventListener("dragend", (ev) => {
  ev.target.classList.remove("dragging");
});

const target = document.querySelector("#field-target");
const parenttarget = document.querySelector(".information__field")

target.addEventListener("dragover", (ev) => {
  console.log("Drag Over");
  ev.preventDefault();
});

target.addEventListener("drop", (ev) => {
  console.log("DROP");

  ev.preventDefault();

  const data = ev.dataTransfer.getData("text");
  const source = document.getElementById(data);
  
  source.removeAttribute("#player-1");
  source.classList.add("player-icon-map");
  ev.target.appendChild(source);

  const player = document.createElement('div');
  player.classList.add("player-icon-map");
  player.textContent = "15";
  ev.parentTarget.appendChild(player);

});
