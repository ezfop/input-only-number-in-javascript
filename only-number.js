<html>
<script>
    /* Created by Aydin Uzmez on 05.02.2016. */
    function onlyNumber(element) {
        var regex = /^\d+$/;
        if (!regex.test(element.value)) {
            document.getElementById(element.id).value = element.value.substring(0, element.value.length-1);
        } else {
         /* Code is here ;*/ alert("number came");
        }

    }
</script>

<body>
<!-- Use -->
<input type="text" id="abc" oninput="onlyNumber(this)"/>  <!--  //that must be id (abc) -->
</body>



</html>
