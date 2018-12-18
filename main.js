turn = "X";
$('td').click(function() {
    if(turn == "X") {
        $(this).html("X");
        $(this).css('text-align', 'center');
        $(this).css('color', 'white');
        $(this).css('background', '#6088b8');
        turn = "O";
    }
    else {
        turn = "O"
        $(this).html("O");
        $(this).css('text-align', 'center');
        $(this).css('color', 'white');
        $(this).css('background', '#b3d4fc');
        turn = "X"
    }
});
