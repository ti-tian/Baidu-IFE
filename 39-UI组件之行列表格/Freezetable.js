(function() {
    function sortTable(data, sortlist) {
        this.data = data;
    }
    sortTable.prototype = {

        showTable: function() {
            var self = this;
            var table = document.createElement('table');
            table.setAttribute('class', 'table')
            var tbody = document.createElement('tbody');
            table.appendChild(tbody);
            for (var i = 0; i < data.length; i++) {
                tbody.insertRow(i);
                tbody.rows[i].setAttribute('class', 'tr');
                for (var j = 0; j < data[i].length; j++) {
                    var cellText = data[i][j];
                    tbody.rows[i].insertCell(j);
                    tbody.rows[i].cells[j].appendChild(document.createTextNode(cellText));
                    tbody.rows[i].cells[j].setAttribute('class', 'td');
                    tbody.rows[0].cells[j].setAttribute('class', 'th');
                }
            }
            document.body.appendChild(table);
            window.onscroll = function() {
                self.freeze(table)
            }
        },
        freeze: function(ele) {
            mTop = ele.offsetTop;
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(mTop);
            if (mTop - scrollTop < 0) {
                ele.firstElementChild.firstElementChild.style.position = 'fixed';
                ele.firstElementChild.firstElementChild.style.top = '0';
                ele.firstElementChild.firstElementChild.style.left = '0';
                console.log('运行了');
                if (ele.offsetTop + ele.offsetHeight - scrollTop <= 0) {
                    ele.firstElementChild.firstElementChild.style.position = 'absolute';
                }

            } else {
                ele.firstElementChild.firstElementChild.style.position = 'static';
            }

        }

    }
    window.sortTable = sortTable;
})()
