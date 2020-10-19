// Title - Loading Done
$("title").text("Eagan Farlin's Personal Contacts Page");

// Light Mode - Blocker
if (localStorage.getItem("mode") === "dark") {

    Swal.fire({
        title: "Warning!",
        text: "The page you are about to enter is not fully dark mode, this is because we use Google Forms for this page, and we can not control it's color theme.",
        icon: "warning"
    })

}