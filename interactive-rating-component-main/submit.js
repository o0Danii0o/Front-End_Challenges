const buttonRating = document.getElementById("ratingList");
const buttonSubmit = document.getElementById("submit");
const view1 = document.getElementsByClassName("view1");
const view2 = document.getElementsByClassName("view2");

var valueClicked = 0;
buttonRating.addEventListener('click', event => {
    if (event.target.tagName === 'A') {
        if (valueClicked != 0) {
            document.getElementsByTagName('a')[valueClicked - 1].style.background = "#7C8898";
            document.getElementsByTagName('a')[valueClicked - 1].style.color = "white";
        }
        event.target.style.background = "#F8771C";
        valueClicked = event.target.textContent;
    }
});

buttonSubmit.addEventListener('click', event => {
    if (valueClicked == 0) {
        alert("Rating should be selected");
    } else {
        view1[0].style.display="none";
        view2[0].getElementsByTagName('p')[0].textContent=`You selected ${valueClicked} out of 5`;
        view2[0].style.display="flex";
    }
});
