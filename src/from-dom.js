import { name } from './ipag-normal.js';
import { jsPDF } from 'jspdf';

console.log(name);

const doc = new jsPDF();
doc.setFont('ipag', 'normal');
doc.html(document.querySelector('.page'), {
    callback: function (doc) {
        doc.save();
    }
});
