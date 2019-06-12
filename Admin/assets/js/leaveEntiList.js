$(document).ready(function ()
    {
        
        $('#leaveEntlist').DataTable({
            "scrollX": true,
            "scrollY": "50vh",
            "scrollCollapse": true,
            "bSortCellsTop": true,
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

        $("#logsEntitle").click(function () {
            $($.fn.dataTable.tables(true)).DataTable().columns.adjust();
        });

        debugger;
        $('#leaveEntLogs').DataTable({
            "scrollX": true,
            "scrollY": "50vh",
            "scrollCollapse": true,
            "bSortCellsTop": true,
            deferRender: true,
            colReorder: true,
            fixedColumns: {
                leftColumns: 2
            }
    
        });

        $('.tableFilter .dropdown-toggle').click(function (){
            dropDownFixPosition($(this),$('.dropdown-menu'));
        });
        function dropDownFixPosition(button,dropdown){
            var dropDownTop = button.offset().top + button.outerHeight();
                dropdown.css('top', (dropDownTop) + "px");
                dropdown.css('left', (button.offset().left) + "px");
        }

        $('.tableFilterPopup .dropdown-toggle').click(function (){
            dropDownFixPosition($(this),$('.dropdown-menu'));
        });
        function dropDownFixPosition(button,dropdown){
            var dropDownTop = button.offset().top + button.outerHeight();
                dropdown.css('top', (dropDownTop - 70) + "px");
                dropdown.css('left', (button.offset().left - 40) + "px");
        }
    }
)