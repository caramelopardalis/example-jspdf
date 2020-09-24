import { jsPDF } from 'jspdf';

const doc = new jsPDF();
doc.html(document.querySelector('.page'), {
    callback: function (doc) {
        doc.save();
    }
});
