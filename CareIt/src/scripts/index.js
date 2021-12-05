import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import materi from '../materi-ajar.json';

let html = "";
materi.materi.forEach((mat) => {
    html += `
    <div class="container">
    <div class="materi-item">
        <div class="materi-item__header">
            <img src="${mat.pictureId}" alt="">
        </div>
        <div class="materi-item__content">
            <p>${mat.name}</p>
        </div>        
    </div>
    </div>
    `;
    document.getElementById("materi").innerHTML = html;
});

const burger = document.querySelector('.burger')
const sidebar = document.querySelector('.sidebar')
const bgSidebar = document.querySelector('.bg-sidebar')

burger.addEventListener('click', function () {
    this.classList.toggle('change')
    sidebar.classList.toggle('change')
    bgSidebar.classList.toggle('change')
})

bgSidebar.addEventListener('click', function () {
    this.classList.remove('change')
    sidebar.classList.remove('change')
    burger.classList.remove('change')
})