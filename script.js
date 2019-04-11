function isEmpty(a) {
    if (a.length == 0) {
        return true
    }
    else {
        return false
    }
}

function rmsfinder() {
    let list = document.getElementById('list')
    let n = document.getElementById('values').value
    let arr1 = n.replace(/ , /g , ",").split(",").map(Number)
    console.log(arr1)

    let arr2 = []
    let arr3 = []
    let j = 0
    let k = 0
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] > 0) {
            arr2[j] = arr1[i]
            j++
        }

        else if (arr1[i] < 0) {
            arr3[k] = arr1[i]
            k++
        }

    }

    console.log(arr2)
    console.log(arr3)

    let a = arr1.map(function (value) {
        return value * value
    })

    let b = arr2.map(function (value) {
        return value * value
    })

    let c = arr3.map(function (value) {
        return value * value
    })

    console.log(a)
    console.log(b)
    console.log(c)

    let avg1
    let avg2
    let avg3


    if (!isEmpty(a)) {
        let x = a.reduce(function (accum, value) {
            return accum + value
        })
        avg1 = x / (arr1.length)
    }

    else{
        avg1 = 0
    }

    if (!isEmpty(b)) {
        let y = b.reduce(function (accum, value) {
            return accum + value
        })

        avg2 = y / (arr2.length)
    }

    else{
        avg2 = 0
    }

    if (!isEmpty(c)) {
        let z = c.reduce(function (accum, value) {
            return accum + value
        })

        avg3 = z / (arr3.length)
    }
    else{
        avg3 = 0
    }


    let rms = 0
    let prms = 0
    let nrms = 0
    if (avg1 != 0){
    rms = Math.sqrt(avg1)
    }

    if (avg2 != 0){
    prms = Math.sqrt(avg2)
    }

    if (avg3 != 0){
    nrms = Math.sqrt(avg3)
    }


    list.innerHTML = "RMS of positive numbers : " + prms + "<br><br><br> RMS of negative numbers : " + nrms + "<br><br><br> RMS of all numbers: " + rms

}