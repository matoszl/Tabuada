function tabuada(){
    var num = document.getElementById('numero')
    let tab = document.getElementById('itabuada')
    if(num.value.length == 0){
        alert('ERRO')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
    for(t=1;t<=10;t++){
        let item = document.createElement('option')
        item.text = n + ' x ' + t + ' = ' + (n*t)
        item.value = t
        tab.appendChild(item)
    }
}
}
