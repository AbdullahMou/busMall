'use strict'
var allItem = [];
var lIEle = document.getElementById('lIEle');
var mIEle = document.getElementById('mIEle');
var rIEle = document.getElementById('rIEle');
var imgD = document.getElementById('imgD');
var resUL = document.getElementById('resUL');
var rImg = -1;
var lImg = -1;
var mImg = -1;
let cleckTimes = 0;
let cleckR;
let cleckL;
let cleckM;
chart();

function Item(name, src) {
    this.name = name;
    this.src = src;
    this.election = 0;
    this.random = [];
    this.shownTimes = 0;

    allItem.push(this);

    // Item.all.push(this);


};
// if (localStorage.getItem(allProduct))

// Items.all = [];

new Item('bag', 'img/bag.jpg');
var banana = new Item('banana', 'img/banana.jpg');
var bathroom = new Item('bathroom', 'img/bathroom.jpg');
var boots = new Item('boots', 'img/boots.jpg');
var breakfast = new Item('breakfast', 'img/breakfast.jpg')
var bubblegum = new Item('bubblegum', 'img/bubblegum.jpg');
var chair = new Item('chair', 'img/chair.jpg');
var cthulhu = new Item('cthulhu', 'img/cthulhu.jpg');
var dog = new Item('dog', 'img/dog-duck.jpg');
var dragon = new Item('dragon', 'img/dragon.jpg');
var pen = new Item('pen', 'img/pen.jpg');
var pet = new Item('pet', 'img/pet-sweep.jpg');
var scessors = new Item('scessors', 'img/scissors.jpg');
var shark = new Item('shark', 'img/shark.jpg');
var sweep = new Item('sweep', 'img/sweep.png');
var tauntun = new Item('tauntaun', 'img/tauntaun.jpg');
var unicorn = new Item('unicorn', 'img/unicorn.jpg');
var usb = new Item('usb', 'img/usb.gif');
var water = new Item('water', 'img/water-can.jpg');
var wine = new Item('wine', 'img/wine-glass.jpg');
// var previousLeftImageIndex;
// var previousMidImageIndex;
// var previousrightImageIndex;
// var currentLeftImage;
// var currentMidImage;
// var currentRightImage;

if (localStorage.getItem('product')) {
    allItem = [];
    allItem = JSON.parse(localStorage.getItem('product'));
}

function getRandom() {

    var cuimg = [rImg, lImg, mImg];
    rImg = Math.floor(Math.random() * allItem.length);
    mImg = Math.floor(Math.random() * allItem.length);
    lImg = Math.floor(Math.random() * allItem.length);

    // if (shownTimes > 0) { cuimg = [previousLeftImageIndex, previousMidImageIndex, previousrightImageIndex]; }
    // var leftIndex = rImg;
    // cuimg.push(leftIndex);
    // var midIndex = mImg;
    // cuimg.push(midIndex);
    // var rightIndex = lImg;
    // cuimg.push(midIndex);
    // previousLeftImageIndex = leftIndex;
    // previousMidImageIndex = midIndex;
    // previousrightImageIndex = rightIndex;
    // currentLeftImage = allItem[leftIndex];
    // currentMidImage = allItem[midIndex];
    // currentRightImage = allItem[rightIndex];
    // var r = cuimg.includes(rImg);

    while (lImg === rImg || rImg === mImg || lImg === mImg || cuimg.includes(rImg) || cuimg.includes(lImg) || cuimg.includes(mImg)) {
        //console.log(cuimg);
        rImg = Math.floor((Math.random() * allItem.length));
        lImg = Math.floor((Math.random() * allItem.length));
        mImg = Math.floor((Math.random() * allItem.length));
        // console.log(mImg, lImg, rImg);
    }
    // cuimg.push(rImg, lImg, mImg);
    //  console.log(cuimg);
    getDisplay(rImg, lImg, mImg);
}

function getDisplay(rImg, lImg, mImg) {
    rIEle.setAttribute('src', allItem[rImg].src);
    lIEle.setAttribute('src', allItem[lImg].src);
    mIEle.setAttribute('src', allItem[mImg].src);
    cleckR = allItem[rImg];
    cleckL = allItem[lImg];
    cleckM = allItem[mImg];
    allItem[rImg].shownTimes++;
    allItem[lImg].shownTimes++;
    allItem[mImg].shownTimes++;

    rIEle.setAttribute('width', '200px');
    lIEle.setAttribute('width', '200px');
    mIEle.setAttribute('width', '200px');
}
//console.log(allItem);

getRandom();

imgD.addEventListener('click', voit);

function voit(event) {
    if (event.target.id == 'rIEle') {
        cleckR.election++
            getRandom();
        cleckTimes++;
    } else
    if (event.target.id == 'lIEle') {
        cleckL.election++
            getRandom();
        cleckTimes++;
    } else
    if (event.target.id == 'mIEle') {
        cleckM.election++
            getRandom();
        cleckTimes++;
        //console.log(event)
    }
    if (cleckTimes == 25) {
        imgD.removeEventListener('click', voit);
        for (let i = 0; i < allItem.length; i++) {
            var li = document.createElement('li');
            li.textContent = (allItem[i].name + ' Slice had ' + allItem[i].election + ' votes and was shown ' + allItem[i].shownTimes + ' times');
            resUL.appendChild(li);
            chart();
        }

        localStorage.setItem('product', JSON.stringify(allItem));
        // console.log(allProduct);
    }
}

// if (localStorage.getItem('product')) {
//     for (let i = 0; i < .length; i++) {


//     }

// } else {

// }
//console.log(allItem);


function chart() {

    var ctx = document.getElementById('myChart').getContext('2d');
    let names = [];
    let elections = [];
    let shownTime = [];
    for (let i = 0; i < allItem.length; i++) {
        names.push(allItem[i].name);
        elections.push(allItem[i].election);
        shownTime.push(allItem[i].shownTimes);
    }

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'pie',

        // The data for our dataset
        data: {
            labels: names,
            datasets: [{
                    label: 'voets times',
                    backgroundColor: ['rgb(255, 99, 132)',
                        'rgb(83, 133, 249)',
                        'rgb(192, 133, 84)',
                        'rgb(219, 196, 84)',
                        'rgb(219, 196, 42)',
                        'rgb(174, 157, 205)',
                        'rgb(244, 157, 205)',
                        'rgb(244, 143, 163)',
                        'rgb(103, 78, 230))',
                        'rgb(50, 52, 163)',
                        'rgb(255, 99, 132)',
                        'rgb(83, 133, 249)',
                        'rgb(192, 133, 84)',
                        'rgb(219, 196, 84)',
                        'rgb(219, 196, 42)',
                        'rgb(174, 157, 205)',
                        'rgb(244, 157, 205)',
                        'rgb(244, 143, 163)',
                        'rgb(103, 78, 230))',
                        'rgb(50, 52, 163)'
                    ],
                    borderColor: 'rgb(0, 0, 0)',
                    data: elections //[22, 3, 44, 1, 4, 22, 5, 66, 2, 33]
                },

                {
                    label: 'shown times',
                    backgroundColor: ['rgb(244, 157, 205)',
                        'rgb(244, 143, 163)',
                        'rgb(103, 78, 230))',
                        'rgb(50, 52, 163)',
                        'rgb(255, 99, 132)',
                        'rgb(83, 133, 249)',
                        'rgb(192, 133, 84)',
                        'rgb(219, 196, 84)',
                        'rgb(219, 196, 42)',
                        'rgb(174, 157, 205)',
                        'rgb(244, 157, 205)',
                        'rgb(244, 143, 163)',
                        'rgb(103, 78, 230))',
                        'rgb(50, 52, 163)',
                        'rgb(255, 99, 132)',
                        'rgb(83, 133, 249)',
                        'rgb(192, 133, 84)',
                        'rgb(219, 196, 84)',
                        'rgb(219, 196, 42)',
                        'rgb(174, 157, 205)'
                    ],
                    borderColor: 'rgb(255, 255, 255)',
                    data: shownTime //[22, 3, 44, 1, 4, 22, 5, 66, 2, 33]
                }
            ]
        },
        // Configuration options go here
        options: {}
    });
}
// chart.config.data.labels.datasets = ;
console.log(allItem);