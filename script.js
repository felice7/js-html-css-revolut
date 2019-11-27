$(document).ready(function(){

    $('ul li').click(function(){
        $("ul ul").slideUp();
        $(this).find('ul').slideToggle();    
    
    })



// qui sotto scrittura codici non funzionanti 



//     $('.parent').click(function(){
//         $(this).children('.child').toggle();
//     });
// });
// 
    

// $('ul li').click(function(){
//     $(this).addClass('parent');
// });

    

    // $('ul li').click(function(){
    //     $("ul ul").addClass("menu-right");
    //     $(this).find('ul').slideToggle();    
    // 
    // })


    
    // $('header-right').click(function(){
    //     $('nav').toggleClass('prova')
    // 
    // })
    // $('ul li').click(function(){
    //     $(this).siblings().removeClass('prova')
    //     $(this).toggleClass('prova')
    // })
    // 
    // 
    // });



// $('ul li').click(function(){
//     $("ul ul").slideUp();
//     $(this).find('ul').slideToggle();    
// 
// })


// $('ul li').click(function(){
//     $("ul ul").addClass("menu-right");
//     $(this).next('ul').slideToggle();    
// 
// })
