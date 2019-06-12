$(document).ready(function () {
    // Save & next
    $("#basicinfo_save_btn").click(function(){
        $("#empdetail").css("display", "block");
        $("#basicinfo").css("display", "none");
    });
    $("#basicinfo_next_btn").click(function(){
        $("#empdetail").css("display", "block");
        $("#basicinfo").css("display", "none");
    });
    $("#empdetail_save").click(function(){
        $("#empdetail").css("display", "none");
        $("#educationdetail").css("display", "block");
    });
    $("#empdetail_previous").click(function(){
        $("#basicinfo").css("display", "block");
        $("#empdetail").css("display", "none");
    });
    $("#empdetail_next").click(function(){
        $("#educationdetail").css("display", "block");
        $("#empdetail").css("display", "none");
    });
      // Save & next end
    //   user profile tabs
    $("#empdetail").click(function(){
        $("#empdetailcrd").css("display", "block");
        $("#edudetailcrd").css("display", "none");
        $("#payinfocrd").css("display", "none");
        $("#otherinfocrd").css("display", "none");
        $("#documentcrd").css("display", "none");
    });
    $("#edudetail").click(function(){
        $("#empdetailcrd").css("display", "none");
        $("#edudetailcrd").css("display", "block");
        $("#payinfocrd").css("display", "none");
        $("#documentcrd").css("display", "none");
        $("#otherinfocrd").css("display", "none");
    });
    $("#payinfo").click(function(){
        $("#otherinfocrd").css("display", "none");
        $("#payinfocrd").css("display", "block");
        $("#edudetailcrd").css("display", "none");
        $("#empdetailcrd").css("display", "none");
        $("#documentcrd").css("display", "none");
    });
    $("#otherinfo").click(function(){
        $("#otherinfocrd").css("display", "block");
        $("#payinfocrd").css("display", "none");
        $("#edudetailcrd").css("display", "none");
        $("#empdetailcrd").css("display", "none");
        $("#documentcrd").css("display", "none");
    });
    $("#documentupload").click(function(){
        $("#documentcrd").css("display", "block");
        $("#otherinfocrd").css("display", "none");
        $("#payinfocrd").css("display", "none");
        $("#edudetailcrd").css("display", "none");
        $("#empdetailcrd").css("display", "none");
    });
    //   user profile tabs end
    $("#employeelistbtn").click(function () {
        $("#employeelist").css("display", "block");
        $("#AddOne").css("display", "none");
        $("#employeelistbtn").addClass("active");
        $("#galleryviewbtn").removeClass("active");
        $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
    });
    $("#galleryviewbtn").click(function () {
        $("#AddOne").css("display", "block");
        $("#employeelist").css("display", "none");
        $("#employeelistbtn").removeClass("active");
        $("#galleryviewbtn").addClass("active");
    });
    $(".insertBefore").click(function () {
        classN = $(".empDetail").attr('class');
        div = document.createElement("div");
        div1 = document.createElement('div');
        $(div1).attr("class", "context-menu-one profile-widget ");
        $(div).attr('class', classN);

        var newDIV = "<div class=''><div class='profile-img'><img class='avatar' src='assets/img/user.jpg' alt=''></div><div class='gridprofile'><h4 class='user-name m-b-0 m-t-5'>Name</h4><div>Designation</div></div><div class='text-left float-100 m-t-15'><p class='float-100'>Email</p><p class='float-100'>Phone</p><p class='float-100 p-r-5'>Gender</p><p class='float-100 p-r-5'>Manager</p></div></div>";
        div1.innerHTML = newDIV;

        div.append(div1);
        $(div1).css('display', 'block');
        main = $("#txt_id").val();
        $(div).attr('id', main + "1");
        mainDiv = $('#' + main);

        $(div).insertBefore(mainDiv).css('display', 'block');
    });

    $(".insertAfter").click(function (event) {
        classN = $(".empDetail").attr('class');
        div = document.createElement("div");
        div1 = document.createElement('div');
        $(div1).attr("class", "context-menu-one profile-widget");
        $(div).attr('class', classN);
        var newDIV = "<div class=''><div class='profile-img'><img class='avatar' src='assets/img/user.jpg' alt=''></div><div class='gridprofile'><h4 class='user-name m-b-0 m-t-5'>Name</h4><div>Designation</div></div><div class='text-left float-100 m-t-15'><p class='float-100'>Email</p><p class='float-100'>Phone</p><p class='float-100 p-r-5'>Gender</p><p class='float-100 p-r-5'>Manager</p></div></div>";
        div1.innerHTML = newDIV;

        div.append(div1);
        $(div1).css('display', 'block');
        main = $("#txt_id").val();
        $(div).attr('id', main + "1");
        mainDiv = $('#' + main);
        $(div).insertAfter(mainDiv).css('display', 'block');
    });


    $(".duplicate").click(function (event) {
        main = $("#txt_id").val();
        mainDiv = $("#" + main);
        var div = $(mainDiv).clone();
        $(div).insertAfter(mainDiv);
    });
    $(".dlterec").click(function (event) {
        main = $("#txt_id").val();
        mainDiv = $("#" + main);
        $(mainDiv).remove();
    });
    $(function () {
        var $contextMenu = $(".contextMenu");

        $("body").on("contextmenu", ".context-menu-one", function (e) {
            // $("body").bind('contextmenu', function(e) {
            $contextMenu.css({
                display: "block",
                left: e.pageX - 100,
                top: e.pageY - 100
            });

            divKiValue(this)
            return false;
        });

        $('html').click(function () {
            $contextMenu.hide();
        });

    });

    function divKiValue(e) {
        $("#txt_id").val($(e).parent('div').attr('id'));
    }
    
    $('#example').DataTable({
        "scrollX": true,
        "scrollY": "50vh",
        "scrollCollapse": true,
        "bSortCellsTop": true,
        'fnDrawCallback': function () {
            $('.dataTables_filter .btn-default').remove();
            $('<button class="btn btn-default pull-right" type="button" id="ColChoosLeave">Column Chooser</button>').appendTo($(".dataTables_filter"));
           
        },
        deferRender: true,
        colReorder: true,
        fixedColumns: {
            leftColumns: 2
        },
        'columnDefs': [
 {
     'targets': 0,
     "orderable": false,
     'checkboxes': {
         'selectRow': true,
     },
     'render': function (data, type, full, meta) {
         return '<input type="checkbox"><i class="fa fa-expand expand"></i>';
     }
 }
        ],
        'select': {
            'style': 'multi'
        },
        'order': [[1, 'asc']]

    });
   
    //edit employee
    $(document).on('click', '.fa-expand', function (e) {
        
        $("#rowpopup").modal('show');
        debugger;
        var ID = 0;
        var id = $(this).closest("tr").each(function (i, v) {
            var $tds = $(this).find('td'),
                 salary = $tds.eq(6).text();
            name = $tds.eq(1).text();
            position = $tds.eq(2).text();
            office = $tds.eq(3).text();
            age = $tds.eq(4).text();
            start_date = $tds.eq(5).text();
           
            alert(name + position + office + age + start_date + salary);
            $("#heading").html(name + "<i class='fa fa-sort-down sortdown'></i>" + "<div class='headerchild'>"
                + "<ul>"
               + "<li id='copy-click' onclick='copy()'><i class='fa fa-clone'></i>Copy Record Url<span id='copyelement'></span></li>"
               + "<li><i class='fa fa-envelope-o'></i>Send Record Url</li>"
               + "<li><i class='fa fa-files-o'></i>Duplicate Record</li>"
               + "<li onclick='print()' id='print'><i class='fa fa-print'></i>Print Record</li>"
               + "<li class='deleterecord'><i class='fa fa-trash'></i>Delete Record</li>"
                + "</ul>"
                + "</div>");
            $('#salary').attr("value", salary);
            $('#name').attr("value", name);
            $('#position').attr("value", position);
            $('#office').attr("value", office);
            $('#age').attr("value", age);
            $('#start_date').attr("value", start_date);
          
        });
      
        $('body').click(function (e) {
            $(".headerchild").hide();
        });
        $("#heading").click(function (e) {
            $(".headerchild").css("display", "block");
            e.stopPropagation();
        });
    });
    //delete record js
    ID = table.row($(this).parents('tr').first()).data().id;
    alert(' ID=#' + ID + '#');
    $('.deleterecord').click(function () {
        debugger;
        $('#ID').remove();
        alert('deleterecord');
    });
});

//print js
function print() {
    $("#rowpopup").printMe({
        "path": ["assets/css/style.css", "assets/css/bootstrap.min.css"]
    });
}

//copy url
function copy() {
    debugger
    var str = window.location.href;
    el = document.createElement('textarea');
    document.body.appendChild(el);
    el.value = str;
    el.select();
    $(el).focus();
    document.execCommand("copy");

    $(".copyurl").css('display', 'block').delay(1000).fadeOut();
    document.body.removeChild(el);
}
// script for tab steps
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

    var href = $(e.target).attr('href');
    var $curr = $(".process-model  a[href='" + href + "']").parent();

    $('.process-model li').removeClass();

    $curr.addClass("active");
    $curr.prevAll().addClass("visited");
});
// end  script for tab steps
