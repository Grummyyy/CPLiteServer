/**
 * Sets a cookie in the user's browser
 * Modified by Zaseth
 * Updated cookies.js
 * Discord: Zaseth#7550
 */
function setCookie(name, value, expiry_days) {
    expiry_str = '';
    path_str = '; path=/';
    domain_str = '; domain=localhost';
    if (expiry_days) {
        var d = new Date();
        d.setDate(d.getDate() + expiry_days);
        expiry_str = ';expires=' + d.toGMTString();
    }

    document.cookie = name + '=' + escape(value) + expiry_str + path_str + domain_str;
    if (domain_str.indexOf('; domain=clubpenguin.com') !== -1) {
        console.log('Please change domain_str to your own domain!');
        } else {
            console.log('domain_str has been properly set!');
        }
}
function getCookie(name) {
    var s = document.cookie.indexOf(name + "=");
    if (s == -1) {
        return null;
    }
    s += name.length + 1;
    var e = document.cookie.indexOf(";", s);
    if (e == -1) {
        e = document.cookie.length;
    }
    return unescape(document.cookie.substring(s, e));
}
if (!getCookie('cpvisitor')) {
if (!getCookie('zasethcookies')) {
    setCookie('cpvisitorsession', 'true', '');
    setCookie('zasethcookiessession', 'true', '');
    setCookie('cpvisitor', 'new', 2400);
    setCookie('zasethcookies', 'new', 2400);
} else {
    if (!getCookie('cpvisitorsession')) {
    if (!getCookie('zasethcookiessession')) {
        if ((getCookie('cpvisitor')) == 'new') {
            setCookie('cpvisitor', 'new', - 1);
            setCookie('cpvisitor', 'return', 2400);
        if ((getCookie('zasethcookies')) == 'new') {
            setCookie('zasethcookies', 'new', - 1);
            setCookie('zasethcookies', 'return', 2400);
        }
    }
}
}
}
}
var qsParm = new Array();
function qs() {
    var query = window.location.search.substring(1);
    var parms = query.split('&');
    for (var i = 0; i < parms.length; i++) {
        var pos = parms[i].indexOf('=');
        if (pos > 0) {
            var key = parms[i].substring(0, pos);
            var val = parms[i].substring(pos + 1);
            qsParm[key] = val;
        }
    }
}
qsParm['oast'] = null;
qs();
if (qsParm['oast'] != null) {
    if (getCookie('oast')) {
        setCookie('oast', '', - 1);
        setCookie('oast', qsParm['oast'], 2400);
    } else {
        setCookie('oast', qsParm['oast'], 2400);
    }
}
console.log(navigator.userAgent);
//function removeGoogleAds()
//{
    //var sr = document.getElementById('ad_links');
    //sr.innerHTML = "";
//  sr.innerHTML = "<script type=\"text/javascript\"><!--google_ad_client = \"ca-pub-2941100122740530\";/* Links on Blog */google_ad_slot = \"4276377014\";google_ad_width = 728;google_ad_height = 15;//--></script><script type=\"text/javascript\" src=\"http://pagead2.googlesyndication.com/pagead/show_ads.js\"></script>";
//  alert(sr.innerHTML);
//}