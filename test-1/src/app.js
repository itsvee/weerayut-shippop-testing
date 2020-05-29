import { searchByLinear } from "./script/linear";
import { searchByBinary } from "./script/binary";
import { searchByBubble } from "./script/bubble";

document.querySelector('#searchBtn').addEventListener('click', (e) => {

    let list = document.getElementById('listNumber')
    let numberToFind = document.getElementById('numberToFind')
    let typeToFind = document.getElementById('typeOfSearch')

    let list_arr = convertToArray(list)
    if (list_arr) {
        switch (typeToFind.value) {
            case 'linear':
                if (numberToFind.value.length !== 0 ) {
                    searchByLinear(list_arr, parseInt(numberToFind.value))
                } else {
                    alert('กรุณาใส่ตัวเลขที่ต้องการค้นหา')
                }
                break;
            case 'binary':
                if (numberToFind.value.length !== 0 ) {
                    searchByBinary(list_arr, parseInt(numberToFind.value))
                } else {
                    alert('กรุณาใส่ตัวเลขที่ต้องการค้นหา')
                }
                break;
            case 'bubble':
                searchByBubble(list_arr)
                break;
        }

    } else {
        alert('กรุณาใส่ list ตัวเลข')
    }

})

function convertToArray(ele) {
    if (ele.value.length !== 0) {
        let isNumberList = /^[0-9,.]*$/.test(ele.value);
        if (isNumberList) {
            let str = ele.value.replace(/,\s*$/, "");
            return str.split(',').map(Number)
        } else {
            alert('กรุณาระบุตัวเลขและคั่นกลางด้วยเครื่องหมาย ,')
            return false
        }
    } else {
        return false
    }
}
