const spriteSheet = new Image();

spriteSheet.src = "/Leghorn_lv1_Move.png";
spriteSheet.onload = () => {
  spriteSheet.dataset.loaded = "true";
};

export default spriteSheet;
