let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]
function joinArrays () {
    const joined = arrays[0].concat(arrays[1], arrays[2]);
    console.log(joined);
    return joined;
}

joinArrays(arrays);