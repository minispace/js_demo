//��ҳdemo
            function pages(){
                pages.prototype.pageIndex=1;//��ǰҳ
                pages.prototype.pageSize=10;//ҳ��С
                pages.prototype.totalPage = 1;//��ҳ��
                //��Ҫ��ʼ������
                pages.prototype.init = function (size, count) {                    
                    this.pageSize = size;
                    this.totalPage = Math.ceil(count / this.pageSize);
                    this.pageIndex = 1;
                }
                pages.prototype.setPageSize = function (size) {
                    this.pageSize = size;
                }
                pages.prototype.setCount = function (count) {
                    this.totalPage = Math.ceil(count /this.pageSize);
                }
                pages.prototype.setCount = function (total) {
                    this.totalPage = total;
                }
                //ѡ��ڼ�ҳ
                pages.prototype.setPageIndex = function (index) {
                    this.pageIndex = index;
                }
                //��ǰ��ҳ
                pages.prototype.prePage = function () {
                    if (this.pageIndex != 1) {
                        pageIndex --;
                    }                    
                }
                //���ҳ
                pages.prototype.nextPage = function () {
                    
                    if (this.pageIndex !== this.totalPage) {
                        this.pageIndex ++;
                    }
                }
                //��һҳ
                pages.prototype.firstPage = function () {
                    if (this.pageIndex != this.totalPage) {
                        pageIndex++;
                    }
                }
                //���һҳ
                pages.prototype.lastPage = function () {
                    if (this.pageIndex != this.totalPage) {
                        pageIndex++;
                    }
                }
            }