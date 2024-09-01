$(document).ready(function () {
    console.log("Document is ready"); // Check if the script runs
    $(".step").click(function () {
        console.log("Step clicked"); // Check if click is registered
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
        
        const stepIndex = $(this).index() + 1;  // Get the index of the clicked step
        const totalSteps = $(".step").length;
        const progressPercentage = (stepIndex - 1) / (totalSteps - 1) * 100; // Calculate progress percentage
        $("#line-progress").css("width", progressPercentage + "%");
        
        // Update content visibility
        $(".section-content").removeClass("active");
        $(".section-content").eq(stepIndex - 1).addClass("active");
    });

    // Initial setup
    $(".step01").trigger("click"); // Set the initial step
});
