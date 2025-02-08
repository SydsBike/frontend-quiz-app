const { useState } = React;

function Header({ colorScheme, isChecked, setIsChecked }) {
  return (
    <header className="primary-header">
      <img src={`../starter-code/assets/images/icon-sun-${colorScheme === "dark" ? "light" : "dark"}.svg`} />
      <button onClick={() => setIsChecked(!isChecked)} aria-checked={isChecked} role="switch" className="toggle-btn">
        <span />
      </button>
      <img src={`../starter-code/assets/images/icon-moon-${colorScheme === "dark" ? "light" : "dark"}.svg`} />
    </header>
  );
}
