const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const audioPrompt = document.querySelector(".audio-prompt");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayActive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayActive");
};


// Play audio function
const playAudio = () => {
  var audio = new Audio('./Happy Birthday (Korean).mp3');
  audio.play().then(() => {
    console.log("Audio is playing");
  }).catch(error => {
    console.log("Audio playback failed: ", error);
  });
  audioPrompt.style.display = "none";
};

window.onload = function() {
  audioPrompt.style.display = "flex";
};