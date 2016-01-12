$(document).ready(function() {
        $('#calendar').fullCalendar({
            defaultDate: '2016-01-12',
            businessHours: true, // display business hours
            editable: true,
            nowIndicator: true,
            allDaySlot: false,
            slotDuration: '00:15',
            slotLabelInterval: '00:15',
            minTime: '08:00:00',
            maxTime: '20:00:00',
            defaultView: 'agendaWeek',
            eventRender: function(event, element) {
                $(element).addClass('hasmenu');
                if (event.new === true) {
                    console.log(event.source.events.length);
                    element.fadeIn(800);
                    event.new = false;
                }
            },
            dayClick: function(date, jsEvent, view) {
            },
            events: [{
                    title: 'Business Lunch',
                    start: '2016-01-03T13:00:00',
                    constraint: 'businessHours'
                }, {
                    title: 'Meeting',
                    start: '2016-01-13T11:00:00',
                    constraint: 'availableForMeeting', // defined below
                    color: '#257e4a'
                }, {
                    title: 'Conference',
                    start: '2016-01-18',
                    end: '2016-01-20'
                }, {
                    title: 'Party',
                    start: '2016-01-29T20:00:00'
                },

                // areas where "Meeting" must be dropped
                {
                    id: 'availableForMeeting',
                    start: '2016-01-11T10:00:00',
                    end: '2016-01-11T16:00:00',
                    rendering: 'background'
                }, {
                    id: 'availableForMeeting',
                    start: '2016-01-13T10:00:00',
                    end: '2016-01-13T16:00:00',
                    rendering: 'background'
                }
            ]
        });
        $(document).contextmenu({
            delegate: ".hasmenu",
            preventContextMenuForPopup: true,
            preventSelect: true,
            menu: [{
                title: "Cut",
                cmd: "cut",
                uiIcon: "ui-icon-scissors"
            }, {
                title: "Copy",
                cmd: "copy",
                uiIcon: "ui-icon-copy"
            }, {
                title: "Paste",
                cmd: "paste",
                uiIcon: "ui-icon-clipboard",
                disabled: true
            }, ],
            select: function(event, ui) {
                // Logic for handing the selected option
            },
            beforeOpen: function(event, ui) {
                ui.menu.zIndex($(event.target).zIndex() + 1);
            }
        });
        //$('#calendar').fullCalendar( 'renderEvent', { title: 'Vaaamos Ctm', start: '2016-01-11T10:00:00',constraint: 'availableForMeeting', color: '#257e4a', new: true}, true)
    });