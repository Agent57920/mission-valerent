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

let holdStartTimese = 0;
let holdTimerse = null;
let isHoldingse = false;

sub.addEventListener('mousedown', () => {
  if (isHoldingse) return; // prevent double trigger

  isHoldingse = true;
  holdStartTimese = Date.now();

  // start 120s success timer
  holdTimerse = setTimeout(() => {
    if (!isHoldingse) return; // safety check

    // reached 120 seconds
    CNT.style.visibility = 'hidden';
    NL.style.visibility = 'visible';
  }, 120000);
});

document.addEventListener('mouseup', () => {
  if (!isHoldingse) return;

  const holdDuration = Date.now() - holdStartTimese;

  clearTimeout(holdTimerse);
  holdTimerse = null;
  isHoldingse = false;

  CNT.style.visibility = 'hidden';
  NL.style.visibility = 'hidden';

  // released before 120 seconds
  if (holdDuration < 120000) {
    CNT.style.visibility = 'visible';
  }
});


let holdStartTimese1 = 0;
let holdTimerse1 = null;
let isHoldingse1 = false;

sub.addEventListener('mouseleave', () => {
  if (isHoldingse1) return; // prevent double trigger

  isHoldingse1 = true;
  holdStartTimese1 = Date.now();

  // start 120s success timer
  holdTimerse1 = setTimeout(() => {
    if (!isHoldingse1) return; // safety check

    // reached 120 seconds
    CNT.style.visibility = 'hidden';
    NL.style.visibility = 'visible';
  }, 120000);
});

document.addEventListener('mouseup', () => {
  if (!isHoldingse1) return;

  const holdDuration1 = Date.now() - holdStartTimese1;

  clearTimeout(holdTimerse1);
  holdTimerse1 = null;
  isHoldingse1 = false;

  CNT.style.visibility = 'hidden';
  NL.style.visibility = 'hidden';

  // released before 120 seconds
  if (holdDuration1 < 120000) {
    CNT.style.visibility = 'visible';
  }
});


  sub.addEventListener('mousedown', () => {

    sub.style.backgroundColor = '';
    sub.style.borderColor = '';
  sub.classList.add('is-fading');
  });
  
  sub.addEventListener('mouseup', () => {
  if (sub.classList.contains('is-fading')){
    const style = window.getComputorStyle(box);
    const currentBg = style.backgroundColor;
    const currentBorder = style.borderColor;

    sub.style.backgroundColor = currentBg;
    sub.style.borderColor = currentBorder;

    sub.classList.remove('is-fading');
  }
  });




  let timer1, timer2, timer3, timer4, timer5, timer6, timer7, timer8, timer9, timer10, timer11, timer12, timer13, timer14, timer15, timer16, timer17, timer18, timer19, timer20, timer21, timer22, timer23, timer24, timer25, timer26, timer27, timer28, timer29, timer30, timer31, timer32, timer33, timer34, timer35, timer36, timer37, timer38, timer39, timer40, timer41, timer42, timer43, timer44, timer45;

sub.addEventListener('mousedown', () => {

  timer1 = setTimeout(() => {
    tbx.style.display = 'block';
  }, 3000);

  timer2 = setTimeout(() => {
    tbx.style.fontSize = '50px';
    tbx.style.width = '';
    tbx.style.marginTop = '';
    tbx.style.marginLeft = '-37px';
  }, 15000);

  timer3 = setTimeout(() => {
    tbx1.style.display = 'block';
  }, 18000);

  timer4 = setTimeout(() => {
    tbx1.style.fontSize = '50px';
    tbx1.style.width = '';
    tbx1.style.marginTop = '-61px';
    tbx1.style.marginLeft = '523px';
  }, 28000);

  timer5 = setTimeout(() => {
    tbx2.style.display = 'block';
  }, 30000);

  timer6 = setTimeout(() => {
    tbx2.style.display = 'none';
  }, 40000);
  

  timer7 = setTimeout(() => {
    t10.style.display = 'block';
  }, 30000);

  timer8 = setTimeout(() => {
    t10.style.display = 'none';
  }, 31000);
  

  timer9 = setTimeout(() => {
    t9.style.display = 'block';
  }, 31000);

  timer10 = setTimeout(() => {
    t9.style.display = 'none';
  }, 32000);
  
  

  timer11 = setTimeout(() => {
    t8.style.display = 'block';
  }, 32000);

  timer12 = setTimeout(() => {
    t8.style.display = 'none';
  }, 33000);
  

  timer13 = setTimeout(() => {
    t7.style.display = 'block';
  }, 33000);

  timer14 = setTimeout(() => {
    t7.style.display = 'none';
  }, 34000);

  timer15 = setTimeout(() => {
    t6.style.display = 'block';
  }, 34000);

  timer16 = setTimeout(() => {
    t6.style.display = 'none';
  }, 35000);
  

  timer17 = setTimeout(() => {
    t5.style.display = 'block';
  }, 35000);

  timer18 = setTimeout(() => {
    t5.style.display = 'none';
  }, 36000);

  timer19 = setTimeout(() => {
    t4.style.display = 'block';
  }, 36000);

  timer20 = setTimeout(() => {
    t4.style.display = 'none';
  }, 37000);

  timer21 = setTimeout(() => {
    t3.style.display = 'block';
  }, 37000);

  timer22 = setTimeout(() => {
    t3.style.display = 'none';
  }, 38000);
  
  timer23 = setTimeout(() => {
    t2.style.display = 'block';
  }, 38000);

  timer24 = setTimeout(() => {
    t2.style.display = 'none';
  }, 39000);
  
  
  timer25 = setTimeout(() => {
    t1.style.display = 'block';
  }, 39000);

  timer26 = setTimeout(() => {
    t1.style.display = 'none';
  }, 40000);

  timer27 = setTimeout(() => {
    tbx3.style.display = 'block';
  }, 40000);

  timer28 = setTimeout(() => {
    tbx3.style.display = 'none';
  }, 45000);

  timer29 = setTimeout(() => {
    tbx4.style.display = 'block';
  }, 47000);

  timer30 = setTimeout(() => {
    tbx4.style.display = 'none';
  }, 53000);
  
  timer31 = setTimeout(() => {
    tbx5.style.display = 'block';
  }, 55000);

  timer32 = setTimeout(() => {
    tbx5.style.display = 'none';
  }, 60000);
  
  timer33 = setTimeout(() => {
    tbx6.style.display = 'block';
  }, 65000);

  timer34 = setTimeout(() => {
    tbx6.style.display = 'none';
  }, 75000);


  timer35 = setTimeout(() => {
    tbx7.style.display = 'block';
  }, 85000);

  timer36 = setTimeout(() => {
    tbx7.style.display = 'none';
  }, 88000);

  timer37 = setTimeout(() => {
    tbx8.style.display = 'block';
  }, 90000);

  timer38 = setTimeout(() => {
    tbx8.style.display = 'none';
  }, 95000);

  timer39 = setTimeout(() => {
    tbx9.style.display = 'block';
  }, 98000);

  timer40 = setTimeout(() => {
    tbx9.style.display = 'none';
  }, 105000);
  

  timer41 = setTimeout(() => {
    tbx10.style.display = 'block';
  }, 108000);

  timer42 = setTimeout(() => {
    tbx10.style.display = 'none';
  }, 113000);
  

  timer43 = setTimeout(() => {
    tbx11.style.display = 'block';
  }, 113000);

  timer44 = setTimeout(() => {
    tbx11.style.display = 'none';
  }, 120000);
  

  timer45 = setTimeout(() => {
    NL.style.visibility = 'visible';
  }, 120000);

  
});

sub.addEventListener('mouseup', clearAll);
sub.addEventListener('mouseleave', clearAll);

function clearAll() {
  clearTimeout(timer1);
  clearTimeout(timer2);
  clearTimeout(timer3);
  clearTimeout(timer4);
  clearTimeout(timer5);
  clearTimeout(timer6);
  clearTimeout(timer7);
  clearTimeout(timer8);
  clearTimeout(timer9);
  clearTimeout(timer10);
  clearTimeout(timer11);
  clearTimeout(timer12);
  clearTimeout(timer13);
  clearTimeout(timer14);
  clearTimeout(timer15);
  clearTimeout(timer16);
  clearTimeout(timer17);
  clearTimeout(timer18);
  clearTimeout(timer19);
  clearTimeout(timer20);
  clearTimeout(timer21);
  clearTimeout(timer22);
  clearTimeout(timer23);
  clearTimeout(timer24);
  clearTimeout(timer25);
  clearTimeout(timer26);
  clearTimeout(timer27);
  clearTimeout(timer28);
  clearTimeout(timer29);
  clearTimeout(timer30);
  clearTimeout(timer31);
  clearTimeout(timer32);
  clearTimeout(timer33);
  clearTimeout(timer34);
  clearTimeout(timer35);
  clearTimeout(timer36);
  clearTimeout(timer37);
  clearTimeout(timer38);
  clearTimeout(timer39);
  clearTimeout(timer40);
  clearTimeout(timer41);
  clearTimeout(timer42);
  clearTimeout(timer43);
  clearTimeout(timer44);
  clearTimeout(timer45);
}



  
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

  