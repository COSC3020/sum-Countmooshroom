function sum(a) {
    
    //I removed the item a[0] so it isn't added twice
    var sum = 0;
    for(var i = 0; i < a.length; i++) {
        sum += a[i];
    }
    return sum;
}