//Prettier
//commnand prompt change
//Using manual search directory
function main_function_jquery (){

    function activate_modal(){
        $("#exampleModal").modal('show');
    }

    $("#change_color_button").click(function(e) {
        console.log('this is working');
        $("#title_change_color").css("color","green");
        activate_modal();
    })

    $("#myForm").submit(function(e) {
        e.preventDefault();
        var value1 =$("#value1").val();
        var value2 = $("#value2").val();
        alert("The values inserted are: "+value1+" and "+value2)

    })

}

main_function_jquery();