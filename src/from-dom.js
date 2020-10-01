import { name } from './ipag-normal.js';
import { jsPDF } from 'jspdf';

console.log(name);

const doc = new jsPDF({
    // DOM ツリーを px ベースでデザインしているので、px を指定する必要がある
    unit: 'px',
    hotfixes: [
        'px_scaling'
    ]
});
doc.setFont('ipag', 'normal');
doc.html(document.querySelector('.container'), {
    callback: function (doc) {
        doc.deletePage(doc.internal.getNumberOfPages());
        doc.save();
    }
});
