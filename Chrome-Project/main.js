 // Javascript Starts 

 //Button Clicked Function

 /*
 function saveButton(); {
    console.log("Button clicked")
 }
 */

 // Variables Section
    let myLeads = []
    const inputEl = document.getElementById("input-el")
    const inputButton = document.getElementById("input-btn")
    const ulEl = document.getElementById("leadsEl")
    



 //Event listsener code for button click *USE THIS*

 let inputBtn = document.getElementById("input-btn")

    inputBtn.addEventListener("click", function() {
        myLeads.push(inputEl.value)
        document.getElementById("input-el").value
        inputEl.value = ""
        renderLeads()

    })

    function renderLeads() {
        let listItems = ""
    
    // Array & Loop Section AND HTML INNER TEXT
    for (let i = 0; i < myLeads.length; i++ ) {
        listItems += "<li><a target='_blank' href'" + myLeads[i] + "'>" + myLeads[i] + "</a></li"
    
        }
        ulEl.innerHTML = listItems
    }

// Will be back 5.33 hour + mins of video