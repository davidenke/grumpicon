define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["templates/example-html.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\t\t\n\t\t<pre><code>.icon-' +
((__t = ( name )) == null ? '' : __t) +
':</code></pre><div class="icon-' +
((__t = ( name )) == null ? '' : __t) +
'" style="width: ' +
((__t = ( width )) == null ? '' : __t) +
'px; height: ' +
((__t = ( height )) == null ? '' : __t) +
'px"></div><hr/>\n';

}
return __p
};

this["JST"]["templates/fallback-css.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '.icon-' +
((__t = ( name )) == null ? '' : __t) +
' {\n\tbackground-image: url(\'png/' +
((__t = ( name )) == null ? '' : __t) +
'.png\');\n\tbackground-repeat: no-repeat;\n}\n';

}
return __p
};

this["JST"]["templates/png-css.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '.icon-' +
((__t = ( name )) == null ? '' : __t) +
' {\n\tbackground-image: url(\'' +
((__t = ( pngDataUri )) == null ? '' : __t) +
'\');\n\tbackground-repeat: no-repeat;\n}\n';

}
return __p
};

this["JST"]["templates/svg-css.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '.icon-' +
((__t = ( name )) == null ? '' : __t) +
' {\n\tbackground-image: url(\'' +
((__t = ( svgDataUri )) == null ? '' : __t) +
'\');\n\tbackground-repeat: no-repeat;\n}\n';

}
return __p
};

this["JST"]["templates/svg-icons.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div>\n\t<div class="meta">\n\t\t<h5>' +
((__t = ( name )) == null ? '' : __t) +
'</h5>\n\t\t<p>' +
((__t = ( file.size )) == null ? '' : __t) +
' bytes<p>\n\t</div>\n\t<img src="' +
((__t = ( svgDataUri )) == null ? '' : __t) +
'" alt="" />\n\t<a href=\'#close\' class=\'close\' title=\'Remove file\' data-file=\'' +
((__t = ( id )) == null ? '' : __t) +
'\'>Remove</a>\n</div>\n';

}
return __p
};

  return this["JST"];

});