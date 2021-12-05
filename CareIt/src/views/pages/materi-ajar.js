// import materiSource from "../../data/materi-source";
import { createMateriItemTemplate } from "../templates/template-creator";
import materis from '../../materi-ajar.json';


const materiAjar = {
    render() {
        return `
        <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h2 class="text-center">Materi Ajar</h2>
                        <hr>
                    </div>
                </div>
            </div>
            <div id="materi" class="materi"></div>
        `;
    },

    afterRender() {
        const materiContainer = document.getElementById("materi");
        materis.forEach((materi) => {
            materiContainer.innerHTML += createMateriItemTemplate(materi);
        });
    },
};
export default materiAjar;





// import css from "../../styles/main.css";

// class materiAjar extends HTMLElement {
//     set materiDataItem(materi) {
//         this._
//     }
// }