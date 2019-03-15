const promiseLoopArray = require('./')

let values = [ [ 1, 6, ], [ 2, 7, ], [ 3, 8, ], [ 4, 9, ], [ 5, 10, ], ]
const method = (val, index) => {
    values[index] = (val[0] + val[1]) * 2

    if (values[index] > 20) {
        values = values.slice(0, index + 1)

        return Promise.reject({ result: values[index], type: 'break', })
    }

    if (values[index] < 15) {
        return Promise.reject({ result: [ 0, values[index], ], type: 'repeat', })
    }

    return Promise.resolve(values[index])
}

promiseLoopArray(values, method).then(result => {
    console.log(result)
    console.log(values)
})