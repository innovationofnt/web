(function () {
    layui.use('layedit', function () {
        var layedit = layui.layedit,
            $ = layui.jquery;

        layedit.build('editBox', {
            height:450,
        });

        /*           //编辑器外部操作
                  var active = {
                      content: function () {
                          alert(layedit.getContent(index)); //获取编辑器内容
                      },
                      text: function () {
                          alert(layedit.getText(index)); //获取编辑器纯文本内容
                      },
                      selection: function () {
                          alert(layedit.getSelection(index));
                      }
                  };

             $('.site-demo-layedit').on('click', function () {
                      var type = $(this).data('type');
                      active[type] ? active[type].call(this) : '';
                  });  */
    });
})();