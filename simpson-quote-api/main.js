import axios from "axios";

async function simpsonQuote() {
  try {
    const simpsonData = 
    await axios.get("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
  console.log(simpsonData);
  if (simpsonData.status == 200){
    return simpsonData.data  
  } else {
    return null;
  }
  //return simspon.Data.data 
  } catch(error){
    console.log("There's an error!");
  }
}
 function showSimpsonQuote(){
  
  const simpsonQuoteContainer = document.getElementById ("simpsonQuoteContainer");

  const simpsonQuoteButton = document.getElementById("cd");

 

  simpsonQuoteButton.addEventListener("click", async function(){
  
  const newSimpson = await simpsonQuote();
console.log(newSimpson[0].quote) 

 newSimpson.map(quoteObject=> {
  console.log(quoteObject.quote);

  const newImgElement = document.createElement("img");
  newImgElement.src = quoteObject.image
  simpsonQuoteContainer.append(newImgElement)
 })

  }) 
 
  }
showSimpsonQuote();
