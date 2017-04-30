function getCookie() {
	// document.getElementById('UserOld').value = localStorage.UserOld;
	// document.getElementById('PwdOld').value = localStorage.PwdOld;
	// document.getElementById('EmailNew').value = localStorage.EmailNew;
	// document.getElementById('NameNew').value = localStorage.NameNew;
	// document.getElementById('UserNew').value = localStorage.UserNew;
	// document.getElementById('PwdNew').value = localStorage.PwdNew;

	// alert(window.localStorage.UserOld);
	// alert(window.localStorage.PwdOld);
	// alert(window.localStorage.EmailNew);
	// alert(window.localStorage.NameNew);
	// alert(window.localStorage.UserNew);
	// alert(window.localStorage.PwdNew);
}

window.onload = function() {
	document.getElementById('welcomemessage').innerHTML = "Welcome back "+window.localStorage.UserOld+"!";
}