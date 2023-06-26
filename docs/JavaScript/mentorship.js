var main_heading = "Project Mentorship";
var mentorshipContent = $(".project-mentorship").html();
$(".mentor-title").text(main_heading);
$(".mentor-categories").html(mentorshipContent);
$(".project-mentorship").hide();
$(".technology").hide();
$(".career-advice").hide();
$(".placement-training").hide();
$(".financial-training").hide();
$(".others").hide();

$(document).ready(function() {
    $(".style_prevu_kit").click(function() {
      var main_heading = $(this).text();
      var lowercase_class = main_heading.toLowerCase().replace(/\s+/g, "-");
      var demo = "." + lowercase_class;
      var mentorshipContent = $(demo).html();


      $(".mentor-title").text(main_heading);
      $(".mentor-categories").html(mentorshipContent);

      $(".project-mentorship").hide();
      $(".technology").hide();
      $(".career-advice").hide();
      $(".placement-training").hide();
      $(".financial-training").hide();
      $(".others").hide();

      // Show the mentor card in the corresponding section
      $(".project-mentorship .card:contains(" + mentorName + ")").show();
      $(".technology .card:contains(" + mentorName + ")").show();
      $(".career-advice .card:contains(" + mentorName + ")").show();

    });
  });