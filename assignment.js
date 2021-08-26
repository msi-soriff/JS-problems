//problem no 1 
function seerToMon(seer) {
    var mon = seer / 40;
    return mon;
}
var dadaSeer = seerToMon(120);
console.log(dadaSeer);



// problem no 2 
function totalSales(shirt, pant, shoe) {
    var shirtPrice = shirt * 100;
    var pantPrice = pant * 200;
    var shoePrice = shoe * 500;
    totalTaka = shirtPrice + pantPrice + shoePrice;
    return totalTaka;
}
var shopping = totalSales(2, 2, 1);
console.log(shopping);



//problem no 3 
function deliveryCost(quantity) {
    var cost = 0;
    if (quantity <= 100) {
        cost = quantity * 100;
    } else if (quantity <= 200) {
        var first100Quantity = 100 * 100;
        var quantityAbove100 = quantity - 100;
        var quantityTill200 = quantityAbove100 * 80;
        cost = first100Quantity + quantityTill200;
    } else {
        var first100Quantity = 100 * 100;
        var quantityTill200 = 100 * 80;
        var quantityAbove200 = quantity - 200;
        var moreQuantity = quantityAbove200 * 50;
        cost = first100Quantity + quantityTill200 + moreQuantity;
    }
    return cost;
}
var deliveryKorbo = deliveryCost(210);
console.log(deliveryKorbo);



// problem no 4 
function perfectFriend(arra) {
    var friendList = arra[0].length;
    var result = arra[0];
    for (var i = 1; i < arra.length; i++) {
        var friendName = arra[i].length;
        if (friendName == 5) {
            result = arra[i];
            friendList = friendName;
        }
    }
    return result;
}
console.log(perfectFriend(["shawon", "santaw", "shakira", "ale", "himel", "Hamidur", "Apon", "anid"]));

