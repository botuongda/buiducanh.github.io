
// document.addEventListener("click", result);
document.addEventListener("click", press);
function press() {
	// hienthi.value+=input.value

	// console.log(this.innerHTML);
	console.log(document.getElementById("hienthi").value);
}
function result() {
		var ketqua=eval(document.getElementById("hienthi").value)
		document.getElementById("hienthi").value=ketqua;
		return ketqua;
		

}
function xoa() {
		// length(document.getElementById("hienthi")
		// document.getElementById("hienthi").value[length(document.getElementById("hienthi")-1]=""
		var dodai=document.getElementById("hienthi").value.length;
		var str = document.getElementById("hienthi").value;
		str=str.slice(0,dodai-1)
		document.getElementById("hienthi").value=str;
	// body...
}
function xoatat() {
	var dodai=document.getElementById("hienthi").value.length;
		var str = document.getElementById("hienthi").value;
		str=""
		document.getElementById("hienthi").value=str;
		console.log(document.getElementById("hienthi").value);
	// body...
}

function phantram() {
	var ketqua=eval(document.getElementById("hienthi").value)/100
		document.getElementById("hienthi").value=ketqua;
	// body...
}

function can() {
	document.getElementById("hienthi").value=Math.sqrt(result());
	// body...
}
function binhphuong() {
	document.getElementById("hienthi").value=result()*result();
	// body...
}

// document.addEventListener("click", someOtherFunction);

// function press(button) {
// 	console.log(button.innerHTML);
//     document.getElementById('hienthi').innerHTML= button.innerHTML;
// }

// function someOtherFunction() {
//     alert ("This function was also executed!")
// }