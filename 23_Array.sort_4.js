// Sort an array alphabetically
function alphabetical(arr) {
    var sortName = arr.sort(function(a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    });
    return sortName;
}

alphabetical(["dog", "wolf", "by", "family", "eaten"])
// ["by", "dog", "eaten", "family", "wolf"]