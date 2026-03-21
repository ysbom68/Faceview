function changeImage() {
  const img = document.getElementById("randomImage");

  // Generate a random number to prevent caching
  const randomNum = Math.floor(Math.random() * 1000);

  img.src = `https://picsum.photos/400?random=${randomNum}`;
}
