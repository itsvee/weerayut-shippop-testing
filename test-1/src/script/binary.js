export function searchByBinary(numArr, numToFind) {

    // Clear result textarea
    document.getElementById('searchResult').value = ''

    let html = 'List : [ ' + numArr.toString() + ' ] \n'
    let sortArr = numArr.sort((a, b) => a - b)
    html += 'List sort : [ ' + sortArr.toString() + ' ] \n'
    html += 'Search : '+ numToFind + '\n'
    html += 'Result ::: \n'

    document.getElementById('searchResult').value = html

    let min = 0;
    let max = sortArr.length - 1;
    // let round = 1;
    let mid = Math.floor((min + max) /2);

    while(sortArr[mid] !== numToFind && min < max){

        if (numToFind < sortArr[mid]) {
            max = mid - 1;
        } else if (numToFind > sortArr[mid]) {
            min = mid + 1;
        }

        mid = Math.floor((max + min)/2);
    }

    //make sure it's the right value
    let result = (sortArr[mid] !== numToFind) ? -1 : mid;
    console.log(result)

}