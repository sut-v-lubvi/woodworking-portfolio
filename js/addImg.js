let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let headerShadow = document.getElementById('header');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	headerShadow.classList.toggle('header__shadow')
})

var pictureOne = document.getElementById('picture1');
var pictureToo = document.getElementById('picture2');
var pictureTree = document.getElementById('picture3');
var pictureFour = document.getElementById('picture4');
var pictureFive = document.getElementById('picture5');
var pictureSix = document.getElementById('picture6');

//Нахожу все ссылки и картинки
var lincStairs = document.getElementById('lincStairs');
var lincDiningRoom = document.getElementById('lincDiningRoom');
var lincLibrary = document.getElementById('lincLibrary');
var lincBatroom = document.getElementById('lincBatroom');
var lincСhildren = document.getElementById('lincСhildren');
var lincWardrobe = document.getElementById('lincWardrobe');
var lincСloset = document.getElementById('lincСloset');
var lincDoor = document.getElementById('lincDoor');

const lincsEl = document.querySelectorAll('.linc');
console.log(lincsEl);
lincsEl.forEach(lincsEl => {
	lincsEl.addEventListener('click', function(){
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
		headerShadow.classList.toggle('header__shadow')
	})
})
//Добавляю onclick ко всем ссылкам-категориям
//var arrayLinc = [lincStairs,lincDiningRoom,lincLibrary,lincBatroom,lincСhildren,lincWardrobe,lincСloset,lincDoor];
//function onclickIinc(i) {
	//arrayLinc[i].onclick = goPhoto;
//}
//for (var i = 0; i < arrayLinc.length; i++) {
	//onclickIinc(i);
//}

//var arrayphotoUrl = ['/img/stairs/1.jpg','/img/stairs/02.jpg','/img/stairs/03.jpg','/img/stairs/04.jpg','/img/stairs/05.jpg','/img/stairs/06.jpg',];
//var arrayPicrures = [pictureOne,pictureToo,pictureTree,pictureFour,pictureFive,pictureSix];
//for (var i = 0; i < arrayPicrures.length; i++) {
//	goPhoto(i);
//}
lincStairs.onclick = goPhotoStairs;
lincDiningRoom.onclick = goPhotoDiningRoom;
lincLibrary.onclick = goPhotoLibrary;
lincBatroom.onclick = goPhotoBatroom;
lincСhildren.onclick = goPhotoСhildren;
lincWardrobe.onclick = goPhotoWardrobe;
lincСloset.onclick = goPhotoСloset;
lincDoor.onclick = goPhotoDoor;
goPhotoStairs();
function goPhotoStairs() {
	pictureOne.src = '/img/1stairs/1.jpg';
	pictureToo.src = '/img/1stairs/2.jpg';
	pictureTree.src = '/img/1stairs/3.jpg';
	pictureFour.src = '/img/1stairs/4.jpg';
	pictureFive.src = '/img/1stairs/5.jpg';
	pictureSix.src = '/img/1stairs/6.jpg';
}
function goPhotoDiningRoom() {
	pictureOne.src = '/img/2diningRoom/1.jpg';
	pictureToo.src = '/img/2diningRoom/2.jpg';
	pictureTree.src = '/img/2diningRoom/3.jpg';
	pictureFour.src = '/img/2diningRoom/4.jpg';
	pictureFive.src = '/img/2diningRoom/5.jpg';
	pictureSix.src = '/img/2diningRoom/6.jpg';
}
function goPhotoLibrary() {
	pictureOne.src = '/img/3library/1.jpg';
	pictureToo.src = '/img/3library/2.jpg';
	pictureTree.src = '/img/3library/3.jpg';
	pictureFour.src = '/img/3library/4.jpg';
	pictureFive.src = '/img/3library/5.jpg';
	pictureSix.src = '/img/3library/6.jpg';
}
function goPhotoBatroom() {
	pictureOne.src = '/img/4batroom/1.jpg';
	pictureToo.src = '/img/4batroom/2.jpg';
	pictureTree.src = '/img/4batroom/3.jpg';
	pictureFour.src = '/img/4batroom/4.jpg';
	pictureFive.src = '/img/4batroom/5.png';
	pictureSix.src = '/img/4batroom/6.jpg';
}
function goPhotoСhildren() {
	pictureOne.src = '/img/5children_room/1.jpg';
	pictureToo.src = '/img/5children_room/2.jpg';
	pictureTree.src = '/img/5children_room/3.jpg';
	pictureFour.src = '/img/5children_room/4.jpg';
	pictureFive.src = '/img/5children_room/5.jpeg';
	pictureSix.src = '/img/5children_room/6.jpeg';
}
function goPhotoWardrobe() {
	pictureOne.src = '/img/6wardrobe/1.jpg';
	pictureToo.src = '/img/6wardrobe/2.jpg';
	pictureTree.src = '/img/6wardrobe/3.jpg';
	pictureFour.src = '/img/6wardrobe/4.jpg';
	pictureFive.src = '/img/6wardrobe/5.jpg';
	pictureSix.src = '/img/6wardrobe/6.jpg';
}
function goPhotoСloset() {
	pictureOne.src = '/img/7closet/1.jpg';
	pictureToo.src = '/img/7closet/2.jpg';
	pictureTree.src = '/img/7closet/3.jpg';
	pictureFour.src = '/img/7closet/4.jpg';
	pictureFive.src = '/img/7closet/5.jpg';
	pictureSix.src = '/img/7closet/6.jpg';
}
function goPhotoDoor() {
	pictureOne.src = '/img/8door/1.jpg';
	pictureToo.src = '/img/8door/2.jpg';
	pictureTree.src = '/img/8door/3.jpg';
	pictureFour.src = '/img/8door/4.jpg';
	pictureFive.src = '/img/8door/5.jpg';
	pictureSix.src = '/img/8door/6.jpg';
}

