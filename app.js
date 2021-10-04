window.addEventListener('load', () => {
  const handleMenuBar = () => {
    document.getElementById('nav-mob').style.display = 'flex';
    const showNav = Array.from(document.querySelectorAll('hide-menu-bar'));
    showNav.forEach((element) => { element.style.display = 'none'; });
  };

  const hideMenuBar = () => {
    document.getElementById('nav-mob').style.display = 'none';
    const hideNav = Array.from(document.querySelectorAll('hide-menu-bar'));
    hideNav.forEach((element) => { element.style.display = 'flex'; });
  };

  document.getElementById('menu-bar').addEventListener('click', handleMenuBar);
  document.getElementById('close-btn').addEventListener('click', hideMenuBar);
  document.getElementById('btn-nav2').addEventListener('click', hideMenuBar);
});
