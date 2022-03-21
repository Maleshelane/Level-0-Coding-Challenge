function areaOfTriangle (){
    var s = (side1 + side2+ side3)/2;
    var area = Math.sqrt (s* ((s- side1) * (s - side2) * (s - side3)));

    return "The area of the triangle is" + areaValue;
}
    