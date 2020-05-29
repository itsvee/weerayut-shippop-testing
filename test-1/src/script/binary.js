export function searchByBinary(numArr, numToFind) {

    // Clear result textarea
    document.getElementById('searchResult').value = ''

    let html = 'List : [ ' + numArr.toString() + ' ] \n'
    let sortArr = numArr.sort((a, b) => a - b)
    html += 'List sort : [ ' + sortArr.toString() + ' ] \n'
    html += 'Search : '+ numToFind + '\n'
    html += 'Result ::: \n'

    document.getElementById('searchResult').value = html

    let min = 0
    let max = sortArr.length - 1
    let mid = 0;
    let round = 1;

    while (min <= max) {
        mid = Math.floor((min + max) / 2)

        if (sortArr[mid] === numToFind) {
            let output = 'Round : ' + round + ' ===> ' +  numToFind + ' == ' + sortArr[mid] + '  ( Min: ' + sortArr[min] + ' | Mid: ' + sortArr[mid] + ' | Max: ' + sortArr[max] + ' )\n'
            output += 'Found your number!!'
            document.getElementById('searchResult').value += output
            return numToFind
        } else if (sortArr[mid] < numToFind) {
            let output = 'Round : ' + round + ' ===> ' +  numToFind + ' > ' + sortArr[mid] + '  ( Min: ' + sortArr[min] + ' | Mid: ' + sortArr[mid] + ' | Max: ' + sortArr[max] + ' )\n'
            document.getElementById('searchResult').value += output
            min = mid + 1
        } else {
            let output = 'Round : ' + round + ' ===> ' +  numToFind + ' < ' + sortArr[mid] + '  ( Min: ' + sortArr[min] + ' | Mid: ' + sortArr[mid] + ' | Max: ' + sortArr[max] + ' )\n'
            document.getElementById('searchResult').value += output
            max = mid - 1
        }

        round++
    }

    let output = 'Not found your number !!'
    document.getElementById('searchResult').value += output
    return false
}