/* =======================
   BASIC ELEMENTS
======================= */
const playButton = document.getElementById('agreeButton');
const playButton1 = document.getElementById('agreeButton1');
const audio = document.getElementById('ado');
const overlay = document.getElementById('overlay');

const settingsButton = document.querySelector('.settings');
const dropdown = document.querySelector('.dropdown');

const CNT = document.getElementById('CNT');
const cntButton = document.getElementById('cntButton');

const TA = document.getElementById('TA');
const NL = document.getElementById('NL');

const sub = document.getElementById('sub');
const eldiv = document.getElementById('elimgdiv');

/* =======================
   OVERLAY / AUDIO
======================= */
playButton.addEventListener('click', () => {
  audio.play();
  overlay.style.display = 'none';
});

playButton1.addEventListener('click', () => {
  overlay.style.display = 'none';
});

cntButton.addEventListener('click', () => {
  CNT.style.visibility = 'hidden';
});

/* =======================
   SETTINGS DROPDOWN
======================= */
settingsButton.addEventListener('click', e => {
  e.preventDefault();
  dropdown.style.visibility =
    dropdown.style.visibility === 'visible' ? 'hidden' : 'visible';
});

document.addEventListener('click', e => {
  if (
    !settingsButton.contains(e.target) &&
    !dropdown.contains(e.target)
  ) {
    dropdown.style.visibility = 'hidden';
  }
});

/* =======================
   ELEMENT DIVS
======================= */
const hydrogen = document.getElementById('H');
const helium = document.getElementById('He');
const lithium = document.getElementById('Li');
const beryllium = document.getElementById('Be');

const imageH = document.getElementById('Himg');
const imageHe = document.getElementById('Heimg');
const imageLi = document.getElementById('Liimg');
const imageBe = document.getElementById('Beimg');

const elements = document.querySelectorAll('.el');

let draggedImage = null;

/* MAKE ALL IMAGES DRAGGABLE */
document.querySelectorAll('#elimgdiv > div').forEach(img => {
  img.addEventListener('dragstart', () => {
    draggedImage = img;
  });
});


/* =======================
   GENERIC DROP ZONES
======================= */
elements.forEach(el => {
  el.addEventListener('dragover', e => e.preventDefault());

  el.addEventListener('drop', () => {
    el.appendChild(draggedImage);
    resizeImage(draggedImage);
    el.classList.add('redb');
  });
});

/* =======================
   CORRECT DROP ZONES
======================= */
setupCorrectDrop(hydrogen, imageH);
setupCorrectDrop(helium, imageHe);
setupCorrectDrop(lithium, imageLi);
setupCorrectDrop(beryllium, imageBe);

/* =======================
   SUBMIT BUTTON LOGIC
======================= */
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

/* =======================
   HELPER FUNCTIONS
======================= */
function resizeImage(img) {
  img.style.width = '165px';
  img.style.height = '86.1px';
  img.style.margin = '0';
}

function setupCorrectDrop(box, correctImg) {
  box.addEventListener('dragover', e => e.preventDefault());

  box.addEventListener('drop', () => {
    box.appendChild(draggedImage);
    resizeImage(draggedImage);

    box.classList.remove('redb', 'greenb');

    if (draggedImage === correctImg) {
      box.classList.add('greenb');
    } else {
      box.classList.add('redb');
    }
  });
}
