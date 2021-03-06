function pesquisar() {

    var xmlhttp = new XMLHttpRequest();
    var textobusca = document.getElementById('myInput').value;
    console.log(textobusca);

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(xmlhttp.responseText, "text/xml");
            console.log(xmlDoc.getElementsByTagName("Image")[0].innerHTML.source);
            if (xmlDoc.getElementsByTagName("Text")[0].innerHTML) {
                document.getElementById("response-titulo").innerHTML = xmlDoc.getElementsByTagName("Text")[0].innerHTML;
            } else {
                document.getElementById("response-titulo").innerHTML = "Sem título";
            }
            if (xmlDoc.getElementsByTagName("Description")[0]) {
                document.getElementById("response-conteudo").innerHTML = xmlDoc.getElementsByTagName("Description")[0].innerHTML;
            } else {
                document.getElementById("response-conteudo").innerHTML = "Não há resultados para essa pesquisa."
            }
            if (xmlDoc.getElementsByTagName("Image")[0].innerHTML) {
                document.getElementById("response-imagem").innerHTML = xmlDoc.getElementsByTagName("Image")[0].innerHTML;
            } else {
                document.getElementById("response-imagem").innerHTML = '<img class="notfound" src="imgnotfound.png">';
            }
            if (xmlDoc.getElementsByTagName("Url")[0].innerHTML) {
                document.getElementById("response-link").innerHTML = xmlDoc.getElementsByTagName("Url")[0].innerHTML;
            } else {
                document.getElementById("response-link").innerHTML = "Não há link disponível";
            }
        }
    }

    xmlhttp.open("GET", "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&limit=1&search=<" + textobusca + ">&format=xml", true);
    xmlhttp.send();

}