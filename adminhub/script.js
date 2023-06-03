
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


const userRow = document.querySelectorAll('.user__info')
const userData = document.querySelector(".info")
const overlay = document.querySelector(".overlay")
const closeBtn = document.querySelector('.close')
const btnPlus = document.querySelectorAll(".btn--plus")

btnPlus.forEach(btn => btn.addEventListener("click", ()=> {
	console.log("hhhh")
	userData.classList.toggle('hidden')
	overlay.classList.toggle('hidden')
}))

closeBtn.addEventListener('click', ()=> {
	userData.classList.toggle("hidden")
	overlay.classList.toggle("hidden")
})


// button control section 

const arrows = document.querySelectorAll('.arrow-icon')
const btns = document.querySelectorAll('.action--btn')
const titles = document.querySelectorAll('.action--title')


arrows.forEach(arrow => arrow.addEventListener('click', ()=> {
	let data = arrow.dataset.control
	btns.forEach(btn => {
		if(btn.dataset.control === data) {
			btn.classList.toggle('hidden-btn')
			arrow.classList.toggle('rotate--arrow')
		}
	})
	titles.forEach(title => {
		if(title.dataset.control === data) {
			title.classList.toggle('title--color')
		}
	})
}))