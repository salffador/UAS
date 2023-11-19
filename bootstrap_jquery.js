$(document).ready(function(){
    
    // Variables
    var clickedTab = $(".tabs > .active");
    var tabWrapper = $(".tab__content");
    var activeTab = tabWrapper.find(".active");
    var activeTabHeight = activeTab.outerHeight();
    
    // nampilin tab page load
    activeTab.show();
    
    // ngatur tinggi pembungkus page load
    tabWrapper.height(activeTabHeight);
    
    $(".tabs > li").on("click", function() {
        
        // ilangin class dari active tab
        $(".tabs > li").removeClass("active");
        
        // nambahin class active ke clicked tab
        $(this).addClass("active");
        
        // Update clicked tab variable
        clickedTab = $(".tabs .active");
        
        // fade out
        activeTab.fadeOut(250, function() {
            
            // ilangin active class semua tabs
            $(".tab__content > li").removeClass("active");
            
            // dapetin index of clicked tab
            var clickedTabIndex = clickedTab.index();

            // nambahin class active ke corresponding tab
            $(".tab__content > li").eq(clickedTabIndex).addClass("active");
            
            // update new active tab
            activeTab = $(".tab__content > .active");
            
            // Update variable
            activeTabHeight = activeTab.outerHeight();
            
            // Animasiin height of wrapper ke new tab height
            tabWrapper.stop().delay(50).animate({
                height: activeTabHeight
            }, 500, function() {
                
                // Fade in active tab
                activeTab.delay(50).fadeIn(250);
                
            });
        });
    });
});

