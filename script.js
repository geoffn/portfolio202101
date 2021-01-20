
const allSections = document.querySelectorAll('section')
const resumePO = document.querySelector('div.product-owner')
const subLinks = document.querySelectorAll('a.subLink')

console.log(document.getElementById('sl-architecture'))

console.log(resumePO)
setAllSectionsHidden()

setSectionVisible("architecture")

setEventListener()



//Set all Sections as Hidden
function setAllSectionsHidden() {
    allSections.forEach(section => {
        section.style.display = "none"
    })
}

function setSectionVisible(sectionName) {
    allSections.forEach(section => {
        if (section.id === sectionName) {
            section.style.display = ""
        }
    })
}

function setEventListener (){
    
    subLinks.forEach(sublink => {
        let linkElement = document.getElementById(sublink.id)
        linkElement.addEventListener("click", (e) => {
            e.preventDefault();
            setOnClick(linkElement.id.replace('sl-', ''))
        })
        console.log(linkElement.getEventListeners())
        console.log("set listener" + sublink.id)
    })
    
}

function setOnClick(sectionLink){
    setAllSectionsHidden()
    setSectionVisible(sectionLink)

}    