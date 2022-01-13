
// let TWEEN = Panolens.TWEEN;
// let PANOLENS = Panolens.PANOLENS;
var pos1,pos2,pos3,parameters;
parameters = {
    amount: 50,
    duration: 1000,
    curve: 'Exponential',
    easing: 'Out',
    iterative: false
  };
const panorama = new PANOLENS.ImagePanorama('img3D/congtruong.jpg');

panolensViewer = document.querySelector('#panolens-viewer');
panel = document.querySelector('#panel')

let container = document.querySelector('#testContainer')

pos1= new PANOLENS.ImagePanorama('img3D/sanhI_1.jpg');  // Add hinh
infospot1 = new PANOLENS.Infospot(350, 'img/icon/point.png'); // size, PANOLEns...
// infospot1.element = container;
// console.log(infospot1.element)
pos1_vector = new THREE.Vector3(2975.80, 562.94, 3969.47); 

// new THREE.CSS3DRenderer()
infospot1.position.set(2975.80, 562.94, 3969.47);
infospot1.addHoverElement(panel);
infospot1.addEventListener('click', function(){
  viewer.setPanorama(pos1);}
);//onFocus);


panorama.add(infospot1);
// 3D OBJECT __________ TESTING
// var object = new THREE.CSS3DObject(container);
// object.position.set(-208.92, 653.68, -4942.70);

// panorama.add(object);

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
        output: 'console'            // Whether and where to output infospot position. Could be 'console' or 'overlay'
 });
viewer.add(panorama, pos1);
//panorama.link(pos1, pos1_vector );

function onFocus () {

    this.focus( parameters.duration, TWEEN.Easing[ parameters.curve ][ parameters.easing ] );

  }
