$(document).ready(function ()
    {
        $('#myLeavelist').DataTable({
            "scrollX": true,
            "scrollY": "50vh",
            "scrollCollapse": true,
            "bSortCellsTop": true,
            // 'fnDrawCallback': function () {
            //     $('.dataTables_filter .columnChosMain').remove();
            //     $('<span class="columnChosMain"style="position:relative;"><button class="btn btn-default pull-right m-l-10" type="button" id="ColChoosLeave">Column Chooser</button>'+
                
            //     '<div class="columnChosBox">'+
            //     '<h4></h4>'+
            //     '<ul>' +
            //         '<li>Employee Name</li>'+
            //         '<li>S.No.</li>'+
            //         '<li>Date of Absence</li>'+
            //         '<li>Total Day</li>'+
            //         '<li>Duration</li>'+
            //         '<li>Leave Type</li>'+
            //         '<li>Leave Status</li>'+
            //         '<li>Description</li>'+
            //         '<li>Modified by</li>'+
            //         '<li>Modified Date</li>'+
            //         '<li>Applied Date</li>'+
            //         '<li>From Date</li>'+
            //         '<li>To Date</li>'+
            //         '<li>Attachments</li>'+
            //         '<li>Emp Id</li>'+
            //         '<li>Leave Plan</li>'+
            //         '<li>From Hours</li>'+
            //         '<li>To Hours</li>'+
            //         '<li>Total Hours</li>'+
            //     '</ul>'+
                
            //     '</div></span>').appendTo($(".dataTables_filter"));
               
            // },
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
                        return '<input type="checkbox">';
                    }
                }
            ],
            'select': {
                'style': 'multi'
            },
            'order': [[1, 'asc']]
    
        });
     
        

        $('.tableFilter .dropdown-toggle').click(function (){
            dropDownFixPosition($(this),$('.dropdown-menu'));
        });
        function dropDownFixPosition(button,dropdown){
            var dropDownTop = button.offset().top + button.outerHeight();
                dropdown.css('top', (dropDownTop) + "px");
                dropdown.css('left', (button.offset().left) + "px");
        }
    }
)