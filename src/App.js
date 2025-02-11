// App Component

const { useState, useEffect } = React;





function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    //cleanup function

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log(screenSize);

  return (
    <>
      <h1>Hello</h1>
      <img src={assetData.iconAccessibility} />
      <img src={assetData.iconCorrect} />
      <img src="../src/assets/images/icon-incorrect.svg" />
    </>
  );
}
