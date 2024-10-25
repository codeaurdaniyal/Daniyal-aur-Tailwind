const [themeChangerBtn, html] = [document.querySelector('#theme-changer-btn'), document.documentElement];
if(!localStorage.getItem('theme-preference')) localStorage.setItem('theme-preference', 'default'); // Set default theme preference if not already set

// Light-Mode Setup
function onLightMode() {
  let [sunIcon, moonIcon] = this.children;
  sunIcon.style.opacity = 0;
  sunIcon.style.transform = 'rotate(-40deg)';
  moonIcon.style.opacity = 1;
  moonIcon.style.transform = 'rotate(0deg)';
};

// Dark-Mode Setup
function onDarkMode() {
  let [sunIcon, moonIcon] = this.children;
  sunIcon.style.opacity = 1;
  sunIcon.style.transform = 'rotate(0deg)';
  moonIcon.style.opacity = 0;
  moonIcon.style.transform = 'rotate(40deg)';
}

// Apply persistent theme on page load or button click
function setPersistentTheme() {
  if(localStorage.getItem('theme-preference') == 'light-mode') {
    onDarkMode.call(this);
    html.classList.add('light-mode');
  }
  else {
    onLightMode.call(this);
    html.classList.remove('light-mode');
  }
};
document.addEventListener('DOMContentLoaded', () => { setPersistentTheme.call(themeChangerBtn) });


// Toggle theme and update localStorage
function setLocalStorageValuesOnCondition() {
  let moonIconOpacity = getComputedStyle(this.children[1]).getPropertyValue('opacity') == 0;
  localStorage.getItem('theme-preference', moonIconOpacity ? localStorage.setItem('theme-preference', 'dark-mode') : localStorage.setItem('theme-preference', 'light-mode'));

  setPersistentTheme.call(this);
};
themeChangerBtn.addEventListener('click', setLocalStorageValuesOnCondition);