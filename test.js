
// let TWEEN = Panolens.TWEEN;
// let PANOLENS = Panolens.PANOLENS;
var parameters;
parameters = {
    amount: 3,
    duration: 1000,
    curve: 'Exponential',
    easing: 'Out',
    iterative: false
  };

  var pointList = [
    new THREE.Vector3(2975.80, 562.94, 3969.47),
    new THREE.Vector3(-3872.70, -331.51, 3131.14),
    new THREE.Vector3(4989.64, -176.61, -65.19),
    new THREE.Vector3(4983.54, -69.39, 262.13),
    new THREE.Vector3(368.76, -301.46, 4968.83),
    new THREE.Vector3(-4723.54, -27.88, 1624.72)];

var imgPanel = document.getElementById("panel").src;
const panorama = new PANOLENS.ImagePanorama('img3D/congtruong.jpg');

panolensViewer = document.querySelector('#panolens-viewer');
panel = document.querySelector('#panel')
panel_Info = document.querySelector('#panel_1')

let container = document.querySelector('#testContainer')

var locationList =[
  new PANOLENS.ImagePanorama('img3D/sanhI_1.jpg'),  // 0
  new PANOLENS.ImagePanorama('img3D/SanTruong.jpg'), //1 
  new PANOLENS.ImagePanorama('img3D/NhaXe.jpg') //2
];

var infospotList=[
  new PANOLENS.Infospot(350, `img/icon/point.png?v=${Date.now()+Math.floor(Math.random()*100000)}`), //0
  new PANOLENS.Infospot(350, `img/icon/up_arrow.png?v=${Date.now()+Math.floor(Math.random()*100000)}`), //1
  new PANOLENS.Infospot(350, `img/icon/up_arrow.png?v=${Date.now()+Math.floor(Math.random()*100000)}`), //2
  new PANOLENS.Infospot(350, `img/icon/up_arrow.png?v=${Date.now()+Math.floor(Math.random()*100000)}`),  //3
  new PANOLENS.Infospot(350, `img/icon/up_arrow.png?v=${Date.now()+Math.floor(Math.random()*100000)}`), //4
  new PANOLENS.Infospot(350, `img/icon/right_arrow.png?v=${Date.now()+Math.floor(Math.random()*100000)}`)]

// infospot1.element = container;
// console.log(infospot1.element)
// pos1_vector = new THREE.Vector3(2975.80, 562.94, 3969.47); 
// pos2_vector = new THREE.Vector3(-241.04, 567.21, -4951.25);

// new THREE.CSS3DRenderer()
//infospot1.position.set(2975.80, 562.94, 3969.47);
infospotList[0].position.copy(pointList[0]);
infospotList[0].addHoverElement(panel);
infospotList[0].addEventListener('click', function(){
  viewer.setPanorama(locationList[0]);}
);//onFocus);
panorama.add(infospotList[0]);
//Infospot 1
infospotList[1].position.copy(pointList[1]);
// infospot2.addHoverElement(panel);
infospotList[1].addEventListener('click', function(){
  viewer.setPanorama(panorama);}
);
locationList[0].add(infospotList[1]);
//Infospot 2
infospotList[2].position.copy(pointList[2]);
infospotList[2].addHoverElement(panel_Info,200);
infospotList[2].addEventListener('click', function(){
  viewer.setPanorama(locationList[1]);}
);
panorama.add(infospotList[2]);
//Infospot 3
infospotList[3].position.copy(pointList[3]);
infospotList[3].addEventListener('click', function(){
  viewer.setPanorama(panorama);}
);
locationList[1].add(infospotList[3]);
//Infospot 4
infospotList[4].position.copy(pointList[4]);
infospotList[4].addEventListener('click',function() {
  viewer.setPanorama(locationList[2]);
})
locationList[1].add(infospotList[4]);
//infospot 5
infospotList[5].position.copy(pointList[5]);
infospotList[5].addEventListener('click',function() {
  viewer.setPanorama(locationList[1]);
})
locationList[2].add(infospotList[5]);

// 3D OBJECT __________ TESTING 
// var object = new THREE.CSS3DObject(container);
// object.position.set(-208.92, 653.68, -4942.70);

// panorama.add(object);

//LOOP InfoSpot
// for (var i = 0; i < parameters.amount;i++){
//   infospot = new PANOLENS.Infospot(350,`img/icon/point.png?v=${Date.now()+Math.floor(Math.random()*100000)}`);
//   infospot.position.copy(pointList[i]);
//   infospot.addEventListener('click', function(){
//     viewer.setPanorama(locationList[i]);}
//   );//onFocus);
//   panorama.add(infospot);
// }


viewer = new PANOLENS.Viewer({ 
  
    container: panolensViewer,        // A DOM Element container
        // controlBar: true,             // Vsibility of bottom control bar
        // controlButtons: ['fullscreen', 'setting', 'video'],            // Buttons array in the control bar. Default to ['fullscreen', 'setting', 'video']
        // autoHideControlBar: false,        // Auto hide control bar
        // autoHideInfospot: true,            // Auto hide infospots
        // horizontalView: false,            // Allow only horizontal camera control
        // cameraFov: 60,                // Camera field of view in degree
        // reverseDragging: false,            // Reverse orbit control direction
        // enableReticle: false,            // Enable reticle for mouseless interaction
        // dwellTime: 1500,            // Dwell time for reticle selection in millisecond
        // autoReticleSelect: true,        // Auto select a clickable target after dwellTime
        // viewIndicator: false,            // Adds an angle view indicator in upper left corner
        // indicatorSize: 30,            // Size of View Indicator
        autoRotate: true, autoRotateSpeed: 0.2, autoRotateActivationDuration: 2000,
        reverseDragging: false,
        controlButtons: [
          'fullscreen'
        ], cameraFov:80,
        output: 'console'            // Whether and where to output infospot position. Could be 'console' or 'overlay'
 });
viewer.getControl().rotateSpeed *= 2;
viewer.getControl().momentumScalingFactor *= 0.4;
viewer.getCamera().updateProjectionMatrix();


viewer.add(panorama, locationList[0], locationList[1], locationList[2]);
//panorama.link(pos1, pos1_vector );
viewer.renderer.sortObjects = true;
function onFocus () {

    this.focus( parameters.duration, TWEEN.Easing[ parameters.curve ][ parameters.easing ] );

  }
var stoprotate=false;    
$(document).click(function(){ 
stoprotate=true; setTimeout(function(){  stoprotate=false; }, 3000);
  });  
viewer.addUpdateCallback(function() {      
if(!stoprotate){
viewer.panorama.rotation.y -= 0.001;
}        
});


