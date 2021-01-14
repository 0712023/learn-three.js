//수성
const curve1 = new THREE.EllipseCurve(
    0,  0,            // ax, aY
    0.46669835, 0.46669835,           // xRadius, yRadius
    0,  2 * Math.PI,  // aStartAngle, aEndAngle
    false,            // aClockwise
    0                 // aRotation
);
const points1 = curve1.getPoints( 50 );
const geometry1 = new THREE.BufferGeometry().setFromPoints( points1 );
const material1 = new THREE.LineBasicMaterial( { color : 0xffff00 } );
const ellipse1 = new THREE.Line( geometry1, material1 );

//금성
const curve2 = new THREE.EllipseCurve(
    0,  0,            // ax, aY
    0.72823128, 0.72823128,           // xRadius, yRadius
    0,  2 * Math.PI,  // aStartAngle, aEndAngle
    false,            // aClockwise
    0                 // aRotation
);
const points2 = curve2.getPoints( 50 );
const geometry2 = new THREE.BufferGeometry().setFromPoints( points2 );
const material2 = new THREE.LineBasicMaterial( { color : 0xffff00 } );
const ellipse2 = new THREE.Line( geometry2, material2 );

//지구
const curve3 = new THREE.EllipseCurve(
    0,  0,            // ax, aY
    1, 1,           // xRadius, yRadius
    0,  2 * Math.PI,  // aStartAngle, aEndAngle
    false,            // aClockwise
    0                 // aRotation
);
const points3 = curve3.getPoints( 50 );
const geometry3 = new THREE.BufferGeometry().setFromPoints( points3 );
const material3 = new THREE.LineBasicMaterial( { color : 0xffff00 } );
const ellipse3 = new THREE.Line( geometry3, material3 );

//화성
const curve4 = new THREE.EllipseCurve(
    0,  0,            // ax, aY
    1.6660, 1.6660,           // xRadius, yRadius
    0,  2 * Math.PI,  // aStartAngle, aEndAngle
    false,            // aClockwise
    0                 // aRotation
);
const points4 = curve4.getPoints( 50 );
const geometry4 = new THREE.BufferGeometry().setFromPoints( points4 );
const material4 = new THREE.LineBasicMaterial( { color : 0xffff00 } );
const ellipse4 = new THREE.Line( geometry4, material4 );

//목성
const curve5 = new THREE.EllipseCurve(
    0,  0,            // ax, aY
    5.458104, 5.458104,           // xRadius, yRadius
    0,  2 * Math.PI,  // aStartAngle, aEndAngle
    false,            // aClockwise
    0                 // aRotation
);
const points5 = curve5.getPoints( 50 );
const geometry5 = new THREE.BufferGeometry().setFromPoints( points5 );
const material5 = new THREE.LineBasicMaterial( { color : 0xffff00 } );
const ellipse5 = new THREE.Line( geometry5, material5 );

//토성
const curve6 = new THREE.EllipseCurve(
    0,  0,            // ax, aY
    10.05350840, 10.05350840,           // xRadius, yRadius
    0,  2 * Math.PI,  // aStartAngle, aEndAngle
    false,            // aClockwise
    0                 // aRotation
);
const points6 = curve6.getPoints( 50 );
const geometry6 = new THREE.BufferGeometry().setFromPoints( points6 );
const material6 = new THREE.LineBasicMaterial( { color : 0xffff00 } );
const ellipse6 = new THREE.Line( geometry6, material6 );

//천왕성
const curve7 = new THREE.EllipseCurve(
    0,  0,            // ax, aY
    20.09647190, 20.09647190,           // xRadius, yRadius
    0,  2 * Math.PI,  // aStartAngle, aEndAngle
    false,            // aClockwise
    0                 // aRotation
);
const points7 = curve7.getPoints( 50 );
const geometry7 = new THREE.BufferGeometry().setFromPoints( points7 );
const material7 = new THREE.LineBasicMaterial( { color : 0xffff00 } );
const ellipse7 = new THREE.Line( geometry7, material7 );

//해왕성
const curve8 = new THREE.EllipseCurve(
    0,  0,            // ax, aY
    30.32713169, 30.32713169,           // xRadius, yRadius
    0,  2 * Math.PI,  // aStartAngle, aEndAngle
    false,            // aClockwise
    0                 // aRotation
);
const points8 = curve8.getPoints( 50 );
const geometry8 = new THREE.BufferGeometry().setFromPoints( points8 );
const material8 = new THREE.LineBasicMaterial( { color : 0xffff00 } );
const ellipse8 = new THREE.Line( geometry8, material8 );

