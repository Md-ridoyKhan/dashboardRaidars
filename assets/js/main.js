// -----------> jQuery
(function($) {
    "use strict";

    // -----------------------
    // preloader area here js
    // ------------------------ 
    $(window).on('load', function() {
        $('#preloder').fadeOut('slow', function() { $(this).remove(); });
    });


    // -----------------------
    // Sidenav Dropdown
    // -----------------------
    // $(".menu_item_section .menu_link").on('click', function(){
    //     // $(this).closest('li.menu_item_section').find('.sub_menu').toggleClass("sub-menu-show");
    //     $(this).find('i').toggleClass('fa-angle-down');
    //     $(this).find('i').toggleClass('fa-angle-up');
    // });

    // side menu area here
    $('.header_area .header_left .mobile_menu_bar .bar_menu').on('click', function(){
        $('.main_menu').addClass('show_main_menu');
    });
    $('.main_menu .mobile_menu_bar .close_menu a').on('click', function(){
        $('.main_menu').removeClass('show_main_menu');
    });
    // side menu area here
    $('.menu_item_section .menu_link').on('click', function(){
        $(this).closest('li.menu_item_section').find('.sub_menu').toggleClass("sub-menu-show");
        
        $(this).find('i').toggleClass('fa-angle-down');
        $(this).find('i').toggleClass('fa-angle-up');
    });


    // header area here
    // notification alart box
    $('.header_right .notification_alart .image_box').on('click', function(){
        $('.notification_alart_box').toggleClass('show');
    });

    // notification alart close menu bar
    $('.notification_alart_box .close_menu').on('click', function(){
        $('.notification_alart_box').removeClass('show');
    });


    // profile & profile list
    $('.header_right .profile').on('click', function(){
        $('.header_right .profile_list_info').toggleClass('active');
        
        // arrow angle up and down icon 
        $('.profile .content .arrow i').toggleClass('fa-angle-down');
        $('.profile .content .arrow i').toggleClass('fa-angle-up');
    });

    // -----------------------
    // datepicker area here js
    // ------------------------
    // header bottom area here
    // start date & end date 
    $('[data-toggle="datepicker"]').datepicker();



    // home map area here
    // map nav
    $('.map_item .map_nav ul li').on('click', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    
    // $(".list_head_wrapper").on('click', function(){
    //     $(this).closest('.aabbro_filter_lists2 > li').find('ul.list_item_wrapper').toggleClass("active");
    // });

    // $('.menu_item_section .menu_link').on('click', function(){
    //     $('.sub_menu').toggleClass('active');
    // });


    // $(".header_right .profile").on('click', function(e) {
    //     var container = $(".header_right .profile_list");
    //     if (!$(e.target).closest(container).length) {
    //         container.hide();
    //     }
    // });
    
    // $(".dropdown").click(function(e){
    //     e.stopPropagation();
    // });
    
    // $(document).click(function(){
    //     $(".dropdown").hide();
    // });













    // -----------------------
    //  top up button area js
    // ------------------------ 
    // $(window).scroll(function(){
    //     if($(this).scrollTop() > 80){
    //         $(".topUp-btn").fadeIn(1000);
    //     } else{
    //         $(".topUp-btn").fadeOut(1000);
    //     }
    // });
    // $(".topUp-btn").click(function(){
    //     $(" html,body").animate({scrollTop : 0}, 1000);
    // });

    
    // -----------------------
    // This will create a sticky js
    // -----------------------
    // $(window).on('scroll', function () {
    //     var scroll = $(window).scrollTop();
    //     if (scroll < 300) {
    //         $(".header-area").removeClass("sticky");
    //     } else {
    //         $(".header-area").addClass("sticky");
    //     }
    // });


    // -----------------------
    // This will create a owlCarousel
    // logo carousel area here js
    // -----------------------
    // $('.hero-carousel').owlCarousel({
    //     loop: true,
    //     items: 4,
    //     margin: 48,
    //     nav: false,
    //     dots: false,
    //     autoplay: true,
    //     smartSpeed: 2000,
    //     autoplayTimeout: 4000,
    //     responsive: {
    //         0: {
    //             items: 3,
    //             margin: 40
    //         },
    //         500: {
    //             items: 4,
    //             margin: 20
    //         },
    //         992: {
    //             items: 4,
    //             margin: 48
    //         }
    //     }
    // });



    // -----------------------
    // This will create a counter up js
    // -----------------------
    // $('.counter span').counterUp({
    //     delay: 10,
    //     time: 1000
    // });


    // -----------------------
    // This will create a slick slider
    // clients slider area here js
    // -----------------------
    // $('.clients-slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
    //     nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></i></span>',
    //     responsive: [
    //       {
    //         breakpoint: 900,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //         }
    //       },
    //       {
    //         breakpoint: 576,
    //         settings: {
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    // });


    // -----------------------
    // This will create a slick slider
    // blog slider area here js
    // -----------------------
    // $('.blog-slider').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 4000,
    //     prevArrow: '<span class="priv_arrow"><i class="fas fa-chevron-left"></i></span>',
    //     nextArrow: '<span class="next_arrow"><i class="fas fa-chevron-right"></i></i></span>',
    //     responsive: [
    //       {
    //         breakpoint: 900,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 1,
    //         }
    //       },
    //       {
    //         breakpoint: 576,
    //         settings: {
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    // });


    
    // -----------------------
    // aos animate js
    // -----------------------
    // AOS.init({
    //   duration: 1000,
    //   once: true
    // });
    


    



}(jQuery));



// -----------> javaScript
// -----------------------
// header mobile menu area here
// ------------------------ 
// const menuBar = document.querySelector(".mobile-menu-bar");
// const sideBarMenu = document.querySelector(".off-canvas-menu");
// const closeMenu = document.querySelector(".close-menu");
// const bodyOverlay = document.querySelector(".body-overlay");
// menuBar.onclick = ()=>{
//     sideBarMenu.classList.add("active");
//     bodyOverlay.classList.add("active");
// };
// closeMenu.onclick = ()=>{
//     sideBarMenu.classList.remove("active");
//     bodyOverlay.classList.remove("active");
// };
// bodyOverlay.onclick = ()=>{
//     sideBarMenu.classList.remove("active");
//     bodyOverlay.classList.remove("active");
// };
// --------------------------
// -JS area ends here
// --------------------------



/**
 * Sample for Sorting Total Cost of Ownership
**/
var dataValuesOwnership = [
    { x: 'Jan', car: 2, trucks: 3, bike: 2 },
    { x: 'Feb', car: 1, trucks: 2, bike: 2 },
    { x: 'Mar', car: 2, trucks: 1, bike: 3 },
    { x: 'Apr', car: 1, trucks: 2, bike: 1 },
    { x: 'May', car: 3, trucks: 1, bike: 1 },
    { x: 'Jun', car: 1, trucks: 2, bike: 2 },
    { x: 'Jul', car: 2, trucks: 3, bike: 1 },
    { x: 'Aug', car: 1, trucks: 2, bike: 4 },
    { x: 'Sep', car: 2, trucks: 2, bike: 2 },
    { x: 'Oct', car: 1, trucks: 1, bike: 3 },
    { x: 'Nov', car: 3, trucks: 2, bike: 2 },
    { x: 'Dec', car: 2, trucks: 1, bike: 2 }
];
var chart = new ej.charts.Chart({
    primaryXAxis: {
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 }, 
        minorTickLines: { width: 0 },
        interval: 1, 
        lineStyle: { width: 0 },
        valueType: 'Category'
    },
    primaryYAxis: {
        minimum: 0,
        maximum: 8,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }, 
        majorGridLines: { width: 1 },
        minorGridLines: { width: 0 }, 
        minorTickLines: { width: 0 },
        labelFormat: '{value}K',
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    series: [
        {
            type: 'StackingColumn', 
            dataSource: dataValuesOwnership,
            xName: 'x', 
            yName: 'car',
        },
        {
            type: 'StackingColumn', 
            dataSource: dataValuesOwnership,
            xName: 'x',
            yName: 'trucks',
        },
        {
            type: 'StackingColumn', 
            dataSource: dataValuesOwnership,
            xName: 'x',
            yName: 'bike',
        }
    ],
    palettes: ["#FFD66B", "#38EF86", "#B986FB"],
    tooltip: { enable: true},
    width: ej.base.Browser.isDevice ? '100%' : '100%',
    height: ej.base.Browser.isDevice ? '200px' : '200px',

});
chart.appendTo('#total_cost_element');


/**
 * Sample for Doughnut chart Work Order
**/
var pie = new ej.charts.AccumulationChart({
    //Initializing Series
    series: [
        {

            dataSource: [
                { x: 'Open', y: 5, text: '05' }, 
                { x: 'Unassigned', y: 10, text: '10' },
                { x: 'Close', y: 2, text: '02' },
            ],
            // palettes for chart
            palettes: ["#FFD66B", "#38EF86", "#FF8F6B"],
            
            // Width and height for chart in pixel
            width: '250px', height: '250px',

            dataLabel: {
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                    fontFamily: 'Apercu',
                    size: '16px',
                    fontWeight: '700',
                    color: '#ffffff'
                }
            },
            radius: '70%', xName: 'x',
            yName: 'y', startAngle: 0,
            endAngle: 360, innerRadius: '30%', name: 'Project',
            explode: true, explodeOffset: '10%', explodeIndex: 2
        }
    ],
    // Width and height for chart in pixel
    width: '100%', height: '250px',
    enableSmartLabels: true,
    legendSettings: {
        visible: true, position: 'Bottom'
    },
    //Initializing Tooltip
    tooltip: { enable: true },

});
pie.appendTo('#work_element');


/**
 * Sample for Doughnut chart batteries health 1
**/
// var pie = new ej.charts.AccumulationChart({
//     //Initializing Series
//     series: [
//         {

//             dataSource: [
//                 { x: 'Open', y: 3, text: '3' }, 
//                 { x: 'Storage', y: 5, text: '5' },
//                 { x: 'Assigned', y: 2, text: '2' },
//             ],
//             // palettes for chart
//             palettes: ["#38EF86", "#5B93FF", "#B986FB"],

//             dataLabel: {
//                 visible: true,
//                 name: 'text',
//                 position: 'Inside',
//                 font: {
//                     fontFamily: 'Apercu',
//                     size: '16px',
//                     fontWeight: '700',
//                     color: '#ffffff'
//                 }
//             },
//             radius: '70%', xName: 'x',
//             yName: 'y', startAngle: 0,
//             endAngle: 360, innerRadius: '30%', name: 'Project',
//             explode: true
//         }
//     ],
//     // Width and height for chart in pixel
//     width: '250px', height: '100%',
//     enableSmartLabels: true,
//     legendSettings: {
//         visible: true, toggleVisibility: false,
//         position: 'Bottom',
//         height: '150px',
//         width: '50%',
//         textWrap:'Wrap',
//         maximumLabelWidth:100,
//     },
//     //Initializing Tooltip
//     tooltip: { enable: true },

// });
// pie.appendTo('#batteries_chart_element1');


/**
 * Sample for Doughnut chart batteries health 2
**/
// var pie = new ej.charts.AccumulationChart({
//     //Initializing Series
//     series: [
//         {

//             dataSource: [
//                 { x: 'Good', y: 5, text: '05' }, 
//                 { x: 'Regular', y: 10, text: '10' },
//                 { x: 'Bad', y: 2, text: '02' }, 
//             ],
//             // palettes for chart
//             palettes: ["#00D56F", "#FFD66B", "#FF8F6B"],

//             dataLabel: {
//                 visible: true,
//                 name: 'text',
//                 position: 'Inside',
//                 font: {
//                     fontFamily: 'Apercu',
//                     size: '16px',
//                     fontWeight: '700',
//                     color: '#ffffff'
//                 }
//             },
//             radius: '70%', xName: 'x',
//             yName: 'y', startAngle: 0,
//             endAngle: 360, innerRadius: '30%', name: 'Project',
//             explode: true
//         }
//     ],
//     // Width and height for chart in pixel
//     width: '250px', height: '100%',
//     enableSmartLabels: true,
//     legendSettings: {
//         visible: true, toggleVisibility: false,
//         position: 'Bottom',
//         height: '150px',
//         width: '40%',
//         textWrap:'Wrap',
//         maximumLabelWidth:100,
//     },
//     //Initializing Tooltip
//     tooltip: { enable: true },

// });
// pie.appendTo('#batteries_chart_element2');


/**
 * Sample for Spline Series Inventory Level
**/
var chart = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 },
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        labelFormat: '${value}',
        minimum: 0,
        maximum: 50,
        interval: 10,
        lineStyle: { width: 0 },
    },
    palettes: ["#FF8F6B", "#5E5BFF"],
    series: [
        {
            type: 'Spline',
            dataSource: [
                { x: 'Jan', y: 9 }, 
                { x: 'Feb', y: 15 },
                { x: 'Mar', y: 20 },
                { x: 'Apr', y: 22 },
                { x: 'May', y: 30 }, 
                { x: 'Jun', y: 28 },
                { x: 'Jul', y: 25 },
                { x: 'Aug', y: 20 },
                { x: 'Sep', y: 10 },
                { x: 'Oct',  },
            ],
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 10,
                height: 10
            },
            yName: 'y',
        },
        {
            type: 'Spline',
            dataSource: [
                { x: 'Jan', y: 15 }, 
                { x: 'Feb', y: 20 },
                { x: 'Mar', y: 25 },
                { x: 'Apr', y: 30 },
                { x: 'May', y: 35 }, 
                { x: 'Jun', y: 32 },
                { x: 'Jul', y: 30 },
                { x: 'Aug', y: 25 },
                { x: 'Sep', y: 20 },
                { x: 'Oct',  },
            ],
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 10,
                height: 10
            },
            yName: 'y',
        }
    ],
    //Initializing Chart Title
    // title: 'NC Weather Report - 2016',
    tooltip: { enable: true },
    width: ej.base.Browser.isDevice ? '100%' : '100%',
    height: ej.base.Browser.isDevice ? '230px' : '230px',

});
chart.appendTo('#inventory_level_element');


/**
 * Sample for Spline Series Speed
**/
var chart2 = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 },
        labelIntersectAction: 'Rotate90'
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        labelFormat: '{value}',
        rangePadding: 'None',
        minimum: 0,
        maximum: 60,
        interval: 10,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    },
    palettes: ["#FF8F6B", "#5E5BFF"],

    //Initializing Chart Series
    series: [
        {
            type: 'Spline',
            dataSource: [
                { x: 'Jan', y: 8 }, 
                { x: 'Feb', y: 10 },
                { x: 'Mar', y: 35 },
                { x: 'Apr', y: 37 },
                { x: 'May', y: 35 }, 
                { x: 'Jun', y: 39 },
                { x: 'Jul', y: 50 },
                { x: 'Aug', y: 48 },
                { x: 'Sep', y: 41 },
                { x: 'Oct', y: 50 },
            ],
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 10,
                height: 10
            },
            yName: 'y',
        },
        {
            type: 'Spline',
            dataSource: [
                { x: 'Jan', y: 10 }, 
                { x: 'Feb', y: 18 },
                { x: 'Mar', y: 20 },
                { x: 'Apr', y: 18 },
                { x: 'May', y: 15 }, 
                { x: 'Jun', y: 12 },
                { x: 'Jul', y: 30 },
                { x: 'Aug', y: 40 },
                { x: 'Sep', y: 35 },
                { x: 'Oct', y: 50 },
            ],
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 10,
                height: 10
            },
            yName: 'y',
        }
    ],
    //Initializing Chart Title
    // title: 'NC Weather Report - 2016',
    tooltip: { enable: true },
    width: ej.base.Browser.isDevice ? '100%' : '100%',
    height: ej.base.Browser.isDevice ? '321px' : '321px',

});
chart2.appendTo('#speed_level_element2');


/**
 * Sample for Spline Series Distance
**/
var chart3 = new ej.charts.Chart({
    //Initializing Primary X Axis
    primaryXAxis: {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 },
        labelIntersectAction: 'Rotate90'
    },
    chartArea: {
        border: {
            width: 0
        }
    },
    //Initializing Primary Y Axis
    primaryYAxis: {
        labelFormat: '{value}',
        rangePadding: 'None',
        minimum: 0,
        maximum: 600,
        interval: 100,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 }
    },
    palettes: ["#FF8F6B", "#5E5BFF"],

    //Initializing Chart Series
    series: [
        {
            type: 'Spline',
            dataSource: [
                { x: 'Jan', y: 50 }, 
                { x: 'Feb', y: 150 },
                { x: 'Mar', y: 200 },
                { x: 'Apr', y: 260 },
                { x: 'May', y: 280 }, 
                { x: 'Jun', y: 300 },
                { x: 'Jul', y: 350 },
                { x: 'Aug', y: 380 },
                { x: 'Sep', y: 470 },
                { x: 'Oct', y: 500 },
            ],
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 10,
                height: 10
            },
            yName: 'y',
        },
        {
            type: 'Spline',
            dataSource: [
                { x: 'Jan', y: 80 }, 
                { x: 'Feb', y: 180 },
                { x: 'Mar', y: 250 },
                { x: 'Apr', y: 280 },
                { x: 'May', y: 300 }, 
                { x: 'Jun', y: 320 },
                { x: 'Jul', y: 380 },
                { x: 'Aug', y: 400 },
                { x: 'Sep', y: 480 },
                { x: 'Oct', y: 500 },
            ],
            xName: 'x', width: 2, marker: {
                visible: true,
                width: 10,
                height: 10
            },
            yName: 'y',
        }
    ],
    //Initializing Chart Title
    // title: 'NC Weather Report - 2016',
    tooltip: { enable: true },
    width: ej.base.Browser.isDevice ? '100%' : '100%',
    height: ej.base.Browser.isDevice ? '300px' : '300px',

});
chart3.appendTo('#speed_level_element3');


// chart js 
// home batteries area here 
// batteries_chart
// const outer_labels = ['Charging', 'Storage', 'Assigned'];
// const inner_labels = ['Good', 'Regular', 'Bad'];


// const ctx = document.getElementById('home_batteries_canvas').getContext('2d');
// const myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ['Charging', 'Storage', 'Assigned', 'Good', 'Regular', 'Bad'],
//         datasets: [{
//             label: 'My First Dataset',
//             data: [10, 10, 10],
            // backgroundColor: [
            //     'rgba(185, 134, 251, 1)',
            //     'rgba(91, 147, 255, 1)',
            //     'rgba(56, 239, 134, 1)'
            // ],
//             borderWidth: 2
//         },
//         {
//             label: 'My First Dataset',
//             data: [10, 10, 10],
            // backgroundColor: [
            //     'rgba(0, 213, 111, 1)',
            //     'rgba(255, 214, 107, 1)',
            //     'rgba(255, 143, 107, 1)'
//             ],
//             borderWidth: 2
//         }
//     ]
//     },
//     options: {
//         plugins: {
//             responsive: true,
//             legend: {
//                 position: 'bottom',
//                 display: true,
//                 labels: {
//                     usePointStyle: true,
//                     padding: 20,
//                     color: 'rgba(17, 23, 79, 0.7)'
//                 }
//             }
//         },
//         scales: {
//             xAxes: [{
//                 gridLines: {
//                     display: false,
//                },
//             }],
//             yAxes: [{
//                 gridLines: {
//                     display: false,
//                 },
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'probability'
//                 }
//             }]
//         }
//     }
// });





