// import CONFIG from '../../globals/config';

const createMateriItemTemplate = (materi) => `
    <div class="materi-item">
                <div class="materi-item__header">
                    <img src="${materi.pictureId}" alt="">
                </div>
                <div class="materi-item__content">
                    <p>${materi.name}</p>
                </div>
            </div>
    `;

export {
    createMateriItemTemplate
};