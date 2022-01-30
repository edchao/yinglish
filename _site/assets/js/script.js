$( document ).ready(function() {
    var oink = "shau.ru.lin"
    var moo = "@gmail.com"
    var parts = ["shau.ru.lin", "gmail", "com", "&#46;", "&#64;"]

    var together = (parts[0] + parts[4] + parts[1] + parts[3] + parts[2])

    document.getElementById("email").innerHTML=together;


    $("#clip").click(function(){
      var converted = convert(together);
      navigator.clipboard.writeText(converted);
      $("#clip").html("Email Copied ✓");
      $("#clip").addClass("copied");
    });

    function convert(text) {
      var converted = text.replace("&#64;","@");
      converted = converted.replace("&#46;",".");
      return converted;
    }
});
