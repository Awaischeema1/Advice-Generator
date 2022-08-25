const fetchAdvice = async() => {
const res = await fetch('https://api.adviceslip.com/advice');
const data = await res.json();
document.querySelector('.advice-num').innerText = `advice #${data.slip.id}`;
document.querySelector('.advice').innerText = `"${data.slip.advice}"`;
}
fetchAdvice();