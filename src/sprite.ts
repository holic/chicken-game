const sprite = new Image();

sprite.src = "/Leghorn_lv1_Move.png";
sprite.onload = () => {
  sprite.dataset.loaded = "true";
};

export default sprite;
