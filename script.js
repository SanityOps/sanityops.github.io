window.intercomSettings = {
  api_base: "https://api-iam.intercom.io",
  app_id: "izrparmj",
};

const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  logo.classList.add("shake");
  logo.addEventListener(
    "animationend",
    () => {
      logo.classList.remove("shake");
    },
    { once: true },
  );
});
