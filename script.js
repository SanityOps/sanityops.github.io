window.intercomSettings = {
  api_base: "https://api-iam.intercom.io",
  app_id: "izrparmj",
};

const logo = document.getElementById("logo");

const shakeLogo = () => {
  logo.classList.add("shake");
  logo.addEventListener(
    "animationend",
    () => {
      logo.classList.remove("shake");
    },
    { once: true },
  );
};

window.addEventListener("DOMContentLoaded", shakeLogo);

logo.addEventListener("click", shakeLogo);
