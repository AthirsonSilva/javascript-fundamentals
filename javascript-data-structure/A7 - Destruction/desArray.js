function letter(){
    let a = 'A', b = 'B', c = 'C';

    [a, b, c] = ['Marcos', ' dos ', 'keyboard']

    console.log(a, b, c)
}

function number(){
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [first, second, ...leftover] = num
    const [one , , three , , five , , seven , , nine] = num
    

    console.log(first, second)
    console.log(one, three, five, seven, nine)
    console.log(leftover)
}

function complex(){
    const num = [[1, 2, 3], [4, 5 ,6], [7, 8, 9]]
    console.log(num)
    const [,[,,six]] = num
    console.log(six)
    const [list1, list2, list3] = num
    console.log(list3[2])
}

complex()