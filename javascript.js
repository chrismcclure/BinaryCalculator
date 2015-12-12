var binaryNumbers = [1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
var AddingbinaryNumbers = [512, 256, 128, 64, 32, 16, 8, 4, 2, 1];
var stop = false;


$('#clicky').on('click', function (e) {
    if(e.handled !== true){

    var numberOne = $('#number1').val();
    alert(numberOne);
    var numberTwo = $('#number2').val();


    //Check numbers
    checknumbers(numberOne, 'wrong1');
    checknumbers(numberTwo, 'wrong2');


    alert("Test 2 " + numberOne);

    var totalDecimal = (Number(numberOne) + Number(numberTwo));

    $('#first').text(numberOne);
    $('#second').text(numberTwo);
    $('#final-decimal-total').text(totalDecimal);

    var binaryOne = MakeBinary(numberOne);
    var binaryTwo = MakeBinary(numberTwo);

    $('#first-binary').text(binaryOne);
    $('#second-binary').text(binaryTwo);
    $('#check-final-binary-total').text(MakeBinary(totalDecimal));

    var finalBinarySum = AddBinaryNumbers(binaryOne, binaryTwo);

    $('#final-binary-total').text(finalBinarySum);
    $('#topBinary').text(binaryOne);
    $('#bottomBinary').text(binaryTwo);
    $('#sum').text(finalBinarySum);

    lightRow(binaryOne, "top");
    lightRow(binaryTwo, "bottom");
    lightRow(finalBinarySum, "sum");

    alert('test 3' + numberTwo);

    $('#number1').val("");
    $('#number2').val("");

    alert('test 4, end of script' + finalBinarySum);

    e.handled = true;
    }
});


function checknumbers(number, id) {
    //Check to make sure both input vaules are numbers
    stop = false;
    if (isNaN(number) == true || number > 1024 || number < 0) {
        $('#' + id).text('*Please input a number between 0 and 1024').css('color', 'red');
        $('.circle').css('background-color', 'white').text('');
        stop = true;
    } else {
        $('#' + id).text('');
    }
    return stop;
};


//Lights all the correct buttons ups
function lightRow(binaryArray, classname) {
    var i = 0;
    $('.' + classname).each(function () {
        $(this).text(binaryArray[i]);
        if (binaryArray[i] == 1) {
            $(this).css('background-color', 'red');
        } else {
            $(this).css('background-color', 'white');
        }

        i++;
    })
};

function MakeBinary(innumber) {
    var number = Number(innumber);
    var binaryOutPut = [];
    for (var i = 0; i < binaryNumbers.length; i++) {
        var test = number - binaryNumbers[i];
        if (test >= 0) {
            binaryOutPut.push("1")
                //alert("before" + number);
            number = number - binaryNumbers[i];
            //alert("after " + number);
        } else {
            binaryOutPut.push("0");
        }
    }
    var finalbinaryNumber = binaryOutPut;
    return finalbinaryNumber;
};


function AddBinaryNumbers(bnumber1, bnumber2) {
    var bSum = [];
    var carryOver = 0;
    for (var i = (bnumber1.length - 1); i >= 0; i--) {
        if (bnumber1[i] == 0 && bnumber2[i] == 0 && carryOver == 0) {
            bSum.unshift('0');
            carryOver = 0;
        } else if (bnumber1[i] == 0 && bnumber2[i] == 0 && carryOver == 1) {
            bSum.unshift('1');
            carryOver = 0;
        } else if (bnumber1[i] == 1 && bnumber2[i] == 1 && carryOver == 0) {
            bSum.unshift('0');
            carryOver = 1;
        } else if (bnumber1[i] == 1 && bnumber2[i] == 1 && carryOver == 1) {
            bSum.unshift('1');
            carryOver = 1;
        } else if (bnumber1[i] == 0 && bnumber2[i] == 1 && carryOver == 1) {
            bSum.unshift('0');
            carryOver = 1;
        } else if (bnumber1[i] == 1 && bnumber2[i] == 0 && carryOver == 1) {
            bSum.unshift('0');
            carryOver = 1;
        } else {
            bSum.unshift('1'); //carry over = 0
            carryOver = 0;
        }
    }
    bSum.unshift(carryOver);
    return bSum;
};
