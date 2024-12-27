function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('.arrow');

    if (answer.style.display === "block") {
        answer.style.display = "none";
        arrow.textContent = "+"; // Change arrow to plus
    } else {
        answer.style.display = "block";
        arrow.textContent = "-"; // Change arrow to minus
    }
}