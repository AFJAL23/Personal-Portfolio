var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(event, tabname) {
        for (tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents) {
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        document.querySelectorAll('.work img').forEach(image => {
            image.onclick = () => {
                document.querySelectorAll('.work img.zoomed').forEach(zoomedImage => {
                    if (zoomedImage !== image) {
                        zoomedImage.classList.remove('zoomed');
                    }
                });
                image.classList.toggle('zoomed');
            }
        });
    }

    var sidemenu = document.getElementById("sidemenu");

    function openmenu() {
        sidemenu.style.right = "0";
    }

    function closemenu() {
        sidemenu.style.right = "-200px";
    }