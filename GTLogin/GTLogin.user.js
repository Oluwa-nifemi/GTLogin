
if(location.href == "https://cp-gtbank.com/wordpress/registrationpage/"){
	document.getElementById("onclick_first_name").value = "CODE";
	document.getElementById("onclick_last_name").value = "XXX"
	document.getElementById("onclick_mobile").value = "09087966040"
	document.getElementById("onclick_email").value = "asdf@asdf.com"
	document.getElementById("free_internet_on_click_extension_gui_container").click()
} else
	document.querySelector('a[href="/wordpress/registrationpage/"]').click();
