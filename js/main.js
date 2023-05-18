 // 다크모드 토글 함수
 function toggleDarkMode() {
  const root = document.documentElement;
  const isDarkMode = root.getAttribute("data-theme") === "dark";

  if (isDarkMode) {
      root.removeAttribute("data-theme");
  } else {
      root.setAttribute("data-theme", "dark");
  }
}


