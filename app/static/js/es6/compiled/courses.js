(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#newcourse').click(showCourseForm);
    $('#create-course-form').hide();
    $('body').on('click', '.showcourse', showCourse);
    $('body').on('click', '#taketest', showTest);
  }
  function showTest() {
    var courseId = $('#course').attr('data-id');
    ajax(("/course/" + courseId + "/test"), 'get', null, (function(html) {
      console.log(html);
    }));
  }
  function showCourse() {
    var courseId = $(this).parent().attr('data-id');
    ajax(("/course/" + courseId + "/show"), 'get', null, (function(html) {
      console.log(html);
    }));
  }
  function showCourseForm() {
    $('#create-course-form').slideToggle();
  }
})();

//# sourceMappingURL=courses.map
