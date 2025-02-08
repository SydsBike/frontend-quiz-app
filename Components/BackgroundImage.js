function BackgroundImage({ screenSize, colorScheme }) {
  if (colorScheme === "light") {
    return screenSize > 720 ? <img src="../starter-code/assets/images/pattern-background-desktop-light.svg" /> : screenSize > 420 ? <img src="../starter-code/assets/images/pattern-background-tablet-light.svg" /> : <img src="../starter-code/assets/images/pattern-background-mobile-light.svg" />;
  } else if (colorScheme === " dark") {
        return screenSize > 720 ? <img src="../starter-code/assets/images/pattern-background-desktop-dark.svg" /> : screenSize > 420 ? <img src="../starter-code/assets/images/pattern-background-tablet-dark.svg" /> : <img src="../starter-code/assets/images/pattern-background-mobile-dark.svg" />;

  }


}
