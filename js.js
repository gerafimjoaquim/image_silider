var slide_holder=document.querySelectorAll('.slides_holder')
var pics=document.getElementsByTagName('img')
var span=document.getElementsByTagName('span')
var first=0
var last=slide_holder.length

const count=document.getElementById('counter')
setInterval(slider,3000)

function slider(){
	span[first].classList.remove('contar')
	slide_holder[first].classList.remove('show')
	first++
	if (first==last) {
		first=0
	}
	span[first].classList.add('contar')
	slide_holder[first].classList.add('show')

}

function contador(){
	for(let i=0;i<slide_holder.length;i++){
		let span=document.createElement('span')
		count.appendChild(span)
	}
	
}
contador()
