const blogAnimateText = () => {
  const text = document.querySelector(".sec-text");

  const textLoad = () => {
    setTimeout(() => {
      text.textContent = "Blog";
    }, 0);
    setTimeout(() => {
      text.textContent = "Blog";
    }, 5000);
    setTimeout(() => {
      text.textContent = "Blog";
    }, 10000); //1s = 1000 milliseconds
  };

  textLoad();
  setInterval(textLoad, 15000);
};

blogAnimateText();
