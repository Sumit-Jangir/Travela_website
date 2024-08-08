let btn = document.querySelector("#sm-icon");
        let val = true;
        const smScreenHdr = document.querySelector(".smScreen-hdr");
        btn.onclick = () => {

            if (val) {
                smScreenHdr.style.display = "flex";
                setTimeout(
                    () => smScreenHdr.classList.add("show"), 10);
                val = false;
                console.log("true")
            } else {
                smScreenHdr.classList.remove("show");
                setTimeout(() => smScreenHdr.style.display = "none", 500);
                val = true;
                console.log("false")
            }

        }

        let arr = Array.from(document.querySelectorAll(".smNav"));
        let smBtn = document.querySelector(".sm-btn");

        arr.push(smBtn);

        arr.forEach((it) => {
            it.onclick = () => {
                smScreenHdr.classList.remove("show");
                setTimeout(() => {
                    smScreenHdr.style.display = "none";
                    val = true;
                }, 500);
            };
        });