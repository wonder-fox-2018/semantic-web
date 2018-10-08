var body = document.body
var homesection = document.getElementById('homesection')

var materi = document.getElementsByClassName('materi')


    // var select = document.getElementById('countdown')
    // console.log(select)
    // var option = document.createElement('option')
    // option.setAttribute('value', 'weddingplanner15')
    // select.appendChild(option)
    // var optionText = document.createTextNode('Hari H')
    // option.appendChild(optionText)

function buatform(){
    var jumlah = document.getElementById('jumlah').value
    var text  = document.createTextNode(jumlah)
    var numText = Number(jumlah)
    var option
    var optionText
//START FORM

    var form  = document.createElement('div')
    form.setAttribute('class', 'form')
    materi[0].appendChild(form)



        var datalist = document.createElement('datalist')
        datalist.setAttribute('id', 'bulan')
        form.appendChild(datalist)

            var select = document.createElement('select')
            select.setAttribute('id', 'countdown')
            form.appendChild(select)

                option = document.createElement('option')
                option.setAttribute('value', 'weddingplannerSL')
                select.appendChild(option)
                optionText = document.createTextNode('Setelah lamaran')
                option.appendChild(optionText)

    var weddingform = document.createElement('form')
    weddingform.setAttribute('id', 'weddingform')
    form.appendChild(weddingform)

        var input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.setAttribute('id', 'inputlist')
        weddingform.appendChild(input)

        var button = document.createElement('button')
        button.setAttribute('type', 'button')
        button.setAttribute('onclick', 'weddingplanner()')
        weddingform.appendChild(button)
        var buttontext = document.createTextNode('Add List')
        button.appendChild(buttontext)
//END FORM
    h4 = document.createElement('h4')
    materi[0].appendChild(h4)
    h4text = document.createTextNode('Setelah Lamaran')
    h4.appendChild(h4text)

    ul = document.createElement('ul')
        ul.setAttribute('id', 'weddingplannerSL')
        materi[0].appendChild(ul)


    for(var i = numText; i > 0 ; i--){
        
        
        var h4
        var h4text
        h4 = document.createElement('h4')
        materi[0].appendChild(h4)
        h4text = document.createTextNode(i + ' Bulan Persiapan')
        h4.appendChild(h4text)

        var ul
        // var li
        ul = document.createElement('ul')
        ul.setAttribute('id', 'weddingplanner' + i)
        materi[0].appendChild(ul)

        
        option = document.createElement('option')
        option.setAttribute('value', 'weddingplanner' + i)
        select.appendChild(option)
        optionText = document.createTextNode(i + ' Bulan')
        option.appendChild(optionText)




    }
    h4 = document.createElement('h4')
    materi[0].appendChild(h4)
    h4text = document.createTextNode('2 Minggu Sebelum Hari H')
    h4.appendChild(h4text)

    ul = document.createElement('ul')
    ul.setAttribute('id', 'weddingplanner2M')
    materi[0].appendChild(ul)
   
    h4 = document.createElement('h4')
    materi[0].appendChild(h4)
    h4text = document.createTextNode('1 Minggu Sebelum Hari H')
    h4.appendChild(h4text)

    
    
    ul = document.createElement('ul')
    ul.setAttribute('id', 'weddingplanner1M')
    materi[0].appendChild(ul)

    option = document.createElement('option')
    option.setAttribute('value', 'weddingplanner2M')
    select.appendChild(option)
    optionText = document.createTextNode('2 Minggu')
    option.appendChild(optionText)

    option = document.createElement('option')
    option.setAttribute('value', 'weddingplanner1M')
    select.appendChild(option)
    optionText = document.createTextNode('1 Minggu')
    option.appendChild(optionText)
    

}    
// START WEDDING PLANNER BUTTON
function weddingplanner(){
    var bulan = document.getElementById('countdown').value
    
    


    var item = document.getElementById('inputlist').value
    // console.log(item)
    var text = document.createTextNode(item)
    var newItem = document.createElement('li')
    newItem.appendChild(text)

    if(item === ''){
     alert('tidak boleh kosong')   
    }
    else{
        if(document.getElementById(bulan).children.length === 0){
            document.getElementById(bulan).appendChild(newItem)
            document.getElementById('weddingform').reset()
        }
        else if(document.getElementById(bulan).children.length > 0){
            var datali = document.getElementById(bulan).children
            console.log(datali.innerHTML)
            count = 0
            for(var i=0; i < datali.length; i++){
                if(newItem.innerHTML ===  datali[i].innerHTML){
                    count++
                    // console.log(newItem.innerHTML, datali[i].innerHTML, 'berhasil')

                }
                
            }
            if(count > 0){
                alert('data sudah ada')
            }
            else{
                
                document.getElementById(bulan).appendChild(newItem)
                document.getElementById('weddingform').reset()
            }
        }
        
    }
    
}


    

    