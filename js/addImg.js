//find all links and pictures
var picList = document.querySelectorAll('.picture');
var picturesList = Array.from(picList);
var liList = document.querySelectorAll('.linc');
//convert nodeList to array
var lincList = Array.from(liList);
//change burger style on click
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let headerShadow = document.getElementById('header');
menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	headerShadow.classList.toggle('header__shadow')
})
lincList.forEach(lincsEl => {
	lincsEl.addEventListener('click', function(){
		menuBtn.classList.toggle('active');
		menu.classList.toggle('active');
		headerShadow.classList.toggle('header__shadow')
	})
})
//create arrays with src images
var photoArray1 = ['/img/1stairs/1.jpg','/img/1stairs/2.jpg','/img/1stairs/3.jpg','/img/1stairs/4.jpg','/img/1stairs/5.jpg','/img/1stairs/6.jpg'];
var photoArray2 = ['/img/2diningRoom/1.jpg','/img/2diningRoom/2.jpg','/img/2diningRoom/3.jpg','/img/2diningRoom/4.jpg','/img/2diningRoom/5.jpg','/img/2diningRoom/6.jpg'];
var photoArray3 = ['/img/3library/1.jpg','/img/3library/2.jpg','/img/3library/3.jpg','/img/3library/4.jpg','/img/3library/5.jpg','/img/3library/6.jpg'];
var photoArray4 = ['/img/4batroom/1.jpg','/img/4batroom/2.jpg','/img/4batroom/3.jpg','/img/4batroom/4.jpg','/img/4batroom/5.png','/img/4batroom/6.jpg'];
var photoArray5 = ['/img/5children_room/1.jpg','/img/5children_room/2.jpg','/img/5children_room/3.jpg','/img/5children_room/4.jpg','/img/5children_room/5.jpeg','/img/5children_room/6.jpeg'];
var photoArray6 = ['/img/6wardrobe/1.jpg','/img/6wardrobe/2.jpg','/img/6wardrobe/3.jpg','/img/6wardrobe/4.jpg','/img/6wardrobe/5.jpg','/img/6wardrobe/6.jpg'];
var photoArray7 = ['/img/7closet/1.jpg','/img/7closet/2.jpg','/img/7closet/3.jpg','/img/7closet/4.jpg','/img/7closet/5.jpg','/img/7closet/6.jpg'];
var photoArray8 = ['/img/8door/1.jpg','/img/8door/2.jpg','/img/8door/3.jpg','/img/8door/4.jpg','/img/8door/5.jpg','/img/8door/6.jpg'];
let photoArray = [photoArray1,photoArray2,photoArray3,photoArray4,photoArray5,photoArray6,photoArray7,photoArray8];
var LincId;
// assign addEventListener to all links
var j = 0;
for (;j < lincList.length; j++) {
	LincId = lincList[j].id;
	lincList[j].addEventListener('click',	goPhoto(LincId));
}
// function goListenerInLinc() {
// 	LincId = lincList[j].id;
// 	lincList[j].addEventListener('click',	goPhoto(LincId));
// 	j++;
// 	if (j == 8) return
// 	goListenerInLinc();
// }
// goListenerInLinc();

//creating a photo upload function
let i = 0;
function goPhoto(LincId) {
	return function() {
		if (LincId === 'lincStairs') {
			goPhotoGoSrc(photoArray1);
			}else if (LincId === 'lincDiningRoom') {
			goPhotoGoSrc(photoArray2);
			}else if (LincId === 'lincLibrary') {
				goPhotoGoSrc(photoArray3);
			}else if (LincId === 'lincBatroom') {
				goPhotoGoSrc(photoArray4);
			}else if (LincId === 'lincСhildren') {
				goPhotoGoSrc(photoArray5);
			}else if (LincId === 'lincWardrobe') {
				goPhotoGoSrc(photoArray6);
			}else if (LincId === 'lincСloset') {
				goPhotoGoSrc(photoArray7);
			}else if (LincId === 'lincDoor') {
				goPhotoGoSrc(photoArray8);
			}
			}	
	}

function goPhotoGoSrc(params) {
	for (let index = 0; index < picturesList.length; index++) {
		picturesList[index].src = params[i];
		i++;
		}	
}
// }
// function goPhotoStairs() {
// 	picturesList[0].src = '/img/1stairs/1.jpg';
// 	picturesList[1].src = '/img/1stairs/2.jpg';
// 	picturesList[2].src = '/img/1stairs/3.jpg';
// 	picturesList[3].src = '/img/1stairs/4.jpg';
// 	picturesList[4].src = '/img/1stairs/5.jpg';
// 	picturesList[5].src = '/img/1stairs/6.jpg';
// }


