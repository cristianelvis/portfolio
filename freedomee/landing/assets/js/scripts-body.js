function showFlex(el) {
    var display = document.getElementById(el).style.display;
        if (display == "none")
            document.getElementById(el).style.display = 'flex';
        else
            document.getElementById(el).style.display = 'none';
}

