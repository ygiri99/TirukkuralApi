//creating element function
function element(ele) {
  return document.createElement(ele);
}
var i = 1; //Initial numbered url
//Content div
const div = element("div");
div.className = "text-center mt-2";
//Header
const h1 = element("h1");
h1.innerText = "TIRUKKURAL";
h1.className = "text-center text-success";

//Initial display call
kural(i);
//Fetching data in function kural
async function kural(n) {
  try {
    let url = "https://api-thirukkural.vercel.app/api?num=" + n;
    //console.log(url);
    const response = await fetch(url);

    const data = await response.json();
    //console.log(data);

    div.innerText = "";
    //kural n of 1330
    const number = element("b");
    number.className = "text-start";
    number.innerText = data.number;
    //English laguage kural
    const divE = element("div");
    divE.className = "border border-success m-4";
    const chap = element("p");
    chap.className = "text-secondary text-decoration-underline fs-5";
    const sect = element("p");
    sect.className = "d-block text-primary fs-4";
    const poem = element("P");
    const expl = element("p");
    sect.innerText = data.sect_eng;
    chap.innerText = data.chap_eng;
    poem.innerText = '"' + data.eng + '"';
    poem.className = "fst-italic";
    expl.innerText = data.eng_exp;
    divE.append(sect, chap, poem, expl);

    //Tamil language
    const divT = element("div");
    divT.className = "border border-info m-4";
    const Tchap = element("p");
    Tchap.className = "text-secondary text-decoration-underline fs-5";
    const Tsect = element("p");
    Tsect.className = "d-block text-primary fs-4";
    const Tpoem = element("P");
    Tpoem.className = "fst-italic";
    const Texpl = element("p");
    Tchap.innerText = data.chap_tam;
    Tsect.innerText = data.sect_tam + ":";
    Tpoem.innerText = '"' + `${data.line1}\n${data.line2}` + '"';
    Texpl.innerText = data.tam_exp;
    divT.append(Tsect, Tchap, Tpoem, Texpl);

    div.append(number, divE, divT);
  } catch (err) {
    console.log(err);
  }
}

//Button div
const btnDiv = element("div");
btnDiv.className = "text-center";
//Next btn
const btn = element("button");
btn.className = "btn btn-outline-danger";
btn.innerText = "Next";
btnDiv.append(btn);
document.body.append(h1, div, btnDiv);

//Event for next button
btn.addEventListener("click", () => {
  i = i + 1;
  kural(i);
});
