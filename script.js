let count = 0;
function print() {
    document.getElementById("colorid").innerHTML = count;
    console.log(count);
}
function increase() {
    count += 1;
    print();
}
function decrease() {
    count -= 1;
    print();
}
function r() {
    count = 0;
    print();
}