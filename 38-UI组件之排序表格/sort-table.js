(function() {
    function sortTable(data, sortlist) {
        this.data = data;
        this.sortlist = sortlist;
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
            for (var j = 0; j < sortlist.length; j++) {
                var div1 = document.createElement('div'),
                    div2 = document.createElement('div');
                div1.setAttribute('class', 'as');
                div2.setAttribute('class', 'ds');
                var numlist = parseInt(sortlist[j]);
                tbody.rows[0].cells[numlist].appendChild(div1);
                tbody.rows[0].cells[numlist].appendChild(div2);
                tbody.rows[0].cells[numlist].getElementsByTagName('div')[0].onclick = function(numlist) {
                    return function() {
                        self.asSort(numlist);
                        console.log(numlist);
                    }
                }(numlist);
                tbody.rows[0].cells[numlist].getElementsByTagName('div')[1].onclick = function(numlist) {
                    return function() {
                        self.dsSort(numlist);
                    }
                }(numlist)
                document.body.innerHTML = '';
                document.body.appendChild(document.createTextNode('提供接口：自定义的数据: data 和支持排序的列 sortlist '))
                document.body.appendChild(table);

            }
        },
        asSort: function(i) {
            var self = this;
            data.sort(function(x, y) {
                return y[i] - x[i];
            });
            self.showTable();
        },
        dsSort: function(i) {
            var self = this;
            data.sort(function(x, y) {
                return x[i] - y[i];
            });
            self.showTable();
        },

    }
    window.sortTable = sortTable;
})()

