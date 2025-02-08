// App Component
const { useState, useEffect } = React;
function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth >= 1080 ? "desktop" : window.innerWidth >= 400 ? "tablet" : "mobile");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [colorScheme, setColorScheme] = useState("light");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const size = window.innerWidth >= 1080 ? "desktop" : window.innerWidth >= 400 ? "tablet" : "mobile";
      setScreenSize(size);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  useEffect(() => {
    document.body.style.backgroundImage = `url(../starter-code/assets/images/pattern-background-${screenSize}-${colorScheme}.svg)`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";

    // Cleanup function
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundRepeat = "";
    };
  }, [colorScheme, screenSize]);

  useEffect(() => {
    isChecked ? setColorScheme("dark") : setColorScheme("light");
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("./starter-code/data.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
        console.error("Failed to fetch data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header colorScheme={colorScheme} isChecked={isChecked} setIsChecked={setIsChecked} />
    </>
  );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
