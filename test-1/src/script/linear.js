export function searchByLinear(numArr, numToFind) {

    // Clear result textarea
    document.getElementById('searchResult').value = ''

    let html = 'List : [ ' + numArr.toString() + ' ] \n'
    html += 'Search : '+ numToFind + '\n'
    html += 'Result ::: \n'

    document.getElementById('searchResult').value = html
    for (let i = 0; i < numArr.length; i++) {

        if (numArr[i] === numToFind) {
            let output = 'Round : ' + i + ' ===> ' + numToFind + ' = ' + numArr[i] + ' found !!'
            document.getElementById('searchResult').value += output
            return false
        } else {
            let output = 'Round : ' + i + ' ===> ' + numToFind + ' != ' + numArr[i] + '\n'
            document.getElementById('searchResult').value += output
        }

        if (i === (numArr.length - 1)) {
            let output = 'Not Found !!'
            document.getElementById('searchResult').value += output
        }
    }

}

function setDelay(i) {
    setTimeout(function(){
        console.log(i);
    }, 1000);
}