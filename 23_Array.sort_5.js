// Sort the objects in the array by age
function byAge(arr){
    var sortByAge = arr.sort(function(a, b){
        return a.age - b.age;
    });
    return sortByAge;
}

byAge([
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]);