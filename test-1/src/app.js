import { searchByLinear } from "./script/linear";
import { searchByBinary } from "./script/binary";
import { searchByBubble } from "./script/bubble";

document.querySelector('#searchBtn').addEventListener('click', (e) => {

    let list = document.getElementById('listNumber')
    let numberToFind = document.getElementById('numberToFind')
    let typeToFind = document.getElementById('typeOfSearch')

    let list_arr = convertToArray(list)
    if (list_arr) {
        if (numberToFind.value.length !== 0 ) {
            switch (typeToFind.value) {
                case 'linear':
                    searchByLinear(list_arr, parseInt(numberToFind.value))
                    break;
                case 'binary':
                    searchByBinary(list_arr, parseInt(numberToFind.value))
                    break;
                case 'bubble':
                    searchByBubble(list_arr, parseInt(numberToFind.value))
                    break;
            }
        } else {
            alert('กรุณาใส่ตัวเลขที่ต้องการค้นหา')
        }
    } else {
        alert('กรุณาใส่ list ตัวเลข')
    }

})

function convertToArray(ele) {
    if (ele.value.length !== 0) {
        return ele.value.split(',').map(Number)
    } else {
        return false
    }
}
