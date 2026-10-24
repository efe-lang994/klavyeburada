// Klavyeburada Basit Akış

const promptCard = document.getElementById('promptCard');
const yesScreen = document.getElementById('yesScreen');
const noScreen = document.getElementById('noScreen');
const tuzakVideo = document.getElementById('tuzakVideo');

const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');

// Evet'e basılırsa sadece evet.png çıkar
btnYes.addEventListener('click', () => {
  promptCard.style.display = 'none';
  noScreen.style.display = 'none';
  tuzakVideo.pause();
  
  yesScreen.style.display = 'block';
});

// Hayır'a basılırsa sadece tuzak.mp4 çıkar ve oynatılır
btnNo.addEventListener('click', () => {
  promptCard.style.display = 'none';
  yesScreen.style.display = 'none';
  
  noScreen.style.display = 'block';
  tuzakVideo.currentTime = 0;
  tuzakVideo.play().catch(() => {});
});

// Tekrar Seç / Geri Dön fonksiyonu
function goBack() {
  tuzakVideo.pause();
  yesScreen.style.display = 'none';
  noScreen.style.display = 'none';
  promptCard.style.display = 'block';
}
