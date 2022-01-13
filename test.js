
//Change default icon
PANOLENS.DataImageSource = "https://pchen66.github.io/Panolens/asset/icon/",
    PANOLENS.DataImage = {
        Info: PANOLENS.DataImageSource + "information.png",
        Arrow: PANOLENS.DataImageSource + "arrow-up.png",

        /* change default icons */
        FullscreenEnter: "https://bnr.bluecactus.ro/360/css/ico/fs.png",
        FullscreenLeave: "https://bnr.bluecactus.ro/360/css/ico/fs-out.png",
        /* end */

        VideoPlay: PANOLENS.DataImageSource + "video-play.png",
        VideoPause: PANOLENS.DataImageSource + "pause.png",
        WhiteTile: PANOLENS.DataImageSource + "tiles.png",
        ReticleIdle: PANOLENS.DataImageSource + "reticle-idle.png",
        Setting: PANOLENS.DataImageSource + "setting.png",
        ChevronRight: PANOLENS.DataImageSource + "chevron-right.png",
        Check: PANOLENS.DataImageSource + "check.png",
        ViewIndicator: PANOLENS.DataImageSource + "view-indicator.svg",
        ReticleDwell: PANOLENS.DataImageSource + "reticle-animation.png"
    }
//end change default icon
var parameters;
parameters = {
    amount: 3,
    duration: 1000,
    curve: 'Exponential',
    easing: 'Out',
    iterative: false
  };

  panolensViewer = document.querySelector('#panolens-viewer');
  panel = document.querySelector('#panel')
  panel_Info = document.querySelector('#panel_1')
  
  let container = document.querySelector('#testContainer')
  var pointList = [
    new THREE.Vector3(2975.80, 562.94, 3969.47),
    new THREE.Vector3(-3872.70, -331.51, 3131.14),
    new THREE.Vector3(4989.64, -176.61, -65.19),
    new THREE.Vector3(4983.54, -69.39, 262.13),
    new THREE.Vector3(368.76, -301.46, 4968.83),
    new THREE.Vector3(-4723.54, -27.88, 1624.72)];

function onEnter(event) {
  panolensViewer.style.width = 0;
  panolensViewer.classList.remove('finish');
  $("#map a").css('pointer-events', 'none');
}
function onProgress(event) {
  progress = event.progress.loaded / event.progress.total * 100;
  panolensViewer.style.width = progress + '%';
  $("canvas").css('opacity', 0.6);
  if(progress === 100) {
    panolensViewer.classList.add('finish');
    $('#intro-msg').fadeOut(1000);
    $("canvas").animate({
      opacity: 1
    });
  }
}
function onLoad(event) {
  $("canvas").css('opacity', 1);
  $("#map a").css('pointer-events', 'auto');
}
function onLeave(event) {
  if(is_touch_device()) $("#map").fadeOut(750);
  setTimeout(function() {
    $("#map a").css('pointer-events', 'auto');
  }, 800);
}
    
const panorama = new PANOLENS.ImagePanorama('img3D/congtruong.jpg');
panorama.addEventListener('progress', onProgress);
panorama.addEventListener('leave', onLeave);
panorama.addEventListener('enter', onEnter);
panorama.addEventListener('load', function() {
  onLoad();
  viewer.tweenControlCenter(new THREE.Vector3(-4964.25, 504.41, -134.84), 0); // Initialize view
  $('#panolens-viewer').after('<div id="secondary"><span class="item zoom-out"><i class="fa fa-search-minus" aria-hidden="true"></i></span><span class="item zoom-in"><i class="fa fa-search-plus" aria-hidden="true"></i></span><span class="item arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></span><span class="item arrow-up"><i class="fa fa-angle-up" aria-hidden="true"></i></span><span class="item arrow-down"><i class="fa fa-angle-down" aria-hidden="true"></i></span><span class="item arrow-left"><i class="fa fa-angle-left" aria-hidden="true"></i></span></div>');
  $('#secondary .zoom-in').on('click touchstart', function() {
    var currentZoom = viewer.camera.fov;
    var newZoom = currentZoom - 10;
    if(newZoom < 30) newZoom = 30;
    viewer.setCameraFov(newZoom);
  });
  $('#secondary .zoom-out').on('click touchstart', function() {
    var currentZoom = viewer.camera.fov;
    var newZoom = currentZoom + 10;
    if(newZoom > 110) newZoom = 110;
    viewer.setCameraFov(newZoom);
  });
  $('#secondary .arrow-left').on('click touchstart', function() {
  	RotateLeftRight(1);
  });
  $('#secondary .arrow-right').on('click touchstart', function() {
    RotateLeftRight(0);
  });
  $('#secondary .arrow-up').on('click touchstart', function() {
    rotateUpDown(1);
  });
  $('#secondary .arrow-down').on('click touchstart', function() {
  	rotateUpDown(0);
    viewer.OrbitControls.rotateUp(0.1);
  });
  setTimeout(function() {
    $('#intro-msg h1, #intro-msg h2').remove();
    $('#intro-msg img').css('max-width', '50px').css('max-height', '50px').css('margin', '0').css('cursor', 'pointer');
    $('#intro-msg').css('width', '50px').css('padding', '0').css('top', '10px').css('left', '10px').css('text-align', 'left').css('transform', 'none').fadeIn();
    }, 1000);
});


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
        autoRotate: false, autoRotateSpeed: 0.2, autoRotateActivationDuration: 2000,
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
// viewer.renderer.sortObjects = true;
function onFocus () {

    this.focus( parameters.duration, TWEEN.Easing[ parameters.curve ][ parameters.easing ] );

  }
// var controlIndex = PANOLENS.Controls.ORBIT;
var controlSensor = {
  style: {
    backgroundImage: 'url(img/icon/sensor.png)'
  },
  onTap: function() {
    controlIndex = controlIndex >= 1 ? 0 : controlIndex + 1;
    switch (controlIndex) {
      case 0: viewer.enableControl(PANOLENS.Controls.ORBIT); break;
      case 1: viewer.enableControl(PANOLENS.Controls.DEVICEORIENTATION); break;
      default: break;
    }
  }
};
var controlRotate = {
  style: {
    backgroundImage: 'url(img/icon/rotate.png)'
  },
  onTap: function() {
    var state = viewer.getControl().autoRotate;
    viewer.getControl().autoRotate = !state;
  }
};
var controlMap = {
  style: {
    backgroundImage: 'url(img/icon/map.png)'
  },
  onTap: function() {
    $("#map").toggle();
  }
};
var controlExtras = {
  style: {
    backgroundImage: 'url(img/icon/extras.png)'
  },
  onTap: function() {
    $("#secondary").toggle(400);
  }
};
viewer.appendControlItem(controlSensor);
viewer.appendControlItem(controlRotate);
viewer.appendControlItem(controlMap);
viewer.appendControlItem(controlExtras);

var ROTATION_POSITION = 0.2;
var ROTATION_SPEED = 150;
function RotateLeftRight(param /* 0 - right, 1 - left */) {
    let go = ROTATION_POSITION;
    let back = - ROTATION_POSITION;
    let pos  = param < 1 ? go : back;
    let easing = {val : pos};
    let tween = new TWEEN.Tween(easing) 
        .to({val: 0}, ROTATION_SPEED) 
        .easing(TWEEN.Easing.Quadratic.InOut) 
        .onUpdate(function() { 
            viewer.OrbitControls.rotateLeft(easing.val)
    }).start();
}
function rotateUpDown(param /* 0 - down, 1- up */) {
    let go = ROTATION_POSITION;
    let back = -ROTATION_POSITION;
    let pos  = param < 1 ? go : back;
    let easing = {val : pos};
    let tween = new TWEEN.Tween(easing) 
        .to({val: 0}, ROTATION_SPEED) 
        .easing(TWEEN.Easing.Quadratic.InOut) 
        .onUpdate(function() { 
            viewer.OrbitControls.rotateUp(easing.val)
    }).start();
}