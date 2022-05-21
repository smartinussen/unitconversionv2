let value = 0
// Test with script placement at bottom BODY. Had trouble placing it earlier in sections
function convert() {
    let value = document.getElementById("inpValue").value
    // Initial value for conversion
    let valueEl = document.getElementById("inputNo")
    //let value = document.getElementById("InpValue")
    // console.log(value)
    // Present value in HTML (InnerText works fine as no spaces)
    // valueEl.innerText = value

    // Hook the HTML elements to variables
    let lengthEl = document.getElementById("length-conv")
    let volumeEl = document.getElementById("volume-conv")
    let massEl = document.getElementById("mass-conv")

    // define LENGTH conversion
    let feet = value * 3.2808399
    let meters = value / 3.2808399
    // Concat LENGTH string for webapp
    let lengthResult = value + " meters = " + +feet.toFixed(3) +" feet│" + value + " feet = " + +meters.toFixed(3) + " meters"
    // Put LENGTH in HTML
    lengthEl.textContent = lengthResult

    // define VOLUME conversion
    let gallons = value / 3.78541178
    let liters = value * 3.78541178
    // Concat VOLUME string for webapp
    let volumeResult = value + " liters = " + +gallons.toFixed(3) +" gallons│" + value + " gallons = " + +liters.toFixed(3) + " liters"
    // Put VOLUME in HTML
    volumeEl.textContent = volumeResult

    // define MASS conversion
    let pounds = value * 2.20462262
    let kilos = value / 2.20462262
    // Concat MASS string for webapp
    let massResult = value + " kilos = " + +pounds.toFixed(3) +" pounds│" + value + " pounds = " + +kilos.toFixed(3) + " kilos"
    // Put MASS in HTML
    massEl.textContent = massResult
}

