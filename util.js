function roundFloat(x,n){
    return Math.round(x* Math.pow(10,n)) / Math.pow(10, n);
}

function rectangle() {
    return {
        'perimeter':function(width,height){
            return roundFloat(2 * (width +height),2);
        },
        'area':function (width,height) {
            return roundFloat(width * height,2);
          }
    };
}