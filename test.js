
// let TWEEN = Panolens.TWEEN;
// let PANOLENS = Panolens.PANOLENS;
const panorama = new PANOLENS.ImagePanorama('/img3D/congtruong.jpg');
viewer = new PANOLENS.Viewer({ output: 'console' });
viewer.add(panorama);