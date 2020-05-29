export function searchByBubble(numArr) {
    // Clear result textarea
    document.getElementById('searchResult').value = ''

    let html = 'List : [ ' + numArr.toString() + ' ] \n\n'
    // html += 'Search : '+ numToFind + '\n'
    html += 'Result ::: \n'

    document.getElementById('searchResult').value = html

    let len = numArr.length;
    let round = 1;

    for (let i = 0; i < len ; i++) {

        for(let j = 0 ; j < len - i - 1; j++) {
            if (numArr[j] > numArr[j + 1]) {
                let temp = numArr[j];
                numArr[j] = numArr[j+1];
                numArr[j + 1] = temp;

                let output = 'Round : ' + round + ' ===> ' +  '[ ' + numArr.toString() + ' ] \n'
                document.getElementById('searchResult').value += output
                round++;

            }

        }

    }

    let output = 'Sorting complete!!'
    document.getElementById('searchResult').value += output

}