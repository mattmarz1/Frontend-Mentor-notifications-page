const unreadNotifications = document.querySelectorAll(".unread-notification");
const unreadMessageNames = document.querySelectorAll(
  ".unread-notification .name"
);
const unreadPostGroupNotifications = document.querySelectorAll(
  ".post-group-unread-notification"
);
const unreadPostGroupText = document.querySelectorAll(
  ".post-group-unread-notification .post-group"
);

const markAsReadBtn = document.querySelector(".mark-all-as-read-btn");
const notificationCount = document.querySelector(".notification-count");

for (let i = 0; i < unreadMessageNames.length; i++) {
  unreadMessageNames[i].addEventListener("mouseover", function () {
    callBack(unreadNotifications[i], "hsl(211, 68%, 94%)");
  });

  unreadMessageNames[i].addEventListener("mouseout", function () {
    callBack(unreadNotifications[i], "hsl(210, 60%, 98%)");
  });
}

for (let i = 0; i < unreadPostGroupText.length; i++) {
  unreadPostGroupText[i].addEventListener("mouseover", function () {
    callBack(unreadPostGroupNotifications[i], "hsl(211, 68%, 94%)");
  });

  unreadPostGroupText[i].addEventListener("mouseout", function () {
    callBack(unreadPostGroupNotifications[i], "hsl(210, 60%, 98%)");
  });
}

markAsReadBtn.addEventListener("click", function () {
  notificationCount.textContent = "0";

  document.documentElement.style.setProperty("--pseudoElementDisplay", "none");

  for (let i = 0; i < unreadNotifications.length; i++) {
    unreadNotifications[i].style.backgroundColor = "white";
  }
});

function callBack(el, color) {
  if (notificationCount.textContent !== "0") {
    el.style.backgroundColor = color;
  }
}
