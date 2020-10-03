import { name } from './ipag-normal.js';
import { jsPDF } from 'jspdf';

console.log(name);

setTimeout(function () {
    const doc = new jsPDF({
        unit: 'px',
        hotfixes: [
            'px_scaling'
        ],
        format: [794, 1123]
    });
    doc.setFont('ipag', 'normal');

    const container = document.querySelector('.br-pages-container');
    container.style.display = 'inline-flex';
    container.style.flexDirection = 'column';
    container.querySelectorAll('.br-page').forEach((page) => {
        page.style.margin = '0';
        page.style.boxShadow = 'none';
    });

    doc.html(container, {
        callback: function (doc) {
            // なぜか最後に白紙の余分なページが出力されてしまうので削除する
            doc.deletePage(doc.getNumberOfPages());
            doc.save();
        }
    });
}, 10000);
