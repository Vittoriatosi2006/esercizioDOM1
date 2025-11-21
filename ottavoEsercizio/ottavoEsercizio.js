async function fetchData() {
  try {
    const response = await fetch("https://ringsdb.com/api/public/card/01001");
    const responseJson = await response.json();

    console.log(responseJson);

    const name = responseJson.name;
    const imageUrl = responseJson.imageUrl;

    const h1 = document.querySelector(".character-name");
    const image = document.querySelector(".character-image");

    h1.innerText = name;
    image.setAttribute("src", imageUrl);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
