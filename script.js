


let ID = '0'



//make sure str is wrapped in ' ' 
const getNumber = (str) => {
    brack = 0
    comma = 0
    ans = ''

    for(i = 0; i < str.length; i++) {
        if (brack == 3){
            
            if (str[i] == ','){
                comma++
            }
            else{
                ans += str[i]
            }
        }

        if (str[i] == '[') {
            brack++
        }
        
        if (comma == 1){
            //console.log(ans)
            return ans
        }
    }
    return 1
}


const inputID = (element) => {
    inputField = element.getElementsByClassName('whsOnd zHQkBf')[0]
    //console.log("INPUTTED", inputField)
    inputField.value = ID
    
    //if this is null, try catch it, i dont want it to be throwing an error
}


const hasID = (element) => {
    if( element.innerText.includes('ID') || element.innerText.includes('id?')) {
        dataParamElem = element.children[0]
        id = getNumber(dataParamElem.getAttribute('data-params'))
        //console.log(id)

        //console.log("TRUE")
        //console.log(element)
        inputID(element)
        element.getElementsByClassName('ndJi5d snByac')[0].remove()
        

        upDiv = form.querySelector("div[jsname='o6bZLc']")

        s = `input[name='entry.${id}']`

        inputField = upDiv.querySelector(s)
        inputField.value = ID
    }
}



form = (document.getElementsByClassName('Uc2NEf'))[0]



questions = (document.getElementsByClassName('Qr7Oae'))
//console.log(questions)


setTimeout(function(){
    chrome.storage.sync.get(['id'], function(result) {
        ID = result.id
        Array.from(questions).forEach( (e) => {
            hasID(e)
        })
      });
}, 500);


