function showDate() {
    let outRu = document.getElementById('current-date-ru');
    let outUs = document.getElementById('current-date-us');
    let outDe = document.getElementById('current-date-de');
    let outCn = document.getElementById('current-date-cn');
    let outJp = document.getElementById('current-date-jp');
    let outEs = document.getElementById('current-date-es');
    let today = new Date();

    outRu.innerHTML = today.toLocaleString('ru-RU');
    outUs.innerHTML = today.toLocaleString('en-US');
    outDe.innerHTML = today.toLocaleString('de-DE');
    outCn.innerHTML = today.toLocaleString('zh-CN');
    outJp.innerHTML = today.toLocaleString('ja-JP');
    outEs.innerHTML = today.toLocaleString('es-ES');
}
