export function searchByBubble(numArr, numToFind) {
    // Clear result textarea
    document.getElementById('searchResult').value = ''

    let html = 'List : [ ' + numArr.toString() + ' ] \n'
    let sortArr = numArr.sort((a, b) => a - b)
    html += 'Search : '+ numToFind + '\n'
    html += 'Result ::: \n'

    document.getElementById('searchResult').value = html

}