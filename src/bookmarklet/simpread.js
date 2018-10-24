
let Notify, PureRead, puplugin, TurndownService;

const script       = document.createElement( "script" ),
      jq_src       = "https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js",

      vender_src   = "https://raw.githubusercontent.com/kenshin/simpread-little/develop/src/bookmarklet/vender.js",
      style_src    = "https://raw.githubusercontent.com/kenshin/simpread-little/develop/src/bookmarklet/style.js",
      json         = "https://raw.githubusercontent.com/kenshin/simpread-little/develop/src/bookmarklet/res/website_list_v4.json?" + Math.round(+new Date());

const mobile_style = "@media all and (max-height:620px){fab{zoom:1}}sr-rd-content img{margin:0!important;padding:0!important}sr-rd-crlbar{zoom:.8}sr-rd-title{font-size:30px!important}sr-rd-content sr-blockquote,sr-rd-desc{padding:10px!important;font-size:22px!important}sr-rd-content h1,sr-rd-content h1 *,sr-rd-content h2,sr-rd-content h2 *,sr-rd-content h3,sr-rd-content h3 *,sr-rd-content h4,sr-rd-content h4 *,sr-rd-content h5,sr-rd-content h5 *,sr-rd-content h6,sr-rd-content h6 *{color:inherit;font-weight:900;line-height:1.2;margin:1em 0 1em}sr-rd-content h1,sr-rd-content h1 *{font-size:28px!important}sr-rd-content h2,sr-rd-content h2 *{font-size:25px!important}sr-rd-content h3,sr-rd-content h3 *{font-size:22px!important}sr-rd-content h4,sr-rd-content h4 *{font-size:20px!important}sr-rd-content h5,sr-rd-content h5 *,sr-rd-content h6,sr-rd-content h6 *{font-size:17px!important}sr-rd-content *,sr-rd-content p,sr-rd-content div{font-size:1.75rem!important}sr-rd-content a,sr-rd-content a:link{border:none!important}",
      theme_pixyii = "sr-rd-theme-pixyii{display:none;}\n\n/**\n * Pixyii style\n */\n\n/**\n * Common style, include: h1 ~ h6; ol ul; code pre; table; sr-blockquote\n */\n\nsr-rd-content h1,sr-rd-content h1 *,sr-rd-content h2,sr-rd-content h2 *,sr-rd-content h3,sr-rd-content h3 *,sr-rd-content h4,sr-rd-content h4 *,sr-rd-content h5,sr-rd-content h5 *,sr-rd-content h6,sr-rd-content h6 *{color:inherit;font-weight:900;line-height:1.2;margin:1em 0 1em}sr-rd-content h1,sr-rd-content h1 *{font-size:3.92rem}sr-rd-content h2,sr-rd-content h2 *{font-size:3.64rem}sr-rd-content h3,sr-rd-content h3 *{font-size:2.275rem}sr-rd-content h4,sr-rd-content h4 *{font-size:1.82rem}sr-rd-content h5,sr-rd-content h5 *,sr-rd-content h6,sr-rd-content h6 *{font-size:1.573rem}\nsr-rd-content ol,sr-rd-content ul{font-size:1.75rem;line-height:1.5rem}sr-rd-content li{font-size:1.575rem;line-height:1.8;margin:0;position:relative}\nsr-rd-content table{width:100%;font-size:1.575rem}sr-rd-content table>thead>tr>th,sr-rd-content table>thead>tr>td,sr-rd-content table>tbody>tr>th,sr-rd-content table>tbody>tr>td,sr-rd-content table>tfoot>tr>th,sr-rd-content table>tfoot>tr>td{padding:12px;line-height:1.2;vertical-align:top;border-top:1px solid #333}sr-rd-content table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #333}sr-rd-content table>caption+thead>tr:first-child>th,sr-rd-content table>caption+thead>tr:first-child>td,sr-rd-content table>colgroup+thead>tr:first-child>th,sr-rd-content table>colgroup+thead>tr:first-child>td,sr-rd-content table>thead:first-child>tr:first-child>th,sr-rd-content table>thead:first-child>tr:first-child>td{border-top:0}sr-rd-content table>tbody+tbody{border-top:2px solid #333}\nsr-rd-content sr-blockquote {\n    margin: 1rem 0px;\n    padding: 1.33em;\n    font-style: italic;\n    border-left: 5px solid rgb(122, 122, 122);\n    color: rgb(85, 85, 85);\n}\n\n/**\n * Custom style, include: background; title; desc; sr-rd-content; p,div; a; pre\n */\n\n.simpread-theme-root {\n    background-color: rgb(255, 255, 255);\n    color: rgb(85, 85, 85);\n}\n\nsr-rd-title {\n    font-family: PingFang SC,Hiragino Sans GB,Microsoft Yahei,WenQuanYi Micro Hei,sans-serif;\n    font-size: 4.2rem;\n    font-weight: 900;\n    line-height: 1.2;\n}\n\nsr-rd-desc {\n    margin: 1rem 0px;\n    padding: 1.33em;\n    font-style: italic;\n    font-size: 2rem;\n    line-height: 2;\n    border-left: 5px solid rgb(122, 122, 122);\n    color: rgb(85, 85, 85);\n}\n\nsr-rd-content {\n    font-size: 2.1rem;\n    line-height: 1.8;\n    font-weight: 400;\n    color: rgb(85, 85, 85);\n}\n\nsr-rd-content *,\nsr-rd-content p,\nsr-rd-content div {\n    color: rgb(85, 85, 85);\n    font-size: 1.75rem;\n    line-height: 1.8;\n    font-weight: 300;\n}\n\nsr-rd-content strong {\n    font-weight: 400;\n}\n\nsr-rd-content a,\nsr-rd-content a:link {\n    color: rgb(70, 63, 92);\n    text-decoration: underline;\n}\n\nsr-rd-content a:hover,\nsr-rd-content a:focus,\nsr-rd-content a:active {\n    color: rgb(70, 63, 92);\n    text-decoration: underline;\n}\n\nsr-rd-content sr-blockquote code {\n    font-size: inherit;\n}\n\nsr-rd-content pre {\n    color: rgb(122, 122, 122);\n    background-color: transparent;\n    border: 1px solid rgb(122, 122, 122);\n}\n\nsr-rd-content li code,\nsr-rd-content p code {\n    color: rgb(122, 122, 122);\n    background-color: transparent;\n}";

const simpread_config = {};

script.type        = "text/javascript";
script.src         = jq_src;
script.onload      = () => {
    $.get( style_src,  result => { new Function( result )(); });
    $.get( vender_src, result => {
        const js = new Function( result )();
        [ Notify, PureRead, puplugin, TurndownService ] = [ js.Notify, js.PureRead, js.puplugin, js.TurndownService ];

        $.getJSON( json, result => {
            const pr = new PureRead();
            pr.Addsites(result);
            pr.AddPlugin(puplugin.Plugin());
            pr.Getsites();
            console.log( "current site pr is ", pr );
            if ( pr.state == "none" ) {
                alert( location.href )
                new Notify().Render( "当前页面不支持简悦的阅读模式" );
            }
            else readMode( pr, puplugin, $ );
        });
    });
};
document.body.appendChild( script );

/**
 * User Agent
 * 
 * @return {string} ipad and iphone
 */
function userAgent() {
    if ( /iphone|android/i.test( navigator.userAgent ) ) {
        return "iphone";
    } else {
        return "ipad";
    }
}

/**
 * Platform
 * 
 * @return {string} pc and mobile
 */
function platform() {
    if ( /win|mac/i.test( navigator.platform ) ) {
        return "pc";
    }
    else {
        return "mobile";
    }
}

/**
 * Set style
 * 
 * @param {object} puplugin.Plugin( "style" )
 */
function setStyle( style ) {
    $("head").append("<style type=\"text/css\">" + theme_pixyii + "</style>");
    if ( userAgent() == "iphone" ) {
        style.FontSize("72%");
        $("head").append("<style type=\"text/css\">" + mobile_style + "</style>");
    } else {
        style.FontSize("75%");
        style.Layout("10%");
    }

    const maxWidth = $(document).width(),
          width    = $("sr-read").width();
    if ( width >= maxWidth ) {
        $("sr-read").css({ "min-width": maxWidth - 20 + "px" });
    }
}

/**
 * Control bar
 */
function controlbar() {
    let cur = 0;
    $( window ).scroll( event => {
        const next = $(window).scrollTop();
        if ( next > cur ) {
            $( "sr-rd-crlbar" ).css({ opacity: 0 });
            $("sr-crlbar-group").css({ opacity: 0 });
        } else {
            $( "sr-rd-crlbar" ).css({ opacity: 1 });
        }
        cur = next;
    });
    $( ".simpread-read-root sr-rd-crlbar fab.anchor" ).on( platform() == "pc" ? "mouseenter" : "click", event => {
        $("sr-crlbar-group").css({ opacity: 1, display: "flex" });
    });
}

/**
 * Read mode
 */
function readMode( pr, puplugin, $ ) {
    const $root  = $( "html" ),
          bgtmpl = `<div class="simpread-read-root">
                        <sr-read>
                            <sr-rd-title></sr-rd-title>
                            <sr-rd-desc></sr-rd-desc>
                            <sr-rd-content></sr-rd-content>
                            <sr-page></sr-page>
                            <sr-rd-footer>
                                <sr-rd-footer-text style="display:none;">全文完</sr-rd-footer-text>
                                <sr-rd-footer-copywrite>
                                    <span>本文由 简悦 </span><a href="http://ksria.com/simpread" target="_blank">SimpRead</a><span> 优化，用以提升阅读体验。</span>
                                </sr-rd-footer-copywrite>
                                </sr-rd-footer>
                            <sr-rd-crlbar>
                                <sr-crlbar-group>
                                    <fab class="drafts"></fab>
                                    <fab class="bear"></fab>
                                    <fab class="markdown"></fab>
                                    <fab class="dropbox"></fab>
                                    <fab class="yinxiang"></fab>
                                    <fab class="evernote"></fab>
                                    <fab class="pocket"></fab>
                                </sr-crlbar-group>
                                <fab class="anchor" style="opacity:1;"></fab>
                                <fab class="crlbar-close"></fab>
                            </sr-rd-crlbar>
                        </sr-read>
                    </div>`,
        multiple  = ( include, avatar ) => {
            const contents = [],
                names    = avatar[ 0 ].name,
                urls     = avatar[ 1 ].url;
            include.each( ( idx, item ) => {
                const art = {};
                art.name    = $( names[idx] ).text();
                art.url     = $( urls[idx]  ).attr( "src" );
                art.content = $( item       ).html();
                !art.url && ( art.url = default_src );
                contents.push( art );
            });
            const child = contents.map( item => {
                return `<sr-rd-mult>
                            <sr-rd-mult-avatar>
                                <div class="sr-rd-content-nobeautify"><img src=${ item.url } /></div>
                                <span>${ item.name }</span>
                            </sr-rd-mult-avatar>
                            <sr-rd-mult-content>${ item.content }</sr-rd-mult-content>
                    </sr-rd-mult>`;
            });
            $( "sr-rd-content" ).html( child );
        },
        paging = page => {
            const prev     = page[0].prev,
                  next     = page[1].next,
                  btn_next = mduikit.Button( "btn-next", "后一页 →", { href: next == undefined ? "javascript:;" : next, disable: next == undefined ? true : false, color: "#fff", bgColor: "#1976D2" }),
                  btn_prev = mduikit.Button( "btn-prev", "← 前一页", { href: prev == undefined ? "javascript:;" : prev, disable: prev == undefined ? true : false, color: "#fff", bgColor: "#1976D2" });
            if ( !prev && !next ) $( "sr-page" ).remove();
            else $( "sr-page" ).html( btn_prev + btn_next );
        },
        special = ()=> {
            if ( pr.html.include && pr.html.include.includes && pr.html.include.includes( "sr-rd-content-error" ) ) {
                new Notify().Render( `当前页面结构改变导致不匹配阅读模式，请报告 <a href="https://github.com/Kenshin/simpread/issues/new" target="_blank">此页面</a>` );
                return true;
            }
        };

    pr.ReadMode();

    if ( special() ) return;

    $( "body" ).addClass( "simpread-hidden" );
    $root
        .addClass( "simpread-font" )
        .addClass( "simpread-theme-root" )
        .append( bgtmpl );

    $( ".simpread-read-root" )
        .addClass( "simpread-theme-root" )
        .animate( { opacity: 1 }, { delay: 100 })
        .addClass( "simpread-read-root-show" );

    $( "sr-rd-title"        ).html(   pr.html.title   );
    if ( pr.html.desc != "" ) $( "sr-rd-desc" ).html( pr.html.desc );
    else $( "sr-rd-desc"    ).remove();
    if   ( pr.html.avatar   ) multiple( pr.html.include, pr.html.avatar );
    else $( "sr-rd-content" ).html( pr.html.include );
    if   ( pr.html.paging   ) paging( pr.html.paging );
    else $( "sr-page"       ).remove();

    $("sr-rd-content").find( pr.Exclude( $("sr-rd-content") ) ).remove();
    pr.Beautify( $( "sr-rd-content" ) );
    pr.Format( "simpread-read-root" );

    setTimeout( ()=>{
        setStyle( puplugin.Plugin( "style" ) );
        controlbar();
        service( pr );
        close( $root );
    }, 500 );
}

/**
 * Close
 * 
 * @param {jquery} root jquery object
 */
function close( $root ) {
    $( ".simpread-read-root sr-rd-crlbar fab.crlbar-close" ).on( "click", event => {
        $( ".simpread-read-root" ).addClass( "simpread-read-root-hide" );
        $root.removeClass( "simpread-theme-root" )
            .removeClass( "simpread-font" );
        if ( $root.attr("style") ) $root.attr( "style", $root.attr("style").replace( "font-size: 62.5%!important", "" ));
        $( "body" ).removeClass( "simpread-hidden" );
        $( ".simpread-read-root" ).remove();
    });
}

/**
 * Service
 * 
 * @param {object} pr object
 */
function service( pr ) {
    const clickEvent  = event => {
        const server  = "https://simpread.herokuapp.com", // http://192.168.199.130:3000
              type    = event.target.className,
              token   = simpread_config.secret && simpread_config.secret[type] ? simpread_config.secret[type].access_token : "",
              notify  = new Notify().Render({ state: "loading", content: "保存中，请稍后！" }),
              success = ( result, textStatus, jqXHR ) => {
                console.log( result, textStatus, jqXHR )
                notify.complete();
                if ( result.code == 200 ) {
                    new Notify().Render( "保存成功！" );
                } else new Notify().Render( "保存失败，请稍候再试！" );
              },
              failed  = ( jqXHR, textStatus, error ) => {
                console.error( jqXHR, textStatus, error );
                notify.complete();
                new Notify().Render( "保存失败，请稍候再试！" );
              },
              markdown = () => {
                const mdService = new TurndownService();
                return mdService.turndown( clearMD( $("sr-rd-content").html() ));
              }
        if ( type == "pocket" ) {
            $.ajax({
                url     : `${server}/service/add`,
                type    : "POST",
                data    : {
                    name  : "pocket",
                    token,
                    tags  : "temp",
                    title : pr.html.title,
                    url   : location.href
                }
            }).done( success ).fail( failed );
        } else if ( type == "evernote" || type == "yinxiang" ) {
            $.ajax({
                url     : `${server}/evernote/add`,
                type    : "POST",
                headers : { sandbox: false, china: type == "evernote" ? false : true, type },
                data    : {
                    token,
                    title  : pr.html.title,
                    content: html2enml( $("sr-rd-content").html(), pr.org_url ),
                }
            }).done( success ).fail( failed );
        } else if ( type == "dropbox" ) {
            const data      = markdown(),
                  path      = "md/",
                  name      = pr.html.title + ".md",
                  safename  = data => data.replace( /\//ig, "" ),
                  args      = { path: `/${path}${safename(name)}`, mode: "overwrite" },
                  safejson  = args => {
                    const charsToEncode = /[\u007f-\uffff]/g;
                    return JSON.stringify(args).replace( charsToEncode, c => {
                        return '\\u' + ( '000' + c.charCodeAt(0).toString(16)).slice(-4);
                    });
                  };
            $.ajax({
                url     : "https://content.dropboxapi.com/2/files/upload",
                type    : "POST",
                data    : data,
                headers : {
                    "Authorization"   : `Bearer ${token}`,
                    "Dropbox-API-Arg" : safejson( args ),
                    "Content-Type"    : "application/octet-stream"
                },
                processData : false,
                contentType : false
            }).done( ( data, textStatus, jqXHR ) => success( {code:200, data}, textStatus, jqXHR )).fail( failed );
        } else if ( type == "bear" || type == "drafts" ) {
            const data      = markdown(),
                  title     = encodeURIComponent( pr.html.title ),
                  text      = encodeURIComponent( data ),
                  bear      = `bear://x-callback-url/create?title=${title}&text=${text}&tags=simpread`,
                  drafts    = `drafts4://x-callback-url/create?text=${encodeURIComponent( `# ${pr.html.title}\r\n\r\n` )}${text}`,
                  name      = type == "bear" ? "Bear" : "Drafts";
            notify.complete();
            new Notify().Render( "保存成功，2 秒后，将会提示打开 " + name );
            setTimeout( ()=> {
                $notify && $notify( "open", {"url": type == "bear" ? bear : drafts });
                window.location.href = type == "bear" ? bear : drafts;
            }, 2000 );
        } else if ( type == "markdown" ) {
            try {
                notify.complete();
                $notify && $notify( "clipboard", { string: markdown() });
                new Notify().Render("已成功复制到剪切板！");
            } catch ( error ) {
                new Notify().Render( "此功能只能在「阅读器」中使用。" );
            }
        }
    };
    simpread_config.secret && simpread_config.secret.pocket   && $("sr-rd-crlbar fab.pocket").click(clickEvent)   && $("sr-rd-crlbar fab.pocket").css({ opacity: 1, "background-color": "rgb(3, 169, 244)" });
    simpread_config.secret && simpread_config.secret.evernote && $("sr-rd-crlbar fab.evernote").click(clickEvent) && $("sr-rd-crlbar fab.evernote").css({ opacity: 1, "background-color": "rgb(3, 169, 244)" });
    simpread_config.secret && simpread_config.secret.yinxiang && $("sr-rd-crlbar fab.yinxiang").click(clickEvent) && $("sr-rd-crlbar fab.yinxiang").css({ opacity: 1, "background-color": "rgb(3, 169, 244)" });
    simpread_config.secret && simpread_config.secret.dropbox  && $("sr-rd-crlbar fab.dropbox").click(clickEvent)  && $("sr-rd-crlbar fab.dropbox").css({ opacity: 1, "background-color": "rgb(3, 169, 244)" });
    platform() != "pc"     && $("sr-rd-crlbar fab.markdown").click(clickEvent) && $("sr-rd-crlbar fab.markdown").css({ opacity: 1 });
    platform() != "pc"     && $("sr-rd-crlbar fab.bear").click(clickEvent)   && $("sr-rd-crlbar fab.bear").css({ opacity: 1 });
    platform() != "pc"     && $("sr-rd-crlbar fab.drafts").click(clickEvent) && $("sr-rd-crlbar fab.drafts").css({ opacity: 1 });
}

/**
 * Html convert to enml( from simpread util.HTML2ENML )
 * 
 * @param  {string} convert string
 * @param  {string} url
 * 
 * @return {string} convert string
 */
function html2enml( html, url ) {
    let $target, str;
    const tags = [ "figure", "sup", "hr", "section", "applet", "base", "basefont", "bgsound", "blink", "body", "button", "dir", "embed", "fieldset", "form", "frame", "frameset", "head", "html", "iframe", "ilayer", "input", "isindex", "label", "layer", "legend", "link", "marquee", "menu", "meta", "noframes", "noscript", "object", "optgroup", "option", "param", "plaintext", "script", "select", "style", "textarea", "xml" ];
    
    $( "html" ).append( `<div id="simpread-en" style="display: none;">${html}</div>` );
    $target = $( "#simpread-en" );
    $target.find( "img:not(.sr-rd-content-nobeautify)" ).map( ( index, item ) => {
        $( "<div>" ).attr( "style", `width: ${item.naturalWidth}px; height:${item.naturalHeight}px; background: url(${item.src})` )
        .replaceAll( $(item) );
    });
    $target.find( tags.join( "," ) ).map( ( index, item ) => {
        $( "<div>" ).html( $(item).html() ).replaceAll( $(item) );
    });
    $target.find( tags.join( "," ) ).remove();
    str = $target.html();
    $target.remove();

    try {
        str = `<blockquote>本文由 <a href="http://ksria.com/simpread" target="_blank">简悦 SimpRead</a> 转码，原文地址 <a href="${url}" target="_blank">${url}</a></blockquote><hr></hr><br></br>` + str;
        str = str.replace( /(id|class|onclick|ondblclick|accesskey|data|dynsrc|tabindex)="[\w- ]+"/g, "" )
                //.replace( / style=[ \w="-:\/\/:#;]+/ig, "" )             // style="xxxx"
                .replace( /label=[\u4e00-\u9fa5 \w="-:\/\/:#;]+"/ig, "" )  // label="xxxx"
                .replace( / finallycleanhtml=[\u4e00-\u9fa5 \w="-:\/\/:#;]+"/ig, "" )  // finallycleanhtml="xxxx"
                .replace( /<img[ \w="-:\/\/?!]+>/ig, "" )                  // <img>
                .replace( /data[-\w]*=[ \w=\-.:\/\/?!;+"]+"[ ]?/ig, "" )   // data="xxx" || data-xxx="xxx"
                .replace( /href="javascript:[\w()"]+/ig, "" )              // href="javascript:xxx"
                .replace( /sr-blockquote/ig, "blockquote" )                // sr-blockquote to blockquote
                .replace( /<p[ -\w*= \w=\-.:\/\/?!;+"]*>/ig, "" )          // <p> || <p > || <p xxx="xxx">
                .replace( /<figcaption[ -\w*= \w=\-.:\/\/?!;+"]*>/ig, "" ) // <figcaption >
                .replace( /<\/figcaption>/ig, "" )                         // </figcaption>
                .replace( /<\/br>/ig, "" )                                 // </br>
                .replace( /<br>/ig, "<br></br>" )
                .replace( /<\/p>/ig, "<br></br>" );

        return str;

    } catch( error ) {
        return `<div>转换失败，原文地址 <a href="${url}" target="_blank">${url}</a></div>`
    }
}

/**
 * Clear Html to MD, erorr <tag>( from simpread util.HTML2ENML )
 * 
 * @param {string} convert string
 */
function clearMD( str ) {
    str = `<blockquote><p>本文由 <a href="http://ksria.com/simpread/" target="_blank">简悦 SimpRead</a> 转码， 原文地址 <a href="${window.location.href}" target="_blank">${window.location.href}</a></p></blockquote>\r\n\r\n ${str}`;
    str = str.replace( /<\/?(ins|font|span|div|canvas|noscript|fig\w+)[ -\w*= \w=\-.:&\/\/?!;,%+()#'"{}\u4e00-\u9fa5]*>/ig, "" )
             .replace( /sr-blockquote/ig, "blockquote" )
             .replace( /<\/?style[ -\w*= \w=\-.:&\/\/?!;,+()#"\S]*>/ig, "" )
             .replace( /(name|lable)=[\u4e00-\u9fa5 \w="-:\/\/:#;]+"/ig, "" )
    return str;
}