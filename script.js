function sendWhatsApp() {

    var items = [];

    var tent1 = document.getElementById("tent1");
    if (tent1 && tent1.value > 0) {
        items.push("36x36 Tent (" + tent1.value + ")");
    }

    var tent2 = document.getElementById("tent2");
    if (tent2 && tent2.value > 0) {
        items.push("12x6 Tent (" + tent2.value + ")");
    }

    var tent3 = document.getElementById("tent3");
    if (tent3 && tent3.value > 0) {
        items.push("8x4 Tent (" + tent3.value + ")");
    }

    var tent4 = document.getElementById("tent4");
    if (tent4 && tent4.value > 0) {
        items.push("6x3 Tent (" + tent4.value + ")");
    }

    // ADD MORE ITEMS SAME WAY (safe method)

    if (items.length === 0) {
        alert("Please select at least one item!");
        return;
    }

    var text = "Booking Items: " + items.join(", ");

    var url = "https://api.whatsapp.com/send?phone=919652742018&text=" + encodeURIComponent(text);

    window.open(url, "_blank");
}