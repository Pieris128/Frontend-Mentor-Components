const markReaded = document.querySelector(".notifications__top--readed");
const readedCounter = document.querySelector(".notifications-count");
const notificationsDot = document.querySelectorAll(
  ".notification-content__main"
);
const notifications = document.querySelectorAll(".notification");

markReaded.addEventListener("click", () => {
  readedCounter.textContent = 0;
  notificationsDot.forEach((not) => {
    not.classList.remove("dot");
  });
  notifications.forEach((not) => {
    not.classList.remove("unreaded");
  });
});
