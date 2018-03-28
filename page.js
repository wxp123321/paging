function paging(el, obj) {
    //总页数(必须数据)
    var totalPages = parseInt(obj.totalPages);
    //当前页数(必须数据)
    var nowPage = parseInt(obj.nowPage) || 1;
    //首页名字(可选数据)
    var homePage = obj.homePage || '1';
    //末页名字(可选数据)
    var endPage = obj.endPage || '末页';
    //上一页(可选数据)
    var prevContent = obj.prevContent || '上一页';
    //下一页(可选数据)
    var nextContent = obj.nextContent || '下一页';
    //获取当前页码的位置
    var position = totalPages - nowPage;
    var empty = "";
    var more = "..."

    var code = '';
    if (totalPages < 3) {
        code = '<a class="btn btn-primary btn-sm">' + prevContent + '</a>\n' +
            '        <a class="btn page btn-primary btn-sm">' + homePage + '</a>';
        for (var i = 1; i < totalPages; i++) {
            code += '<a class="btn page btn-primary btn-sm">' + endPage + '</a>';
        }
        code += '<a class="btn btn-primary btn-sm">' + nextContent + '</a>\n' +
            '        <input class="jump">\n' +
            '        <a class="btn btn-primary btn-sm">跳转</a>';
        el.innerHTML = code;
        return
    }

    if (position > 0 && position < totalPages - 1) {
        code = '<a class="btn btn-primary btn-sm">' + prevContent + '</a>\n' +
        '        <a class="btn page btn-primary btn-sm">' + (nowPage - 1 > 1 ? nowPage - 1 : homePage) + '</a>\n' +
        '        <a class="btn page btn-primary btn-sm">' + nowPage + '</a>\n' +
        '        <a class="btn page btn-primary btn-sm">' + (nowPage + 1 > totalPages - 1 ? endPage : nowPage + 1) + '</a>\n' +
        '        <p class="pText">' + (nowPage + 1 > totalPages - 1 ? empty : more) + '</p>\n' +
            '        <a class="btn btn-primary btn-sm">' + nextContent + '</a>\n' +
            '        <input class="jump">\n' +
            '        <a class="btn btn-primary btn-sm">跳转</a>';
        el.innerHTML = code;
        return
    } else if (position === totalPages - 1) {
        //如果跳转到第一页
        code += '<a class="btn btn-primary btn-sm">' + prevContent + '</a>\n' +
            '        <a class="btn page btn-primary btn-sm">' + homePage + '</a>\n' +
            '        <a class="btn page btn-primary btn-sm">2</a>\n' +
            '        <a class="btn page btn-primary btn-sm">3</a>\n' +
            '        <p class="pText">...</p>\n' +
            '        <a class="btn btn-primary btn-sm">' + nextContent + '</a>\n' +
            '        <input class="jump">\n' +
            '        <a class="btn btn-primary btn-sm">跳转</a>';
        el.innerHTML = code;
        return
    } else if (position === 0) {
        //如果跳转到最后一页
        code += '<a class="btn btn-primary btn-sm">' + prevContent + '</a>\n' +
            '        <a class="btn page btn-primary btn-sm">' + (nowPage - 2) + '</a>\n' +
            '        <a class="btn page btn-primary btn-sm">' + (nowPage - 1) + '</a>\n' +
            '        <a class="btn page btn-primary btn-sm">' + endPage + '</a>\n' +
            '        <input class="jump">\n' +
            '        <a class="btn btn-primary btn-sm">跳转</a>';
        console.log(code);
        el.innerHTML = code;
    }
}