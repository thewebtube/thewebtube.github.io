   let dl_link = document.querySelectorAll(".dl_link");

         fetch("https://api.github.com/repos/thewebtube/webtube/releases/latest")
         .then(response => response.json())
         .then(data => {
            for (let i = 0; i < dl_link.length; i++) {
               dl_link[i].href = data.assets[0].browser_download_url;
               let size = data.assets[0].size;
               let size_mb = size / 1000000;
               size = Math.round(size_mb * 100) / 100 + " MB";
               dl_link[i].innerHTML = "Download WebTube" + " v " + data.tag_name + " (" + size + ")";
            }
         });
