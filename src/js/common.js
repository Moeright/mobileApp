var common = {
    loading: null,
    showLoading: function() {
        if (this.loading) {
            this.loading.show()
        } else {
            this.loading = $('<div id="loading">loading</div>');
            this.loading.appendTo(document.body);
        }
        // var a = document.createElement('div');
        // document.body.appendChild(a);

    },
    hideLoading: function() {
        this.loading.hide();
    }
}