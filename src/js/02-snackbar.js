import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit" event =>
{

    event.preventDefault();


}
)
const input = document.querySelector("input[name='delay']").value;
const inputDelay = document.querySelector("input[name=state]:checked").value;

const promise = new Promise((resolve, reject) =>
{
    setTimeout(() =>
if (inputDelay)
    {
        
})


})