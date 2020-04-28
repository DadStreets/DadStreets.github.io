	   var clickMenu = 0;
	   var clickSubmenu = 0;

	   function butClickMenu() {
	    if (clickMenu) {
	      document.getElementById("menuClick").style.display = "none";
	      document.getElementById('menuAfterContent').textContent = "MENU ▼";
	      clickMenu= 0;
	    }
	    else {
	      document.getElementById("menuClick").style.display = "block";
 	      document.getElementById('menuAfterContent').textContent = "MENU ▲";
	      clickMenu = 1;
	    }
	   }

	   function butClickSubmenu() {
	    if (clickSubmenu) {
	      document.getElementById("submenuClick").style.display = "none";
	      document.getElementById("submenuAfterContent").textContent = "◄ CLASSES";
	      clickSubmenu = 0;
	    }
	    else {
	      document.getElementById("submenuClick").style.display = "block";
	      document.getElementById("submenuAfterContent").textContent = "► CLASSES";
	      clickSubmenu = 1;
	    }
	    
	   }