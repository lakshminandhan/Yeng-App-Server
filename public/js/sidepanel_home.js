/*add news&updates*/
$(document).ready(function(){

    $('#add-news').on('click', function(){
        $("loading_gif").show();
        $.ajax({
            url: "/news/add",
            method: "GET",
            data: {

            },

            success: function(data, textStatus, jqXHR) {
                $("#loading_gif").hide();
                console.log("succes");
                console.log(data);
                $("#body").html(data);
                $("#items li").css("background-color","transparent");
               $("#add-news").css("background-color","#18a39c");

               $("#items a").css("color","black");
                $("#add-news a").css("color","#fff");


            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("error");
            }
        });

    });
});


/*view news&updates*/
$(document).ready(function(){

    $('#view-news').on('click', function(){
        $("#loading_gif").show();
        $.ajax({
            url: "/news/view",
            method: "GET",
            data: {

            },

            success: function(data, textStatus, jqXHR) {
                console.log("succes");
                console.log(data);
                $("#loading_gif").hide();
                $("#body").html(data);
                $("#items li").css("background-color","transparent");
                $("#view-news").css("background-color","#18a39c");

                $("#items a").css("color","black");
                $("#view-news a").css("color","#fff");


            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("error");
            }
        });

    });
});

/*view admin details*/
$(document).ready(function(){

    $('#view-admin').on('click', function(){
        $("#loading_gif").show();
        $.ajax({
            url: "/admin/view",
            method: "GET",
            data: {

            },

            success: function(data, textStatus, jqXHR) {
                console.log("succes");
                console.log(data);
                $("#loading_gif").hide();
                $("#body").html(data);
                $("#items li").css("background-color","transparent");
                $("#view-admin").css("background-color","#18a39c");

                $("#items a").css("color","black");
                $("#view-admin a").css("color","#fff");


            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("error");
            }
        });

    });
});
/*add new admin*/
$(document).ready(function(){

    $('#add-admin').on('click', function(){
        $("#loading_gif").show();
        $.ajax({
            url: "/admin/new",
            method: "GET",
            data: {

            },

            success: function(data, textStatus, jqXHR) {
                console.log("succes");
                console.log(data);
                $("#loading_gif").hide();
                $("#body").html(data);
                $("#items li").css("background-color","transparent");
                $("#add-admin").css("background-color","#18a39c");

                $("#items a").css("color","black");
                $("#add-admin a").css("color","#fff");


            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("error");
            }
        });

    });
});

/*ABU Create ViewSyllabus 29-9-2017*/
$(document).ready(function () {
    $('#view-syllabus').on('click',function () {
        $("#loading_gif").show();
        $.ajax({
            url:"/syllabus/course/view",
            method:"GET",
            data:{

            },
            success:function (data,txtStataus,jqXHR) {
                console.log("succes");
                console.log(data);
                $("#loading_gif").hide();
                $("#body").html(data);
                $("#items li").css("background-color","transparent");
                $("#view-syllabus").css("background-color","#18a39c");

                $("#items a").css("color","black");
                $("#view-syllabus a").css("color","#fff");
            }
            //$("#items li").css("background-color","transparent");
            //$("#view-syllabus").css("background-color","#18a39c");
        });

    });
});

$(document).ready(function () {
    $('#add-course').on('click',function () {
        $('#loading_gif').show();
        $.ajax({
            url:"/syllabus/course/new",
            method:"get",
            data:{

            },
            success:function (data,txtStataus,jqXHR) {
                console.log("create page enterd");
                //console.log(data);
                $("#loading_gif").hide();
                $("#body").html(data);
                $("#items li").css("background-color","transparent");
                $("#view-syllabus").css("background-color","#18a39c");

                $("#items a").css("color","black");
                $("#view-syllabus a").css("color","#fff");
            }
        });

    });

});
//Add Sem Created 7-10-2017 Abu//
$(document).ready(function () {
    $('#add-sem').on('click',function () {
        var coursename=document.getElementById('ParantCourse').value;
        $('#loading_gif').show();
        $.ajax({
            url:"/syllabus/course/addSem/"+coursename,
            method:"get",
            data:{

            },
            success:function (data,txtStataus,jqXHR) {
                console.log("Create Sem page enetrd");
                $("#loading_gif").hide();
                $("#body").html(data);
            }
        });
    });
});
$(document).ready(function () {
    $('#create-sem').on('click',function () {
        var courseName=document.getElementById('inputcs').value;
        var semName=document.getElementById('inputsm').value;
        $('#loading_gif').show();
        $.ajax({
            url:"/syllabus/course/addSem/B.tech",
            type:"POST",
            data:{
                    name:courseName,
                    sem:semName
            },
            success:function (data,txtStataus,jqXHR) {
                console.log("Sem Created Succesfully");
                $("#loading_gif").hide();
                $("#body").html(data);
                alert('Success!');
            }
        });
    });
});

function parantCourse(objCourse){
    //console.log(objCourse.value);
    $("#loading_gif").show();
    $.ajax({
        url:"/syllabus/course/sem/"+objCourse.value,
        method:"get",
        data:{

        },
        success:function (data,txtStataus,jqXHR) {
            console.log(objCourse.value+" Viw page enterd");
            $("#loading_gif").hide();
            $("#body").html(data);
        }

    });

}

function parantSem(objSem) {
    $("#loading_gif").show();
    $.ajax({
        url:"/syllabus/course/sem/branch/"+objSem.value,
        method:"get",
        data:{

        },
        success:function (data,txtStataus,jqXHR) {
            console.log(objSem.value+" view page enterd");
            $("#loading_gif").hide();
            $("#body").html(data);
        }

    });
}
$(document).ready(function () {
    $('#add-branch').on('click',function () {
        $("#loading_gif").show();
        var objParant=document.getElementById('branchParant').value;
        $.ajax({
            url:"/syllabus/course/sem/addbranch/"+objParant,
            method:"get",
            data:{
                
            },
            success:function (data,txtStataus,jqXHR) {
                console.log(" branch Add Page  enterd");
                $("#loading_gif").hide();
                $("#body").html(data);
            }
            
        });
    });
});
$(document).ready(function () {
    $('#create-br').on('click',function () {
        $("#loading_gif").show();
        var objcourse=document.getElementById('inputcrs').value;
        var objsem=document.getElementById('inputsm').value;
        var objbr=document.getElementById('inputbr').value;
        $.ajax({
            url:"/syllabus/course/sem/addbranch/"+objcourse,
            method:"post",
            data:{
                course:objcourse,
                sem:objsem,
                branch:objbr
            },
            success:function (data,txtStataus,jqXHR) {
                console.log(" branch Added Succes");
                $("#loading_gif").hide();
                $("#body").html(data);
                alert('Success!');
            }
        })
    })

});

function editCourse(objButton) {
    console.log(objButton.value);
    $("#loading_gif").show();
    $.ajax({
        url:"/syllabus/course/"+objButton.value,
        type: "get",
        data: {
            //date:$('button').val()
        },
        success:function (data,txtStataus,jqXHR) {
            console.log("Edit page enterd");
            //console.log(data);
            $("#loading_gif").hide();
            $("#body").html(data);
            $("#items li").css("background-color","transparent");
            $("#view-syllabus").css("background-color","#18a39c");

            $("#items a").css("color","black");
            $("#view-syllabus a").css("color","#fff");
        }

    });
    //console.log(data);
}


function doeditCourse(){
    $("#loading_gif").show();
    var coursename=document.getElementById('coursevalue').value;
    console.log(coursename);
    $.ajax({
        url:"/syllabus/course/"+coursename,
        method:"POST",
        data: {
            coursename:coursename
        },
        success:function(data,txtStataus,jqXHR){
            console.log(data);
        }
    });

}
/*
$(document).ready(function () {
    $('#editCoursetext').click(function () {
        var coursename=$('#coursevalue').value;
        console.log(coursename);
        $("#loading_gif").show();
        $.ajax({
            url:"/syllabus/course/docourseedit",
            method:"POST",
            data:{
               //course:$('#editCoursetext').value
            },
            success:function (data) {
                console.log("");
            }
        })

    });
});

*/
function delet() {
    confirm("Confirm Delete?");
}

/*cancel edit news*/
$(document).ready(function () {
    $("#cancel_edit").click(function () {
        $("#news-details").hide();
        console.log("success");
    });
});
/*cancel change password*/
$(document).ready(function () {
    $("#cancel_change").click(function () {
        $("#change_pswd").hide();
        console.log("success");
    });
});









