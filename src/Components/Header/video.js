export const videoPlayer = document.querySelector(".youtube-player");
const videoImage = document.querySelector(".youtube-player img");

videoImage.addEventListener("click", () => {
  videoPlayer.innerHTML = `
    <iframe src="https://www.youtube.com/embed/tnEQm00uwfI?autoplay=1" 
            frameborder="0" 
            allowfullscreen>
    </iframe>
  `;
});
