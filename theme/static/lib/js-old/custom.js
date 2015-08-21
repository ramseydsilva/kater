/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.0.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

(function($){
    $(document).ready(function(){
        var subject = $('#id_subject');
        $('.product_check').change(function() {
            var sub = "Ref: ";
            $('.product_check:checked').each(function(i, e) {
                 sub += $(e).val() + ", ";
            });
           subject.val(sub.substring(0, sub.length - 2));
        });
        $('.package_check').click(function() {
            var sub = "Ref: ";
            subject.val(sub+$(this).attr("val"));
        })
    });
})(this.jQuery);