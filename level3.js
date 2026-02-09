/* =======================
   BASIC ELEMENTS
======================= */
const overlay = document.getElementById('overlay');
const agreeButton = document.getElementById('agreeButton');
const agreeButton1 = document.getElementById('agreeButton1');
const audio = document.getElementById('ado');

const btnn = document.getElementById('C16');
const elements = document.querySelectorAll('.el');
const NL = document.getElementById('NL');
const CNT = document.getElementById('CNT');
const TA = document.getElementById('TA');

/* =======================
   STATE
======================= */
let overlayClosed = false;
let draggedImage = null;

/* =======================
   OVERLAY / CONTINUE LOGIC
======================= */
agreeButton.addEventListener('click', () => {
  audio.play().catch(() => {});
  overlay.style.display = 'none';
  overlayClosed = true;
});

agreeButton1.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayClosed = true;
});

/* =======================
   DRAG & DROP LOGIC
======================= */
document.querySelectorAll('#elimgdiv > div').forEach(img => {
  img.addEventListener('dragstart', () => {
    draggedImage = img;
  });
});

elements.forEach(el => {
  el.addEventListener('dragover', e => e.preventDefault());

  el.addEventListener('drop', () => {
    if (!draggedImage) return;

    el.appendChild(draggedImage);
    resizeImage(draggedImage);
  });
});




/* =======================
   HELPER
======================= */
function resizeImage(img) {
  img.style.width = '165px';
  img.style.height = '86.1px';
  img.style.margin = '0';
}



// hide wrong screen initially



btnn.addEventListener('click', () => {
    const unattempted =
      eldiv.contains(imageH) ||
      eldiv.contains(imageHe) ||
      eldiv.contains(imageLi) ||
      eldiv.contains(imageBe);
  
    const wrong =
      hydrogen.classList.contains('redb') ||
      helium.classList.contains('redb') ||
      lithium.classList.contains('redb') ||
      beryllium.classList.contains('redb');
  
    const correct =
  
    // RESET ALL
    CNT.style.visibility = 'hidden';
    TA.style.visibility = 'hidden';
    NL.style.visibility = 'hidden';
  
    if (unattempted) {
      CNT.style.visibility = 'visible';
      return;
    }
  
    if (wrong) {
      TA.style.visibility = 'visible';
      return;
    }
  
    if (correct) {
      NL.style.visibility = 'visible';
    }
  });



  sub.addEventListener('click', () => {
    const unattempted =
      eldiv.contains(imageH) ||
      eldiv.contains(imageHe) ||
      eldiv.contains(imageLi) ||
      eldiv.contains(imageBe);
  
    const wrong =
      hydrogen.classList.contains('redb') ||
      helium.classList.contains('redb') ||
      lithium.classList.contains('redb') ||
      beryllium.classList.contains('redb');
  
    const correct =
      hydrogen.contains(imageH) &&
      helium.contains(imageHe) &&
      lithium.contains(imageLi) &&
      beryllium.contains(imageBe);
  
    // RESET ALL
    CNT.style.visibility = 'hidden';
    TA.style.visibility = 'hidden';
    NL.style.visibility = 'hidden';
  
    if (unattempted) {
      CNT.style.visibility = 'visible';
      return;
    }
  
    if (wrong) {
      TA.style.visibility = 'visible';
      return;
    }
  
    if (correct) {
      NL.style.visibility = 'visible';
    }
  });
  