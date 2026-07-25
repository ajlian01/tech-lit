let currentLang = 'en';

// Translations Dictionary (UI text in selected language)
const translations = {
  en: {
    appTitle: "Tech Literacy Arcade",
    welcomeMsg: "Welcome! What would you like to practice?",
    m1: "1. Single Click", m2: "2. Double Click", m3: "3. Right Click",
    m7: "4. Hover Practice", m4: "5. Drag & Drop", m8: "6. Page Scrolling",
    m9: "7. Window Resize", m10: "8. Tab Navigation", m5: "9. Shortcuts", m6: "10. Typing & Size",
    clickInstr: "Click the big blue targets as they appear!", targetsLeft: "Targets Remaining",
    dblInstr: "Quickly double-click the treasure chest to open it!", chestsLeft: "Chests Remaining", dblHint: "Double-click quickly!",
    rightInstr: "Right-click the secret box below!", rightsLeft: "Discoveries Left", rightBox: "🔍 Right-Click Me", rightHint: "Use the secondary button on your mouse!",
    hoverInstr: "Move your mouse cursor over the balloons without clicking to pop them!", balloonsLeft: "Balloons Remaining",
    dragInstr: "Click and drag the items into the Recycling Bin!", itemsLeft: "Items Left", recycleBin: "Recycling Bin",
    scrollInstr: "Use your mouse wheel or trackpad to scroll all the way down to find the fish!", seaSurface: "Top of Ocean", keepScrolling: "Keep Scrolling Down",
    resizeInstr: "Click and drag the bottom-right handle of the window box to expand it!", resizeText: "Drag my corner to make me bigger!",
    tabInstr: "Press the 'Tab' key on your keyboard to jump between fields, then press 'Enter' on Submit!", submitBtn: "Submit with Enter",
    keyInstr: "Hold down the requested shortcut key combination!", keysLeft: "Tasks Remaining", keyPressMsg: "Press the keys!",
    typingInstr: "Type the phrase exactly as shown below!", textSizeLbl: "Text Size:", typingStart: "Start typing above...", skipBtn: "Skip / Next Phrase ➔",
    greatJob: "Great Job!", victoryMsg: "You completed the exercise!", backHome: "Back to Main Menu"
  },
  es: {
    appTitle: "Arcade de Alfabetización Digital",
    welcomeMsg: "¡Bienvenido! ¿Qué te gustaría practicar?",
    m1: "1. Clic Simple", m2: "2. Doble Clic", m3: "3. Clic Derecho",
    m7: "4. Pasar el Ratón", m4: "5. Arrastrar y Soltar", m8: "6. Desplazar Página",
    m9: "7. Redimensionar", m10: "8. Navegación Tab", m5: "9. Atajos", m6: "10. Mecanografía",
    clickInstr: "¡Haz clic en los objetivos azules grandes!", targetsLeft: "Objetivos Restantes",
    dblInstr: "¡Haz doble clic rápidamente en el cofre!", chestsLeft: "Cofres Restantes", dblHint: "¡Haz doble clic rápido!",
    rightInstr: "¡Haz clic derecho en la caja secreta de abajo!", rightsLeft: "Descubrimientos Restantes", rightBox: "🔍 Haz Clic Derecho", rightHint: "¡Usa el botón secundario de tu ratón!",
    hoverInstr: "¡Pasa el ratón sobre los globos sin hacer clic!", balloonsLeft: "Globos Restantes",
    dragInstr: "¡Arrastra los objetos a la papelera!", itemsLeft: "Objetos Restantes", recycleBin: "Papelera",
    scrollInstr: "¡Rueda hacia abajo para encontrar el pez!", seaSurface: "Superficie del Mar", keepScrolling: "Sigue Desplazándote Abajo",
    resizeInstr: "¡Arrastra la esquina inferior derecha para agrandar la ventana!", resizeText: "¡Arrastra mi esquina para agrandarme!",
    tabInstr: "¡Presiona 'Tab' para cambiar de campo y 'Enter' para enviar!", submitBtn: "Enviar con Enter",
    keyInstr: "¡Mantén presionada la combinación de teclas!", keysLeft: "Tareas Restantes", keyPressMsg: "¡Presiona las teclas!",
    typingInstr: "¡Escribe la frase exactamente como se muestra a continuación!", textSizeLbl: "Tamaño de Texto:", typingStart: "Empieza a escribir arriba...", skipBtn: "Siguiente Frase ➔",
    greatJob: "¡Buen Trabajo!", victoryMsg: "¡Completaste el ejercicio!", backHome: "Volver al Menú Principal"
  },
  zh: {
    appTitle: "数字素养游乐场",
    welcomeMsg: "欢迎！你想练习什么？",
    m1: "1. 单击", m2: "2. 双击", m3: "3. 右键点击",
    m7: "4. 悬停练习", m4: "5. 拖放练习", m8: "6. 页面滚动",
    m9: "7. 调整窗口大小", m10: "8. Tab键切换", m5: "9. 快捷键", m6: "10. 打字与字体大小",
    clickInstr: "点击出现的蓝色大目标！", targetsLeft: "剩余目标",
    dblInstr: "快速双击宝箱以打开它！", chestsLeft: "剩余宝箱", dblHint: "请快速连续双击！",
    rightInstr: "右键点击下方的秘密盒子！", rightsLeft: "剩余探索", rightBox: "🔍 请右键点击我", rightHint: "使用鼠标右键或触控板双指点击！",
    hoverInstr: "将鼠标悬停在气球上（无需点击）即可击破它们！", balloonsLeft: "剩余气球",
    dragInstr: "将物品拖入回收站！", itemsLeft: "剩余物品", recycleBin: "回收站",
    scrollInstr: "使用鼠标滚轮向下滑动，找到小鱼！", seaSurface: "海洋表面", keepScrolling: "继续向下滑动",
    resizeInstr: "拖动框右下角的边角来拉大窗口！", resizeText: "拖动右下角把我变大！",
    tabInstr: "按键盘上的“Tab”键在框之间切换，按“Enter”提交！", submitBtn: "按Enter提交",
    keyInstr: "按住要求的快捷键组合！", keysLeft: "剩余任务", keyPressMsg: "请按下键盘上的按键！",
    typingInstr: "请准确输入下方显示的英文短语！", textSizeLbl: "文字大小:", typingStart: "在上方开始打字...", skipBtn: "下一句 ➔",
    greatJob: "干得漂亮！", victoryMsg: "你完成了练习！", backHome: "返回主菜单"
  },
  ja: {
    appTitle: "デジタルリテラシー・アーケード",
    welcomeMsg: "ようこそ！何の練習をしますか？",
    m1: "1. シングルクリック", m2: "2. ダブルクリック", m3: "3. 右クリック",
    m7: "4. ホバー練習", m4: "5. ドラッグ＆ドロップ", m8: "6. 画面スクロール",
    m9: "7. ウィンドウサイズ変更", m10: "8. Tabキー移動", m5: "9. ショートカット", m6: "10. タイピング",
    clickInstr: "青いターゲットをクリックしてください！", targetsLeft: "残りのターゲット",
    dblInstr: "宝箱をすばやくダブルクリックして開けよう！", chestsLeft: "残りの宝箱", dblHint: "すばやく2回クリック！",
    rightInstr: "下の箱を右クリックしてください！", rightsLeft: "残り", rightBox: "🔍 右クリックしてね", rightHint: "マウスの右ボタンを使ってね！",
    hoverInstr: "クリックせずにカーソルを風船の上に重ねてね！", balloonsLeft: "残りの風船",
    dragInstr: "ゴミをゴミ箱にドラッグしてください！", itemsLeft: "残りのアイテム", recycleBin: "ゴミ箱",
    scrollInstr: "下にスクロールしてお魚を見つけよう！", seaSurface: "海面", keepScrolling: "下にスクロールしてね",
    resizeInstr: "右下の角をドラッグして枠を大きくしてみよう！", resizeText: "角を引っ張って大きくしてね！",
    tabInstr: "「Tab」キーを押して入力欄を移動し、「Enter」で送信しよう！", submitBtn: "Enterで送信",
    keyInstr: "指示されたショートカットキーを押してください！", keysLeft: "残りのタスク", keyPressMsg: "キーを押してください！",
    typingInstr: "下に表示されている英文をそのまま入力してください！", textSizeLbl: "文字サイズ:", typingStart: "ここに入力してね...", skipBtn: "次のフレーズ ➔",
    greatJob: "よくできました！", victoryMsg: "練習が完了しました！", backHome: "メインメニューに戻る"
  },
  ko: {
    appTitle: "디지털 리터러시 아케이드",
    welcomeMsg: "환영합니다! 어떤 연습을 하시겠습니까?",
    m1: "1. 한 번 클릭", m2: "2. 두 번 클릭", m3: "3. 오른쪽 클릭",
    m7: "4. 마우스 올려놓기", m4: "5. 드래그 앤 드롭", m8: "6. 페이지 스크롤",
    m9: "7. 창 크기 조절", m10: "8. Tab키 이동", m5: "9. 단축키", m6: "10. 타자 연습",
    clickInstr: "파란색 표적을 클릭하세요!", targetsLeft: "남은 표적",
    dblInstr: "보물상자를 빠르게 두 번 클릭하세요!", chestsLeft: "남은 상자", dblHint: "빠르게 두 번 클릭!",
    rightInstr: "아래 상자를 마우스 오른쪽 버튼으로 클릭하세요!", rightsLeft: "남은 횟수", rightBox: "🔍 오른쪽 클릭하세요", rightHint: "마우스 오른쪽 버튼을 사용하세요!",
    hoverInstr: "풍선 위에 마우스 커서를 올려 풍선을 터뜨리세요!", balloonsLeft: "남은 풍선",
    dragInstr: "재활용통으로 항목을 드래그하세요!", itemsLeft: "남은 항목", recycleBin: "재활용통",
    scrollInstr: "아래로 스크롤하여 물고기를 찾으세요!", seaSurface: "해수면", keepScrolling: "계속 아래로 스크롤하세요",
    resizeInstr: "오른쪽 아래 모서리를 드래그하여 상자를 키워보세요!", resizeText: "모서리를 드래그하세요!",
    tabInstr: "'Tab' 키를 눌러 입력창을 이동하고, 'Enter'를 눌러 제출하세요!", submitBtn: "Enter 키로 제출",
    keyInstr: "요청된 단축키를 눌러보세요!", keysLeft: "남은 작업", keyPressMsg: "키보드를 누르세요!",
    typingInstr: "아래에 표시된 영어 문장을 똑같이 입력하세요!", textSizeLbl: "글자 크기:", typingStart: "위에 입력하세요...", skipBtn: "다음 문장 ➔",
    greatJob: "참 잘했습니다!", victoryMsg: "연습을 완료했습니다!", backHome: "메인 메뉴로 돌아가기"
  }
};

// English Phrase Bank for Typing Game
const englishPhraseBank = [
  "Hello World",
  "The quick brown fox",
  "Learning technology is fun",
  "Practice makes perfect",
  "Clicking and typing is easy",
  "Keep up the great work"
];

let targetsRemaining = 5, chestsRemaining = 3, rightClicksRemaining = 3, balloonsRemaining = 5, dragItemsLeft = 3, keysRemaining = 3, currentPhraseIndex = 0, currentTaskIndex = 0;

const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
const modifierName = isMac ? 'Cmd' : 'Ctrl';

const shortcutTasks = [
  { keyCombo: 'c', displayText: `${modifierName} + C`, action: 'Copy item' },
  { keyCombo: 'v', displayText: `${modifierName} + V`, action: 'Paste item' },
  { keyCombo: 'z', displayText: `${modifierName} + Z`, action: 'Undo mistake' }
];

function changeLanguage(langCode) {
  currentLang = langCode;
  const dict = translations[langCode] || translations['en'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerText = dict[key];
  });

  document.getElementById('app-title').innerText = dict.appTitle;

  if (document.getElementById('typing-screen').classList.contains('active')) {
    loadNextPhrase();
  }
}

function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}

/* 1. SINGLE CLICK */
function startMouseGame() {
  targetsRemaining = 5;
  document.getElementById('targets-left').innerText = targetsRemaining;
  showScreen('game-screen');
  spawnTarget();
}

function spawnTarget() {
  const playArea = document.getElementById('play-area');
  playArea.innerHTML = '';

  if (targetsRemaining <= 0) {
    showScreen('victory-screen');
    return;
  }

  const target = document.createElement('div');
  target.className = 'target';
  const areaWidth = playArea.clientWidth - 100;
  const areaHeight = playArea.clientHeight - 100;
  
  target.style.left = `${Math.floor(Math.random() * areaWidth) + 50}px`;
  target.style.top = `${Math.floor(Math.random() * areaHeight) + 50}px`;

  target.onclick = function() {
    targetsRemaining--;
    document.getElementById('targets-left').innerText = targetsRemaining;
    spawnTarget();
  };

  playArea.appendChild(target);
}

/* 2. DOUBLE CLICK */
let singleClickTimer = null;
function startDoubleClickGame() {
  chestsRemaining = 3;
  document.getElementById('chests-left').innerText = chestsRemaining;
  document.getElementById('chest').innerText = '🎁';
  showScreen('double-click-screen');
}

function handleChestClick() {
  if (!singleClickTimer) {
    singleClickTimer = setTimeout(() => { singleClickTimer = null; }, 400);
  }
}

function openChest() {
  clearTimeout(singleClickTimer);
  singleClickTimer = null;
  chestsRemaining--;
  document.getElementById('chests-left').innerText = chestsRemaining;
  document.getElementById('chest').innerText = '🔓';

  setTimeout(() => {
    if (chestsRemaining <= 0) {
      showScreen('victory-screen');
    } else {
      document.getElementById('chest').innerText = '🎁';
    }
  }, 1000);
}

/* 3. RIGHT CLICK */
function startRightClickGame() {
  rightClicksRemaining = 3;
  document.getElementById('right-clicks-left').innerText = rightClicksRemaining;
  showScreen('right-click-screen');
}

function handleRightClick(event) {
  event.preventDefault();
  rightClicksRemaining--;
  document.getElementById('right-clicks-left').innerText = rightClicksRemaining;
  
  const box = document.getElementById('secret-box');
  box.innerText = '✨ Key Found!';
  box.style.backgroundColor = '#28a745';

  setTimeout(() => {
    if (rightClicksRemaining <= 0) {
      showScreen('victory-screen');
    } else {
      box.innerText = translations[currentLang].rightBox;
      box.style.backgroundColor = '#6c757d';
    }
  }, 1000);
}

/* 4. HOVER PRACTICE */
function startHoverGame() {
  balloonsRemaining = 5;
  document.getElementById('balloons-left').innerText = balloonsRemaining;
  showScreen('hover-screen');
  spawnBalloon();
}

function spawnBalloon() {
  const hoverArea = document.getElementById('hover-area');
  hoverArea.innerHTML = '';

  if (balloonsRemaining <= 0) {
    showScreen('victory-screen');
    return;
  }

  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.innerText = '🎈';

  const areaWidth = hoverArea.clientWidth - 100;
  const areaHeight = hoverArea.clientHeight - 100;
  
  balloon.style.left = `${Math.floor(Math.random() * areaWidth) + 50}px`;
  balloon.style.top = `${Math.floor(Math.random() * areaHeight) + 50}px`;

  balloon.onmouseenter = function() {
    balloon.innerText = '💥';
    setTimeout(() => {
      balloonsRemaining--;
      document.getElementById('balloons-left').innerText = balloonsRemaining;
      spawnBalloon();
    }, 300);
  };

  hoverArea.appendChild(balloon);
}

/* 5. DRAG AND DROP */
function startDragGame() {
  dragItemsLeft = 3;
  document.getElementById('items-left').innerText = dragItemsLeft;
  document.querySelectorAll('.drag-item').forEach(item => item.style.display = 'block');
  showScreen('drag-screen');
}

function allowDrop(event) { event.preventDefault(); }
function drag(event) { event.dataTransfer.setData("text", event.target.id); }

function drop(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  const draggedElement = document.getElementById(data);

  if (draggedElement && draggedElement.style.display !== 'none') {
    draggedElement.style.display = 'none';
    dragItemsLeft--;
    document.getElementById('items-left').innerText = dragItemsLeft;

    if (dragItemsLeft <= 0) {
      setTimeout(() => { showScreen('victory-screen'); }, 500);
    }
  }
}

/* 6. SCROLL GAME */
function startScrollGame() {
  showScreen('scroll-screen');
}

function findSubmarine() {
  showScreen('victory-screen');
}

/* 7. RESIZE GAME */
function startResizeGame() {
  const box = document.getElementById('resizable-box');
  box.style.width = '200px';
  box.style.height = '150px';
  showScreen('resize-screen');

  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      if (entry.contentRect.width > 350 || entry.contentRect.height > 250) {
        resizeObserver.disconnect();
        showScreen('victory-screen');
      }
    }
  });

  resizeObserver.observe(box);
}

/* 8. TAB NAVIGATION GAME */
function startTabGame() {
  document.getElementById('tab-input-1').value = '';
  document.getElementById('tab-input-2').value = '';
  showScreen('tab-screen');
  document.getElementById('tab-input-1').focus();
}

function submitTabForm() {
  showScreen('victory-screen');
}

/* 9. KEYBOARD SHORTCUTS */
function startKeyboardGame() {
  currentTaskIndex = 0;
  keysRemaining = shortcutTasks.length;
  document.getElementById('keys-left').innerText = keysRemaining;
  showScreen('keyboard-screen');
  loadKeyboardTask();
}

function loadKeyboardTask() {
  if (currentTaskIndex >= shortcutTasks.length) {
    showScreen('victory-screen');
    return;
  }

  const task = shortcutTasks[currentTaskIndex];
  document.getElementById('target-shortcut-display').innerText = task.displayText;
  document.getElementById('action-description').innerText = `Action: ${task.action}`;
}

window.addEventListener('keydown', function(event) {
  if (!document.getElementById('keyboard-screen').classList.contains('active')) return;

  const currentTask = shortcutTasks[currentTaskIndex];
  if (!currentTask) return;

  const modifierPressed = isMac ? event.metaKey : event.ctrlKey;
  if (modifierPressed && event.key.toLowerCase() === currentTask.keyCombo) {
    event.preventDefault();
    setTimeout(() => {
      currentTaskIndex++;
      keysRemaining--;
      document.getElementById('keys-left').innerText = keysRemaining;
      loadKeyboardTask();
    }, 800);
  }
});

/* 10. TYPING GAME (English Phrases with Localized Instructions) */
function startTypingGame() {
  currentPhraseIndex = 0;
  showScreen('typing-screen');
  loadNextPhrase();
}

function loadNextPhrase() {
  const targetPhrase = englishPhraseBank[currentPhraseIndex % englishPhraseBank.length];
  
  document.getElementById('prompt-text').innerText = targetPhrase;
  const inputEl = document.getElementById('typing-input');
  inputEl.value = '';
  document.getElementById('typing-feedback').innerText = translations[currentLang].typingStart;
}

function changeFontSize(sizePx) {
  document.getElementById('prompt-text').style.fontSize = `${sizePx}px`;
  document.getElementById('typing-input').style.fontSize = `${sizePx}px`;
}

function checkTyping() {
  const targetPhrase = englishPhraseBank[currentPhraseIndex % englishPhraseBank.length];
  const typedText = document.getElementById('typing-input').value;
  const feedbackEl = document.getElementById('typing-feedback');

  if (typedText === targetPhrase) {
    feedbackEl.innerText = "✨ Correct!";
    feedbackEl.className = "hint-text feedback-success";

    setTimeout(() => {
      currentPhraseIndex++;
      if (currentPhraseIndex >= 3) {
        showScreen('victory-screen');
      } else {
        loadNextPhrase();
      }
    }, 1000);
  } else if (targetPhrase.startsWith(typedText)) {
    feedbackEl.innerText = "...";
    feedbackEl.className = "hint-text";
  } else {
    feedbackEl.innerText = "Check spelling or capitalization.";
    feedbackEl.className = "hint-text";
  }
}

window.onload = function() {
  changeLanguage('en');
};
