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
const imageB = document.getElementById('Bimg');
const imageC = document.getElementById('Cimg');
const imageN = document.getElementById('Nimg');
const imageO = document.getElementById('Oimg');
const imageF = document.getElementById('Fimg');

const elements = document.querySelectorAll('.el');

/* =======================
   DRAG START
======================= */
document.querySelectorAll('#elimgdiv > div').forEach(img => {
    img.addEventListener('dragstart', () => {
      draggedImage = img;
    });
  });
  
  /* =======================
     GENERIC DROP (WRONG ZONES)
  ======================= */
  elements.forEach(el => {
    el.addEventListener('dragover', e => e.preventDefault());
  
    el.addEventListener('drop', () => {
      el.appendChild(draggedImage);
  
      resetImage(draggedImage);   // existing
      setElMargins(draggedImage); // 🔥 add this
  
      el.classList.add('redb');
    });
  });
  
  /* =======================
     CORRECT DROP ZONES
  ======================= */
  setupDropZone(
    hydrogen,
    [imageH, imageHe, imageLi],
    () => resizeHydrogen(draggedImage)
  );
  
  setupDropZone(
    helium,
    [imageBe, imageB, imageC],
    () => {
        resizeHelium(draggedImage);
        moveZoneBorder(helium);
      }
      
      
  );
  
  setupDropZone(
    lithium,
    [imageN, imageO, imageF],
    () => {
        resizeLithium(draggedImage);
        moveZoneBorder(lithium);
      }
      
  );
  
  
  /* =======================
     SUBMIT LOGIC
  ======================= */
  sub.addEventListener('click', () => {
  
    const hFilled = hydrogen.children.length > 0;
    const heFilled = helium.children.length > 0;
    const liFilled = lithium.children.length > 0;
  
    const allFilled = hFilled && heFilled && liFilled;
  
    const correct =
      hydrogen.contains(imageH) &&
      helium.contains(imageC) &&
      lithium.contains(imageF);
  
    const anyOutside =
      eldiv.children.length > 0 ||
      [...elements].some(el => el.children.length > 0);
  
    // RESET SCREENS
    CNT.style.visibility = 'hidden';
    TA.style.visibility = 'hidden';
    NL.style.visibility = 'hidden';
  
    if (!allFilled && anyOutside) {
      CNT.style.visibility = 'visible';
      return;
    }
  
    if (allFilled && correct) {
      NL.style.visibility = 'visible';
      return;
    }
  
    if (allFilled && !correct) {
      TA.style.visibility = 'visible';
    }
  });
  
  /* =======================
     HELPERS
  ======================= */
  function setupDropZone(zone, allowedImages, resizeFn) {
    zone.addEventListener('dragover', e => e.preventDefault());
  
    zone.addEventListener('drop', () => {
      zone.appendChild(draggedImage);
  
      zone.classList.remove('redb', 'greenb');
  
      if (allowedImages.includes(draggedImage)) {
        resizeFn();
        zone.classList.add('greenb');
      } else {
        resetImage(draggedImage);
        zone.classList.add('redb');
      }
    });
  }
  
  /* =======================
     RESIZE RULES
  ======================= */
  function resizeHydrogen(img) {
    img.style.width = '500px';
    img.style.height = '493px';
    img.style.margin = '0';
  }
  
  function resizeHelium(img) {
    img.style.width = '85px';
    img.style.height = '100px';
    img.style.margin = '0px';
  }
  
  function resizeLithium(img) {
    img.style.width = '199px';
    img.style.height = '180px';
    img.style.margin = '0';
  }

  function resizeLithium(img) {
    img.style.width = '199px';
    img.style.height = '180px';
    img.style.margin = '0';
  }
  
  function resetImage(img) {
    img.style.width = '';
    img.style.height = '';
    img.style.margin = '';
  }

  function moveZoneBorder(zone) {
    zone.classList.add('no-border');
  }
  
  function setElMargins(img) {
    img.style.margin = '0px';   // ← change this value as you want
  }

  