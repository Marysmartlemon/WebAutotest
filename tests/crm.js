$ = jQuery.noConflict();
$(".zw-global-header").append('<div class="header"> <a class="logo" href="https://www.zoho.com/"> ZOHO </a> <div class="signing"></div> </div> <div class="product-header-top slide"> <div class="content-wrap"> <div class="product-title"><a href="/' + $("body").attr("data-prdname") + '/">' + $("body").attr("data-prdname-display") + '</a></div> <div class="zgh-accounts"><a href="https://accounts.zoho.com/signin?servicename=Zohohome&amp;signupurl=https://www.zoho.com/signup.html&amp;serviceurl=https://home.zoho.com" class="zgh-login" style="display: none;">SIGN IN</a><a href="/signup.html?src=index1" class="zgh-signup" style="display: inline-block;">' + Drupal.t("Get Started") + '</a></div> <div class="product-nav-links product-nav-links-new"></div> </div> </div>');
$(".login-text .login").addClass("zgh-login");
if ($(".z-product").length > 0) {
    if ($(".loggedin-userinfo").length < 1) {
        $(".z-product").after('<div class="loggedin-userinfo" style="display: none;"></div>')
    }
}
typeof CountryCode == "undefined" ? CountryCode = "US" : "";
var allProduct = ["home", "CRM", "Campaigns", "ContactManager", "Forms", "Sites", "SalesIQ", "Survey", "Social", "Assist", "Support", "BugTracker", "Connect", "Docs", "Mail", "Meeting", "Projects", "ShowTime", "Vault", "Chat", "Books", "Invoice", "Subscriptions", "Expense", "Checkout", "People", "Recruit", "Creator", "Reports", "Motivator", "Accounts", "AppCreator", "mdm", "Seminar", "crmplus", "wiki", "Desk", "Cliq", "Developer", "SalesInbox", "Sign", "Calendar", "WorkPlace", "Events", "officeapi", "Sprints", "pagesense", "flow", "show", "sheet", "writer", "notebook", "one", "partnerstore", "backstage", "marketplace", "Commerce", "analytics-plus", "teamdrive", "officeplatform", "peopleplus", "inventory", "workerly", "zohoorchestly", "phonebridge", "knit", "analytics", "patchmanagerplus", "mail360", "marketingautomation", "workdrive", "contacts", "ziasearch", "bookings", "office", "deluge", "remoteaccessplus", "dataprep", "creatorplus", "wallet", "docscanner", "commerceplus", "fsm", "learn", "identity-management", "log360-cloud", "ink", "catalyst", "analyticsplusplugin", "it-analytics", "zohoscanner", "apptics", "Bigin", "annotator", "teaminbox", "lens", "Transmail", "it-management", "webinar", "remotely", "telephony", "covid", "partners", "classes", "toolkit", "ZohoPOS", "backtowork", "zia"];
var allProductCRM = ["-", "CRM", "Campaigns", "-", "-", "-", "-", "Survey", "-", "Assist", "-", "BugTracker", "-", "Docs", "Mail", "Meeting", "Projects", "-", "-", "-", "Books", "Invoice", "Subscriptions", "Expense", "-", "People", "Recruit", "Creator", "Reports", "Motivator", "-", "AppCreator", "-", "-", "CRMPlus", "Wiki", "Desk", "-", "-", "-", "Sign", "-", "Workplace", "-", "-", "-", "PageSense", "Flow", "-", "-", "-", "-", "One", "-", "-", "-", "Commerce", "-", "TeamDrive", "-", "-", "Inventory", "Workerly", "Orchestly", "-", "-", "Analytics", "-", "-", "MarketingAutomation", "WorkDrive", "-", "-", "Bookings", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
var nameServices = [["ZohoHome", "ZohoCRM", "ZohoCampaigns", "ZohoContactManager", "ZohoForms", "ZohoSites", "LiveDesk", "ZohoSurvey", "ZohoSocial", "ZohoAssist", "ZohoSupport", "ZohoBugTracker", "ZohoPulse", "ZohoPC", "VirtualOffice", "ZohoMeeting", "ZohoProjects", "ZohoShowtime", "ZohoVault", "ZohoChat", "ZohoBooks", "ZohoInvoice", "ZohoSubscriptions", "ZohoExpense", "ZohoCheckout", "zohopeople", "ZohoRecruit", "ZohoCreator", "ZohoReports", "ZohoMotivator", "", "", "", "", "CRMPlus", "ZohoWiki", "ZohoSupport", "ZohoChat", "ZohoCRM", "SalesInbox", "ZohoSign", "ZohoCalendar", "VirtualOffice", "", "OfficeAPI", "ZohoSprints", "PageSense", "ZohoFlow", "ZohoShow", "ZohoSheet", "ZohoWriter", "NoteBook", "ZohoOne", "", "ZohoBackStage", "ZohomarketPlace", "ZohoCommerce", "", "TeamDrive", "OfficeAPI", "Peopleplus", "", "ZohoWorkerly", "Orchestly", "phonebridge", "zohostreamline", "ZohoReports", "PatchManagerPlusCloud", "mail360", "zohomarketinghub", "TeamDrive", "zohoContacts", "ZohoSearch", "ZohoBookings", "office", "deluge", "", "ZohoDataprep", "ZohoCreatorPlus", "wallet", "docscanner", "ZohoCommerce", "", "ZohoLearn", "IDMPOD", "logs360cloud", "ZohoInk", "", "", "", "", "", "ZohoBigin", "", "", "ZohoLens", "", "", "", "", "", "", "", "", ""]];
var oldUSDvalue = ["DZ", "AO", "AI", "AG", "AR", "AW", "BS", "BB", "BZ", "BJ", "BM", "BO", "BW", "BR", "BF", "BI", "CM", "CV", "KY", "CF", "TD", "CL", "CN", "CO", "KM", "CD", "CR", "CW", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "ET", "FK", "PF", "GA", "GM", "GH", "GD", "GU", "GT", "GN", "GW", "GY", "HT", "HN", "IQ", "JM", "JP", "JO", "KE", "LB", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "YT", "MX", "MS", "MA", "MZ", "NA", "KZ", "NI", "NE", "NG", "OM", "PS", "PA", "PY", "PE", "PN", "PR", "RE", "RW", "BL", "SH", "KN", "LC", "MF", "PM", "VC", "ST", "SN", "SL", "SX", "SB", "SO", "ZA", "SS", "SR", "SJ", "SZ", "TZ", "TG", "TK", "TT", "TN", "TC", "UG", "UY", "VE", "VG", "VI", "WF", "EH", "YE", "ZM", "ZW", "AX", "BQ", "BV", "GF", "TF", "GP", "MQ", "GS"];
var oldUSDprds = ["analytics", "assist", "backstage", "bookings", "bugtracker", "campaigns", "commerce", "connect", "creator", "creatorplus", "desk", "flow", "forms", "lens", "marketingautomation", "officeplatform", "one", "people", "peopleplus", "recruit", "sign", "sites", "social", "sprints", "survey", "vault", "workdrive", "workerly", "crm", "crmplus", "startups"];
var stateupdate = [];
var allProductlowerCase = [];
for (var i = 0; i < allProduct.length; i++) {
    allProductlowerCase[i] = allProduct[i].toLowerCase()
}
var haveAccount = Drupal.t("Have a Zoho Account?")
  , signuplogin = Drupal.t("SIGN IN");
var accessZoho = Drupal.t("Access Zoho"), zPrdSignupLinkText, ss = 0, android = location.href.match(/#android$/) || null != navigator.userAgent.match(/Android/i), getDomain = document.domain, splitUrl = getDomain.split("."), domainOne = splitUrl.pop();
var Zdomain = splitUrl.pop();
var langsrc = "/";
var productName = "home";
"zohocorp" == Zdomain && (Zdomain = "zoho");
var getusername, zPrdSignupLink = "https://www.zoho.com/signup.html", zPrdLoginLink = "https://accounts.zoho.com/signin?servicename=ZohoHome&signupurl=https://www.zoho.com/signup.html", ZdomainName = "zoho", ZcheckDomain = "www.local" + "zoho.com", _globalAccess = "", userAgent = navigator.userAgent || navigator.vendor || window.opera, newFooter = "", currentUrlLang = "", localUrlLang = "", _com = "com", _eu = "eu", _lhref = window.location.href, isMobile = /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
var onlycom = !1
  , _pathName = window.location.pathname
  , dcenabled = !0
  , nondc = !0;
var dcdomainOne = domainOne;
var dcVal = "0"
  , myimagebool = 1
  , currentYear = "2024"
  , creativeLang = ""
  , knowprd = typeof document.getElementsByTagName("body")[0].getAttribute("data-prdname");
var _preZ = "p" + "r" + "e" + "z" + "o" + "h" + "o" + "w" + "e" + "b" + "." + "z" + "o" + "h" + "o" + ".com"
  , _preZC = "p" + "r" + "e" + "z" + "o" + "h" + "o" + "w" + "e" + "b" + "." + "z" + "o" + "h" + "o" + "corp" + ".com"
  , _zcmsZC = "z" + "c" + "m" + "s" + "w" + "e" + "b" + "." + "z" + "o" + "h" + "o" + "c" + "o" + "r" + "p" + ".com"
  , _zcopr = "zoho" + "corp"
  , _lz = "l" + "o" + "c" + "a" + "l" + "zoho"
  , _preccms = "c" + "c" + "m" + "s" + "." + "z" + "o" + "h" + "o" + "c" + "o" + "r" + "p." + "c" + "o" + "m"
  , _prewww = "p" + "r" + "e" + "w" + "w" + "w";
if (Zdomain == _zcopr) {
    Zdomain = "zoho"
}
if (Zdomain == "localbigin" || Zdomain == "localqntrl") {
    Zdomain = "local" + "zoho";
    ZdomainName = "local" + "zoho"
}
var ipArr = ["172.24.125.24", "172.22.152.98", "172.24.105.146", "172.22.110.12"];
for (var i = 0; i < ipArr.length; i++) {
    if (_lhref.indexOf(ipArr[i]) > -1) {
        Zdomain = "zoho";
        domainOne = "com"
    }
}
var ZUrlDomain = Zdomain;
var langArr = ["en", "es-xl", "pt-br", "de", "fr", "nl", "jp", "ar", "id", "th", "vi", "zh-hans", "fr-ca", "hi", "zh-hant", "hi-in", "he", "it"];
var onlylocal = ["ko", "ru", "tr"];
var usedLanArr = ["fr", "de", "pt-br", "es-xl", "nl"];
var locallang = ["en-apac", "en-in", "en-br", "en-mea", "en-sg", "en-za", "en-au", "en-ke", "en-ch"];
var lancountry = {
    en: "English",
    fr: "Français",
    de: "Deutsch",
    "es-xl": "Español",
    "pt-br": "Português (Brasil)",
    jp: "日本語",
    nl: "Nederlands",
    "zh-hans": "简体中文",
    id: "Bahasa Indonesia",
    th: "ภาษาไทย",
    ar: "العربية",
    vi: "Tiếng Việt",
    ko: "한국어",
    it: "Italiano",
    ru: "Русский",
    tr: "Türkçe",
    he: "עברית",
    "fr-ca": "Français (Canada)",
    "en-apac": "English",
    "en-in": "English (India)",
    "en-br": "English (Brasil)",
    "en-mea": "English (MEA)",
    "en-sg": "English (SG)",
    "en-za": "English (ZA)",
    "en-au": "English (AU)",
    "en-ke": "English (KE)",
    "en-ch": "English (CH)",
    "zh-hant": "繁体中文",
    hi: "हिन्दी",
    "hi-in": "हिन्दी"
};
var bannertext = {
    en: "Hello ::: Now you can navigate",
    fr: "Bonjour ::: Vous pouvez maintenant naviguer en",
    de: "Wechseln ::: Diese Seite ist auch auf Deutsch verfügbar",
    "es-xl": "Hola ::: ¡Ahora puede navegar en",
    "pt-br": "Olá ::: Agora você pode navegar em",
    jp: "移動する ::: 日本語の公式サイトをご利用いただけます。",
    nl: "Klik hier ::: Navigeer nu in het",
    "zh-hans": "Hello ::: Now you can navigate",
    id: "Hello ::: Sekarang Anda bisa berselancar dalam",
    th: "สวัสดี ::: ตอนนี้คุณสามารถดูข้อมูลเป็นภาษาไทยได้แล้ว",
    ar: "يمكنكم الآن التصفح باللغة ::: مرحباً",
    vi: "Xin Chào ::: Bây giờ bạn có thể xem trang này bằng",
    ko: "Hello ::: Now you can navigate",
    it: "Ciao ::: Ora puoi navigare",
    ru: "Hello ::: Now you can navigate",
    tr: "Hello ::: Now you can navigate",
    he: "Hello ::: Now you can navigate",
    "fr-ca": "Hello ::: Now you can navigate",
    "en-apac": "Hello ::: Now you can navigate",
    "en-in": "Hello ::: Now you can navigate",
    "en-br": "Hello ::: Now you can navigate",
    "en-mea": "Hello ::: Now you can navigate",
    "en-sg": "Hello ::: Now you can navigate",
    "zh-hant": "Hello ::: Now you can navigate",
    hi: "नमस्कार ::: अब आप नेविगेट कर सकते हैं।",
    "hi-in": "नमस्कार ::: अब आप नेविगेट कर सकते हैं।"
};
var localRedirectionlist = {
    "es-xl": "BZ,CR,SV,GT,HN,MX,NI,PA,AR,BO,BR,CL,CO,EC,GY,PY,PE,SR,UY,VE,CU,DO,HT,PR,BL,MF",
    fr: "FR",
    nl: "NL",
    ar: "SA,EG",
    "pt-br": "BR",
    id: "ID",
    de: "DE"
};
for (var i = 0; i < onlylocal.length; i++) {
    if (window.location.host == _preZ) {
        langArr.push(onlylocal[i])
    }
}
var currentLang = function() {
    var a = "";
    langArr.forEach(function(e) {
        if (a == "") {
            if (window.location.href.split("/").indexOf(e) > -1) {
                a = e
            }
        }
    });
    locallang.forEach(function(e) {
        if (window.location.href.split("/").indexOf(e) > -1) {
            localUrlLang = e
        }
    });
    currentUrlLang = a;
    creativeLang = usedLanArr.indexOf(currentUrlLang) > -1;
    currentUrlLang != "" ? langsrc = "/" + currentUrlLang + "/" : "";
    if (a == "es-xl") {
        a = "es"
    } else if (a == "pt-br") {
        a = "pt"
    } else if (a == "jp") {
        a = "ja"
    } else if (a == "zh-hans") {
        a = "zh";
        domainOne = "com.cn"
    } else if (a == "zh-hant") {
        a = "zh_tw"
    } else if (a == "he") {
        a = "iw"
    } else if (a == "fr-ca") {
        a = "fr_ca"
    } else if (a == "hi-in") {
        a = "hi"
    }
    a == "in" ? (a = "",
    currentUrlLang = "") : "";
    a == "id" ? a = "in" : "";
    return a
}()
  , addingLangRtlClass = function() {
    if (["ar", "he"].includes(currentUrlLang)) {
        $("body").addClass("lang-rtl")
    }
}()
  , selectEvents = function() {
    if ("ontouchstart"in document.documentElement === true)
        return "touchstart";
    else
        return "click"
}()
  , localredirectionval = "0"
  , footer_ebable = true
  , currencyCodeArray = ["USD", "OLDUSD", "EUR", "INR", "GBP", "BRL", "JPY", "AUD", "NZD", "SGD", "AED", "SAR", "MXN", "CNY", "ZAR", "NGN", "KES", "EGP", "CAD", "THB", "EURTR", "IDR", "USDTZ", "USDUG", "MYR"]
  , currencySymbolArray = ["&#36;", "&#36;", "&#8364;", "&#8377;", "&#163;", "R&#36;", "&#165;", "A&#36;", "NZ&#36;", "S&#36;", "AED", "SAR", "Mex&#36;", "&#165;", "R", "&#8358;", "K", "E&#163;", "C&#36;", "&#3647;", "&#8364;", "Rp", "$", "$", "RM"]
  , currencyCountryArray = ["ALL", "ALL", "EUlist", "IN", "GB", "BR", "JP", "AU", "NZ", "SG", "AE", "SA", "MX", "CN", "ZA", "NG", "KE", "EG", "CA", "TH", "TR", "ID", "TZ", "UG", "MY"];
if (Zdomain == "local" + "zoho" || domainOne == "com.cn") {
    dcenabled = false;
    nondc = false
}
var predomain = window.location.hostname == _preZ || window.location.hostname == _preZC || Zdomain == _lz || window.location.hostname.indexOf(_prewww) > -1;
var customvar = {
    outproduct: ["zohoorchestly", "trainercentral"],
    isMobile: /iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent),
    cnavailablepage: false,
    cachedWidth: window.innerWidth,
    pathname: window.location.pathname,
    host: window.location.hostname,
    iphone: /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
    ipad: navigator.userAgent.match(/iPad/i) != null,
    android: /Android/.test(navigator.userAgent) && !window.MSStream,
    host: window.location.hostname,
    numberOfCountries: "150",
    numberOfUsers: "100",
    numberOfUsersText: Drupal.t("hundred"),
    numberOfEmployees: "15",
    numberOfYears: "25",
    numberOfPartners: "2",
    numberOfApps: "55",
    numberOfCustomers: "700",
    numberOfDataCenters: "16",
    absurl: window.location.origin + window.location.pathname,
    userelem: "",
    transCName: typeof CountryName != "undefined" ? CountryName : "",
    hostName: "www.zoho.com",
    sHostName: "l",
    servicename: "",
    mynewsignup: [],
    textparam: false,
    showchangecountry: _lhref.indexOf("/r/signup.html") > 0 ? "true" : "false",
    optinArr: ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "GR", "IT", "LT", "MT", "NL", "PL", "RO", "SK", "SI", "ES", "IS", "NO", "CH", "CA", "XK"],
    optoutArr: ["EE", "FI", "FR", "HU", "IE", "LV", "LU", "PT", "SI", "SE", "GB", "ZA"],
    doubleoptinArr: ["DE", "AU", "TR"],
    domainArr: [["com", "in", "eu", "com.au", "jp"], [], ["zoho.com", "zoho.in", "zoho.eu", "zoho.com.au", "zoho.jp"]],
    pArr: ["accounts", "notebook", "mail", "analytics", "cliq", "creator", "meeting", "sheet", "show", "wiki", "writer", "people", "projects", "docs", "discussions", "invoice", "calendar", "zia search", "video", "contacts", "crm", "gadgets", "zoho store", "servicedesk plus", "recruit", "campaigns", "desk", "assist", "books", "sites", "zoho api", "zoho mobile", "bugtracker", "social", "contact manager", "task engine", "zoho mobile sync", "connect", "zohomailwatch", "survey", "salesiq", "forms", "vault", "logs", "zoho", "zoho mobile proxy", "jproxy", "subscriptions", "manage engine", "zoho home", "dbsearch", "mapsapi", "showtime", "site24x7", "alarmsone", "expense", "pdfgen", "motivator", "zohoappcreator", "transmail", "inventory", "deluge runtime", "zoho directory (zd)", "dlserver", "shortenurl", "ear", "iis", "maps-nomi", "mapstiles", "mobile device management", "plusloggerone", "crmplus", "salesinbox", "zmnotifications", "sheetapp", "zmindexing", "zohoplugin", "zohospotlight", "zmimageprocessing", "mi", "bugbounty", "zohoreceipts", "zohoquotes", "zoho payroll", "zohoparser", "soc", "zoho checkout", "zoho finance plus", "zoho backstage", "wms", "zmintegration", "zlabsml", "sign", "zoho one", "pagesense", "flow", "sprints", "zoho gst", "zohoasp", "nameserver", "zohocode", "hacksaw", "zoho marketplace", "zapps", "zohofinancerisk", "patch manager plus", "malware", "log360cloud", "zmmx", "startwith", "zmuploaddownload", "zoho commerce", "zohoarm", "zmparser", "zoho profile", "scrapy", "office integrator", "zohobills", "socialdata", "sastest", "cstore", "ziaplatform", "zlabsdl", "workdrive", "zmpop", "phonebridge", "orchestly", "zmsmtp", "zohotravel", "zmimap", "trends", "remote access", "zohostoreapi", "webanalytics", "zohodashboards", "zohomarketinghub", "zohoink", "zohoworkerly", "peopleplus", "zohomts", "bdaas admin", "cirrus", "zohofiles", "zoho presentation platform", "stratus", "socialanalytics", "ediscovery", "comply", "zmmigration", "bigin", "zohoediscovery", "zohocatalyst", "desktop central", "blockchain", "zmvaultsearch", "templates", "zohocloud", "zbsm", "zoho dataprep", "identity manager plus", "zohobookings", "zask", "zohocreatorplus", "zohopublish", "zoholearn", "mail360smtp", "mail360mx", "mail360indexing", "mail360notifications", "rarn", "murphy", "zohobetalens", "solution", "zmprotocols", "appsense", "mail360protocols", "apigateway", "zohovoice", "landingpage", "zohopos", "zmprocessors", "mailapps", "webstats", "mason", "connectcommunity", "remote access plus", "zmtask", "slate", "zohopilot", "marketingplus", "bluepencil", "zoho contracts", "zoho routeiq", "zoholens", "zohoim", "teaminbox", "zohooffice", "mail360processors", "statusiq", "cloudspend", "aidev", "zohofsm", "zohoposapi", "remotely", "zmspamgateway", "zohoshifts", "crm", "thrive", "wmspserver", "wmspsbserver", "zohorepository", "wmsacs", "zohocircuit", "zohogc", "zohointegrations", "nocmonitor", "writerautomation", "label", "trainercentral", "zoho domains", "whiteboard", "feedback center", "zohosignals", "ziapipelines", "ulaa", "mtacentral", "zohoqueue", "zohotables", "zohoiot", "caas", "quartz", "timeservice", "kmslite", "screenplay", "researchstudio", "rtcplatform", "ziahub", "nimbus", "accio", "one", "workplace", "catalyst", "backstage", "commerce", "bookings", "marketingautomation", "lens", "voice", "zeptomail", "learn", "workerly", "backtowork", "shifts", "mobiledevicemanagerplus", "patchmanagerplus", "remoteaccessplus", "log360-cloud", "identitymanagerplus", "desktopcentral", "officeplatform", "dataprep", "contracts", "developer", "it-management", "identity-management"],
    pServiceNames: ["AaaServer", "NoteBook", "VirtualOffice", "ZohoReports", "ZohoChat", "ZohoCreator", "ZohoMeeting", "ZohoSheet", "ZohoShow", "ZohoWiki", "ZohoWriter", "zohopeople", "ZohoProjects", "ZohoPC", "ZohoDiscussions", "ZohoInvoice", "ZohoCalendar", "ZohoSearch", "ZohoVideo", "ZohoContacts", "ZohoCRM", "ZohoGadgets", "ZohoPayments", "SDPOnDemand", "ZohoRecruit", "ZohoCampaigns", "ZohoSupport", "ZohoAssist", "ZohoBooks", "ZohoSites", "ZohoAPI", "ZohoMobile", "ZohoBugTracker", "ZohoSocial", "ZohoContactManager", "TaskEngine", "MobileSync", "ZohoPulse", "ZohoMailWatch", "ZohoSurvey", "LiveDesk", "ZohoForms", "ZohoVault", "ZohoLogs", "Zoho", "ZohoMobileProxy", "JProxy", "ZohoSubscriptions", "ManageEngine", "ZohoHome", "ZohoDBSearch", "maps", "ZohoShowtime", "Site24x7", "AlarmsOne", "ZohoExpense", "PdfGen", "ZohoMotivator", "ZohoMCreator", "Transmail", "ZohoInventory", "DRE", "ZohoDirectory", "DLServer", "shortenurl", "EAR", "IIS", "mapsnomi", "mapstiles", "MDMOnDemand", "plusloggerone", "CRMPlus", "SalesInbox", "ZMNotifications", "sheetapp", "ZMIndexing", "ZohoPlugin", "ZohoSpotLight", "ZMImageProcessing", "MI", "BugBounty", "ZohoReceipts", "ZohoQuotes", "ZohoPayroll", "ZohoParser", "SOC", "ZohoCheckout", "ZohoFinancePlus", "zohobackstage", "WMS", "ZMIntegration", "ZLabsML", "ZohoSign", "ZohoOne", "PageSense", "ZohoFlow", "ZohoSprints", "ZohoTax", "ZohoASP", "NameServer", "ZohoCode", "HackSaw", "ZohoMarketplace", "ZApps", "ZohoFinanceRisk", "PatchManagerPlusCloud", "malware", "Logs360Cloud", "ZMMX", "Startwith", "ZMUploadDownload", "ZohoCommerce", "ZohoARM", "ZMParser", "ZohoProfile", "scrapy", "OfficeAPI", "ZohoBills", "SocialData", "SasTest", "cstore", "ZIAPlatform", "ZLabsdl", "TeamDrive", "ZMPOP", "PhoneBridge", "Orchestly", "ZMSMTP", "ZohoTravel", "ZMIMAP", "Trends", "ZohoRemoteAccess", "ZohoStoreAPI", "WebAnalytics", "ZohoDashboards", "ZohoMarketingHub", "ZohoInk", "ZohoWorkerly", "Peopleplus", "ZohoMTS", "BDaaSAdmin", "Cirrus", "ZohoFiles", "ZohoPresentationPlatform", "Stratus", "SocialAnalytics", "ZMVault", "Comply", "ZMMigration", "ZohoBigin", "ZohoEDiscovery", "ZOHOCATALYST", "DesktopCentralCloud", "Blockchain", "ZMVaultSearch", "Templates", "ZohoCloud", "ZBSM", "zohodataprep", "idmpod", "ZohoBookings", "ZAsk", "ZohoCreatorPlus", "ZohoPublish", "ZohoLearn", "Mail360SMTP", "Mail360MX", "Mail360Indexing", "Mail360Notifications", "ZohoRARN", "Murphy", "ZohoBetaLens", "Solution", "ZMProtocols", "AppSense", "Mail360Protocols", "APIGateway", "ZohoVoice", "landingpage", "ZohoPOS", "ZMProcessors", "MailApps", "WebStats", "Mason", "ConnectCommunity", "RemoteAccessPlusCloud", "ZMTASK", "Slate", "ZohoPilot", "MarketingPlus", "BluePencil", "contracts", "routeiq", "ZohoLens", "ZohoIM", "TeamInbox", "ZohoOffice", "Mail360Processors", "StatusPages", "CloudSpend", "AIDev", "ZohoFSM", "ZohoPOSAPI", "Remotely", "ZMSpamGateway", "ZohoShifts", "NewCRM", "Thrive", "wmspserver", "wmspsbserver", "ZohoRepository", "wmsacs", "ZohoCircuit", "ZohoGC", "ZohoIntegrations", "NocMon", "WriterAutomation", "Label", "TrainerCentral", "ZohoDomains", "Whiteboard", "FeedBackCenter", "ZohoSignals", "ZIAPipelines", "PrimeumWeb", "MTACentral", "ZohoQueue", "ZohoTables", "ZohoIOT", "CaaS", "Quartz", "TimeService", "KMSLite", "Screenplay", "Insights", "RTCPlatform", "ZiaHub", "Nimbus", "Accio", "ZohoOne", "VirtualOffice", "ZohoCatalyst", "ZohoBackstage", "ZohoCommerce", "ZohoBookings", "zohomarketinghub", "ZohoLens", "ZohoVoice", "transmail", "ZohoLearn", "ZohoWorkerly", "ZohoCreator", "ZohoShifts", "MDMOnDemand", "PatchManagerPlusCloud", "RemoteAccessPlusCloud", "logs360cloud", "IDMPOD", "DesktopCentralCloud", "OfficeAPI", "ZohoDataprep", "Contracts", "ZohoCRM", "alarmsone", "IDMPOD"],
    countries: [["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Côte d'Ivoire", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "North Korea", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena", "Saint Kitts And Nevis", "Saint Lucia", "Saint Pierre And Miquelon", "Saint Vincent And The Grenadines", "Samoa", "San Marino", "Sao Tome And Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "The Democratic Republic Of Congo", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks And Caicos Islands", "Tuvalu", "U.S. Virgin Islands", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican", "Venezuela", "Vietnam", "Wallis And Futuna", "Yemen", "Zambia", "Zimbabwe", "Åland Islands"], ["AF", "AL", "DZ", "AS", "AD", "AO", "AI", "AG", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB", "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BR", "VG", "BN", "BG", "BF", "BI", "KH", "CM", "CA", "CV", "KY", "CF", "TD", "CL", "CN", "CO", "KM", "CG", "CK", "CR", "HR", "CU", "CY", "CZ", "CI", "DK", "DJ", "DM", "DO", "EC", "EG", "SV", "GQ", "ER", "EE", "ET", "FK", "FO", "FJ", "FI", "FR", "GF", "PF", "GA", "GM", "GE", "DE", "GH", "GI", "GR", "GL", "GD", "GP", "GU", "GT", "GN", "GW", "GY", "HT", "HN", "HK", "HU", "IS", "IN", "ID", "IR", "IQ", "IE", "IL", "IT", "JM", "JP", "JO", "KZ", "KE", "KI", "XK", "KW", "KG", "LA", "LV", "LB", "LS", "LR", "LY", "LI", "LT", "LU", "MO", "MK", "MG", "MW", "MY", "MV", "ML", "MT", "MH", "MQ", "MR", "MU", "MX", "FM", "MD", "MC", "MN", "ME", "MS", "MA", "MZ", "MM", "NA", "NR", "NP", "NL", "AN", "NC", "NZ", "NI", "NE", "NG", "NU", "KP", "MP", "NO", "OM", "PK", "PW", "PS", "PA", "PG", "PY", "PE", "PH", "PL", "PT", "PR", "QA", "RE", "RO", "RU", "RW", "SH", "KN", "LC", "PM", "VC", "WS", "SM", "ST", "SA", "SN", "RS", "SC", "SL", "SG", "SK", "SI", "SB", "SO", "ZA", "KR", "ES", "LK", "SD", "SR", "SZ", "SE", "CH", "SY", "TW", "TJ", "TZ", "TH", "CD", "TL", "TG", "TK", "TO", "TT", "TN", "TR", "TM", "TC", "TV", "VI", "UG", "UA", "AE", "GB", "US", "UY", "UZ", "VU", "VA", "VE", "VN", "WF", "YE", "ZM", "ZW", "AX"], ["93", "355", "213", "1", "376", "244", "1", "1", "54", "374", "297", "61", "43", "994", "1", "973", "880", "1", "375", "32", "501", "229", "1", "975", "591", "387", "267", "55", "1", "673", "359", "226", "257", "855", "237", "1", "238", "1", "236", "235", "56", "86", "57", "269", "242", "682", "506", "385", "53", "357", "420", "225", "45", "253", "1", "1", "593", "20", "503", "240", "291", "372", "251", "500", "298", "679", "358", "33", "594", "689", "241", "220", "995", "49", "233", "350", "30", "299", "1", "590", "1", "502", "224", "245", "592", "509", "504", "852", "36", "354", "91", "62", "98", "964", "353", "972", "39", "1", "81", "962", "7", "254", "686", "383", "965", "996", "856", "371", "961", "266", "231", "218", "423", "370", "352", "853", "389", "261", "265", "60", "960", "223", "356", "692", "596", "222", "230", "52", "691", "373", "377", "976", "382", "1", "212", "258", "95", "264", "674", "977", "31", "599", "687", "64", "505", "227", "234", "683", "850", "1", "47", "968", "92", "680", "970", "507", "675", "595", "51", "63", "48", "351", "1", "974", "262", "40", "7", "250", "290", "1", "1", "508", "1", "685", "378", "239", "966", "221", "381", "248", "232", "65", "421", "386", "677", "252", "27", "82", "34", "94", "249", "597", "268", "46", "41", "963", "886", "992", "255", "66", "243", "670", "228", "690", "676", "1", "216", "90", "993", "1", "688", "1", "256", "380", "971", "44", "1", "598", "998", "678", "379", "58", "84", "681", "967", "260", "263", "672"]],
    countryEu: ["RS", "VA", "GB", "UA", "CH", "SE", "ES", "SI", "SK", "SM", "RO", "PT", "PL", "NO", "NL", "ME", "MC", "MD", "MT", "MK", "LU", "LT", "LI", "LV", "IT", "IE", "IS", "HU", "GR", "GI", "DE", "FR", "FI", "FO", "EE", "DK", "CZ", "CY", "HR", "BG", "BA", "BE", "BY", "AT", "AD", "AL", "AX", "XK", "TR", "GE", "NC"],
    countryApac: ["AU", "BD", "BT", "IO", "BN", "KH", "CN", "FJ", "HK", "IN", "ID", "JP", "KP", "KR", "LA", "MO", "MY", "MV", "MN", "MM", "NP", "NZ", "PK", "PG", "PH", "SG", "LK", "TW", "TH", "TL", "VN"],
    lAmerica: ["BZ", "CR", "SV", "GT", "HN", "MX", "NI", "PA", "AR", "BO", "BR", "CL", "CO", "EC", "GY", "PY", "PE", "SR", "UY", "VE", "CU", "DO", "HT", "PR", "BL", "MF"],
    countryTranstasman: ["AU", "NZ"],
    meaList: ["TR", "IQ", "SA", "YE", "SY", "AE", "IL", "JO", "PS", "LB", "OM", "KW", "QA", "BH", "IR"],
    usstates: ["", "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "U.S. Virgin Islands", "Utah", "Vermont", "Virginia", "Washington", "Washington, D.C", "West Virginia", "Wisconsin", "Wyoming"],
    cnavail: ["forms", "cliq", "connect", "workdrive", "vault", "sheet", "wiki", "showtime", "flow", "survey", "meeting", "workplace", "mail", "projects", "creator", "crm", "assist", "sprints", "people", "recruit", "analytics", "one", "crmplus", "desk", "campaigns", "salesiq", "sites", "bigin", "books", "bookings", "expense", "orchestly", "lens", "remotely", "maketinghub", "pagesense", "inventory", "notebook", "docs", "writer", "show"],
    instates: ["Select State", "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"],
    noteuinarr: [["kanaa", "contactmanager", "identity-management", "iot", "log360-cloud", "it-management", "shifts", "voice", "pilot", "qengine", "developer", "commandcenter", "zakya", "eprotect", "start", "kepto", "rpa"], ["kanaa", "identity-management", "it-management", "pilot", "qengine", "commandcenter", "thrive", "eprotect", "start", "tables", "kepto", "publish", "rpa"], ["kanaa", "contactmanager", "identity-management", "iot", "log360-cloud", "it-management", "voice", "pilot", "qengine", "commandcenter", "zakya", "eprotect", "start", "tables", "kepto", "rpa"], ["kanaa", "shifts", "voice", "catalyst", "commandcenter", "iot", "zakya", "fsm", "thrive", "eprotect", "pilot", "qengine", "start", "tables", "kepto", "log360-cloud", "publish", "rpa"], [], []],
    singaporeConsentproductList: ["notebook", "docscanner", "sheet", "mail", "vault", "calendar", "meeting", "assist", "sign", "workdrive", "show", "forms", "sites", "zillum", "annotator"],
    africaList: ["DZ", "AO", "BJ", "BW", "IO", "BF", "BI", "CV", "CM", "CF", "TD", "KM", "CG", "CD", "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET", "TF", "GA", "GM", "GH", "GN", "GW", "KE", "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "YT", "MA", "MZ", "NA", "NE", "NG", "RE", "RW", "SH", "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG", "TN", "UG", "EH", "ZM", "ZW"],
    middleEastList: ["CY", "BH", "IR", "IQ", "IL", "JO", "KW", "LB", "OM", "PS", "QA", "SA", "SY", "TR", "AE", "YE"],
    africaRegList: ["Algeria", "Benin", "Angle", "Burundi", "Botswana", "Canary Islands", "Burkina Faso", "Cameroon", "Comoros", "Eswantini", "Ceuta", "Cape Verde", "Central African Republic", "Djibouti", "Lesotho", "Egypt", "Cote d Ivoire", "Chad", "Eritrea", "Madagascar", "Libya", "The Gambia", "Democratic Republic of the Congo", "Ethiopia", "Namibia", "Madeira", "Ghana", "Equatorial Guinea", "French Southern Territories", "South Africa", "Melilla", "Guinea", "Gabon", "Kenya", "Morocco", "Guinea Bissau", "Sao Tome and principe", "Malawi", "Sudan", "Liberia", "Mauritius", "Tunisia", "Mali", "Mayotte", "Western Sahara", "Mauritania", "Mozambique", "Niger", "Reunion", "Nigeria", "Rwanda", "Saint Helena", "Seychelles", "Senegal", "Somalia", "Sierra Leone", "South Sudan", "Togo", "Tanzania", "Uganda", "Zambia", "Zimbabwe"],
    cnarr: [],
    privacystate: {
        california: "/en-us/ca/privacy.html"
    },
    privacycountry: {
        ZA: "/en-za/privacy.html",
        GB: "/en-uk/privacy.html"
    },
    productTermList: {
        campaigns: ["jp"],
        catalyst: [],
        cliq: [],
        creator: [],
        commerce: [],
        crm: ["jp"],
        expense: [],
        eprotect: [],
        developer: ["fr", "de", "pt-br", "es-xl", "nl", "ar", "it", "id", "th", "vi"],
        forms: [],
        one: ["fr", "de", "pt-br", "es-xl", "nl", "ar", "it", "id", "th", "vi", "jp"],
        pagesense: [],
        salesiq: ["jp"],
        sites: [],
        start: [],
        toolkit: [],
        transmail: [],
        voice: [],
        zeptomail: [],
        officeapi: "https://officeapi.zoho.com/jsp/terms.jsp",
        trainercentral: "https://www.trainercentral.com/terms.html",
        marketingautomation: "https://www.zoho.com/marketingautomation/terms-of-service.html",
        patchmanagerplus: "https://ondemand.manageengine.com/terms.html",
        endpointcentralmsp: "https://ondemand.manageengine.com/terms.html",
        zohobigin: "https://www.bigin.com/terms.html"
    },
    newFooterProducts: ["people", "rpa", "peopleplus", "bugtracker", "learn", "tables", "qengine", "bookings", "recruit", "eprotect", "deluge", "publish", "directory", "showtime", "mail360", "researchstudio", "docscanner", "officeplus", "workerly", "shifts", "remotely", "notebook", "solo", "start", "enterprise", "officesuite", "developer", "kanaa", "zillum", "officeplatform", "officeintegrator", "affiliate", "projects", "one", "cliq", "webinar", "zeptomail", "teaminbox", "marketingautomation", "flow", "contracts", "trident", "iot", "wallet", "thrive", "ziasearch", "patchmanagerplus", "log360-cloud", "endpoint-central", "endpointcentralmsp", "it-management", "remoteaccessplus", "creator", "catalyst", "workdrive", "startups", "phonebridge", "covid", "events", "wiki", "contacts", "classes", "todo", "calendar", "toolkit", "survey", "fsm", "writer", "sheet", "analytics", "dataprep", "backstage", "pagesense", "communityspaces", "sign", "lens", "connect", "meeting", "mail", "workplace", "sprints", "apptics", "routeiq", "partners", "forms", "trainercentral", "campaigns", "landingpage", "voice", "zoholics", "datagrid", "social", "community"],
    htmlencode: function(e) {
        var a = [];
        for (var t = e.length - 1; t >= 0; t--) {
            a.unshift(["&#", e[t].charCodeAt(), ";"].join(""))
        }
        return a.join("")
    },
    htmldecode: function(e) {
        return e.replace(/&#(\d+);/g, function(e, a) {
            return String.fromCharCode(a)
        })
    },
    zDomainHandling: function() {
        getDomain = document.domain,
        splitUrl = getDomain.split("."),
        domainOne = splitUrl.pop(),
        Zdomain = splitUrl.pop();
        if (Zdomain == _zcopr) {
            Zdomain = "zoho"
        }
        if (Zdomain == "localbigin" || Zdomain == "localqntrl") {
            Zdomain = "local" + "zoho"
        }
        for (var e = 0; e < ipArr.length; e++) {
            if (_lhref.indexOf(ipArr[e]) > -1) {
                Zdomain = "zoho";
                domainOne = "com"
            }
        }
        Zdomain = dcdomainOne == "ca" ? "zohocloud" : customvar.outproduct.includes(customvar.productName) ? "zoho" : Zdomain;
        if (window.location.hostname.includes("local")) {
            Zdomain = _lz;
            dcdomainOne = "com"
        }
    },
    privacypolicylink: function(e) {
        if (customvar.productName != "start") {
            var a = customvar.getLink(customvar.productName);
            if (e) {
                if ($(".signup-box .zrlink").length > 0) {
                    $(".signup-box .zrlink").attr("href", a.signupPrivacyLink);
                    if (currentUrlLang && !a.signupPrivacyLink.includes(currentUrlLang)) {
                        $(".signup-box .zrlink").attr("target", "_blank")
                    }
                }
            } else {
                if ($(".footer-privacy a").length > 0) {
                    $(".footer-privacy a").attr("href", a.footerPrivacyLink);
                    if (currentUrlLang && !a.footerPrivacyLink.includes(currentUrlLang)) {
                        $(".footer-privacy a").attr("target", "_blank")
                    }
                }
                if ($(".zwc-running-privacy").length > 0) {
                    $(".zwc-running-privacy").attr("href", a.footerPrivacyLink);
                    if (currentUrlLang && !a.footerPrivacyLink.includes(currentUrlLang)) {
                        $(".zwc-running-privacy").attr("target", "_blank")
                    }
                }
            }
        }
        if (typeof useOfPolicy != "undefined") {
            useOfPolicy()
        }
    },
    updatePrivacyLink: function(e, a, t) {
        if (t) {
            var o = customvar.getLink(null, null, e, a);
            if (e && o.crmPrivacyLink) {
                $(t).attr("href", o.crmPrivacyLink)
            }
            if (a && o.crmPrivacyLink) {
                $(t).attr("href", o.crmPrivacyLink)
            }
        }
    },
    getPrivacyLink: function(e, a, t, o) {
        var n = e.domain;
        var r = e.globalPrivacy;
        var i = e.globalPrivacyLang;
        var s = e.privacyCountry;
        var l = e.privacyState;
        var c = e.privacyLang;
        var u = customvar.setLangCode(n + r, 1, i);
        var d = customvar.setLangCode(n + r, 1, i);
        var m = customvar.setLangCode(n + r, 1, i);
        if (CountryCode && s[CountryCode]) {
            u = n + s[CountryCode]
        }
        if (typeof RegionName != "undefined" && RegionName) {
            var p = RegionName.toLowerCase();
            if (l[p]) {
                u = n + l[p]
            }
        }
        if ($(".globalcountrycode-signup").length > 0) {
            var h = $(".globalcountrycode-signup").val();
            if (h && s[h]) {
                d = n + s[h]
            }
        }
        if ($(".za-globalstate-signup").length > 0) {
            var f = $(".za-globalstate-signup").val();
            var v = "";
            if (f) {
                v = f.toLowerCase()
            }
            if (v && l[v]) {
                d = n + l[v]
            }
        }
        if ($(".globalcountrycode").length > 0 || a) {
            var g = $(".globalcountrycode").val();
            if (a) {
                g = $(a).val()
            }
            if (g) {
                var y = customvar.getCountryDetails(g);
                if (y.countryCode) {
                    g = y.countryCode
                } else {
                    g = $(".globalcountrycode").val();
                    y = customvar.getCountryDetails(g);
                    g = y.countryCode
                }
            }
            if (g && s[g]) {
                m = n + s[g]
            }
        }
        if ($(".globalstatecode").length > 0 || a) {
            var b = $(".globalstatecode").val();
            var w = "";
            if (a) {
                b = $(a).val()
            }
            if (b) {
                if (!customvar.usstates.includes(b) || !customvar.instates.includes(b)) {
                    w = $(".globalstatecode").val();
                    if (w) {
                        w = w.toLowerCase()
                    }
                } else {
                    w = b.toLowerCase()
                }
            }
            if (w && l[w]) {
                m = n + l[w]
            }
        }
        if (t && s[t]) {
            m = n + s[t]
        }
        if (o && l[o]) {
            m = n + l[o]
        }
        if (Object.keys(c).includes(currentUrlLang)) {
            d = c[currentUrlLang];
            u = c[currentUrlLang];
            m = c[currentUrlLang]
        }
        return {
            footerPrivacyLink: u,
            signupPrivacyLink: d,
            crmPrivacyLink: m
        }
    },
    getTermLink: function(e) {
        var a = e.domain;
        var t = e.globalTerm;
        var o = e.globalTermLang;
        var n = e.productTerm;
        var r = e.productTermLang;
        var i = e.customTerm;
        var s = customvar.productName;
        var l = customvar.setLangCode(a + t, 1, o);
        if (n.includes(s)) {
            if (Object.keys(r).includes(s)) {
                l = customvar.setLangCode(a + "/" + s + t, 2, r[s])
            } else {
                l = a + "/" + s + t
            }
        }
        if (Object.keys(i).includes(s)) {
            l = i[s]
        }
        return l
    },
    getCountryDetails: function(a) {
        var e = customvar.countries[0].findIndex(function(e) {
            return e == a
        });
        var t = customvar.countries[1][e];
        var o = customvar.countries[2][e];
        return {
            country: a,
            countryCode: t,
            dialCode: o
        }
    },
    getLink: function(n, r, i, s) {
        var e = [{
            collectionName: "For all products(default)",
            products: "all",
            privacyCountry: {
                ZA: "/en-za/privacy.html",
                GB: "/en-uk/privacy.html"
            },
            privacyState: {
                california: "/en-us/ca/privacy.html"
            },
            privacyLang: {
                jp: "https://www.zoho.co.jp/privacy/"
            },
            globalPrivacy: "/privacy.html",
            globalPrivacyLang: ["de", "pt-br"],
            globalTerm: "/terms.html",
            globalTermLang: ["de", "pt-br", "jp"],
            productTerm: ["campaigns", "catalyst", "cliq", "creator", "commerce", "crm", "expense", "eprotect", "developer", "forms", "one", "pagesense", "salesiq", "sites", "start", "toolkit", "transmail", "voice", "zeptomail"],
            productTermLang: {
                crm: ["jp"]
            },
            customTerm: {
                officeapi: "https://officeapi.zoho.com/jsp/terms.jsp",
                trainercentral: "https://www.trainercentral.com/terms.html",
                marketingautomation: "https://www.zoho.com/marketingautomation/terms-of-service.html",
                zohobigin: "https://www.bigin.com/terms.html"
            },
            domain: _livelink
        }, {
            collectionName: "manageEngine",
            products: ["remoteaccessplus", "patchmanagerplus", "endpoint-central", "it-management", "endpointcentralmsp", "log360-cloud"],
            privacyCountry: {
                ZA: "/en-za/privacy.html",
                GB: "/en-uk/privacy.html"
            },
            privacyState: {
                california: "/us-ca/privacy.html"
            },
            privacyLang: {},
            globalPrivacy: "/privacy.html",
            globalPrivacyLang: [],
            globalTerm: "/terms.html",
            globalTermLang: [],
            productTerm: [],
            productTermLang: {},
            customTerm: {
                remoteaccessplus: "https://ondemand.manageengine.com/terms.html",
                patchmanagerplus: "https://ondemand.manageengine.com/terms.html",
                "endpoint-central": "https://ondemand.manageengine.com/terms.html",
                "it-management": "https://ondemand.manageengine.com/terms.html",
                endpointcentralmsp: "https://ondemand.manageengine.com/terms.html",
                "log360-cloud": "https://ondemand.manageengine.com/terms.html"
            },
            domain: "https://www.manageengine.com"
        }];
        if (!n) {
            n = customvar.productName
        }
        var l = null;
        var c = null;
        var u = null;
        var d = null;
        e.every(function(e, a) {
            var t = e.products;
            if (t == "all" || t.includes(n)) {
                var o = customvar.getPrivacyLink(e, r, i, s);
                u = customvar.getTermLink(e);
                l = o.footerPrivacyLink;
                c = o.signupPrivacyLink;
                d = o.crmPrivacyLink;
                if (a > 0) {
                    return false
                }
            }
            return true
        });
        if (customvar.zwProTerms) {
            u = customvar.zwProTerms
        }
        return {
            footerPrivacyLink: l,
            signupPrivacyLink: c,
            crmPrivacyLink: d,
            termLink: u
        }
    },
    setLangCode: function(e, a, t) {
        var o = e.split("/");
        var n = o.length;
        var r = n - a;
        if (t.includes(currentUrlLang) && r >= 0 && r <= n) {
            o.splice(r, 0, currentUrlLang)
        }
        return o.join("/")
    },
    termslink: function() {
        return function() {
            var r = "https://www.zoho.com/jp/terms.html";
            var i = null;
            function e(e, a) {
                if (a && a.length && a.includes(currentUrlLang)) {
                    if (typeof e == "string") {
                        e = e.split(customvar.productName).join(currentUrlLang + "/" + customvar.productName)
                    }
                }
                if (Array.isArray(e)) {
                    const t = e.find(function(e) {
                        return e.includes(langsrc)
                    });
                    if (t) {
                        e = t
                    } else {
                        e = e[0]
                    }
                }
                i = e;
                r = e;
                o("", true)
            }
            function a(e) {
                var a = customvar.getLink(customvar.productName);
                i = a.termLink;
                r = a.termLink;
                o(e)
            }
            function o(e, a) {
                var t = $(".footer-terms a");
                var o = $(".za-tos-container .czone-signup-term");
                var n = $(".stermslink");
                if (e) {
                    if (o.length) {
                        o.attr("href", i);
                        if (currentLang && !i.includes(currentUrlLang)) {
                            o.attr("target", "_blank")
                        }
                    }
                    if (n.length > 0) {
                        n.attr("href", r);
                        if (currentLang && !r.includes(currentUrlLang)) {
                            n.attr("target", "_blank")
                        }
                    }
                } else {
                    if (t.length) {
                        t.attr("href", i);
                        if (currentLang && !i.includes(currentUrlLang)) {
                            t.attr("target", "_blank")
                        }
                    }
                }
                if (a) {
                    if (o.length) {
                        o.attr("href", i);
                        if (currentLang && !i.includes(currentUrlLang)) {
                            o.attr("target", "_blank")
                        }
                    }
                    if (n.length > 0) {
                        n.attr("href", r);
                        if (currentLang && !r.includes(currentUrlLang)) {
                            n.attr("target", "_blank")
                        }
                    }
                }
            }
            return {
                setProductTerm: e,
                setDefaultTerm: a
            }
        }()
    }(),
    gdprshowhide: function() {
        var e = true
          , a = true;
        var t = arguments.length > 0 ? arguments[0] : CountryCode;
        if (customvar.optinArr.includes(t) || customvar.optoutArr.includes(t) || customvar.doubleoptinArr.includes(t) || customvar.countryEu.includes(t)) {
            e = false,
            a = false
        }
        return {
            hide: e,
            check: a
        }
    },
    lsoinfo: function(e) {
        var a = localStorage.getItem("zglobal_Acookie_optOut");
        var t = ["-1", "1", "3"];
        var o = localStorage.getItem("czonecreativeinfo");
        var n = null;
        if (o) {
            try {
                n = JSON.parse(o)
            } catch (e) {
                if (typeof o == "string") {
                    var r = o.split(",");
                    n = {};
                    for (var i = 0; i < r.length; i++) {
                        if (i % 2 == 0) {
                            var s = r[i];
                            var l = r[i + 1];
                            if (l == null || l == undefined) {
                                l = ""
                            }
                            if (l.includes("-j-")) {
                                l = JSON.parse(l.split("-j-").join(","))
                            } else if (l.includes("-a-")) {
                                l = JSON.parse(l.split("-a-").join(","))
                            }
                            n[s] = l
                        }
                    }
                } else {
                    n = {}
                }
            }
        }
        var c = arguments[0];
        var u = arguments[1];
        if (t && !t.includes(a)) {
            if (arguments.length == 2) {
                if (!n) {
                    n = {}
                }
                if (c != "delete")
                    n[c] = u;
                if (c == "delete")
                    delete n[u];
                n = JSON.stringify(n);
                try {
                    localStorage.setItem("czonecreativeinfo", n)
                } catch (e) {}
            }
            if (arguments.length == 1) {
                if (n && n[c]) {
                    return n[c]
                } else {
                    return ""
                }
            }
        } else {
            if (typeof lsonotset_callback != "undefined") {
                lsonotset_callback(e)
            }
            if (arguments.length == 1) {
                return ""
            }
        }
    },
    stateadd: function() {
        this._val = "select your state";
        var e = "US" == CountryCode ? customvar.usstates : "IN" == CountryCode && customvar.instates;
        arguments.length > 0 && ("US" == arguments[0] || "United States" == arguments[0] ? e = customvar.usstates : "IN" != arguments[0] && "India" != arguments[0] || (e = customvar.instates));
        for (var a = 0; a < e.length; a++) {
            if (e.indexOf(customvar.instates[1] > -1) && a == 0) {
                this._val += '<option value="select your state">' + e[a] + "</option>"
            } else {
                this._val += '<option value="' + e[a].toLowerCase() + '">' + e[a] + "</option>"
            }
        }
        if (arguments.length > 0) {
            if (arguments[1] == "webform") {
                $(".globalstatecode").html(this._val)
            } else {
                $(".za-globalstate-signup").html(this._val)
            }
        }
        return this._val
    },
    countrypop: function(e) {
        this._data = "";
        this.arr = customvar.countries;
        for (var a = 0; a < customvar.countries[0].length; a++) {
            if (e == "dial") {
                this._data += '<option value="' + this.arr[1][a] + '" dialling_code="' + this.arr[2][a] + '">' + this.arr[0][a] + " (+" + this.arr[2][a] + ")</option>"
            } else {
                this._val = "0";
                customvar.optinArr.indexOf(this.arr[1][a]) > -1 ? this._val = "2" : customvar.optoutArr.indexOf(this.arr[1][a]) > -1 ? this._val = "2" : customvar.doubleoptinArr.indexOf(this.arr[1][a]) > -1 ? this._val = "3" : "";
                this._data += '<option value="' + this.arr[1][a] + '" newsletter_mode="' + this._val + '">' + this.arr[0][a] + "</option>"
            }
        }
        setTimeout(function() {
            if (typeof CountryCode != "undefined") {
                if ($(".globalcountrycode-signup").length > 0) {
                    $(".globalcountrycode-signup").val(CountryCode)
                }
            }
            var a = 0;
            var t = setInterval(function() {
                if ($(".dc-info").length > 0 && $(".za-state-container").length < 1) {
                    clearInterval(t);
                    if (stateupdate.indexOf(customvar.productName) > -1) {
                        $(".dc-info").after('<div class="za-state-container zhide-common"><span class="zdd-downarrow zdd-state"></span><select aria-label="Change the State" class="za-globalstate-signup" name="country_state">' + customvar.stateadd() + "</select></div>")
                    } else {
                        this._val = "";
                        for (var e = 0; e < customvar.usstates.length; e++) {
                            this._val += '<option value="' + customvar.usstates[e].toLowerCase() + '">' + customvar.usstates[e] + "</option>"
                        }
                        $(".dc-info").after('<div class="za-state-container za-country_state-container zhide-common"><span class="zdd-downarrow zdd-state"></span><select aria-label="Change the State" class="za-globalstate-signup" name="country_state">' + this._val + "</select></div>")
                    }
                    if (CountryCode == "US" || CountryCode == "IN" && stateupdate.indexOf(customvar.productName) > -1) {
                        if (customvar.showchangecountry == "true") {
                            $(".za-state-container").removeClass("zhide-common").addClass("zshow-common")
                        }
                        if (CountryCode == "US") {
                            $(".za-globalstate-signup option").eq(0).remove();
                            $(".za-globalstate-signup").val($(".za-globalstate-signup option").eq(0).val())
                        }
                    }
                    customvar.privacypolicylink(true)
                }
                if (a > 25) {
                    clearInterval(t)
                }
                a++
            }, 1e3)
        }, 100);
        return this._data
    },
    unique: function(e) {
        var t = [];
        $.each(e, function(e, a) {
            if ($.inArray(a, t) == -1)
                t.push(a)
        });
        return t
    },
    mydevice: function() {
        return navigator.userAgent.indexOf("Android") > -1 && navigator.userAgent.indexOf("Mobile") > -1 ? "Mobile - Android" : navigator.userAgent.indexOf("Android") > -1 && -1 === navigator.userAgent.indexOf("Mobile") ? "Tablet - Android" : navigator.userAgent.indexOf("iPad") > -1 ? "Tablet - iPad" : navigator.userAgent.indexOf("iPhone") > -1 ? "Mobile - iPhone" : /webOS|iPod|BlackBerry|IEMobile|MeeGo|Opera Mini/i.test(navigator.userAgent) ? "Mobile" : "Desktop"
    },
    dcreset: function() {
        var e = customvar.dcObj;
        customvar.noteuinarr = [];
        customvar.domainArr = [[], [], []];
        dcdomainOne = "com";
        if (Zdomain == "local" + "zoho") {
            onlycom = true
        } else {
            for (var a in e) {
                customvar.domainArr[0].push(e[a].domain);
                customvar.domainArr[2].push(e[a].accountsDomain);
                customvar.noteuinarr.push(e[a].notavailable);
                if (typeof e[a].countries != "undefind") {
                    if (e[a].countries.indexOf(CountryCode) > -1) {
                        if (e[a].notavailable.indexOf(customvar.productName) > -1) {
                            dcdomainOne = domainOne;
                            onlycom = true
                        } else {
                            dcdomainOne = e[a].domain
                        }
                    }
                }
            }
            customvar.zDomainHandling()
        }
    },
    dcselected: function(e) {
        if (e == "US" || e == "IN" && stateupdate.indexOf(customvar.productName) > -1) {
            if ($(".za-globalstate-signup").length > 0) {
                if ($(".za-globalstate-signup option").eq(0).val() == "" || $(".za-globalstate-signup option").eq(0).val() == "select your state") {
                    if (e == "US") {
                        $(".za-globalstate-signup option").eq(0).remove()
                    }
                }
            }
            setTimeout(function() {
                if (typeof RegionName != "undefined") {
                    if ($(".za-globalstate-signup").length > 0) {
                        if (e == "US") {
                            $(".za-globalstate-signup").val(RegionName.toLowerCase())
                        }
                        if ($(".za-globalstate-signup").val() == null) {
                            $(".za-globalstate-signup").val($(".za-globalstate-signup option").eq(0).val())
                        }
                    }
                }
                if (customvar.showchangecountry == "true") {
                    $(".za-state-container").removeClass("zhide-common").addClass("zshow-common")
                }
            }, 300)
        } else {
            if ($(".za-globalstate-signup").length > 0) {
                if ($(".za-globalstate-signup option").eq(0).val() != "") {
                    $(".za-globalstate-signup").prepend('<option value=""></option>')
                }
            }
            $(".za-state-container").removeClass("zshow-common").addClass("zhide-common")
        }
        if (productName == "analytics") {
            if ($(".globalcountrycode").length > 0) {
                var a = [];
                for (var t = 0; t < $(".globalcountrycode").length; t++) {
                    a[t] = $(".globalcountrycode").eq(t).val()
                }
                setTimeout(function() {
                    for (var e = 0; e < $(".globalcountrycode").length; e++) {
                        $(".globalcountrycode").eq(e).val(a[e])
                    }
                }, 500)
            }
            if ($(".globalstatecode").length > 0) {
                var o = [];
                for (var t = 0; t < $(".globalstatecode").length; t++) {
                    o[t] = $(".globalstatecode").eq(t).val()
                }
                setTimeout(function() {
                    for (var e = 0; e < $(".globalstatecode").length; e++) {
                        $(".globalstatecode").eq(e).val(o[e])
                    }
                }, 500)
            }
        }
        if ($(".za-globalstate-signup").length > 0) {
            if ($(".zrlink").length > 0 && e == "US") {
                if ($(".za-globalstate-signup").val().toLowerCase() == "california") {
                    if (customvar.productName == "identity-management" || customvar.productName == "log360-cloud" || customvar.productName == "MobileDeviceManagement" || customvar.productName == "patchmanagerplus") {
                        $(".zrlink").attr("href", "https://www.manageengine.com/us-ca/privacy.html")
                    } else {
                        $(".zrlink").attr("href", "https://www.zoho.com/us-ca/privacy.html")
                    }
                } else {
                    if (customvar.productName == "identity-management" || customvar.productName == "log360-cloud" || customvar.productName == "MobileDeviceManagement" || customvar.productName == "patchmanagerplus") {
                        $(".zrlink").attr("href", "https://ondemand.manageengine.com/privacy.html")
                    } else {
                        $(".zrlink").attr("href", "https://www.zoho.com/privacy.html")
                    }
                }
            }
        }
        if ($("body").hasClass("zcstrip")) {
            $("body").removeClass("zcstrip")
        }
        var n = customvar.dcObj;
        dcdomainOne = "com";
        for (var r in n) {
            if (typeof n[r].countries != "undefind") {
                if (n[r].countries.indexOf(e) > -1) {
                    if (n[r].notavailable.indexOf(customvar.productName) > -1) {
                        dcdomainOne = domainOne;
                        onlycom = true
                    } else {
                        dcdomainOne = n[r].domain
                    }
                }
            }
        }
    },
    dctext: function() {
        var e = "US";
        var a = customvar.dcObj;
        for (var t in a) {
            if (typeof a[t].countries != "undefind") {
                if (a[t].countries.indexOf(CountryCode) > -1) {
                    e = a[t].dctext
                }
            }
        }
        if (typeof dcenabled == "boolean") {
            if (!dcenabled) {
                e = dcdomainOne == "com" ? "US" : a[dcdomainOne].dctext
            }
        }
        if (onlycom) {
            e = "US"
        }
        return e
    },
    dccountry: function() {
        var e = "US"
          , a = customvar.alink.split("/register/script")[1];
        customvar.zDomainHandling();
        customvar.alink = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script" + a;
        if (customvar.outproduct.indexOf(customvar.productName) > -1) {
            customvar.alink = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script" + a
        }
        e = dcdomainOne == "com" ? "US" : customvar.dcObj[dcdomainOne].dctext;
        return e
    },
    getGlobalCookie: function(e) {
        try {
            for (var a = e + "=", t = decodeURIComponent(document.cookie).split(";"), o = 0; o < t.length; o++) {
                for (var n = t[o]; " " == n.charAt(0); )
                    n = n.substring(1);
                if (0 == n.indexOf(a))
                    return n.substring(a.length, n.length)
            }
            return ""
        } catch (e) {
            return ""
        }
    },
    removequots: function(e) {
        if (typeof e != "undefined") {
            if (e.split('"').length > 1) {
                return e.split('"')[1]
            } else {
                return e
            }
        } else {
            return ""
        }
    },
    expiryDateCheck: function(e, a) {
        var t = new Date;
        var o = e.split("/").map(Number);
        var n = a.split("/").map(Number);
        var r = new Date(t.getFullYear(),t.getMonth(),t.getDate());
        var i = new Date(o[2],o[1] - 1,o[0]);
        var s = new Date(n[2],n[1] - 1,n[0]);
        return r >= i && r <= s
    },
    getddmmyyyy: function() {
        var e = new Date
          , a = e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
        return a
    },
    nextddmmyyyy: function(e) {
        var a = new Date((new Date).getTime() + e * 24 * 60 * 60 * 1e3)
          , t = a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear();
        return t
    },
    dynamicLinks: function(e) {
        for (b in e) {
            for (c in e[b]) {
                var a = e[b][c];
                a.indexOf("au.au") > 0 ? a = a.split("au.au").join("au") : "";
                b == "href" ? $(c).attr("href", a) : b == "html" ? $(c).html(a) : b == "val" ? $(c).val(a) : "";
                if (c.indexOf(".act-btn.cta-btn") > -1) {
                    if (b == "href") {
                        $(".zgh-userAccess a, .loggedin-userinfo .access-apps, .z-bottom-cta-menu  .loggedin").attr("href", a)
                    } else if (b == "html") {
                        $(".zgh-userAccess a, .loggedin-userinfo .access-apps, .z-bottom-cta-menu  .loggedin").html(a)
                    }
                }
                if (b == "href") {
                    if ($(".zwelcome-info .zlogin-apps").length > 0) {
                        if (c == ".zgh-login") {
                            $(".zwelcome-info .zlogin-apps").attr("href", a)
                        }
                    }
                }
            }
        }
        if (typeof hidelogin != "undefined") {
            if (hidelogin == "1") {
                $(".zgh-userPanel .zgh-userAccess").hide()
            }
        }
    },
    dcbasedimage: function() {
        if (myimagebool) {
            mybool = 0;
            if (dcdomainOne != "com") {
                if ($(".dc-image").length > 0) {
                    $(".dc-image").each(function() {
                        if (typeof $(this).attr("dc-source") != "undefined") {
                            var e = dcdomainOne;
                            e == "com.au" ? e = "au" : "";
                            if ($(this).attr("dc-source").split(",").indexOf(e) > -1) {
                                var a = $(this).attr("src").split($(this).attr("fname")).join($(this).attr("fname") + "-" + e);
                                $(this).attr("src", a);
                                if (typeof $(this).attr("srcset") != "undefined") {
                                    var t = $(this).attr("srcset").split($(this).attr("fname")).join($(this).attr("fname") + "-" + e);
                                    $(this).attr("srcset", t)
                                }
                            }
                        }
                    })
                }
            }
        }
    },
    langsrcremove: function() {
        if (currentUrlLang) {
            $(".nonlang").each(function() {
                if (typeof currentUrlLang != "undefined") {
                    if ($(this).attr("href").indexOf("/" + currentUrlLang + "/") > -1) {
                        var e = $(this).attr("href").split("/" + currentUrlLang + "/").join("/");
                        $(this).attr({
                            href: e,
                            target: "_blank"
                        })
                    }
                }
            })
        }
    },
    debouncer: function(t, o) {
        var n, o = o || 200;
        return function() {
            var e = this
              , a = arguments;
            clearTimeout(n);
            n = setTimeout(function() {
                t.apply(e, Array.prototype.slice.call(a))
            }, o)
        }
    },
    loadlangxml: function() {
        var e = new XMLHttpRequest
          , a = customvar.productName == "home" ? "" : customvar.productName == "zohopartners" ? "partners/" : customvar.productName + "/";
        e.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var e = "https://www.zoho.com" + window.location.pathname;
                var a = [[], [], []];
                if (customvar.productName == "community") {
                    e = "https://community.zoho.com" + window.location.pathname;
                    if (window.location.pathname == "/community/" && window.location.host == _preZ) {
                        e = "https://community.zoho.com/"
                    }
                } else if (customvar.productName == "zohobigin") {
                    e = "https://www.bigin.com" + window.location.pathname
                } else if (customvar.productName == "trainercentral") {
                    e = window.location.hostname + window.location.pathname
                }
                if (e.indexOf("index") > 0 && e.indexOf("index1") < 0) {
                    e = e.split("index")[0]
                }
                if (this.responseText.split(e + "</loc>").length > 1) {
                    var t = this.responseText.split(e + "</loc>")[1].split("</url>")[0];
                    var o = "English";
                    currentUrlLang != "" ? _val = lancountry[currentUrlLang] : "";
                    t = t.split("<xhtml:link");
                    for (var n = 0; n < t.length; n++) {
                        if (typeof t[n].split('href="')[1] != "undefined") {
                            a[0].push(t[n].split('href="')[1].split('"')[0]);
                            var r = t[n].split('hreflang="')[1].split('"')[0];
                            "es-419" == r || "es" == r ? a[1].push("es-xl") : "en-au" == r ? a[1].push("en-au") : "x-default" == r ? a[1].push("en") : "ja" == r ? a[1].push("jp") : a[1].push(r);
                            o = lancountry[a[1][n - 1]];
                            a[2].push(o)
                        }
                    }
                }
                var i = [[], [], []];
                for (var n = 0; n < langArr.length; n++) {
                    var s = a[1].indexOf(langArr[n]);
                    if (s > -1) {
                        i[0].push(a[0][s]);
                        i[1].push(a[1][s]);
                        i[2].push(a[2][s])
                    }
                }
                if (i[0].length > 0) {
                    if ($("body").hasClass("i18n-zh-hans") && i[1].indexOf("zh-hans") < 0) {
                        i[0].push(i[0][i[1].indexOf("en")].split(".com").join(".com.cn"));
                        i[1].push("zh-hans");
                        i[2].push(lancountry["zh-hans"])
                    }
                }
                var l = location.search.indexOf("?") > -1 ? "&" : "?";
                var c = location.search.indexOf("zredirect=f") < 0 ? location.search + l + "zredirect=f&zsrc=langdropdown" : location.search;
                var u = localUrlLang != "" && a[1].indexOf(localUrlLang) > -1;
                if (u) {
                    if (typeof lancountry[localUrlLang] != "undefined") {
                        $(".zgh-localSelect").html(lancountry[localUrlLang]);
                        if (i[2].indexOf("English") > -1) {
                            i[2][i[2].indexOf("English")] = "English (Global)"
                        }
                    }
                }
                for (var n = 0; n < i[0].length; n++) {
                    if (predomain && _lhref.includes(_preZ + "/index-new1.html")) {
                        var d = currentUrlLang == "" ? "en" : currentUrlLang;
                        var m = i[1][n] == "en" ? c + "&lb=" + currentUrlLang : c;
                        var p = window.location.origin + "/" + i[0][n].split("zoho.com/")[1] + m;
                        if (i[1][n] == "zh-hans") {
                            p = i[0][n] + m
                        }
                        if (customvar.outproduct.indexOf(customvar.productName) > -1) {
                            if (window.location.host.includes("prewww")) {
                                p = window.location.origin + "/" + i[0][n].split(window.location.host.split("pre").join("") + "/")[1] + m
                            } else {
                                p = window.location.origin + "/" + i[0][n].split(window.location.host + "/")[1] + m
                            }
                        }
                        if (i[1][n] == d) {
                            $(".zgh-localBox ul").append('<li class="activeURL-lang languageDropdown-' + i[1][n] + '"><a class="nonlang-ld" data-lang="' + i[1][n] + '" href="' + p + '">' + i[2][n] + "</a></li>")
                        } else {
                            $(".zgh-localBox ul").append('<li class="languageDropdown-' + i[1][n] + '"><a class="nonlang-ld" data-lang="' + i[1][n] + '" href="' + p + '">' + i[2][n] + "</a></li>")
                        }
                    } else {
                        if ((currentUrlLang == "" && i[1][n] != "en" || u || currentUrlLang != "") && i[1][n] != currentUrlLang) {
                            var m = i[1][n] == "en" ? c + "&lb=" + currentUrlLang : c;
                            var p = window.location.origin + "/" + i[0][n].split("zoho.com/")[1] + m;
                            if (i[1][n] == "zh-hans") {
                                p = i[0][n] + m
                            }
                            if (customvar.outproduct.indexOf(customvar.productName) > -1) {
                                if (window.location.host.includes("prewww")) {
                                    p = window.location.origin + "/" + i[0][n].split(window.location.host.split("pre").join("") + "/")[1] + m
                                } else {
                                    p = window.location.origin + "/" + i[0][n].split(window.location.host + "/")[1] + m
                                }
                            }
                            $(".zgh-localBox ul").append('<li class="languageDropdown-' + i[1][n] + '"><a class="nonlang-ld" data-lang="' + i[1][n] + '" href="' + p + '">' + i[2][n] + "</a></li>")
                        }
                    }
                }
                if (i[1].length < 1 || window.innerWidth < 1199) {
                    $(".zgh-localization").hide()
                } else {
                    $(".zgh-localization").show()
                }
                $(".header .zgh-localBox ul li").length == 1 ? $(".header .zgh-localBox").addClass("localBox-single") : "";
                detectedLangNew = i[1];
                if (typeof CountryCode != "undefined") {
                    if (domainOne != "in") {
                        if (customvar.productName !== "startups") {
                            if (global_getUrlParam("zc_localredirection") === "") {
                                langStrip()
                            } else {
                                newLangStrip()
                            }
                        }
                    }
                    if (customvar.countryEu.indexOf(CountryCode) > -1) {}
                }
            }
        }
        ;
        e.overrideMimeType("text/xml");
        var t = window.location.pathname.split("/help/").length > 1 ? "help/" : "";
        if (!(customvar.productName == "mail" || customvar.productName == "zeptomail")) {
            t = ""
        }
        if (window.location.host == _preZ) {
            if (customvar.productName == "community") {
                e.open("GET", "https://" + _preZ + "/" + a + t + "sitemap.xml", true)
            } else if (customvar.productName == "crmplus") {
                e.open("GET", window.location.origin + "/crm/" + a + t + "sitemap.xml", true)
            } else {
                e.open("GET", "https://" + _preZ + "/" + a + t + "sitemap.xml", true)
            }
        } else if (customvar.productName == "crmplus") {
            e.open("GET", window.location.origin + "/crm/" + a + t + "sitemap.xml", true)
        } else if (window.location.host.indexOf("zohoflow") > 0) {
            e.open("GET", window.location.origin + "/apps/sitemap.xml", true)
        } else if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
            if (customvar.productName == "community" || customvar.productName == "zohobigin") {
                a = ""
            }
            if (window.location.origin.indexOf("orchestly") > 0 || window.location.origin.indexOf("trainercentral") > 0 || window.location.origin.indexOf("catalyst") > 0) {
                e.open("GET", "https://www.zoho.com/" + a + t + "sitemap.xml", true)
            } else {
                e.open("GET", window.location.origin + "/" + a + t + "sitemap.xml", true)
            }
        } else {
            e.open("GET", window.location.origin + "/" + a + t + "sitemap.xml", true)
        }
        e.send()
    },
    vimovid: function() {
        var i = $(".zcpopup-controller, .popup-controller");
        if ($("#zc-vimid").length < 1) {
            var e = document.createElement("script");
            e.id = "zc-vimid";
            e.src = "https://player.vimeo.com/api/player.js";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(e, a)
        }
        if (CountryCode == "ID") {
            var t;
            if (window.location.hostname == _preZ) {
                t = "https://" + _preZ + "/sites/zweb/json/yv.json"
            } else {
                t = "https://www.zoho.com/sites/zweb/json/yv.json"
            }
            $.getScript(t, function(e) {
                for (var a = 0; a < i.length; a++) {
                    var t = i.eq(a);
                    if (typeof i.eq(a).attr("data-video") != "undefined") {
                        if (i.eq(a).attr("data-video").indexOf("vimeo") > -1) {
                            var o = t.attr("data-video").split("/")[t.attr("data-video").split("/").length - 1].split("?")[0];
                            var n = JSON.parse(e).find(function(e) {
                                if (e.v == o) {
                                    return e
                                }
                            });
                            if (n && (n.i || n.y)) {
                                var r = "https://www." + "y" + "o" + "u" + "t" + "u" + "b" + "e" + "-nocookie.com/embed/";
                                if (n.i) {
                                    r = r + n.i
                                } else if (n.y) {
                                    r = r + n.y
                                }
                                t.attr("data-video", r);
                                t.addClass("nonvimvideo").removeClass("zcpopup-controller").removeClass("popup-controller")
                            } else {
                                t.addClass("vimvideo").removeClass("zcpopup-controller").removeClass("popup-controller")
                            }
                        }
                    }
                }
            })
        } else {
            for (var o = 0; o < i.length; o++) {
                if (typeof i.eq(o).attr("data-video") != "undefined") {
                    if (i.eq(o).attr("data-video").indexOf("vimeo") > -1) {
                        i.eq(o).addClass("vimvideo").removeClass("zcpopup-controller").removeClass("popup-controller")
                    } else {
                        i.eq(o).addClass("nonvimvideo").removeClass("zcpopup-controller").removeClass("popup-controller")
                    }
                }
            }
        }
    },
    refval: function() {
        return "ref_value=" + encodeURIComponent(customvar.czms() + "," + customvar.czmr() + "," + customvar.cuid() + "," + customvar.mydevice() + "," + _lhref)
    },
    tlscall: function() {
        var e = _lhref.indexOf("zgs=1") < 0;
        if (e) {
            $.getJSON("https://tlstest.zoho." + _com + "/api", function(e) {
                if (e.status != "200") {
                    $(".ztopstrip-container").prepend('<div class="tls-infostrip"> <p>' + Drupal.t("Your browser is out of date and does not currently support TLS 1.2. For your security, please update your browser or operating system to the latest version to regain access to Zoho Services.") + '<a target="_blank" href="https://www.zoho.' + domainOne + '/general/blog/end-of-support-for-older-tls-versions-in-zoho.html">More information</a></p> <span class="zclosestrip tlsClose">X</span></div>');
                    $(".zclosestrip.tlsClose").on("click", function() {
                        $(".tls-infostrip").remove()
                    })
                }
            })
        }
    },
    zChaSupIDByReg: function() {
        var e = [["mail", "support@zohomail.com", "support@eu.zohomail.com"], ["workplace", "support@zohoworkplace.com", "support@eu.zohoworkplace.com"]];
        for (var a = 0; a < e.length; a++) {
            if (e[a][0] == customvar.productName) {
                if (dcdomainOne == "eu") {
                    getZPrdSupportID = $('a[href="mailto:' + e[a][1] + '"]');
                    for (b = 0; b < getZPrdSupportID.length; b++) {
                        var t = $(getZPrdSupportID[b]);
                        if (t.attr("href") == "mailto:" + e[a][1] + "") {
                            t.attr("href", "mailto:" + e[a][2] + "")
                        }
                        if (t.text() == "" + e[a][1] + "") {
                            t.text(e[a][2])
                        }
                    }
                }
            }
        }
    },
    findMailToReplace: function(e) {
        if ($('a[href="mailto:' + e.global + '"]').length > 0 && typeof e[dcdomainOne] != "undefined") {
            $('a[href="mailto:' + e.global + '"]').html(e[dcdomainOne]);
            $('a[href="mailto:' + e.global + '"]').attr("href", "mailto:" + e[dcdomainOne])
        }
    },
    dcadded: function(t) {
        if (t) {
            const a = ["com.au"];
            for (var e = 0; e < customvar.domainArr[0].length; e++) {
                a.push(customvar.domainArr[0][e])
            }
            a.push("au");
            const o = Array.from(new Set(a));
            const n = ["www.zoho.com", _preZ, _lz + ".com", _prewww + ".zoho.com", "catalyst.zoho.com", "catalyst.zoho.eu"];
            n.forEach(function(e, a) {
                t = t.replace(new RegExp(e.replace(/\./g, "\\."),"g"), "--ignore-domain--" + a)
            });
            if (dcdomainOne === "ca") {
                t = t.replace(new RegExp("zoho\\.","g"), Zdomain + ".")
            } else {
                t = t.replace(new RegExp("zohocloud\\.","g"), Zdomain + ".")
            }
            o.forEach(function(e) {
                t = t.replace(new RegExp(Zdomain + "." + e,"g"), Zdomain + "." + dcdomainOne)
            });
            n.forEach(function(e, a) {
                t = t.replace(new RegExp("--ignore-domain--" + a,"g"), e)
            });
            t = t.replace(new RegExp("\\.au\\.au","g"), ".au");
            if (dcdomainOne !== "com.au") {
                t = t.replace(new RegExp("com\\.au","g"), "com")
            }
            return t
        }
        return t
    },
    comp_disclaimer: function() {
        if ($(".zcomp-disclaimer").length > 0) {
            if ($(".zcomp-disclaimer").attr("data-pricingvalue")) {
                var e = Drupal.t("All names and marks mentioned here remain the property of their original owners. Details are as published by the named competitors on their website(s) on") + " " + $(".zcomp-disclaimer").attr("data-disclaimer-date") + " " + Drupal.t("and are subject to change without notice. The details provided on this page are for general purposes only and cannot be considered as authorized information from the respective competitors. Zoho disclaims any liability for possible errors, omissions, or consequential losses based on the details here.");
                $(".zcomp-disclaimer").html(e)
            } else {
                var e = Drupal.t("All names and marks mentioned here remain the property of their original owners. Prices are as published by the named competitors on their website(s) as on") + " " + $(".zcomp-disclaimer").attr("data-disclaimer-date") + " " + Drupal.t("(without taking into account the taxes or discounts), and are subject to change based on the pricing policies of the competitors. The details provided on this page are for general purposes only and cannot be considered as authorized information from the respective competitors. Zoho disclaims any liability for possible errors, omissions, or consequential losses based on the details here.");
                $(".zcomp-disclaimer").html(e)
            }
        }
    },
    browserversion: function() {
        var e = navigator.userAgent, a, t = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(t[1])) {
            a = /\brv[ :]+(\d+)/g.exec(e) || [];
            return "IE " + (a[1] || "")
        }
        if (t[1] === "Chrome") {
            a = e.match(/\b(OPR|Edge)\/(\d+)/);
            if (a != null)
                return a.slice(1).join(" ").replace("OPR", "Opera")
        }
        t = t[2] ? [t[1], t[2]] : [navigator.appName, navigator.appVersion, "-?"];
        if ((a = e.match(/version\/(\d+)/i)) != null)
            t.splice(1, 1, a[1]);
        return t.join(" ")
    }(),
    getOS: navigator.sayswho = function() {
        var e = window.navigator.userAgent
          , a = window.navigator.platform
          , t = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"]
          , o = ["Win32", "Win64", "Windows", "WinCE"]
          , n = ["iPhone", "iPad", "iPod"]
          , r = null;
        if (t.indexOf(a) !== -1) {
            r = "Mac"
        } else if (n.indexOf(a) !== -1) {
            r = "iOS"
        } else if (o.indexOf(a) !== -1) {
            r = "Windows"
        } else if (/Android/.test(e)) {
            r = "Android"
        } else if (!r && /Linux/.test(a)) {
            r = "Linux"
        }
        return r
    }()
};
customvar.zwc_setnewFooter = function() {
    if (currentUrlLang == "jp") {
        if ($(".zw-support-mail-links").length > 0) {
            if (typeof customvar.supportId != "undefined") {
                $(".zw-support-mail-links").append('<a id="zf-support-mailid" href="mailto:' + customvar.supportId() + '">' + customvar.supportId() + "</a>")
            } else {
                $(".zw-support-mail-links").append('<a id="zf-support-mailid" href="mailto:support@zoho.com">support@zoho.com</a>')
            }
        }
    }
}
;
customvar.dcObj = {
    us: {
        domain: "com",
        accountsDomain: "zoho.com",
        countries: [],
        notavailable: "",
        dctext: "US"
    },
    in: {
        domain: "in",
        accountsDomain: "zoho.in",
        countries: ["IN"],
        notavailable: ["kanaa", "contactmanager", "rpa", "identity-management", "iot", "log360-cloud", "it-management", "shifts", "voice", "pilot", "qengine", "commandcenter", "zakya", "eprotect", "start", "kepto"],
        dctext: "India"
    },
    eu: {
        domain: "eu",
        accountsDomain: "zoho.eu",
        countries: customvar.countryEu,
        notavailable: ["kanaa", "identity-management", "rpa", "it-management", "pilot", "commandcenter", "eprotect", "start", "tables", "kepto", "publish"],
        dctext: "EU"
    },
    "com.au": {
        domain: "com.au",
        accountsDomain: "zoho.com.au",
        countries: customvar.countryTranstasman,
        notavailable: ["kanaa", "contactmanager", "rpa", "identity-management", "iot", "log360-cloud", "it-management", "voice", "pilot", "qengine", "commandcenter", "zakya", "eprotect", "start", "tables", "kepto"],
        dctext: "Australia"
    },
    jp: {
        domain: "jp",
        accountsDomain: "zoho.jp",
        countries: ["JP"],
        notavailable: ["kanaa", "shifts", "rpa", "voice", "iot", "catalyst", "commandcenter", "zakya", "fsm", "thrive", "eprotect", "pilot", "qengine", "start", "tables", "kepto", "log360-cloud", "publish"],
        dctext: "Japan"
    },
    ca: {
        domain: "ca",
        accountsDomain: "zohocloud.ca",
        countries: ["CA"],
        notavailable: ["kanaa", "rpa", "iot", "voice", "lens", "docscanner", "directory", "backtowork", "apptics", "remotely", "deluge", "peopleplus", "workerly", "dataprep", "workplace", "bugtracker", "webinar", "salesinbox", "motivator", "commandcenter", "telephony", "it-management", "remoteaccessplus", "patchmanagerplus", "endpoint-central", "eprotect", "researchstudio", "officeplatform", "log360-cloud", "officeplus", "qengine", "contacts", "datagrid", "start", "tables", "showtime", "zillum", "zakya"],
        dctext: "Canada"
    },
    sa: {
        domain: "sa",
        accountsDomain: "zoho.sa",
        countries: ["SA"],
        notavailable: ["backtowork", "kanaa", "trainercentral", "marketplace", "voice", "remotely", "contracts", "peopleplus", "iot", "sign", "log360-cloud", "trident", "officeplus", "qengine", "datagrid", "start", "tables", "catalyst", "rpa", "showtime", "zakya", "researchstudio", "zillum"],
        dctext: "Saudi Arabia"
    }
};
if (predomain) {
    customvar.dcObj["ca"]["notavailable"] = customvar.dcObj["ca"]["notavailable"].filter(function(e) {
        return e != "workerly"
    });
    customvar.dcObj["ca"]["notavailable"] = customvar.dcObj["ca"]["notavailable"].filter(function(e) {
        return e != "developer"
    });
    customvar.dcObj["sa"]["notavailable"] = customvar.dcObj["sa"]["notavailable"].filter(function(e) {
        return e != "developer"
    })
}
customvar.browser = customvar.browserversion.split(" ")[0].toLowerCase();
customvar.bversion = customvar.browserversion.split(" ")[1].toLowerCase();
customvar.myOs = customvar.getOS.toLowerCase();
customvar.comp_disclaimer();
customvar.findproduct = function() {
    if (knowprd) {
        customvar.productName = document.getElementsByTagName("body")[0].getAttribute("data-prdname").replace(/ /g, "");
        "zohogeneralpages" == customvar.productName ? customvar.productName = "home" : "orchestly" == customvar.productName ? customvar.productName = "zohoorchestly" : "itmanagement" == customvar.productName ? customvar.productName = "it-management" : "log360cloud" == customvar.productName ? customvar.productName = "log360-cloud" : "itanalytics" == customvar.productName ? customvar.productName = "it-analytics" : ""
    }
    if (customvar.productName == "zoho_general_pages") {
        customvar.productName = "home"
    }
    window.location.host.indexOf("zoho") < 0 || window.location.host.indexOf("catalyst") > -1 || window.location.host.indexOf("zohoflow") > -1 || window.location.host.indexOf("zohocrm") > -1 || window.location.host.indexOf("community") > -1 ? customvar.outproduct.push(customvar.productName) : ""
}();
if (predomain) {
    customvar.newFooterProducts = customvar.newFooterProducts.concat(["sites", "assist", "vault"])
}
var _livelink = "";
if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
    _livelink = "https://www.zoho.com"
}
var refound = currentUrlLang == "jp" ? refound = "<li><a href='//www.zoho.com/jp/refund.html'>&#12458;&#12531;&#12521;&#12452;&#12531;&#27770;&#28168;&#24460;&#12398;&#12461;&#12515;&#12531;&#12475;&#12523;&#12395;&#12388;&#12356;&#12390;</a></li>" : "";
if (currentUrlLang == "de") {
    refound = '<li><a href="' + _livelink + langsrc + 'impressum.html">Impressum</a></li>'
}
var czone_footer = '<div class="common-links"><ul class=ZPprivacy> <li><a href="' + _livelink + langsrc + '">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + _livelink + langsrc + 'contactus.html">' + Drupal.t("Contact Us") + '</a></li><li><a href="' + _livelink + langsrc + 'security.html">' + Drupal.t("Security") + '</a></li> <li><a class="footer-compliance" href="' + _livelink + langsrc + 'compliance.html">' + Drupal.t("Compliance") + '</a></li><li><a href="' + _livelink + langsrc + 'ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + _livelink + langsrc + 'policy.html"> ' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + _livelink + langsrc + 'terms.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + _livelink + langsrc + 'privacy.html">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li><a href="' + _livelink + '/gdpr.html" class="gdprc">' + Drupal.t("GDPR Compliance") + '</a></li><li><a href="' + _livelink + langsrc + 'abuse-policy/">' + Drupal.t("Abuse Policy") + "</a></li>" + refound + "</ul></div>";
if (currentUrlLang == "es-xl") {
    czone_footer = '<div class="common-links"><ul class=ZPprivacy> <li><a href="' + _livelink + langsrc + '">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + _livelink + langsrc + 'contactus.html">' + Drupal.t("Contact Us") + '</a></li><li><a target="_blank" href="https://eu.zohorecruit.eu/jobs/Careers">Careers</a></li><li><a href="' + _livelink + langsrc + 'security.html">' + Drupal.t("Security") + '</a></li> <li><a class="footer-compliance" href="' + _livelink + langsrc + 'compliance.html">' + Drupal.t("Compliance") + '</a></li><li><a href="' + _livelink + langsrc + 'ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + _livelink + langsrc + 'policy.html"> ' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + _livelink + langsrc + 'terms.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + _livelink + langsrc + 'privacy.html">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li><a href="' + _livelink + '/gdpr.html" class="gdprc">' + Drupal.t("GDPR Compliance") + '</a></li><li><a href="' + _livelink + langsrc + 'abuse-policy/">' + Drupal.t("Abuse Policy") + "</a></li>" + refound + "</ul></div>"
}
if (customvar.newFooterProducts.includes(customvar.productName)) {
    czone_footer = '<div class="common-links"><div class="zw-footer-search-lang-block"></div><ul class=ZPprivacy> <li><a href="' + _livelink + langsrc + '">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + _livelink + langsrc + 'contactus.html">' + Drupal.t("Contact Us") + '</a></li><li><a href="' + _livelink + langsrc + 'security.html">' + Drupal.t("Security") + '</a></li> <li><a class="footer-compliance" href="' + _livelink + langsrc + 'compliance.html">' + Drupal.t("Compliance") + '</a></li><li><a href="' + _livelink + langsrc + 'ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + _livelink + langsrc + 'policy.html"> ' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + _livelink + langsrc + 'terms.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + _livelink + langsrc + 'privacy.html">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li><a href="' + _livelink + '/gdpr.html" class="gdprc">' + Drupal.t("GDPR Compliance") + '</a></li><li><a href="' + _livelink + langsrc + 'abuse-policy/">' + Drupal.t("Abuse Policy") + "</a></li>" + refound + "</ul></div>";
    if (currentUrlLang == "es-xl") {
        czone_footer = '<div class="common-links"><div class="zw-footer-search-lang-block"></div><ul class=ZPprivacy> <li><a href="' + _livelink + langsrc + '">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + _livelink + langsrc + 'contactus.html">' + Drupal.t("Contact Us") + '</a></li><li><a target="_blank" href="https://eu.zohorecruit.eu/jobs/Careers">Careers</a></li><li><a href="' + _livelink + langsrc + 'security.html">' + Drupal.t("Security") + '</a></li> <li><a class="footer-compliance" href="' + _livelink + langsrc + 'compliance.html">' + Drupal.t("Compliance") + '</a></li><li><a href="' + _livelink + langsrc + 'ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + _livelink + langsrc + 'policy.html"> ' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + _livelink + langsrc + 'terms.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + _livelink + langsrc + 'privacy.html">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li><a href="' + _livelink + '/gdpr.html" class="gdprc">' + Drupal.t("GDPR Compliance") + '</a></li><li><a href="' + _livelink + langsrc + 'abuse-policy/">' + Drupal.t("Abuse Policy") + "</a></li>" + refound + "</ul></div>"
    }
}
$(".zw-global-footer").html(czone_footer);
if ($("body").hasClass("r-g-f") && customvar.absurl.indexOf("signup.html") < 0 && customvar.absurl.indexOf("login.html") < 0) {
    var czone_footer = '<div class="content-wrap"><ul class=ZPprivacy><li class="footer-terms"><a href="' + _livelink + langsrc + 'terms.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + _livelink + langsrc + 'privacy.html">' + Drupal.t("Privacy Policy") + "</a></ul></div>";
    if (currentUrlLang == "de") {
        czone_footer = '<div class="content-wrap"><ul class=ZPprivacy><li class="footer-terms"><a href="' + _livelink + langsrc + 'terms.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + _livelink + langsrc + 'privacy.html">' + Drupal.t("Privacy Policy") + '</a></li><li><a href="' + _livelink + langsrc + 'impressum.html">Impressum</a></li></ul></div>'
    }
    $(".zw-only-copyright").prepend(czone_footer)
}
var myAccount = Drupal.t("My Account")
  , signOut = Drupal.t("Sign Out")
  , _txtIwould = Drupal.t("Yes, I would like to receive marketing communication regarding") + ' <a href="https://www.zohocorp.com/" name="zohos" target="_blank">' + Drupal.t("Zoho&rsquo;s") + "</a> " + Drupal.t("products, services, and events from Zoho and its regional partners.")
  , czonebusiness = Drupal.t("Business")
  , czoneindividual = Drupal.t("Individual");
if (currentUrlLang == "jp") {
    _txtIwould = Drupal.t("Yes, I would like to receive marketing communication regarding") + ' <a href="https://www.zohocorp.com/" target="_blank">' + Drupal.t("Zoho") + "</a> " + Drupal.t("products, services, and events from Zoho and its regional partners.")
}
(function(e) {
    customvar.email = Drupal.t("Email"),
    customvar.eEmail = Drupal.t("Please enter your email"),
    customvar.password = Drupal.t("Password"),
    customvar.epassword = Drupal.t("Please enter your password"),
    customvar.fullName = Drupal.t("Full Name"),
    customvar.eFullName = Drupal.t("Please enter your full name"),
    customvar.companyName = Drupal.t("Company Name"),
    customvar.eCompanyName = Drupal.t("Please enter your company name"),
    customvar.phoneNumber = Drupal.t("Phone Number"),
    customvar.ePhoneNumber = Drupal.t("Please enter your phone number"),
    customvar.eValidPhoneNumber = Drupal.t("Please enter valid phone number"),
    customvar.mobileNumber = Drupal.t("Mobile Number"),
    customvar.eMobileNumber = Drupal.t("Please enter your mobile number"),
    customvar.eValidMobileNumber = Drupal.t("Please enter valid mobile number"),
    customvar.eReMobileNumber = Drupal.t("Please re-enter valid mobile number"),
    customvar.portalName = Drupal.t("Portal Name"),
    customvar.ePortalName = Drupal.t("Please enter your portal name"),
    customvar.eUserName = Drupal.t("Please enter your user name"),
    customvar.eFirstName = Drupal.t("Please enter your first name"),
    customvar.eLastName = Drupal.t("Please enter your last name"),
    customvar.vsignup = Drupal.t("Verify your sign-up"),
    customvar.enterotpmobile = Drupal.t("Enter the one-time password sent to your mobile number."),
    customvar.enterotpemail = Drupal.t("Enter the one-time password sent to your email address."),
    customvar.change = Drupal.t("Change Country"),
    customvar.changeme = Drupal.t("Change"),
    customvar.verify = Drupal.t("VERIFY"),
    customvar.enterOtp = Drupal.t("Enter OTP"),
    customvar.resentotp = Drupal.t("Resend OTP"),
    customvar.basedon = Drupal.t("based on your IP"),
    customvar.basedonip = Drupal.t("It looks like you&lsquo;re in"),
    customvar.datawillb = Drupal.t("Your data will be stored in the"),
    customvar.datacenter = Drupal.t("data center"),
    customvar.otpEle = '<span class="signupotpcontainer" style="display:none"> <div class="verifytitle">' + Drupal.t("Verify your sign-up") + '</div> <div class="verifyheader">' + Drupal.t("Enter the one-time password sent to your email address.") + '</div> <div class="otpmobile"> <span id="mobileotp"></span> <span class="change" onclick="zwc_gobacktosignup()">' + Drupal.t("Change") + '</span> </div> <span class="za-otp-container" style="display: none;"> <input type="text" class="form-input" tabindex="1" name="otp" id="otpfield" placeholder="' + Drupal.t("Enter OTP") + '" disabled="disabled"> <span onclick="resendOTP()" class="resendotp">' + Drupal.t("Resend OTP") + '</span> </span> <span class="za-submitbtn-otp"> <input type="button" tabindex="1" class="signupbtn" value="' + Drupal.t("VERIFY") + '" onclick="validateOTP()" name="otpfield"> <div class="loadingImg"></div> </span> </span>';
    customvar.eEmployeeCount = Drupal.t("Please enter your employee count");
    customvar.eCity = Drupal.t("Please enter your city");
    customvar.eDesignation = Drupal.t("Please enter your job title");
    customvar.eNumbersOnly = Drupal.t("Please enter valid number")
}
)(jQuery);
customvar.verify = Drupal.t("VERIFY");
customvar.verifying = Drupal.t("VERIFYING");
if (customvar.meaList.indexOf(CountryCode) > -1) {
    $("body").addClass("region-mea")
}
if (customvar.africaRegList.indexOf(customvar.countries[0][customvar.countries[1].indexOf(CountryCode)]) > -1) {
    $("body").addClass("region-africa")
}
customvar.bodyclass = function() {
    if (typeof CountryCode != "undefined") {
        if (customvar.countryEu.indexOf(CountryCode) > -1) {
            if (!$("body").hasClass("ccode-eucountries")) {
                var e = document.getElementsByTagName("body")[0];
                e.classList.add("ccode-eucountries")
            }
        }
    }
    if (currentUrlLang != "" && currentUrlLang != "en" || domainOne == "com.cn") {
        if (!$("body").hasClass("other-lang")) {
            var e = document.getElementsByTagName("body")[0];
            e.classList.add("other-lang")
        }
        if (!$("body").hasClass("lang-" + currentUrlLang)) {
            var e = document.getElementsByTagName("body")[0];
            if (domainOne == "com.cn") {
                e.classList.add("lang-zh-hans")
            } else {
                e.classList.add("lang-" + currentUrlLang)
            }
        }
    } else {
        if (!$("body").hasClass("lang-en")) {
            var e = document.getElementsByTagName("body")[0];
            e.classList.add("lang-en")
        }
    }
    $("body").addClass("zos-" + customvar.getOS.toLowerCase()).addClass("zb-" + customvar.browserversion.split(" ")[0].toLowerCase()).addClass("zbv-" + customvar.browserversion.split(" ")[0].toLowerCase() + "-" + customvar.browserversion.split(" ")[1].toLowerCase());
    _preZ == window.location.hostname ? customvar.sHostName = "p" : _preZC == window.location.hostname ? customvar.sHostName = "pz" : _zcmsZC == window.location.hostname && (customvar.sHostName = "z");
    if (_preZ == window.location.hostname || _preZC == window.location.hostname || _zcmsZC == window.location.hostname) {
        customvar.hostName = window.location.hostname
    }
    customvar.zmr = customvar.removequots(customvar.getGlobalCookie("ZohoMarkRef"));
    customvar.zms = customvar.removequots(customvar.getGlobalCookie("ZohoMarkSrc"));
    customvar.isEU = customvar.countryEu.indexOf(CountryCode) > -1 ? true : false;
    customvar.isAPAC = customvar.countryApac.indexOf(CountryCode) > -1 ? true : false;
    customvar.isAPAC ? $("body").addClass("ccode-apaccountries") : ""
}();
customvar.vimcall = function() {
    if (currentUrlLang == "jp" && customvar.productName == "desk") {
        if ($(".zcpopup-controller").length > 0) {
            customvar.vimovid()
        }
    } else {
        if ($(".zcpopup-controller").length > 0 || $(".popup-controller").length > 0) {
            customvar.vimovid()
        }
    }
}
;
customvar.vimcall();
$(document).on("change", ".za-globalstate-signup", function() {
    customvar.privacypolicylink(true)
});
customvar.czmr = function() {
    var e = customvar.getGlobalCookie("ZohoMarkRef");
    if (e) {
        return customvar.removequots(e)
    } else {
        return "-"
    }
}
;
customvar.czms = function() {
    var e = customvar.getGlobalCookie("ZohoMarkSrc");
    if (e) {
        return customvar.removequots(e)
    } else {
        return "-"
    }
}
;
customvar.cuid = function() {
    var e = customvar.getGlobalCookie("cookie-uid");
    if (e) {
        return customvar.removequots(e)
    } else {
        return "-"
    }
}
;
function global_getUrlParam(o) {
    var n = {}
      , r = "";
    var e = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(e, a, t) {
        n[a] = t;
        if (a == o) {
            r = t
        }
    });
    return r
}
function global_getUrlParam_sheet(e) {
    var a = "";
    a = window.location.search.substring(1);
    var t = a.split("&"), o, n;
    for (n = 0; n < t.length; n++) {
        o = t[n].split("=");
        if (o[0] === e) {
            return o[1] === undefined ? true : o[1]
        }
    }
    return ""
}
var countryEu = customvar.countryEu;
if (customvar.pathname.indexOf("creator/developers/signup.html") > 0 || customvar.absurl.indexOf("creator/payroll") > 0) {
    customvar.noteuinarr[0].push("creator");
    customvar.noteuinarr[1].push("creator");
    customvar.noteuinarr[2].push("creator");
    customvar.noteuinarr[3].push("creator");
    customvar.noteuinarr[4].push("creator");
    customvar.dcObj["in"].notavailable.push("creator");
    customvar.dcObj["eu"].notavailable.push("creator");
    customvar.dcObj["com.au"].notavailable.push("creator");
    customvar.dcObj["jp"].notavailable.push("creator");
    customvar.dcObj["ca"].notavailable.push("creator");
    customvar.dcObj["sa"].notavailable.push("creator")
}
if (customvar.absurl.indexOf("creator/procurement") > 0) {
    customvar.noteuinarr[1].push("creator");
    customvar.noteuinarr[2].push("creator");
    customvar.noteuinarr[3].push("creator");
    customvar.noteuinarr[4].push("creator");
    customvar.dcObj["eu"].notavailable.push("creator");
    customvar.dcObj["com.au"].notavailable.push("creator");
    customvar.dcObj["jp"].notavailable.push("creator");
    customvar.dcObj["ca"].notavailable.push("creator");
    customvar.dcObj["sa"].notavailable.push("creator")
}
if (dcenabled) {
    customvar.dcreset()
}
if (currentUrlLang == "jp") {
    if ($("body").hasClass("r-g-f") && customvar.absurl.indexOf("signup.html") < 0 && customvar.absurl.indexOf("login.html") < 0 && !customvar.absurl.endsWith("/signup/")) {
        $(".zw-only-copyright .content-wrap").append("<p>&copy; " + currentYear + ", " + Drupal.t("ZOHO Japan Corporation. All Rights Reserved.") + "</p>")
    } else {
        $(".zw-only-copyright").append("<p>&copy; " + currentYear + ", " + Drupal.t("ZOHO Japan Corporation. All Rights Reserved.") + "</p>")
    }
} else {
    if ($("body").hasClass("r-g-f") && customvar.absurl.indexOf("signup.html") < 0 && customvar.absurl.indexOf("login.html") < 0) {
        $(".zw-only-copyright .content-wrap").append("<p>&copy; " + currentYear + ", " + Drupal.t("Zoho Corporation Pvt. Ltd. All Rights Reserved.") + "</p>")
    } else {
        $(".zw-only-copyright").append("<p>&copy; " + currentYear + ", " + Drupal.t("Zoho Corporation Pvt. Ltd. All Rights Reserved.") + "</p>")
    }
}
if (customvar.cnarr.indexOf(customvar.productName) > -1) {
    customvar.domainArr[0].push("com.cn");
    customvar.domainArr[2].push("zoho.com.cn")
}
var detectedLangNew = "";
var loadxml = true;
var sitemapskip = ["arattai", "qengine", "endpointcentralmsp"];
if (typeof $("body").attr("site") != "undefined") {
    if ($("body").attr("site") == "zblogs") {
        loadxml = false
    }
} else if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu" || window.location.pathname.indexOf("signup.html") > 0 || customvar.productName == "zakya") {
    loadxml = false
}
if (customvar.productName == "community" || customvar.productName == "zohobigin" || customvar.productName == "trainercentral") {
    loadxml = true
} else if (window.location.origin.indexOf("zcmsweb") > 0) {
    loadxml = false
}
if (sitemapskip.includes(customvar.productName) || typeof $("body").attr("site") != "undefined" && $("body").attr("site") == "o-cms") {
    loadxml = false
}
if (loadxml) {
    customvar.loadlangxml()
}
if (document.getElementsByClassName("header").length > 0) {
    document.getElementsByClassName("header")[0].innerHTML = ""
}
if (customvar.pathname.indexOf("crm/lp/") > 0) {
    $("body").addClass("crm-lp")
}
if ($(".zw-promo-top").length > 0) {
    $(".zw-promo-top").prepend('<div class="ztopstrip-container"></div>')
} else {
    $("body").prepend('<div class="ztopstrip-container"></div>')
}
if (getDomain == ZcheckDomain) {
    ZdomainName = "local" + "" + "zoho"
}
customvar.textparam = global_getUrlParam("creativetestparam") != "";
customvar.customclean = global_getUrlParam("customclean") != "";
if (window.location.hostname == _preZ) {
    if (global_getUrlParam("autoDomain") != "") {
        domainOne = global_getUrlParam("autoDomain")
    }
}
global_getUrlParam("hideglobalheader") != "" ? $("body").addClass("hideglobalheader") : "";
global_getUrlParam("hideproductheader") != "" ? $("body").addClass("hideproductheader") : "";
global_getUrlParam("hideglobalfooter") != "" ? $("body").addClass("hideglobalfooter") : "";
global_getUrlParam("hideproductfooter") != "" ? $("body").addClass("hideproductfooter") : "";
global_getUrlParam("hidebottomcta") != "" ? $("body").addClass("hidebottomcta") : "";
function encodeFun(a) {
    try {
        a = decodeURI(a)
    } catch (e) {
        a = a
    }
    if (a.indexOf("#") > -1) {
        var e = a.split("#").length
          , t = "";
        for (var o = 1; o < e; o++) {
            t += "#" + a.split("#")[o]
        }
        a = a.split("#")[0] + "" + encodeURI(t)
    }
    if (a.indexOf("?") > -1) {
        var e = a.split("?").length
          , t = "";
        for (var o = 1; o < e; o++) {
            t += "?" + a.split("?")[o]
        }
        a = a.split("?")[0] + "" + encodeURI(t)
    }
    return a
}
(function() {
    if (currentUrlLang != "jp") {
        var e = document.domain.split("").splice(0, document.domain.split("").length - 1).join("");
        if (document.domain.split("")[document.domain.length - 1] == ".") {
            var a = window.location.href.split(getDomain)[0] + "" + e + "" + window.location.href.split(getDomain)[1];
            window.location.href = encodeFun(a)
        }
        var t = ["nila", "qntrl", "vanihq"];
        if (!t.includes(customvar.productName)) {
            if (_preZ == window.location.hostname) {
                $.getScript("https://" + _preZ + "/sites/zweb/js/common/dynamicemail.js")
            } else {
                $.getScript("https://www.zoho.com/sites/zweb/js/common/dynamicemail.js")
            }
        }
    }
}
)();
function decodeHexString(e) {
    e = e.replace(/\\x([0-9A-Fa-f]{2})/g, function() {
        return String.fromCharCode(parseInt(arguments[1], 16))
    });
    e = e.replace(/\\u([\d\w]{4})/gi, function() {
        return String.fromCharCode(parseInt(arguments[1], 16))
    });
    return e
}
var addDynamicScript = function() {
    var r = {};
    var e = {
        download_plan_comp_pdf: "/sites/zweb/js/common/download_plan_comp_pdf.js",
        plan_features_filter: "/sites/zweb/js/common/plan_features_filter.js",
        "zc-crm-webform": "/sites/zweb/js/common/zc-crm-webform.js",
        "zc-validate": "/sites/zweb/js/common/zc-validate.js"
    };
    return function(o) {
        var n = "";
        if (e[o]) {
            n = e[o];
            if (window.location.host === _preZ || parent.document.location.host === _preZ) {
                o = "https://" + _preZ + e[o]
            } else {
                o = "https://www.zohowebstatic.com" + e[o]
            }
        } else {
            if (/(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/.test(o)) {
                n = new URL(o).pathname
            } else {
                throw new Error("Invalid URL: " + o)
            }
        }
        if (!r[n]) {
            r[n] = {
                needToLoad: false,
                loadStatus: false,
                loadCount: 0,
                resolves: []
            }
        }
        if (document.querySelectorAll('script[src*="' + n + '"]').length === 0 && !r[n].needToLoad) {
            r[n].needToLoad = true
        }
        r[n].loadCount++;
        return new Promise(function(e, a) {
            if (r[n].needToLoad && r[n].loadCount === 1) {
                var t = document.createElement("script");
                t.onload = function() {
                    r[n].loadStatus = true;
                    r[n].resolves.forEach(function(e) {
                        e()
                    });
                    e()
                }
                ;
                t.onerror = function() {
                    a()
                }
                ;
                t.src = o;
                document.body.appendChild(t)
            } else {
                if (!r[n].needToLoad || r[n].loadStatus) {
                    e()
                } else {
                    r[n].resolves.push(e)
                }
            }
        }
        )
    }
}();
customvar.transCName = customvar.transCName.split("_").join(" ");
customvar.transCName == "Viet Nam" ? customvar.transCName = "Vietnam" : "";
var _conval = customvar.transCName.toLocaleLowerCase().split(" ").join("");
_conval.indexOf("unitedstates") > -1 || _conval.indexOf("unitedkingdom") > -1 || _conval.indexOf("unitedarabemirate") > -1 || _conval.indexOf("bahamas") > -1 || _conval.indexOf("caymanislands") > -1 || _conval.indexOf("centralafricanrepublic") > -1 || _conval.indexOf("channelislands") > -1 || _conval.indexOf("czechrepublic") > -1 || _conval.indexOf("dominicanrepublic") > -1 || _conval.indexOf("falklandislands") > -1 || _conval.indexOf("ivorycoast") > -1 || _conval.indexOf("leewardislands") > -1 || _conval.indexOf("maldives") > -1 || _conval.indexOf("marshall") > -1 || _conval.indexOf("netherlands") > -1 || _conval.indexOf("philippines") > -1 || _conval.indexOf("solomonislands") > -1 || _conval.indexOf("turksandcaicosislands") > -1 || _conval.indexOf("virginislands") > -1 ? customvar.basedonip = Drupal.t("It looks like you&lsquo;re in the") : "";
customvar.clang = currentUrlLang == "" ? "" : "service_language=" + currentLang + "&";
customvar.newsignupArr = ["teaminbox", "recruit", "campaigns", "sites", "commerce", "desk", "pagesense", "people", "sign", "voice", "forms", "pilot", "dataprep", "learn", "crm", "crmplus", "bigin", "cliq", "directory", "creator", "calendar", "peopleplus", "contracts", "marketingautomation", "connect", "shifts", "marketingplus", "survey", "ziasearch", "backtowork", "backstage", "assist", "workerly", "projects", "one", "developer", "catalyst", "social", "lens", "vault", "sprints", "salesinbox", "commandcenter", "remotely", "salesiq", "bookings", "analytics", "sheet", "bugtracker", "workdrive", "trainercentral", "flow", "remoteaccessplus", "notebook", "patchmanagerplus", "mobiledevicemanagerplus", "MobileDeviceManagement", "desktopcentral", "zakya", "home", "meeting", "mail", "zeptomail"];
customvar.oldsignupArr = [];
customvar.alink = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script?temp_redirect=true&" + customvar.clang + "load_country=false&";
if (customvar.outproduct.indexOf(customvar.productName) > -1) {
    customvar.alink = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script?temp_redirect=true&" + customvar.clang + "load_country=false&"
}
var _psubmitval = customvar.outproduct.indexOf(customvar.productName) > -1 ? "https://www.zoho.com" : "";
var _txtBySubmit = Drupal.t("By submitting this form, you agree to the processing of personal data according to our") + ' <a href="' + _psubmitval + langsrc + 'privacy.html" class="privacylink" target="_blank">' + Drupal.t("Privacy Policy") + ".</a>";
customvar.ocmsprelink = window.location.hostname.indexOf(_prewww) > -1 ? "https://" + _preZ : "";
if (currentLang == "ar") {
    var arCount = 0;
    for (var i = 0; i < $("link").length; i++) {
        if ($("link").eq(i).attr("href") != "undefined") {
            if ($("link").eq(i).attr("href").indexOf("/css/ar.css") > 0) {
                arCount++
            }
        }
    }
    setTimeout(function() {
        if (arCount == 0) {
            var e = document.createElement("link");
            e.rel = "stylesheet";
            e.type = "text/css";
            if (predomain) {
                e.href = customvar.ocmsprelink + "/sites/zweb/css/language/ar.css"
            } else {
                e.href = "https://www.zohowebstatic.com/sites/zweb/css/language/ar.css"
            }
            document.getElementsByTagName("head")[0].appendChild(e)
        }
    }, 100)
}
function getGlobalCookie(e) {
    return customvar.getGlobalCookie(e)
}
var doc = $(document);
var wW = $(window).width();
var prdName = customvar.productName;
prdName == "one" ? prdName = "zohoone" : "";
prdName == "officeplatform" ? prdName = "officeintegrator" : "";
prdName == "zohoorchestly" ? prdName = "orchestly" : "";
_lhref.indexOf("mdm-cloud.html") > 0 ? prdName = "MobileDeviceManagement" : "";
_lhref.indexOf("online-service-desk-software.html") > 0 ? prdName = "ServiceDesk Plus" : "";
var _zclang = langsrc;
customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu" || domainOne == "com.cn" ? _zclang = "https://www.zoho." + domainOne + "/" : "";
var zghBrand = ' <div class="zgh-brand"><span class="zgh-menu"><span class="hamburger-box"><span></span><span></span><span></span><span></span><span></span><span></span></span></span><a href="' + _zclang + '">Zoho.com</a></div>';
var zghNav;
if (prdName == "home") {
    var _suportlink = "https://help.zoho.com/portal/home";
    if (currentUrlLang == "jp") {
        _suportlink = "https://support.zoho.com/portal/jpzoho/home"
    }
    zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + Drupal.t("Products") + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li><li><a href="https://www.zoho.com/customers.html">' + Drupal.t("Customers") + '</a></li><li><a href="' + _suportlink + '" target="_blank">' + Drupal.t("Support") + '</a></li><li><a href="https://www.zoho.com' + langsrc + 'aboutus.html">' + Drupal.t("About Us") + "</a></li></ul></div>";
    if (_lhref.indexOf("index-new") > 0) {
        zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + Drupal.t("Products") + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li><li class="zgh-megaMenu zgh-solutions"> <a href="javascript:;">Solutions</a> <div class="zgh-megaMenuBox"> <div class="zgh-megaMenuInner"> <ul class="zgh-megaMenuCat"> <li><span>By Size</span> <ul> <li> <a href="javascript:;">Small</a> </li> <li> <a href="javascript:;">Medium</a> </li> <li> <a href="javascript:;">Enterprise</a> </li> </ul> </li> <li><span>By Role</span> <ul> <li> <a href="javascript:;">Sales</a> </li> <li> <a href="javascript:;">Marketing</a> </li> <li> <a href="javascript:;">Finance</a> </li> <li> <a href="javascript:;">Teams/Collaboration</a> </li> <li> <a href="javascript:;">IT</a> </li> <li> <a href="javascript:;">HR</a> </li> </ul> </li> <li><span>By Industry</span> <ul> <li> <a href="javascript:;">Education</a> </li> <li> <a href="javascript:;">Manufacturing</a> </li> <li> <a href="javascript:;">Non-profits</a> </li> <li> <a href="javascript:;">Logistics</a> </li> <li> <a href="javascript:;">Retail</a> </li> </ul> </li> </ul> </div> </div> </li><li><a href="customers.html">' + Drupal.t("Customers") + '</a></li><li><a href="https://help.zoho.com/portal/home" target="_blank">' + Drupal.t("Support") + "</a></li><li><a href=" + langsrc + '"aboutus.html">' + Drupal.t("About Us") + "</a></li></ul></div>"
    }
} else {
    zghNav = '<div class="zgh-nav"><ul><li class="zgh-megaMenu zgh-products"><a href="javascript:;">' + Drupal.t("All Products") + '</a><div class="zgh-megaMenuBox"><div class="zgh-megaMenuInner"><ul class="zgh-megaMenuCat"></ul><div class="zgh-megaMenuPro"></div></div></div></li></ul></div>'
}
if ($(".load-header").length <= 0 && !_lhref.includes("com/press.html")) {
    zghNav = '<div class="zgh-nav"></div>'
}
var _val = "English";
if (predomain && _lhref.includes(_preZ + "/index-new1.html")) {
    _val = "EN"
}
currentUrlLang != "" ? _val = lancountry[currentUrlLang] : "";
if (predomain && _lhref.includes(_preZ + "/index-new1.html")) {
    currentUrlLang != "" ? _val = currentUrlLang.toUpperCase() : ""
}
var zghSearch = ' <div class="zgh-search"> <span class="zgh-search-icon"></span> <div class="zgh-search-container"> <div class="zgh-search-wrap"> <div class="zgh-search-box"> <form action="" id="zgh-search-action" name=""> <input class="zgh-search-field" aria-label="Search for product overviews, FAQs, and more..." id="zgh-search-query" autocomplete="off" name="query" placeholder="' + Drupal.t("Search for product overviews, FAQs, and more...") + '" type="text"><input class="zgh-search-btn" type="button"> <span class="zgh-search-clear"></span></form></div></div><div class="zgh-search-overlay"></div></div></div>';
var zghLoc = '<div class="zgh-localization"><span class="zgh-localSelect">' + _val + '</span><div class="zgh-localBox"><ul></ul></div></div>';
var getstart = Drupal.t("Get Started");
if (customvar.productName == "crm") {
    getstart = Drupal.t("Sign Up For Free")
}
var zghAcc = '<div class="zgh-accounts"><a href="https://accounts.' + Zdomain + "." + dcdomainOne + "/signin?" + customvar.clang + "servicename=ZohoHome&signupurl=https://www." + ZUrlDomain + "." + domainOne + langsrc + 'signup.html" class="zgh-login">' + Drupal.t("SIGN IN") + '</a><a href="https://www.' + ZUrlDomain + "." + domainOne + langsrc + 'signup.html" class="zgh-signup">' + getstart + "</a></div>";
if ($(".login-text .login").length > 0) {
    $(".login-text .login").html(Drupal.t("SIGN IN"))
}
var zghUtil = '<div class="zgh-utilities">' + zghSearch + zghLoc + zghAcc + "</div>";
if (predomain && customvar.productName == "home") {
    var zghNewHeadDiv = '<div class="zgh-announcement"><span class="zgh-announcement-icon"></span> <div class="zgh-announcement-container"></div></div>';
    var zghUtil = '<div class="zgh-utilities">' + zghSearch + zghNewHeadDiv + zghLoc + zghAcc + "</div>"
}
var zghBlock = '<div class="zgh-headerWrap" id="header">' + zghBrand + zghNav + zghUtil + "</div>";
$(".zw-global-header .header").html("");
$(".zw-global-header .header").append(zghBlock);
$(".zgh-accounts .zgh-login").css("display", "inline-block");
if ($("#czone-home").length > 0) {
    $(".zgh-accounts .zgh-signup").hide()
}
$(".zgh-localization").hide();
(function() {
    $(".cookie-policy").css("display", "inline-block");
    function e() {
        if (typeof CountryCode != "undefined" && typeof RegionName != "undefined") {
            if (CountryCode == "US" && RegionName.toLowerCase() == "california") {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
    if (!((customvar.getOS == "Mac" || customvar.getOS == "iOS") && global_getUrlParam("ismobilesignup") != "")) {
        if (global_getUrlParam("nocookie") != "True") {
            if ($.inArray(CountryCode, countryEu) !== -1 || CountryCode == "BR" || e() || CountryCode == "JP" || customvar.absurl.indexOf("cookie-policy") != -1) {
                var a = ["crm", "crmplus"];
                var t = ["vanihq"];
                if (!t.includes(customvar.productName)) {
                    if (!(a.includes(customvar.productName) && currentUrlLang == "jp")) {
                        if (predomain) {
                            $("head").append('<link rel="stylesheet" href="https://' + _preZ + '/sites/zweb/css/common/zcp-common.css" type="text/css" />');
                            $("head").append('<script>(function(w,s){var e=document.createElement("script");e.src="https://' + _preZ + '/sites/zweb/js/common/zcp-common.js";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(e,x);})(window,"script");<\/script>')
                        } else {
                            $("head").append('<link rel="stylesheet" href="https://www.zohowebstatic.com/sites/zweb/css/common/zcp-common.css" type="text/css" /><script src="https://www.zohowebstatic.com/sites/zweb/js/common/zcp-common.js"><\/script>')
                        }
                    }
                }
            }
        }
    }
    if (_preZ == window.location.hostname) {
        $.getScript("https://" + _preZ + "/sites/zweb/js/common/precheck.js")
    }
    var o = ["tech-talk"];
    if (($(".zw-product-header").length > 0 || $(".zw-product-footer").length > 0) && o.includes(customvar.productName) == false) {
        if (_preZ == window.location.hostname || _preccms == window.location.hostname || customvar.textparam || window.location.hostname.indexOf(_prewww) > -1) {
            $.getScript("https://" + _preZ + "/sites/zweb/js/common/prod_menu.js")
        } else if (typeof $("body").attr("data-domain") != "undefined") {
            if ($("body").attr("data-domain") == "oweb") {
                if (customvar.outproduct.indexOf(customvar.productName) > -1) {
                    $.getScript("https://www.zoho.com/sites/zweb/js/common/prod_menu.js")
                } else {
                    $.getScript("https://" + _preZC + "/sites/zweb/js/common/prod_menu.js")
                }
            }
        } else if (_preZC == window.location.hostname) {
            $.getScript("https://" + _preZC + "/sites/zweb/js/common/prod_menu.js")
        } else {
            $.getScript("https://www.zoho.com/sites/zweb/js/common/prod_menu.js")
        }
    }
    if (!$("body").hasClass("domain-" + domainOne)) {
        var n = document.getElementsByTagName("body")[0];
        if (domainOne == "com.cn") {
            n.classList.add("domain-com")
        } else {
            n.classList.add("domain-" + domainOne)
        }
    }
}
)();
jQuery(document).ready(function() {
    if (typeof customvar.nonlogged != "undefined") {
        customvar.nonlogged()
    }
    jQuery(".zoho-child-wrapper").toggle();
    jQuery("#back-top").hide();
    jQuery(".service-links ul,.partners-info,.node-type-product-help .dropBox,.featured-news .views-row .hidden-news").toggle();
    jQuery(".service-links").click(function() {
        jQuery(".service-links ul").slideToggle("slow")
    });
    jQuery(".zoho-parent-toggle").click(function() {
        if (!/\/reports\/help\//.test(document.URL) && !/\/developer\/help\//.test(document.URL)) {
            jQuery(this).parent().find(".zoho-child-wrapper").slideToggle();
            if (jQuery(this).parent().hasClass("open")) {
                jQuery(this).parent().removeClass("open")
            } else {
                jQuery(this).parent().siblings().removeClass("open");
                jQuery(this).parent().siblings().find(".zoho-child-wrapper").slideUp("slow");
                jQuery(this).parent().addClass("open")
            }
        }
    });
    jQuery(".featured-news .views-row").click(function() {
        jQuery(this).find(".hidden-news").slideToggle("slow")
    });
    jQuery(".node-type-product-help #faq h4").click(function() {
        var e = jQuery(this).attr("class");
        if (e) {
            jQuery(this).next("div").slideToggle("slow");
            jQuery(this).removeClass(e)
        } else {
            if (jQuery(this).siblings().hasClass("open")) {
                if (jQuery(this).siblings(".open .hidden-news, .open + .ans.dropBox").is(":visible")) {
                    jQuery(this).addClass("open");
                    jQuery(this).next("div").slideToggle("slow")
                } else {
                    var a = jQuery(this).addClass("open").siblings().removeClass("open");
                    jQuery(".open .hidden-news, .open + .ans.dropBox").slideToggle("slow")
                }
            } else {
                var a = jQuery(this).addClass("open").siblings().removeClass("open");
                jQuery(".open .hidden-news, .open + .ans.dropBox").slideToggle("slow")
            }
        }
    });
    jQuery(".footer-wrapper a").each(function() {
        if (jQuery(this).hasClass("zoho-and")) {
            jQuery(this).parent().addClass("zoho-and-wrapper")
        }
    });
    jQuery(".zoho-child-wrapper li a").each(function() {
        if (/\/people\/help\//.test(document.URL)) {
            jQuery(".zoho-parent-toggle").remove()
        }
        if (/\/people\/help\//.test(document.URL) || jQuery(this).hasClass("active")) {
            jQuery(this).parent().parent().parent().addClass("open")
        }
    });
    jQuery(".zoho-child-wrapper").each(function() {
        if (/\/people\/help\//.test(document.URL) || jQuery(this).parent().hasClass("open")) {
            jQuery(this).css("display", "block")
        }
    });
    jQuery(".countries .names").click(function() {
        var e = jQuery(this).text();
        jQuery("." + e).show()
    });
    jQuery(".close").click(function() {
        var e = jQuery(this).attr("class").split(" ")[1].split("-")[0];
        jQuery("." + e).hide()
    });
    jQuery(".info").click(function() {
        var e = jQuery(this).attr("class").split("_")[2];
        jQuery(".expand_view_" + e).slideToggle("slow")
    });
    jQuery(".testimonial_addons").each(function() {
        jQuery(this).parent().parent().parent().addClass("testimonial-wrapper")
    });
    jQuery(".dynamic-width:contains('True')").addClass("tick");
    jQuery(".dynamic-width:contains('TRUE')").addClass("tick");
    jQuery(".dynamic-width:contains('False')").addClass("cross");
    jQuery(".dynamic-width:contains('FALSE')").addClass("cross");
    jQuery(".pricing-row-wrapper").each(function(e) {
        jQuery(this).children(":first").removeClass("dynamic-width");
        var a = jQuery(this).find(".dynamic-width").length;
        var t = 70 / a;
        jQuery(this).find(".dynamic-width").css("width", t + "%")
    });
    var o = 0;
    jQuery(".pricing-blocks .view-pricing .views-row").each(function(e, a) {
        var t = jQuery(this).outerWidth();
        o = o + t
    });
    jQuery(".pricing-blocks .view-pricing .view-content").css("width", o + "px");
    jQuery("a[href='#top']").click(function() {
        jQuery("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false
    });
    var e = jQuery("#block-panels-mini-products-header-dropdown-menu").innerHeight();
    jQuery(".look-down").click(function() {
        jQuery("body").animate({
            scrollTop: jQuery(".catagory-mobapps-part").offset().top - e + 55
        }, 1e3)
    });
    jQuery(".explore").click(function() {
        jQuery("body").animate({
            scrollTop: jQuery(".zoho-timeline").offset().top - e + 55
        }, 1e3)
    });
    var a = jQuery("#block-panels-mini-home-page-sliding-header").innerHeight();
    jQuery(".zoho-home-page .scroll-down .scrolldown-arrow").click(function() {
        jQuery("body").animate({
            scrollTop: jQuery(".pane-home-page-view-panel-pane-1").offset().top - a + 55
        }, 1e3)
    });
    jQuery(".view-home-page-view").each(function() {
        var e = 0;
        jQuery(".view-grouping:nth-child(1),.view-grouping:nth-child(2),.view-grouping:nth-child(3)").each(function() {
            if (jQuery(this).height() > e)
                e = jQuery(this).height()
        });
        jQuery(".view-grouping:nth-child(1),.view-grouping:nth-child(2),.view-grouping:nth-child(3)").height(e)
    });
    jQuery(".view-home-page-view").each(function() {
        var e = 0;
        jQuery(".view-grouping:nth-child(4),.view-grouping:nth-child(5),.view-grouping:nth-child(6)").each(function() {
            if (jQuery(this).height() > e)
                e = jQuery(this).height()
        });
        jQuery(".view-grouping:nth-child(4),.view-grouping:nth-child(5),.view-grouping:nth-child(6)").height(e)
    });
    jQuery(".pricing-view-content-wrapper .pricing-row-wrapper").each(function() {
        var e = 0;
        jQuery(this).children(".dynamic-width").each(function() {
            if (jQuery(this).height() > e)
                e = jQuery(this).height()
        });
        jQuery(this).children(".dynamic-width").height(e)
    });
    $('.zwc_zcounts[data-zcount-years="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfYears + "</span>");
    $('.zwc_zcounts[data-zcount-users="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfUsers + "</span>");
    $('.zwc_zcounts[data-zcount-employees="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfEmployees + "</span>");
    $('.zwc_zcounts[data-zcount-partners="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfPartners + "</span>");
    $('.zwc_zcounts[data-zcount-countries="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfCountries + "</span>");
    $('.zwc_zcounts[data-zcount-apps="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfApps + "</span>");
    $('.zwc_zcounts[data-zcount-datacenters="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfDataCenters + "</span>");
    $('.zwc_zcounts[data-zcount-customers="true"]').html('<span class="zwc_zcounts_digits">' + customvar.numberOfCustomers + "</span>");
    var t = "000";
    $('.zwc_zcounts[data-zcount-employees-alldigits="true"]').html('<span class="zwc_zcounts_digits">' + new Intl.NumberFormat(CountryCode).format(customvar.numberOfEmployees + t) + "</span>");
    $('.zwc_zcounts[data-zcount-partners-alldigits="true"]').html('<span class="zwc_zcounts_digits">' + new Intl.NumberFormat(CountryCode).format(customvar.numberOfPartners + t) + "</span>");
    if (dcdomainOne == "in") {
        $('.zwc_zcounts[data-zcount-employees-alldigits="true"]').html('<span class="zwc_zcounts_digits">' + new Intl.NumberFormat("en-IN").format(customvar.numberOfEmployees + t) + "</span>");
        $('.zwc_zcounts[data-zcount-partners-alldigits="true"]').html('<span class="zwc_zcounts_digits">' + new Intl.NumberFormat("en-IN").format(customvar.numberOfPartners + t) + "</span>")
    }
    $('.zwc_zcounts[data-zcount-plus="true"]').append('<span class="zwc_zcounts_type">+</span>');
    $('.zwc_zcounts[data-zcount-k="true"]').append('<span class="zwc_zcounts_type">K</span>');
    $('.zwc_zcounts[data-zcount-kplus="true"]').append('<span class="zwc_zcounts_type">K+</span>');
    $('.zwc_zcounts[data-zcount-million="true"]').append('<span class="zwc_zcounts_type">M</span>');
    $('.zwc_zcounts[data-zcount-millionplus="true"]').append('<span class="zwc_zcounts_type">M+</span>');
    $("#form-hockey_v1").on("submit", function(e) {
        e.preventDefault();
        var a = $("#hockey_v1-query").val().trim();
        var t = $("#form-hockey_v1").attr("action");
        window.location = t + "?query=" + encodeURIComponent(a)
    })
});
function showhide(e, a) {
    var t = document.getElementById(e);
    if (t.style.display == "none") {
        t.style.display = "block";
        document.getElementById(a).innerHTML = '<span class="up">Up</span>'
    } else {
        t.style.display = "none";
        document.getElementById(a).innerHTML = '<span class="down">Down</span>'
    }
}
function expcollps(e, a) {
    var t = a ? jQuery(e) : jQuery(e).parent().prev();
    var o = a ? jQuery(e).next() : jQuery(e).parent();
    if (a) {
        jQuery(".ldjs_cnt").slideUp(700, function() {
            jQuery(".ldjs_readmr").css("visibility", "visible")
        });
        o.slideDown(700, function() {
            t.css("visibility", "hidden")
        })
    } else {
        o.slideUp(700, function() {
            t.animate({
                opacity: 1
            }, 700).css("visibility", "visible")
        })
    }
}
function setSlidingMenuMobile() {
    if (langsrc == "/") {
        if ($("body").hasClass("node-type-features") || $("body").hasClass("node-type-product-success-stories") || $("body").hasClass("node-type-zoho-one-applications")) {
            var e = JSON.parse(mobileSMjson);
            var t = '<div class="ztop-slide-mobile-menu"><div class="ztop-smm-inner">';
            var o = 0;
            $.each(e, function(e, a) {
                o++;
                t = t + '<a href="' + langsrc + a + '">' + Drupal.t(e) + "</a>"
            });
            t = t + "</div></div>";
            $(t).appendTo($(".main-container-wrapper"));
            if (o == 2)
                $(".ztop-smm-inner").addClass("z2menu")
        }
    }
}
var hidelogin = 0;
(function(te) {
    te(document).ready(function(E) {
        var e = document.createElement("script");
        var a = _lhref.indexOf("zgs=1") < 0;
        var U = ["arattai"];
        if (U.includes(customvar.productName)) {
            a = false
        }
        if (a) {
            if (dcenabled && nondc) {
                var o = 0
                  , n = "";
                var T = 0;
                for (var t = 0; t < customvar.domainArr[0].length; t++) {
                    var e = document.createElement("script");
                    e.className = "infoload";
                    n = customvar.domainArr[0][t] == "ca" ? "zohocloud" : ZdomainName;
                    e.src = "https://accounts." + n + "." + customvar.domainArr[0][t] + "/u/info";
                    document.getElementsByTagName("head")[0].appendChild(e);
                    te(e).on("load", function() {
                        o++;
                        if (typeof zohouser.DC_INFO != "undefined") {
                            customvar.zohouser = JSON.parse(JSON.stringify(zohouser));
                            customvar.domainArr[1].push(customvar.dcObj[zohouser.DC_INFO == "au" ? "com.au" : zohouser.DC_INFO].domain);
                            hidelogin = customvar.dcObj[zohouser.DC_INFO == "au" ? "com.au" : zohouser.DC_INFO].notavailable.indexOf(customvar.productName) > -1 ? 1 : hidelogin;
                            if (customvar.domainArr[0].length == te(".infoload").length) {
                                te("script.infoload").remove();
                                dcdomainOne = customvar.domainArr[1][0];
                                var e = document.createElement("script");
                                e.className = "infoload";
                                n = dcdomainOne == "ca" ? "zohocloud" : ZdomainName;
                                e.src = "https://accounts." + n + "." + dcdomainOne + "/u/info";
                                document.getElementsByTagName("head")[0].appendChild(e);
                                e.onload = D
                            }
                        }
                        if (o == te(".infoload").length && customvar.domainArr[1].length == 0) {
                            var a = customvar.dcObj;
                            dcdomainOne = "com";
                            for (var t in a) {
                                if (typeof a[t].countries != "undefind") {
                                    if (a[t].countries.indexOf(CountryCode) > -1) {
                                        if (a[t].notavailable.indexOf(customvar.productName) > -1) {
                                            dcdomainOne = "com";
                                            onlycom = true
                                        } else {
                                            dcdomainOne = a[t].domain
                                        }
                                    }
                                }
                            }
                            D()
                        }
                    });
                    te(e).on("error", function() {
                        T++;
                        D()
                    })
                }
            } else {
                if (window.location.hostname != "www.zohohelp.com") {
                    e.src = "https://accounts." + ZdomainName + "." + domainOne + "/u/info";
                    if (window.location.host == "www.zoho.com.cn") {
                        e.src = "https://accounts." + ZdomainName + "." + domainOne + "/u/info"
                    } else if (currentUrlLang == "zh-hans") {
                        e.src = "https://accounts." + ZdomainName + ".com/u/info"
                    }
                    document.getElementsByTagName("head")[0].appendChild(e);
                    te(e).on("error", function() {
                        D()
                    })
                }
            }
        }
        var r = "";
        var k = "";
        var i = "";
        var s = "";
        var l = "/privacy.html ";
        var c = "";
        var u = "/policy.html ";
        var d = "";
        var M = "//www.facebook.com/zoho";
        var I = "//twitter.com/zoho";
        var q = "<a class='on-in' href='https://www.linkedin.com/company/38373' target='_blank' class='linkedin' title='LinkedIn'>'+Drupal.t('Linkedin')+'</a>";
        var m = ["/es/", "/fr/", "/it/"];
        var p = "";
        var R = "/jp/gdpr.html";
        var h = "";
        var f = 0;
        var v = "/contactus.html";
        if (currentUrlLang == "jp") {
            k = "//www.zoho.com";
            i = "//www.zoho.com/jp";
            s = "ofservice";
            l = "//www.zoho.com/jp/PrivacyPolicy.html";
            c = "policy";
            u = "https://www.zoho.com/jp/policy.html";
            d = "<li><a href='//www.zoho.com/jp/refund.html'>&#12458;&#12531;&#12521;&#12452;&#12531;&#27770;&#28168;&#24460;&#12398;&#12461;&#12515;&#12531;&#12475;&#12523;&#12395;&#12388;&#12356;&#12390;</a></li>";
            M = "//www.facebook.com/zohoJapan";
            I = "//twitter.com/jpzoho";
            q = "";
            v = "https://www.zoho.com/jp/contactus.html"
        } else if (currentUrlLang == "de") {
            d = '<li><a href="' + langsrc + 'impressum.html">Impressum</a></li>'
        }
        if (dcenabled && nondc) {} else {
            e.onload = D
        }
        var g = te("#emailfield").val();
        if (g == "" || g == null) {
            te("#emailfield").parent().removeClass("added-placeholder")
        } else {
            te("#emailfield").parent().addClass("added-placeholder")
        }
        getWidth = 0;
        $gotoPage = "";
        productName = "";
        breaks = false;
        productName = customvar.productName;
        addString = "'" + productName + "'";
        for (var t = 0; t < m.length; t++) {
            if (window.location.href.indexOf(m[t]) > -1) {
                var B = window.location.pathname.split("/");
                if (B[2] == m[t].slice(1, -1)) {
                    var p = m[t];
                    p = p.slice(1);
                    h = "/" + p.slice(0, -1)
                } else {
                    var r = m[t];
                    var r = r.slice(0, -1)
                }
            }
        }
        var y = "";
        if (currentUrlLang == "jp") {
            y = '<ul class=ZPprivacy> <li><a href="' + i + '/">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + v + '">' + Drupal.t("Contact Us") + '</a></li><li><a href="' + i + r + h + "/security" + c + '.html">' + Drupal.t("Security") + '</a></li><li><a class="footer-compliance" href="/compliance.html">' + Drupal.t("Compliance") + '</a></li> <li><a href="' + i + r + h + '/ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + r + h + u + '"> ' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + i + r + h + "/terms" + s + '.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + r + h + l + '">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com/privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li><a href="' + R + '" class="gdprc">' + Drupal.t("GDPR Compliance") + "</a></li>" + d + "</ul><p>&copy; " + currentYear + ", " + Drupal.t("Zoho Corporation Pvt. Ltd. All Rights Reserved.") + "</p>"
        } else {
            var b = langsrc + "security.html";
            if (productName == "mail") {
                b = langsrc + "mail/secure-email-hosting.html"
            }
            var w = "";
            if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                w = "https://www.zoho.com"
            }
            y = '<ul class=ZPprivacy> <li><a href="' + w + langsrc + '">' + Drupal.t("Zoho Home") + '</a></li><li><a href="' + w + langsrc + 'contactus.html">' + Drupal.t("Contact Us") + '</a></li><li><a href="' + w + b + '">' + Drupal.t("Security") + '</a></li><li><a class="footer-compliance" href="' + w + '/compliance.html">' + Drupal.t("Compliance") + '</a></li> <li><a href="' + w + langsrc + 'ipr-complaints.html">' + Drupal.t("IPR Complaints") + '</a></li><li><a href="' + w + langsrc + 'policy.html"> ' + Drupal.t("Anti-spam Policy") + '</a></li><li class="footer-terms"><a href="' + w + langsrc + 'terms.html">' + Drupal.t("Terms of Service") + '</a></li><li class="footer-privacy"><a href="' + w + langsrc + 'privacy.html">' + Drupal.t("Privacy Policy") + '</a></li><li class="cookie-policy"><a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html">' + Drupal.t("Cookie Policy") + '</a></li><li><a href="' + w + '/gdpr.html" class="gdprc">' + Drupal.t("GDPR Compliance") + '</a></li><li><a href="' + w + langsrc + 'abuse-policy/">' + Drupal.t("Abuse Policy") + "</a></li>" + d + "</ul>"
        }
        var z = customvar.productName == "accounts" || customvar.productName == "contacts" ? "support@zohoaccounts.com" : "support@zoho.com";
        var Q = '<div class="ZF-support"><div class="ZF-container"><div class="ZF-contact"><ul><li class="zf-support-mail"><a id="zf-support-mailid" href="mailto:' + z + '">' + z + '</a></li><li class="zglob-lang"><div class="ZF-dlsel"><div class="zdc-container"><span class="zdc-text">Select DC</span><div class="zdc-container-inner"><ul><li><a href="https://www.zoho.in/">IN DC</a></li><li><a href="https://www.zoho.com/">US DC</a></li><li><a href="https://www.zoho.eu/">EU DC</a></li></ul></div></div></div></li></ul></div></div></div>' + y;
        var Q = y;
        newFooter = y;
        P();
        te(".product-header-top").html(te("#mini-panel-product_menu").html());
        if (domainOne == "in") {
            te(".zcomtctmanager").hide();
            if (te(".zp-apps.zp-contactmanager").length > 0) {
                te(".zp-apps.zp-contactmanager").remove()
            }
        }
        var G = document.domain;
        if (G == "www.zoho.eu") {
            te(".business-proc .no-border").remove();
            te('.business-proc a[href="/appcreator/"]').parent().remove()
        }
        te(window).scroll(function() {
            te(".zlang-container-inner").hide();
            if (te(".zlang-container").children(".zlang-container-inner").length > 0) {
                te(".zlang-container").children(".zlang-container-inner").removeClass("show").addClass("hide")
            }
            N()
        });
        N();
        var C = false;
        var x = false;
        te(".menu-icon").click(function() {
            if (window.innerWidth <= 550) {
                te(".product-menu").hide()
            }
            if (x == false) {
                x = true;
                te(".mask-holder").removeClass("hide");
                setTimeout(function() {
                    te(".mobile-menu").css({
                        left: "0%"
                    });
                    var e = parseInt(window.innerHeight) - parseInt(te(".header").height());
                    te(".mobile-menu").css({
                        height: e + "px"
                    })
                }, 100);
                setTimeout(function() {
                    te("html,body").css({
                        overflow: "hidden"
                    })
                }, 0)
            } else {
                j()
            }
        });
        te(".mask-holder").click(function(e) {
            if (e.delegateTarget.className == e.target.className) {
                j()
            }
        });
        var W = te(".product-nav-links .menu").css("display");
        te(".userinfo-container").css({
            display: "block"
        });
        te("body").on("touchstart click", function(e) {
            var a = te(".zlang-container");
            if (!a.is(e.target) && a.has(e.target).length === 0) {
                te(".zlang-container").children(".zlang-container-inner").removeClass("show").addClass("hide");
                te(".zlang-container-inner").hide()
            }
        });
        te("body").click(function(e) {
            var a = true;
            if (productName == "mail" && te(".signup-box form").css("display") == "none") {
                a = false
            } else if (_lhref.indexOf("/creator/apps/") > 0 || te(e.target).hasClass("scrollstop")) {
                a = false
            }
            var t = ""
              , o = ""
              , n = "";
            if (e.target.parentNode) {
                e.target.parentNode.parentNode != null ? n = e.target.parentNode.parentNode.className : "";
                e.target.parentNode.className != null ? o = e.target.parentNode.className : ""
            }
            e.target.className != null ? t = e.target.className : "";
            if (window.location.href.indexOf("crm/what-is-crm.html") < 0 && a) {
                if (t == "signup" || o == "get-started" || te(e.target).hasClass("act-btn") && te(e.target).hasClass("cta-btn") && !te(e.target).hasClass("zwp-pricing-link") || te(e.target).hasClass("zgh-signup")) {
                    if (window.innerWidth > 991) {
                        if (te(".signup-box .sgfrm").length != 0 && te(".zp-home-right").css("display") != "none" && typeof getusername == "undefined") {
                            e.preventDefault();
                            L()
                        }
                    }
                    if (te(".signup-box #czone-wallet").length > 0 && te(".form-wrap .creditelm").length > 0) {
                        e.preventDefault();
                        if (getusername) {
                            te("html, body").animate({
                                scrollTop: te(".form-wrap .creditelm").offset().top - 200
                            }, 1e3)
                        } else {
                            L()
                        }
                    }
                }
            }
            if (e.target.className == "menu") {} else if (e.target.className == "mobile-menu-icon") {
                if (te(".product-nav-links .menu").css("display") == "none") {
                    C = false
                } else {
                    C = true
                }
                te(".product-nav-links .menu").css({
                    height: window.innerHeight - te("#mini-panel-product_menu").outerHeight()
                });
                if (C == false) {
                    te(".zgh-accounts .zgh-signup").fadeOut(100);
                    te(".menu").slideDown(300);
                    te("body").css({
                        overflow: "hidden"
                    });
                    te(".product-nav-links .menu").css({
                        overflow: "scroll"
                    })
                } else {
                    if (!te(".main-container-wrapper").hasClass("umain")) {
                        te(".zgh-accounts .zgh-signup").fadeIn(100)
                    }
                    te(".product-nav-links .menu").slideUp(300);
                    te("body").css({
                        overflow: "auto"
                    })
                }
            } else {
                if (C == true) {
                    te(".product-nav-links .menu").slideUp(300);
                    te("html,body").css({
                        overflow: "auto"
                    })
                }
            }
            if (n == "userinfo-details") {
                te(".userinfo-details").addClass("zoho-expand");
                if (getWidth > 285) {
                    te(".userinfo-details.zoho-expand").css({
                        width: getWidth + 10,
                        height: "135px"
                    })
                }
            } else {
                te(".userinfo-details").removeClass("zoho-expand");
                if (getWidth > 285) {
                    te(".userinfo-details").css({
                        width: "35px",
                        height: "35px"
                    });
                    te(".product-header-top .userinfo-details, .product-header-top .userinfo-container").css({
                        height: "43px"
                    })
                }
            }
        });
        te(document).on("keydown", function(e) {
            keys = e.which;
            if (keys == 27) {
                te(".userinfo-details").removeClass("zoho-expand")
            }
        });
        jQuery(".get-started a,.posibilities-bot").click(function(e) {
            if (window.innerWidth > 767) {
                e.preventDefault();
                L()
            }
        });
        anchorN = te("a");
        aa = [];
        for (t = 0; t < anchorN.length; t++) {
            aa[t] = te(anchorN[t]).attr("href");
            if (aa[t] == "javascript:void(0);") {
                te(anchorN[t]).css({
                    cursor: "text"
                })
            }
        }
        window.onscroll = function() {
            var e = jQuery(window).height();
            var a = jQuery(window).scrollTop();
            var t = jQuery(".footer-wrapper");
            if (typeof t !== "undefined") {
                var o = t.position();
                if (o && o.top && e + a > o.top) {
                    jQuery(".service-links").css("position", "absolute")
                } else {
                    jQuery(".service-links").css("position", "fixed")
                }
            }
            if (jQuery(this).scrollTop() > 200) {
                jQuery("#back-top").fadeIn();
                jQuery("#back-top a").css("position", "fixed")
            } else {
                jQuery("#back-top").fadeOut()
            }
            te(".zgh-userPanel").removeClass("active")
        }
        ;
        var $;
        var O;
        var _;
        var F = true;
        var S = 200;
        te(".dropdown-mask").css({
            height: "200px"
        });
        te(".header .menu >  li").hover(function(a) {
            $this = te(this);
            var t = a.clientX;
            $ = setTimeout(function() {
                var e = a.clientX;
                if (te(".dropdown-mask").hasClass("showmaskCheck")) {
                    S = 0;
                    if (t == e) {
                        O = $this.children()[1];
                        te(O).addClass("addMe");
                        te(".catagory-dropdown.addMe").children().addClass("showMe")
                    }
                }
            }, S)
        }, function() {
            clearTimeout($);
            te(O).removeClass("addMe");
            te(".catagory-dropdown").children().removeClass("showMe")
        });
        te(".header .menu").hover(function() {
            if (te(".dropdown-mask").hasClass("showmaskCheck")) {
                S = 0
            } else {
                S = 200
            }
            _ = setTimeout(function() {
                te(".dropdown-mask").addClass("showmask")
            }, 100);
            te(".dropdown-mask").addClass("showmaskCheck")
        }, function() {
            clearTimeout(_);
            te(".dropdown-mask").removeClass("showmaskCheck");
            te(".dropdown-mask").removeClass("showmask");
            S = 200
        });
        function j() {
            x = false;
            te(".mobile-menu").css({
                left: "-100%"
            });
            setTimeout(function() {
                te(".mask-holder").addClass("hide")
            }, 100);
            setTimeout(function() {
                te("html,body").css({
                    overflow: "auto"
                })
            }, 400)
        }
        function N(e) {
            te(".userinfo-details").removeClass("zoho-expand");
            if (e > 285) {
                te(".userinfo-details").css({
                    width: 35,
                    height: 35
                });
                te(".product-header-top .userinfo-details, .product-header-top .userinfo-container").css({
                    height: "43px"
                })
            }
            if (te(window).scrollTop() > 200) {
                te(".product-header-top").removeClass("slide");
                te(".product-header-top").css({
                    overflow: "visible"
                })
            } else {
                te(".product-header-top").addClass("slide");
                te(".product-header-top").css({
                    overflow: "hidden"
                })
            }
        }
        te(window).resize(function() {
            if (te(".footer-search-input").length > 0) {
                if (window.innerWidth <= 767) {
                    te(".footer-search-input").attr("placeholder", Drupal.t("Search") + " zoho." + domainOne)
                } else {
                    te(".footer-search-input").attr("placeholder", Drupal.t("Search for product overviews, FAQs, and more..."))
                }
            }
            P();
            H();
            if (te(window).outerWidth() <= 767) {
                if (!te(".mobile-menu-icon .hamburger-box").hasClass("active")) {
                    te(".product-nav-links .menu").css({
                        height: window.innerHeight - te("#mini-panel-product_menu").outerHeight(),
                        display: "none"
                    })
                }
                te("#mini-panel-product_menu .goto-link").hide();
                te(".product-nav-links .menu .featured-apps-part").css("display", "block");
                te("#mini-panel-product_menu .zlang-container").show();
                if (te("#mini-panel-product_menu .zlang-container").length < 1 && te(".header .zlang-container").length != 0) {
                    var e = '<div class="zlang-container">' + te(".header .zlang-container").html() + "</div>";
                    te(".overMe, .zlang-container").on("mouseover", function() {
                        te(this).children(".zlang-container-inner").show()
                    });
                    te(".overMe, .zlang-container").on("mouseout", function() {
                        te(this).children(".zlang-container-inner").hide()
                    });
                    te(".zlang-container").on("click", function() {
                        te(this).children(".zlang-container-inner").show()
                    })
                }
            } else {
                te(".product-nav-links .menu").css({
                    height: "auto",
                    top: "auto",
                    display: "block"
                });
                te(".product-header-inner .userinfo-container,.product-header-inner .goto-link").remove();
                te(".product-nav-links .menu .featured-apps-part").css("display", "none");
                te("#mini-panel-product_menu .zlang-container").remove()
            }
        });
        function H() {
            if (window.innerWidth < 768) {
                te(".mobile-menu-icon").css({
                    display: "block"
                });
                if (!te(".mobile-menu-icon .hamburger-box").hasClass("active")) {
                    te("#header .menu").css({
                        display: "none"
                    })
                }
            } else {
                te(".mobile-menu-icon").css({
                    display: "none"
                });
                te("#header .menu").css({
                    display: "block"
                })
            }
            if (window.innerWidth > 1140) {
                te(".header .menu").css({
                    display: "block"
                })
            } else {
                te(".header .menu").css({
                    display: "none"
                })
            }
        }
        function V() {
            if (jQuery("body").hasClass("og-context-node-3434")) {
                if (jQuery("body").hasClass("node-type-product-help")) {
                    jQuery(".menu-panel .zoho-parent-wrapper .hasChild ").each(function(e, a) {
                        if (e == 0) {
                            var t = jQuery(this).find(".zoho-child-wrapper li a").eq(1).text();
                            if (t == "Onboarding") {
                                jQuery(this).find(".zoho-child-wrapper li a").eq(1).hide()
                            }
                        }
                        if (e == 6) {
                            var o = jQuery(this).find(".zoho-child-wrapper li a").eq(0).text();
                            if (o == "Reports") {
                                jQuery(this).find(".zoho-child-wrapper li a").eq(0).hide()
                            }
                        }
                    })
                }
            }
        }
        function K() {
            var e = jQuery("body").hasClass("og-context-node-96");
            if (e) {
                var a = window.location.pathname.split("/");
                if (a.length == 3) {
                    jQuery(".bottom-promo .ct-action-btn").attr("href", "/crm/lp/signup.html?plan=enterprise?src=" + a[2] + "")
                } else if (a.length > 3) {
                    jQuery(".bottom-promo .ct-action-btn").attr("href", "/crm/lp/signup.html?plan=enterprise?src=" + a[2] + "/" + a[3] + "")
                }
            }
        }
        function Y() {
            var e = jQuery("#mini-panel-product_menu .product-title a").text();
            if (e == "DRE") {
                jQuery(" .product-title a").attr("href", "https://www.zoho.com/")
            }
            if (e == "CRM Plus") {
                var a = window.location.pathname.split("/");
                for (var t = 0; t < a.length; t++) {
                    if (a[1] != "crm") {
                        lang = a[1];
                        url = "/" + lang + "/crm/crmplus/";
                        jQuery(".product-title a").attr("href", url);
                        jQuery(".product-title a").attr("href", url)
                    } else if (a[1] == "crm" && a[2] == "crmplus") {
                        jQuery(".product-title a").attr("href", langsrc + "crm/crmplus/");
                        jQuery(".product-title a").attr("href", langsrc + "crm/crmplus/")
                    }
                }
            } else if (e == "Writer") {
                jQuery(".product-title a").attr("href", langsrc + "writer/");
                jQuery(".product-title a").attr("href", langsrc + "writer/")
            }
        }
        function J() {
            var e = zohouser.DISPLAY_NAME;
            if (e) {
                te(".header").addClass("uheader");
                if (!te("body").hasClass("body-umain")) {
                    te("body").addClass("body-umain")
                }
                te("body").addClass("umain");
                if (te("body").find(".main")) {
                    te(".main").addClass("umain");
                    te(document).trigger("umain-trigger")
                }
                if (dcenabled) {
                    if (!te(".umain").hasClass("zNewDcSetup")) {
                        te(".umain").addClass("zNewDcSetup")
                    }
                }
                getusername = decodeHexString(zohouser.DISPLAY_NAME)
            }
        }
        function L() {
            getAllField = te(".signup-box .sgfrm input");
            if (getAllField.length != 0) {
                te(".signup-box form").eq(0).css({
                    opacity: "0"
                });
                setTimeout(function() {
                    te(".signup-box form").eq(0).animate({
                        opacity: "1"
                    })
                }, 1e3);
                if (te(".signup-box").hasClass("buttomsignup")) {
                    te("html, body").animate({
                        scrollTop: te(".signup-box form").offset().top - 300
                    }, 1e3, function() {
                        setTimeout(function() {
                            te(".focusin").removeClass("focusin")
                        }, 500)
                    })
                } else {
                    te("html, body").animate({
                        scrollTop: 0
                    }, 1e3, function() {
                        setTimeout(function() {
                            te(".focusin").removeClass("focusin")
                        }, 500)
                    })
                }
                setTimeout(function() {
                    var e = te(".signup-box .sgfrm").eq(0).find("input");
                    e.length > 1 ? e.eq(1).addClass("focusin").focus() : e.eq(0).addClass("focusin").focus()
                }, 2e3)
            }
        }
        function X() {
            var e = '<div class="mobile-menu-signup"><a href="' + zPrdSignupLink + '?src=mtry-hbm">' + zPrdSignupLinkText + '</a><a href="' + zPrdLoginLink + '">SIGN IN</a> <div class="mobile-menu-moreprd"><a href="https://www.zoho.' + domainOne + "/products.html?ref=m-" + productName + '">All Zoho Products</a></div></div>';
            te(".product-nav-links .menu .featured-apps-part").html(e)
        }
        function P() {
            var e;
            if (!getusername) {
                var a = nameServices[0][allProductlowerCase.indexOf(productName)];
                if (typeof a != "undefined" && typeof a != "") {
                    var t = "";
                    currentLang != "" ? t = "service_language=" + currentLang + "&" : t = "";
                    e = '<a class="user-icon" href="https://accounts.zoho.com/login?' + t + "servicename=" + a + '">User Icon</a>';
                    _globalAccess = e
                }
            }
            if (te(".product-nav-links .menu .featured-apps-part").length < 1) {
                var o = Drupal.t("Related Products");
                if (productName == "home") {
                    o = Drupal.t("Our Products")
                }
                var n = '<li class="featured-apps-part"><div class="mobile-menu-moreprd moreprd-nonloggedin"><a href="' + langsrc + '">' + Drupal.t("All Zoho Products") + "</a></div></li>";
                te(".product-nav-links .menu").append(n)
            }
            if (window.outerWidth <= 767) {
                if (f == 0) {
                    f = 1;
                    te(".ptmenu").addClass("sticky");
                    te(".product-nav-links .menu").css({
                        height: window.innerHeight - te("#mini-panel-product_menu").outerHeight()
                    })
                }
            }
            var r = te(".product-header-top .menu").children();
            te(r[1]).addClass("selected");
            var i = te(".view-content");
            var s = te("body").find(i);
            if (s.length > 0) {
                var s = te(i).children();
                if (s.length > 3) {
                    i.addClass("plane-four-column")
                }
            }
        }
        function D() {
            if (!customvar.customclean) {
                if (window.innerWidth > 992 && window.innerHeight < 800) {
                    if (te(".testimonial-content").length > 0) {
                        var e = te(".testimonial-content").innerHeight();
                        te(".testimonial-content").css("margin-top", (window.innerHeight - 20 - e) / 2)
                    }
                }
                if (typeof zohouser != "undefined") {
                    getusername = zohouser.DISPLAY_NAME;
                    customvar.zDomainHandling();
                    J()
                }
                if (getusername) {
                    te(".signing .signup, .signing .signin, .signup-box").hide();
                    if (te(".zh-access").length > 0 && te("body").hasClass("node-type-zoho-home")) {
                        te(".zh-access").attr("href", "https://home." + Zdomain + "." + dcdomainOne + "/home")
                    }
                }
                if (!getusername) {
                    if (te(".loggedin-userinfo").length > 0) {
                        te(".loggedin-userinfo").hide()
                    }
                    if (onlycom) {
                        te("body").addClass("newuser-product-notavail")
                    }
                    if (window.location.href.indexOf("pricing-comparison.html") > 0 || window.location.href.indexOf("pricing.html") > 0) {
                        te(".signing .signup").hide()
                    } else {
                        te(".signing .signup").show()
                    }
                    if (window.innerWidth > 991) {
                        te(".signup-box").show()
                    }
                    te(".signing .signin").show();
                    te(".try-now").addClass("signupbtn-hide").removeClass("signupbtn-show");
                    var a = "/" + productName + "/";
                    var t = Drupal.t("Sign Up Now");
                    var o = ["meeting", "workplace", "assist", "salesiq"];
                    var n = ["signup.html?version=freetrial&service=meeting&src=topbar-try", "pricing.html", "signup.html?version=freetrial", "signup.html?source=Website.Header"];
                    if (o.indexOf(productName) > -1) {
                        a += n[o.indexOf(productName)];
                        if (productName == "mail" || productName == "workplace") {
                            t = Drupal.t("Get Started")
                        } else if (productName == "docs") {
                            t = Drupal.t("Get Started Now")
                        }
                    } else {
                        a += "signup.html"
                    }
                    if (productName == "writer") {
                        t = Drupal.t("Get Started Now")
                    }
                    var r = ["show", "writer", "crmplus", "appcreator", "crm"];
                    k = "";
                    currentLang != "" ? k = "/" + currentUrlLang : k = k;
                    var i = k + a;
                    var s = k + "/" + productName;
                    var l = t;
                    if (r.indexOf(productName) < 0) {
                        var s = k + "/" + productName + "/login.html";
                        productName == "home" ? i = i.split("/home")[0] + i.split("/home")[1] : "";
                        productName == "mail" ? i = langsrc + "mail/zohomail-pricing.html" : ""
                    }
                    if (r.indexOf(productName) > -1) {
                        if (productName == "crmplus") {
                            if (window.location.host != "www.zoho.com.cn") {
                                i = langsrc + "crm/crmplus/signup.html";
                                s = "crm/crmplus/login.html";
                                l = Drupal.t("Sign Up")
                            }
                        } else if (productName == "crm") {
                            var c = window.location.pathname;
                            i = langsrc + "crm/signup.html";
                            s = "/crm/lp/login.html";
                            if (c != "/crm/index.html" && c != "/crm/zohocrm-pricing.html" && c != "/crm/comparison.html") {
                                l = Drupal.t("Get Started")
                            } else {
                                l = Drupal.t("Sign Up Now")
                            }
                        } else if (productName == "show") {
                            i = "https://docs.zoho." + domainOne + "/" + productName + "/signup";
                            s = "https://docs.zoho." + domainOne + "/" + productName + "/signup?signin=true";
                            l = Drupal.t("Get Started Now")
                        }
                    }
                    te(".header .signing .signin").css({
                        opacity: 1
                    });
                    if (window.innerWidth <= 767) {
                        te(".user-icon").css({
                            display: "block"
                        })
                    }
                }
                if (getusername) {
                    if (!te("body").hasClass("zb-firefox")) {
                        if (global_getUrlParam("zsrc") != "") {
                            if (global_getUrlParam("zsrc").indexOf("fromproduct-remove") > -1) {
                                if (global_getUrlParam("serviceurl") != "") {
                                    if (decodeURIComponent(global_getUrlParam("serviceurl")).indexOf("/") == 0) {
                                        window.location = "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne + decodeURIComponent(global_getUrlParam("serviceurl"))
                                    } else {
                                        window.location = customvar.dcadded(global_getUrlParam("serviceurl"))
                                    }
                                } else {
                                    window.location = "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne
                                }
                            }
                        }
                    }
                    if (te(".loggedin-userinfo").length > 0) {
                        te(".loggedin-userinfo").show();
                        te(".signup-form h3,.signup-box,.login-text").hide();
                        if (te(".access-apps").length < 1) {
                            te(".loggedin-userinfo").append(" <h2 class='username'>" + Drupal.t("Welcome") + " <span>" + customvar.htmlencode(getusername) + "!</span></h2> <a class='access-apps' href=" + $gotoPage + "></a>");
                            te(".loggedin-userinfo .access-apps").html(accessZoho + " " + customvar.productName)
                        }
                    }
                    if (!hidelogin) {
                        te(".getstartedbox .signup-btn.mobile-btn, .zp-home-left .act-btn.cta-btn, .content-wrap .act-btn.cta-btn, .non-temp .act-btn.cta-btn, .bot-cta-con .act-btn.cta-btn, .getstartedbox .signup-btn.mobile-btn").css("display", "inline-block");
                        te(".node-type-zoho-home .zh-access, .act-btn.cta-btn").css({
                            opacity: "1",
                            visibility: "visible"
                        })
                    }
                    var u = window.location.href;
                    if (customvar.servicename == "") {
                        if (customvar.pServiceNames[customvar.pArr.indexOf(customvar.productName)] != null && customvar.pServiceNames[customvar.pArr.indexOf(customvar.productName)] != "undefined") {
                            customvar.service = "&servicename=" + customvar.pServiceNames[customvar.pArr.indexOf(customvar.productName)]
                        } else {
                            customvar.service = "&servicename=ZohoHome"
                        }
                    } else {
                        customvar.service = "&servicename=" + customvar.servicename
                    }
                    var d = "https://accounts." + Zdomain + "." + dcdomainOne + "/logout?serviceurl=" + encodeURI(u) + customvar.service;
                    var m = "https://accounts." + Zdomain + "." + dcdomainOne + "/u/h#home";
                    if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
                        var p = dcdomainOne == "ca" ? "zohocloud" : "zoho";
                        d = "https://accounts." + p + "." + dcdomainOne + "/logout?serviceurl=" + encodeURI(u) + customvar.service;
                        m = "https://accounts." + p + "." + dcdomainOne + "/u/h#home"
                    }
                    let e = "";
                    if (typeof zohouser != "undefined") {
                        if (typeof zohouser.ZUID != "undefined") {
                            e = "&ID=" + zohouser.ZUID
                        }
                    }
                    $userAvator = "https://contacts.zoho.com/file?t=user&fs=thumb" + e;
                    var h = '<div class="zgh-user-box"> <div class="zgh-userPanel"> <img src=' + $userAvator + " alt=" + customvar.htmlencode(getusername) + ' class="zgh-userAvatar"> <div class="zgh-userLink"> <ul> <li class="zgh-userImage"> <img src=' + $userAvator + " alt=" + customvar.htmlencode(getusername) + '> </li><li class="zgh-userName">' + customvar.htmlencode(getusername) + '</li><li class="zgh-userAccess"> <a href="https://home.' + Zdomain + "." + dcdomainOne + '">' + accessZoho + ' Home</a> </li><li class="zgh-userAccount"> <a href=' + m + ">" + myAccount + '</a> </li><li class="zgh-userLogout"><a href="' + d + '">' + signOut + "</a> </li></ul> </div></div></div>";
                    te(".signing .goto-link").hide();
                    customvar.userelem = h;
                    te(".zgh-accounts").html(h);
                    if (typeof customvar.logged != "undefined") {
                        customvar.logged()
                    }
                    if (typeof customvar.globalHeaderLogged != "undefined") {
                        customvar.globalHeaderLogged()
                    }
                    var f = 0;
                    var v = setInterval(function() {
                        if (te(".zw-product-header .zgh-accounts").length > 0) {
                            te(".zw-product-header .zgh-accounts").html(h);
                            te(".zgh-userAccess a").attr("href", te(".act-btn.cta-btn").attr("href"));
                            te(".zgh-userAccess a").html(te(".act-btn.cta-btn").html());
                            clearInterval(v)
                        }
                        if (f > 40) {
                            clearInterval(v)
                        }
                        f++
                    }, 200);
                    if (hidelogin) {
                        te("body").addClass("product-notavail");
                        var g = customvar.dccountry();
                        var y = te("body").attr("data-prdname-display") ? te("body").attr("data-prdname-display") : productName;
                        y = y.indexOf("zoho") > -1 ? y : "Zoho " + y;
                        if (typeof customvar.notavailProductName != "undefined") {
                            y = customvar.notavailProductName
                        }
                        var b = te(".act-btn.cta-btn, .zgh-userAccess, .access-apps, .trynow-plan, .zfeatures-btn .zcta, a.logged-out, a.logged-in, .zcta, .zcta-new, .zw-template-zp_pricing .login, .zw-template-zp_pricing .start-freetrail, .zw-template-zp_pricing .bottom-access, .zw-template-zp_pricing .try-now-btn, .zw-template-zp_pricing .trynow, .zw-template-zp_pricing .wp-trial-container a, .zw-template-zp_pricing .zpricing-link a, .zw-template-zp_pricing .ztry-now a, .ztrial-price a");
                        b.hide();
                        var w = ["th", "pt-br", "es-xl", "de", "fr", "nl", "ar", "id", "vi", "he", "it"];
                        if (!w.includes(currentUrlLang)) {
                            te(".zw-promo-top").prepend('<div class="zDCnotif-container"><p><strong> ' + y + " </strong>" + Drupal.t("is not available in your region.") + '<a href="' + "https://www.zoho.com" + "/" + "all-products.html" + '">' + Drupal.t("Explore other apps.") + "</a> </p></div>")
                        } else if (currentUrlLang) {
                            te(".zw-promo-top").prepend('<div class="zDCnotif-container"><p><strong> ' + y + " </strong>" + Drupal.t("is not available in your region.") + '<a href="' + "https://www.zoho.com/" + currentUrlLang + "/all-products.html" + '">' + Drupal.t("Explore other apps.") + "</a> </p></div>")
                        } else {
                            te(".zw-promo-top").prepend('<div class="zDCnotif-container"><p><strong> ' + y + " </strong>" + Drupal.t("is not available in your region.") + '<a href="' + "https://www.zoho.com" + "/" + "all-products.html" + '">' + Drupal.t("Explore other apps.") + "</a> </p></div>")
                        }
                        var z = 0;
                        var C = setInterval(function() {
                            if (te(".z-bottom-cta-menu").length > 0) {
                                clearInterval(C);
                                te(".z-bottom-cta-menu").addClass("z-disabled");
                                te(".loggedin").html("Not available");
                                b.hide()
                            }
                            if (z > 50) {
                                clearInterval(C)
                            }
                            z++
                        }, 100)
                    }
                } else {
                    te("body").addClass("non-umain");
                    if (typeof customvar.nonloggedupdate != "undefined") {
                        customvar.nonloggedupdate()
                    }
                    if (typeof customvar.nonlogged != "undefined") {
                        customvar.nonlogged();
                        var f = 0;
                        var v = setInterval(function() {
                            if (te(".zlogin-menu").length > 0) {
                                te(".zlogin-menu a").attr("href", te(".zgh-login").attr("href"));
                                clearInterval(v)
                            }
                            if (f > 20) {
                                clearInterval(v)
                            }
                            f++
                        }, 200)
                    }
                    if (typeof customvar.nonlogged == "undefined" && te(".product-header-top .zgh-signup").length) {
                        if (!te(".product-header-top .zgh-signup").attr("href").includes(customvar.productName)) {
                            te(".product-header-top .zgh-signup").attr("href", langsrc + "signup.html")
                        }
                    }
                    if (typeof customeCallWatchBtn != "undefined") {
                        customeCallWatchBtn()
                    }
                    te(".product-header-top .zgh-accounts .zgh-signup, .zgh-accounts .zgh-login").css("display", "inline-block");
                    te(".act-btn.cta-btn, .node-type-zoho-home .zh-signup").css({
                        opacity: "1",
                        visibility: "visible"
                    });
                    te(".product-header-top .zgh-accounts .zgh-login").css("display", "none")
                }
                te('a[href*="mailto:abuse@zoho.com"]').html("abuse@" + _zcopr + ".com").attr("href", "mailto:abuse@zoho.com");
                if (dcdomainOne == "eu") {
                    te('a[href*="mailto:abuse@zoho.com"]').html("abuse@eu." + _zcopr + ".com").attr("href", "mailto:abuse@zoho.com");
                    te('a[href*="mailto:postmaster@zoho.com"]').html("postmaster@eu." + _zcopr + ".com").attr("href", "mailto:postmaster@zoho.com")
                }
                customvar.dcbasedimage()
            } else {
                if (typeof zohouser != "undefined") {
                    getusername = decodeHexString(zohouser.DISPLAY_NAME);
                    te(".header").addClass("uheader");
                    te("body").addClass("body-umain").addClass("umain");
                    if (te("body").find(".main")) {
                        te(".main").addClass("umain");
                        te(document).trigger("umain-trigger")
                    }
                    dcenabled ? te(".umain").addClass("zNewDcSetup") : "";
                    if (!te("body").hasClass("zb-firefox")) {
                        if (global_getUrlParam("zsrc") != "") {
                            if (global_getUrlParam("zsrc").indexOf("fromproduct-remove") > -1) {
                                if (global_getUrlParam("serviceurl") != "") {
                                    if (decodeURIComponent(global_getUrlParam("serviceurl")).indexOf("/") == 0) {
                                        window.location = "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne + decodeURIComponent(global_getUrlParam("serviceurl"))
                                    } else {
                                        window.location = customvar.dcadded(global_getUrlParam("serviceurl"))
                                    }
                                } else {
                                    window.location = "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne
                                }
                            }
                        }
                    }
                    if (te(".loggedin-userinfo").length > 0) {
                        te(".loggedin-userinfo").show();
                        te(".signup-form h3,.signup-box,.login-text").hide();
                        if (te(".access-apps").length < 1) {
                            te(".loggedin-userinfo").append(" <h2 class='username'>" + Drupal.t("Welcome") + " <span>" + customvar.htmlencode(getusername) + "!</span></h2> <a class='access-apps' href=" + $gotoPage + "></a>");
                            te(".loggedin-userinfo .access-apps").html(accessZoho + " " + customvar.productName)
                        }
                    }
                } else {
                    te(".loggedin-userinfo").hide();
                    window.location.href.indexOf("pricing-comparison.html") > 0 || window.location.href.indexOf("pricing.html") > 0 ? te(".signing .signup").hide() : te(".signing .signup").show();
                    window.innerWidth > 991 ? te(".signup-box").show() : "";
                    te(".signing .signin").show();
                    te(".try-now").addClass("signupbtn-hide").removeClass("signupbtn-show")
                }
            }
        }
        function ee() {
            setTimeout(function() {
                if (te(".signup-box").length > 0) {
                    for (var e = 0; e < te(".sgfrm input").length; e++) {
                        if (te(".sgfrm input").eq(e).val() != "undefined" && te(".signup-box").css("display") == "block") {
                            if (te(".sgfrm input").eq(e).val() != "") {
                                if (te(".sgfrm input").eq(e).prev().hasClass("placeholder")) {
                                    te(".sgfrm input").eq(e).parent().addClass("added-placeholder")
                                }
                            }
                        }
                    }
                }
            }, 500)
        }
        te(document).on("blur", "input", function() {
            var e = te(this).val();
            if (e == "" || e == null) {
                te(this).parent().removeClass("added-placeholder")
            } else {
                te(this).parent().addClass("added-placeholder")
            }
        }).on("focus", "input", function() {
            var e = te(this).val();
            if (e == "" || e == null) {
                te(this).parent().removeClass("").addClass("added-placeholder")
            } else {
                te(this).parent().addClass("added-placeholder")
            }
        }).on("change", "input", function() {
            ee()
        });
        te(".navbar-toggle").click(function(e) {
            e.stopPropagation();
            te(".header-menu-2 ul.menu").slideToggle()
        });
        if (te("#zohoiam").length > 0) {
            var ae = te("#zohoiam").attr("src").split(".zoho.").join("." + ZdomainName + ".");
            te("#zohoiam").attr("src", ae)
        }
        setTimeout(function() {
            jQuery(".animation-wrap > div").each(function(e) {
                var a = jQuery(this);
                setTimeout(function() {
                    a.addClass("animated")
                }, (e + 1) * 100)
            })
        }, 100);
        var A = jQuery(".features-list").children();
        var Z = [];
        for (var t = 0; t < A.length; t++) {
            Z[t] = jQuery(A[t]).offset().top - window.innerHeight + jQuery(".features-list li").innerHeight()
        }
        jQuery(window).scroll(function() {
            var e = jQuery(window).scrollTop();
            for (var a = 0; a < A.length; a++) {
                if (e > Z[a]) {
                    if (a % 2 == 1) {
                        jQuery(A[a]).addClass("from-right")
                    } else {
                        jQuery(A[a]).addClass("from-left")
                    }
                }
            }
            if (e > Z[A.length - 1] + 150) {
                jQuery(".bottom-signup,.download-features a").css({
                    opacity: 1
                })
            }
            jQuery(".product-header.sub-header").css({
                top: -76
            })
        });
        var C = false;
        var W = jQuery(".product-menu").css("display");
        jQuery("body").click(function(e) {
            if (e.target.className == "product-menu") {} else if (e.target.className == "sub-menu-icon") {
                if (C == false) {
                    C = true;
                    jQuery(".product-menu").slideDown(300)
                } else {
                    C = false;
                    jQuery(".product-menu").slideUp(300)
                }
            } else {
                if (C == true) {
                    C = false;
                    jQuery(".product-menu").slideUp(300);
                    jQuery("html,body").css({
                        overflow: "auto"
                    })
                }
            }
        });
        jQuery(".product-menu li").click(function(e) {
            var a = jQuery(this).attr("class");
            var t = a.split("-");
            if (t[0] == "crmplus") {
                e.preventDefault();
                var o = jQuery("section[data=" + t[1] + "]").offset().top;
                jQuery("html, body").animate({
                    scrollTop: o - jQuery(".sub-header").innerHeight()
                }, 1e3, "easeInOutQuad")
            }
        });
        jQuery(".bottom-signup,.signing .signup").click(function(e) {
            if (productName == "crm") {
                return
            }
            e.preventDefault();
            jQuery("html, body").animate({
                scrollTop: 0
            }, 1e3, "easeInOutQuad");
            setTimeout(function() {
                jQuery(".signup-box div:first-child input").focus()
            }, 1e3)
        })
    })
}
)(jQuery);
(function(c) {
    c.fn.visible = function(e) {
        var a = c(this)
          , t = c(window)
          , o = t.scrollTop() - 200
          , n = o + (t.height() + 300)
          , r = a.length > 0 ? a.offset().top + 250 : 0
          , i = r + a.height()
          , s = e === true ? i : r
          , l = e === true ? r : i;
        return l <= n && s >= o
    }
}
)(jQuery);
(function(r) {
    function e() {
        if ($(window).outerWidth() > 767) {
            r(".content-wrap:not(.animated)").each(function() {
                var e = r(this)
                  , a = e.attr("data-delay") ? e.attr("data-delay") : 0;
                setTimeout(function() {
                    if (e.visible(true)) {
                        e.addClass(e.attr("data-animation"));
                        e.addClass("animated")
                    }
                }, a)
            })
        }
        r(".content-wrap:not(.bottom-animated)").each(function() {
            var e = r(this)
              , a = r(window)
              , t = a.scrollTop()
              , o = e.offset().top
              , n = a.height();
            if (t > o - n) {
                e.addClass("bottom-animated")
            }
        });
        r(".content-wrap:not(.top-animated)").each(function() {
            var e = r(this)
              , a = r(window)
              , t = a.scrollTop()
              , o = e.offset().top
              , n = a.height();
            if (t > o) {
                e.addClass("top-animated")
            }
        });
        r(".content-wrap:not(.middle-animated)").each(function() {
            var e = r(this)
              , a = r(window)
              , t = a.scrollTop()
              , o = e.offset().top
              , n = a.height();
            if (t > o - n / 2) {
                e.addClass("middle-animated")
            }
        })
    }
    r(document).ready(function() {
        e()
    });
    r(window).resize(function() {
        e()
    });
    r(window).scroll(function() {
        e()
    })
}
)(jQuery);
function zohoGASignupEvent() {}
function zohoFedClickEvent() {}
function zcTrackClick() {}
$(window).on("load", function() {
    customvar.termslink.setDefaultTerm();
    customvar.vimcall();
    if (currentUrlLang != "") {
        var e = $(".add-lang");
        for (var a = 0; a < e.length; a++) {
            if (e.eq(a).hasClass("nonlang")) {} else {
                if (typeof e.eq(a).attr("href") != "undefined") {
                    if (e.eq(a).attr("href").indexOf("/") == 0) {
                        var t = e.eq(a).attr("href");
                        e.eq(a).attr("href", "/" + currentUrlLang + t)
                    }
                }
            }
        }
    }
    var o = ["crm", "crmplus", "zohobigin", "marketingplus", "zakya", "canvas", "sprints", "zeptomail", "vanihq", "qntrl", "nila"];
    if (o.indexOf(customvar.productName) < 0) {
        if (predomain) {
            $.getScript(customvar.ocmsprelink + "/sites/zweb/js/common/crmwebforms.js")
        } else {
            $.getScript("https://www.zohowebstatic.com/sites/zweb/js/common/crmwebforms.js")
        }
    }
    var n = 0;
    var r = setInterval(function() {
        if (_preZ == window.location.hostname && customvar.pathname == "/creator/footer-test.html") {
            if ($(".zw-footer-search-lang-block").length) {
                clearInterval(r);
                $(".zw-footer-search-lang-block").append('<div class="zlang-container"><span class="zlang-text">' + $(".zgh-localSelect").html() + '</span><div class="zlang-container-inner" style="display: none;"><ul>' + '<li><a class="nonlang-ld" data-lang="es-xl" href="">Español</a></li><li><a class="nonlang-ld" data-lang="pt-br" href="">Português (Brasil)</a></li><li><a class="nonlang-ld" data-lang="de" href="">Deutsch</a></li><li><a class="nonlang-ld" data-lang="fr" href="">Français</a></li>' + "</ul></div></div>");
                $(".zlang-text").show();
                $(".overMe, .zlang-container").on("mouseover", function() {
                    $(this).children(".zlang-container-inner").show()
                });
                $(".overMe, .zlang-container").on("mouseout", function() {
                    $(this).children(".zlang-container-inner").hide()
                });
                $(".zlang-container").on("click", function(e) {
                    if (!$(this).children(".zlang-container-inner").hasClass("show")) {
                        $(this).children(".zlang-container-inner").removeClass("hide").addClass("show");
                        $(this).children(".zlang-container-inner").show()
                    } else {
                        $(this).children(".zlang-container-inner").removeClass("show").addClass("hide");
                        $(this).children(".zlang-container-inner").hide()
                    }
                })
            }
        } else if ($(".ZF-dlsel").length > 0 || $(".zw-footer-search-lang-block").length > 0 && customvar.newFooterProducts.includes(customvar.productName)) {
            clearInterval(r);
            if ($(".zgh-localBox ul").html() != "") {
                if ($(".zgh-localBox ul li").length > 0) {
                    if (customvar.newFooterProducts.includes(customvar.productName)) {
                        $(".zw-footer-search-lang-block").append('<div class="zlang-container"><span class="zlang-text">' + $(".zgh-localSelect").html() + '</span><div class="zlang-container-inner" style="display: none;"><ul>' + $(".zgh-localBox ul").html() + "</ul></div></div>")
                    } else {
                        $(".ZF-dlsel").append('<div class="zlang-container"><span class="zlang-text">' + $(".zgh-localSelect").html() + '</span><div class="zlang-container-inner" style="display: none;"><ul>' + $(".zgh-localBox ul").html() + "</ul></div></div>")
                    }
                    $(".zlang-text").show();
                    $(".zlang-container-inner ul li").length == 1 ? $(".zlang-container-inner").addClass("localBox-single") : "";
                    $(".overMe, .zlang-container").on("mouseover", function() {
                        $(this).children(".zlang-container-inner").show()
                    });
                    $(".overMe, .zlang-container").on("mouseout", function() {
                        $(this).children(".zlang-container-inner").hide()
                    });
                    $(".zlang-container").on("click", function(e) {
                        if (!$(this).children(".zlang-container-inner").hasClass("show")) {
                            $(this).children(".zlang-container-inner").removeClass("hide").addClass("show");
                            $(this).children(".zlang-container-inner").show()
                        } else {
                            $(this).children(".zlang-container-inner").removeClass("show").addClass("hide");
                            $(this).children(".zlang-container-inner").hide()
                        }
                    })
                }
            } else {
                $(".zglob-lang").remove()
            }
            if (currentUrlLang == "jp") {
                if (typeof customvar.supportId != "undefined") {
                    $(".zf-support-mail a").eq(0).html(customvar.supportId());
                    $(".zf-support-mail a").eq(0).attr("href", "mailto:" + customvar.supportId())
                }
            }
            customvar.zChaSupIDByReg()
        }
        if (n > 100) {
            clearInterval(r)
        }
        n++
    }, 100);
    if (window.innerWidth <= 767) {
        $(".footer-search-input").attr("placeholder", Drupal.t("Search") + " zoho." + domainOne)
    } else {
        $(".footer-search-input").attr("placeholder", Drupal.t("Search for product overviews, FAQs, and more..."))
    }
    if (_preZ == window.location.hostname && currentUrlLang != "jp") {} else {
        var i = customvar.productName == "accounts" || customvar.productName == "contacts" ? "support@zohoaccounts.com" : "support@zoho.com";
        var s = '<div class="ZF-support"><div class="ZF-container"><div class="ZF-contact"><ul><li class="zf-support-mail"><a id="zf-support-mailid" href="mailto:' + i + '">' + i + '</a></li><li class="zglob-lang"><div class="ZF-dlsel"><div class="zdc-container"><span class="zdc-text">Select DC</span><div class="zdc-container-inner"><ul><li><a href="https://www.zoho.in/">IN DC</a></li><li><a href="https://www.zoho.com/">US DC</a></li><li><a href="https://www.zoho.eu/">EU DC</a></li></ul></div></div></div></li></ul></div></div></div>';
        if (customvar.newFooterProducts.includes(customvar.productName)) {
            s = '<a id="zf-support-mailid" href="mailto:' + i + '">' + i + "</a>";
            if ($(".zwf-support-mail-links").length > 0) {
                $(".zwf-support-mail-links").append(s)
            }
        } else {
            if (currentUrlLang == "jp") {
                if ($(".common-links").length > 0) {
                    $(".common-links").prepend(s)
                }
            }
        }
    }
    if (!$("body").hasClass("r-g-f")) {
        if (customvar.newFooterProducts.includes(customvar.productName)) {
            $(".zw-footer-search-lang-block").prepend('<div class="footer-search"> <form id="footer-search-action"> <input class="footer-search-input" aria-label="Search for product overviews, FAQs, and more..." autocomplete="off" placeholder="' + Drupal.t("Search for product overviews, FAQs, and more...") + '" type="text"> <button class="footer-search-btn" aria-label="footer-search-btn" type="submit" value="Submit"><span></span></button> </form></div>')
        } else {
            $(".ZPprivacy").before('<div class="footer-search"> <form id="footer-search-action"> <input class="footer-search-input" aria-label="Search for product overviews, FAQs, and more..." autocomplete="off" placeholder="' + Drupal.t("Search for product overviews, FAQs, and more...") + '" type="text"> <button class="footer-search-btn" aria-label="footer-search-btn" type="submit" value="Submit"><span></span></button> </form></div>')
        }
    }
    if (_preZ == window.location.hostname && customvar.pathname == "/creator/footer-test.html") {
        $(".zw-footer-search-lang-block").prepend('<div class="footer-search"> <form id="footer-search-action"> <input class="footer-search-input" aria-label="Search for product overviews, FAQs, and more..." autocomplete="off" placeholder="' + Drupal.t("Search for product overviews, FAQs, and more...") + '" type="text"> <button class="footer-search-btn" aria-label="footer-search-btn" type="submit" value="Submit"><span></span></button> </form></div>');
        $(".zwf-support-mail-links").append('<a id="zf-support-mailid" href="mailto:support@zohosites.com">support@zohosites.com</a>')
    }
    if (currentUrlLang != "") {
        $(".gdprc").attr("target", "_blank")
    }
    $(document).on("submit", "#footer-search-action", function(e) {
        e.preventDefault();
        var a = $(".footer-search-input").val().trim();
        var t;
        if (currentUrlLang == "") {
            if (customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host.indexOf("zohoflow") > 0) {
                t = "https://www" + ".zoho" + ".com/search-results.html"
            } else {
                t = window.location.origin + "/search-results.html"
            }
        } else {
            t = window.location.origin + "/" + currentUrlLang + "/" + "search-results.html"
        }
        if (a != "") {
            window.location = t + "?query=" + encodeURIComponent(a)
        }
    });
    if ($(".footer-links-wrap .product-links").hasClass("four-column")) {
        $(".footer-sec-wrap.two-column").addClass("fourColList")
    }
    if ($("#ref_value").length < 1) {
        if ($(".signup-box form").length > 0) {
            var l = customvar.czmr();
            var c = _lhref;
            if (customvar.czmr().indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
                l = customvar.czmr().split(".html")[0] + ".html"
            }
            if (c.indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
                c = customvar.absurl
            }
            c = c.length > 300 ? c.substring(0, 300) : c;
            $(".signup-box form").append('<input id="ref_value" name="ref_value" type="hidden" value="' + customvar.czms() + "," + l + "," + customvar.cuid() + "," + customvar.mydevice() + "," + c + '">')
        }
    }
    var u = $("body a");
    for (var a = 0; a < u.length; a++) {
        if (u.eq(a).attr("href") != "undefined" && u.eq(a).attr("href") != null && u.eq(a).attr("href") != "" && u.eq(a).attr("data-noneedopener") != "") {
            if (typeof u.eq(a).attr("target") != "undefined") {
                if (u.eq(a).attr("target") == "_blank") {
                    u.eq(a).attr("rel", "noopener");
                    if (u.eq(a).hasClass("czone-nofollow")) {
                        u.eq(a).attr("rel", "noopener nofollow")
                    }
                }
            }
            if (u.eq(a).attr("href").indexOf("forums.zoho.com") > -1) {
                u.eq(a).attr("href", u.eq(a).attr("href").split("forums.zoho.com").join("help.zoho.com/portal/en/community"))
            }
            if (currentUrlLang != "") {
                if (u.eq(a).attr("href").indexOf("/security.html") > 0 || u.eq(a).attr("href").indexOf("/cookie-policy.html") > 0 || u.eq(a).attr("href").indexOf("/ipr-complaints.html") > 0 || u.eq(a).attr("href").indexOf("/compliance.html") > 0) {
                    if (currentUrlLang == "de" && (u.eq(a).attr("href").indexOf("/security.html") > 0 || u.eq(a).attr("href").indexOf("/privacy/cookie-policy.html") > 0)) {} else if (currentUrlLang == "pt-br" && (u.eq(a).attr("href").indexOf("/security.html") > 0 || u.eq(a).attr("href").indexOf("/privacy/cookie-policy.html") > 0 || u.eq(a).attr("href").indexOf("/compliance.html") > 0)) {} else if (currentUrlLang != "jp") {
                        u.eq(a).attr("href", u.eq(a).attr("href").split("/" + currentUrlLang + "/").join("/"));
                        u.eq(a).attr({
                            target: "_blank"
                        })
                    }
                }
            }
        }
    }
    $(".copy-right-year").html(currentYear);
    if (typeof customvar.footerloaded != "undefined") {
        customvar.footerloaded()
    }
});



function zSignupPrevent() {
    var e = document.getElementsByClassName("disabled-z-signup").length;
    if (0 < e) {
        return false
    }
}








jQuery(document).on("click", ".hide-links-btn", function() {
    jQuery(".quick-connect-links").animate({
        left: 225
    }, "1000");
    jQuery(".quick-connect-links-wrap .show-links-btn").show();
    jQuery(".quick-connect-links-wrap .show-links-btn").animate({
        right: 0
    }, "1500")
});
jQuery(document).on("click", ".show-links-btn", function() {
    jQuery(".quick-connect-links").show();
    jQuery(".quick-connect-links").animate({
        left: 0
    }, "1000");
    jQuery(".quick-connect-links-wrap .show-links-btn").show("slow");
    jQuery(".quick-connect-links-wrap .show-links-btn").animate({
        right: -45
    }, "1200")
});
jQuery(window).on("load", function() {
    jQuery(".quick-connect-links-wrap .show-links-btn").show()
});
$(window).on("load", function() {});
function langStrip() {
    if (window.location.host == "www.zoho.com" || window.location.host == "pre" + "www.zoho.com" || window.location.host == _preZ) {
        if (window.location.href.indexOf("zredirect=f") > 0) {
            customvar.lsoinfo("latinNavigate", "1")
        }
        if (currentUrlLang == "es-xl" || currentUrlLang == "fr" && CountryCode == "FR" || currentUrlLang == "nl" && CountryCode == "NL" || (CountryCode == "SA" || CountryCode == "EG") && currentUrlLang == "ar" || currentUrlLang == "pt-br" && CountryCode == "BR" || currentUrlLang == "id" && CountryCode == "ID" || currentUrlLang == "de" && CountryCode == "DE") {
            if (customvar.lAmerica.indexOf(CountryCode) > -1 || currentUrlLang == "nl" && CountryCode == "NL" || currentUrlLang == "pt-br" && CountryCode == "BR" || currentUrlLang == "fr" && CountryCode == "FR" || (CountryCode == "SA" || CountryCode == "EG") && currentUrlLang == "ar" || currentUrlLang == "id" && CountryCode == "ID" || currentUrlLang == "de" && CountryCode == "DE") {
                if (customvar.lsoinfo("latinNavigate") == "") {
                    var a = window.location.href.split("/" + currentUrlLang + "/").join("/");
                    $(".ztopstrip-container").css("display", "block");
                    $(".ztopstrip-container").append('<div class="lbanner" style="display:block"> <span class="langTxt">' + "Hello! Do you want to navigate in" + " <span>English</span>" + "?" + '</span><span class="langClose">X</span> </div>');
                    localredirectionval = "1";
                    $(".lbanner .langTxt").on("click", function() {
                        var e = "?";
                        if (a.indexOf("?") > -1) {
                            e = "&"
                        }
                        customvar.lsoinfo("latinNavigate", "1");
                        if (a.indexOf("#") > 0) {
                            a = a.split("#")[0]
                        }
                        window.location = a + e + "zredirect=f&lb=" + currentUrlLang + "&zsrc=bheader"
                    });
                    $(".lbanner .langClose").on("click", function() {
                        try {
                            $zoho.salesiq.visitor.customaction('{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}')
                        } catch (e) {}
                        $(".lbanner").remove();
                        customvar.lsoinfo("latinNavigate", "1")
                    })
                }
            }
        }
    }
    var t = CountryCode.toLowerCase();
    CountryCode.toLowerCase() == "br" || CountryCode.toLowerCase() == "pt" ? t = "pt-br" : "";
    CountryCode.toLowerCase() == "vn" ? t = "vi" : "";
    CountryCode.toLowerCase() == "sa" ? t = "ar" : "";
    CountryCode.toLowerCase() == "ja" ? t = "jp" : "";
    var e = ["ES", "AR", "BO", "CL", "CO", "EC", "GF", "PY", "PE", "SR", "UY", "VE", "MX"];
    e.indexOf(CountryCode) > -1 ? t = "es-xl" : "";
    if (customvar.lAmerica.indexOf(CountryCode) < 0) {
        if (CountryCode != "FR" && CountryCode != "BR") {
            if (CountryCode != "EG" || currentUrlLang != "ar") {
                if (CountryCode != "SA" || currentUrlLang != "ar") {
                    if (CountryCode != "NL" || currentUrlLang != "nl") {
                        if (CountryCode != "ID" && currentUrlLang != "id") {
                            if (CountryCode != "DE" && currentUrlLang != "de") {
                                var o = false;
                                if (typeof localRedirectionlist[currentUrlLang] != "undefined") {
                                    if (localRedirectionlist[currentUrlLang].split(",").indexOf(CountryCode) > -1) {
                                        o = true
                                    }
                                }
                                if (detectedLangNew != "" && !o) {
                                    if (detectedLangNew == "") {
                                        detectedLangNew = document.getElementsByTagName("body")[0].getAttribute("data-lang-list").split(",")
                                    }
                                    var n = [];
                                    for (var r = 0; r < detectedLangNew.length; r++) {
                                        if (langArr.indexOf(detectedLangNew[r]) > -1) {
                                            var i = langArr[langArr.indexOf(detectedLangNew[r])];
                                            if (i != "en" && i != "jp") {
                                                n.push(langArr[langArr.indexOf(detectedLangNew[r])])
                                            }
                                        }
                                    }
                                    var s = localStorage.getItem("zloaded") == "1";
                                    try {} catch (e) {
                                        s = true
                                    }
                                    if ((n.indexOf(t) > -1 || t == "ae" || t == "sa") && window.location.pathname.split("/")[1] != t && !s) {
                                        if (t != "ar" && typeof bannertext[t] != "undefined") {
                                            if (window.location.pathname.indexOf("/in/") < 0) {
                                                if (t == "de") {
                                                    $(".ztopstrip-container").append('<div class="langstrip"><span class="langTxt">' + bannertext[t].split(" ::: ")[1] + '!</span><span class="langBtn">' + bannertext[t].split(" ::: ")[0] + '</span><span class="langClose">X</span></div>')
                                                } else {
                                                    $(".ztopstrip-container").append('<div class="langstrip"><span class="langTxt">' + bannertext[t].split(" ::: ")[1] + " " + lancountry[t] + '!</span><span class="langBtn">' + bannertext[t].split(" ::: ")[0] + '</span><span class="langClose">X</span></div>')
                                                }
                                                $(".langstrip").css("display", "block");
                                                $(".ztopstrip-container").css("display", "block");
                                                $(".langstrip .langClose").on("click", function() {
                                                    try {
                                                        $zoho.salesiq.visitor.customaction('{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}')
                                                    } catch (e) {}
                                                    try {
                                                        localStorage.setItem("zloaded", "1")
                                                    } catch (e) {}
                                                    $(".langstrip").remove()
                                                });
                                                $(".langstrip .langBtn").on("click", function() {
                                                    var e = window.location.href;
                                                    if (t == "ae" || t == "sa") {
                                                        t = "ar"
                                                    }
                                                    if (currentUrlLang == "") {
                                                        e = e.split(window.location.host).join(window.location.host + "/" + t)
                                                    } else {
                                                        e = e.split("/" + currentUrlLang + "/").join("/" + t + "/")
                                                    }
                                                    if (localUrlLang) {
                                                        e = e.split("/" + localUrlLang).join("")
                                                    }
                                                    var a = "?";
                                                    if (e.indexOf("?") > -1) {
                                                        a = "&"
                                                    }
                                                    window.location = encodeURI(e + a + "lb=" + t);
                                                    try {
                                                        localStorage.setItem("zloaded", "1")
                                                    } catch (e) {}
                                                })
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
function newLangStrip() {
    const e = ["startups"];
    if (e.includes(customvar.productName)) {
        return false
    }
    let a = false;
    for (redirectcode in localRedirectionlist) {
        if (localRedirectionlist[redirectcode].includes(CountryCode)) {
            a = true;
            break
        }
    }
    if (a) {
        if (window.location.host == "www.zoho.com" || window.location.host == "pre" + "www.zoho.com" || window.location.host == _preZ) {
            if (window.location.href.indexOf("zredirect=f") > 0) {
                customvar.lsoinfo("latinNavigate", "1")
            }
            let e = customvar.lsoinfo("latinNavigate");
            if (e !== "")
                return;
            let a = document.querySelector(".ztopstrip-container");
            let t = document.createElement("div");
            t.setAttribute("class", "lbanner");
            t.setAttribute("style", "display:block");
            let o = document.createElement("span");
            o.setAttribute("class", "langTxt");
            o.textContent = "Hello! Do you want to navigate in English?";
            let n = document.createElement("span");
            n.setAttribute("class", "langClose");
            n.textContent = "X";
            t.appendChild(o);
            t.appendChild(n);
            a.appendChild(t);
            a.style.display = "block";
            let r = window.location.href;
            r = r.replace("/" + currentUrlLang + "/", "/");
            o.addEventListener("click", function() {
                customvar.lsoinfo("latinNavigate", "1");
                let e = r.includes("?") ? "&" : "?";
                if (r.includes("#")) {
                    r = r.substring(0, r.indexOf("#"))
                }
                window.location.href = encodeURI(r + e + "zredirect=f&lb=" + currentUrlLang + "&zsrc=bheader")
            });
            n.addEventListener("click", function() {
                try {
                    $zoho.salesiq.visitor.customaction('{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}')
                } catch (e) {}
                t.remove();
                customvar.lsoinfo("latinNavigate", "1")
            })
        }
    } else {
        if (Array.isArray(detectedLangNew)) {
            let t = CountryCode.toLowerCase();
            if (t == "ae" || t == "sa") {
                return false
            }
            if (t === "br" || t === "pt") {
                t = "pt-br"
            } else if (t === "vn") {
                t = "vi"
            } else if (t === "ja") {
                t = "jp"
            }
            const o = detectedLangNew.filter(function(e) {
                return langArr.includes(e) && e !== "en" && e !== "jp"
            });
            let a = false;
            try {
                a = customvar.lsoinfo("zloaded") == "1"
            } catch (e) {
                a = true
            }
            if (a || window.location.pathname.includes("/in/")) {
                return false
            }
            if (currentUrlLang !== t && o.includes(t)) {
                if (bannertext[t]) {
                    const n = document.createElement("div");
                    n.setAttribute("class", "langstrip");
                    const r = document.createElement("span");
                    r.setAttribute("class", "langTxt");
                    r.textContent = bannertext[t].split(" ::: ")[1];
                    const i = document.createElement("span");
                    i.setAttribute("class", "langBtn");
                    i.textContent = bannertext[t].split(" ::: ")[0];
                    const s = document.createElement("span");
                    s.setAttribute("class", "langClose");
                    s.textContent = "X";
                    n.appendChild(r);
                    n.appendChild(i);
                    n.appendChild(s);
                    if (t === "de") {
                        r.textContent += "!"
                    } else {
                        r.textContent += " " + lancountry[t] + "!"
                    }
                    const l = document.querySelector(".ztopstrip-container");
                    l.appendChild(n);
                    n.style.display = "block";
                    l.style.display = "block";
                    s.addEventListener("click", function() {
                        try {
                            $zoho.salesiq.visitor.customaction('{"eventCategory":"language-selection","eventAction":"close-button-click","eventLabel":"regional-pages"}')
                        } catch (e) {}
                        try {
                            customvar.lsoinfo("zloaded", "1")
                        } catch (e) {}
                        n.remove()
                    });
                    i.addEventListener("click", function() {
                        let e = window.location.href;
                        if (currentUrlLang === "") {
                            e = e.replace(window.location.host, window.location.host + "/" + t)
                        } else {
                            e = e.replace("/" + currentUrlLang + "/", "/" + t + "/")
                        }
                        if (localUrlLang) {
                            e = e.replace("/" + localUrlLang, "")
                        }
                        let a = e.includes("?") ? "&" : "?";
                        window.location.href = encodeURI(e + a + "zredirect=f&lb=" + t);
                        try {
                            customvar.lsoinfo("zloaded", "1")
                        } catch (e) {}
                    })
                }
            }
        }
    }
}
function coockieStrip() {
    if ((global_getUrlParam("ismobilesignup") == "" || productName != "campaigns") && (global_getUrlParam("ismobilesignup") == "" || _lhref.indexOf("privacy.html") < 0)) {
        if ($(".cookiestrip").length < 1) {
            var e = localStorage.getItem("coockiechecked") == "1";
            if (!e) {
                if (currentUrlLang == "") {
                    var a = Drupal.t("We use cookies to help us understand and serve you better.");
                    var t = window.location.host == "catalyst.zoho.eu" ? "https://www.zoho.com/privacy/cookie-policy.html" : langsrc + "privacy/cookie-policy.html";
                    $("body").prepend('<div class="cookiestrip"><div><span class="cookieTxt">' + a + '</span><a class="cookieManage" href="' + t + '" target="_blank">' + Drupal.t("View & Manage Cookies") + '</a><span class="cookieClose">' + Drupal.t("I Understand") + "</span></div></div>")
                } else {
                    var a = Drupal.t("We use cookies to help us understand and serve you better. Take a look at our ") + '<a href="https://www.zoho.com' + langsrc + 'privacy/cookie-policy.html" target="_blank">' + Drupal.t("Cookie Policy") + ".</a>";
                    $("body").prepend('<div class="cookiestrip"><div><span class="cookieTxt">' + a + '</span><a class="cookieManage" href="' + langsrc + 'privacy/cookie-policy.html?src=manage" target="_blank">' + Drupal.t("Manage") + '</a><span class="cookieClose">' + Drupal.t("OK") + "</span></div></div>")
                }
                $("body").addClass("zcstrip");
                $(".cookieClose").on("click", function() {
                    try {
                        localStorage.setItem("coockiechecked", "1")
                    } catch (e) {}
                    $("body").removeClass("zcstrip");
                    $(".cookiestrip").remove()
                })
            }
        }
    }
}
function testimonialHeight() {
    var e, a;
    e = 0;
    $(".z-testimonial-head").removeAttr("style");
    $(".z-testimonial-head").find("h4").each(function() {
        a = $(this).innerHeight();
        if (a > e) {
            e = a
        }
    });
    $(".z-testimonial-head").height(e);
    $(".z-testimonial-head").find("h4").removeAttr("style");
    $(".z-testimonial-head").removeClass("active");
    $(".z-testimonial-head").find("h4").each(function() {
        $(this).height($(this).innerHeight())
    });
    $(".z-testimonial-head").addClass("active")
}
if ($(".z-testimonial-item").length > 1) {
    testimonialHeight()
}
$(document).ready(function(U) {
    $(".header .logo, .header-part .logo").attr("href", langsrc);
    if (productName == "zohoorchestly" || productName == "bigin" || customvar.outproduct.indexOf(customvar.productName) > -1 || window.location.host == "catalyst.zoho.eu") {
        $(".header .logo, .header-part .logo").attr("href", "https://www.zoho." + domainOne + langsrc)
    }
    customvar.privacypolicylink();
    if (langArr.indexOf(currentUrlLang) > -1) {
        var e = $("body a");
        var T = ["mail", "workplace", "calendar", "zeptomail", "teaminbox", "mail360", "toolkit", "tasks", "zillum", "eprotect", "recruit"];
        for (var a = 0; a < e.length; a++) {
            if (e.eq(a).attr("href") != "undefined" && e.eq(a).attr("href") != null && e.eq(a).attr("href") != "" && !e.eq(a).attr("href").includes("/terms.html") && !e.eq(a).attr("href").includes("/privacy.html") && !e.eq(a).hasClass("czone-signup-term") && !e.eq(a).hasClass("zrlink") && !e.eq(a).parent().hasClass("footer-privacy") && !e.eq(a).parent().hasClass("footer-terms")) {
                var t = e.eq(a).attr("href").split("/").indexOf("help") < 0
                  , o = e.eq(a).attr("href").split("/").indexOf("newhelp") < 0
                  , n = e.eq(a).attr("href").indexOf("/userguide/") < 0
                  , r = e.eq(a).attr("href").indexOf("/resources/") < 0
                  , i = e.eq(a).attr("href").indexOf("/resources.html") < 0
                  , s = e.eq(a).attr("href").indexOf("blog") < 0
                  , l = "https://www.zoho.com/assist/lp/demo-registration.html?src=pricing-faq" != window.location.href
                  , c = e.eq(a).attr("href").indexOf(".pdf") < 0
                  , u = e.eq(a).attr("href").indexOf(".exe") < 0
                  , d = e.eq(a).attr("href").indexOf("/get-support-plugin.html") < 0
                  , m = e.eq(a).attr("href").indexOf("/demo-registration.html") < 0
                  , p = e.eq(a).attr("href").indexOf("/extension/zoho-assist.xpi") < 0
                  , h = e.eq(a).attr("href").indexOf("/books/") < 0
                  , f = e.eq(a).attr("href").indexOf("/expense/") < 0
                  , v = e.eq(a).attr("href").indexOf("/invoice/") < 0
                  , g = e.eq(a).attr("href").indexOf("/subscriptions/") < 0
                  , y = e.eq(a).attr("href").indexOf("/inventory/") < 0
                  , b = e.eq(a).attr("href").indexOf("/checkout/") < 0
                  , w = e.eq(a).attr("href").indexOf("/gst/") < 0
                  , z = e.eq(a).attr("href").indexOf("recruit/referrals.html") < 0
                  , C = e.eq(a).attr("href").indexOf(".deb") < 0
                  , k = e.eq(a).attr("href").indexOf("https://www.zoho.com/campaigns/contact-us.html") < 0
                  , x = e.eq(a).attr("href").indexOf("https://www.zoho.com/survey/education-discount.html") < 0
                  , O = e.eq(a).attr("href").indexOf("https://www.zoho.com/developer/signup.html") < 0
                  , _ = e.eq(a).attr("href").indexOf("reports/onpremise/eula.html") < 0
                  , S = e.eq(a).attr("href").indexOf("reports/onpremise/get-quote.html") < 0
                  , j = e.eq(a).attr("href").indexOf("cliq/developers/terms.html") < 0
                  , N = e.eq(a).attr("href").indexOf("/developer/") < 0
                  , L = e.eq(a).attr("href").indexOf("/creator/request-quote.html") < 0
                  , P = e.eq(a).attr("href").indexOf("/sprints/contact.html") < 0
                  , D = e.eq(a).attr("href").indexOf("/backstage/contact.html") < 0
                  , M = e.eq(a).attr("href").indexOf("https://www.zoho.com/teamdrive/contact.html") < 0
                  , I = e.eq(a).attr("href").indexOf("https://www.zoho.com/workdrive/contact.html") < 0
                  , q = e.eq(a).attr("href").indexOf("webinars.html") < 0
                  , R = e.eq(a).attr("href").indexOf("analytics/onpremise/get-quote.html") < 0
                  , B = e.eq(a).attr("href").indexOf("/workdrive/contact.html") < 0
                  , A = !0;
                "com.cn" == domainOne && (A = !1),
                "crm" != productName || "fr" != currentUrlLang && "de" != currentUrlLang && "pt-br" != currentUrlLang && "es-xl" != currentUrlLang || (t = !0,
                r = !0,
                N = !0);
                var Q = e.eq(a).attr("href").indexOf(".zip") < 0
                  , G = e.eq(a).attr("href").indexOf("become-a-partner") < 0
                  , W = e.eq(a).attr("href").indexOf("creator/developers/find-a-developer.html") < 0
                  , F = e.eq(a).attr("href").indexOf("campaigns/email-marketing-demo.html") < 0
                  , H = e.eq(a).attr("href").indexOf("marketingautomation/marketing-automation-demo.html") < 0
                  , V = e.eq(a).attr("href").indexOf("sign/legal-guide.html") < 0
                  , K = e.eq(a).attr("href").indexOf("marketingautomation/request-quote.html") < 0
                  , Y = e.eq(a).attr("href").indexOf(".rpm") < 0
                  , J = e.eq(a).attr("href").indexOf("schedule-your-instagram-posts-on-zoho-social.html") < 0
                  , X = e.eq(a).attr("href").indexOf("people/request-quote.html") < 0
                  , ee = e.eq(a).attr("href").indexOf("forms/integrations/zoho-campaigns.html") < 0
                  , ae = !e.eq(a).hasClass("nonlang")
                  , te = !e.eq(a).hasClass("nonlang-ld");
                $(".nonlang").each(function() {
                    $(this).attr({
                        target: "_blank"
                    })
                });
                var Z = true;
                if (typeof $("body").attr("site") != "undefined") {
                    if ($("body").attr("site") == "zblogs") {
                        Z = false
                    }
                }
                if (t && o && n && r && i && s && l && c && u && d && m && p && h && f && v && g && y && b && w && z && C && k && x && O && _ && S && j && N && L && P && D && M && q && R && B && I && A && Q && G && W && F && H && V && K && Y && J && X && ae && ee && Z && te) {
                    if (e.eq(a).attr("href").split("/")[1] == productName) {
                        if (!e.eq(a).attr("href").includes("terms.html")) {
                            var E = encodeURI("/" + currentUrlLang + e.eq(a).attr("href"));
                            e.eq(a).attr("href", E)
                        }
                    } else if (e.eq(a).attr("href").split("/")[2] == "www.zoho.com") {
                        if (allProductlowerCase.indexOf(e.eq(a).attr("href").split("/")[3]) > -1) {
                            var E = encodeURI("https://www.zoho.com/" + currentUrlLang + e.eq(a).attr("href").split("www.zoho.com")[1]);
                            e.eq(a).attr("href", E)
                        }
                    } else if (e.eq(a).attr("href").split("/")[2] == "www.zoho.com") {
                        if (allProductlowerCase.indexOf(e.eq(a).attr("href").split("/")[3]) > -1) {
                            var E = encodeURI("https://www.zoho.com/" + currentUrlLang + e.eq(a).attr("href").split("www.zoho.com")[1]);
                            e.eq(a).attr("href", E)
                        }
                    } else if (window.location.pathname == "/gdpr.html" || window.location.pathname == "/privacy.html" || window.location.pathname == "/terms.html" || window.location.pathname == "/policy.html" || window.location.pathname == "/ipr-complaints.html" || window.location.pathname == "/security.html") {
                        var E = encodeURI("https://www.zoho.com/" + currentUrlLang + e.eq(a).attr("href").split("www.zoho.com")[1]);
                        e.eq(a).attr("href", E)
                    } else if (e.eq(a).attr("href") == "/security.html") {
                        var E = encodeURI("/" + currentUrlLang + e.eq(a).attr("href"));
                        e.eq(a).attr("href", E)
                    }
                }
                if (e.eq(a).attr("href").indexOf("help/") > -1 || e.eq(a).attr("href").indexOf("blog") > -1) {
                    if (currentUrlLang != "jp") {
                        e.eq(a).attr("target", "_blank")
                    }
                    if (e.eq(a).attr("href").split("/" + currentUrlLang + "/") > -1) {
                        var E = encodeURI(e.eq(a).attr("href").split.split("/" + currentUrlLang + "/").join("/"));
                        e.eq(a).attr("href", E)
                    }
                }
            }
        }
    }
});
var intervalCount = 0;
function CheckelEment() {
    var a = setTimeout(function() {
        if ($(".zgdprform-countrylist-container").length > 0) {
            var e = document.createElement("script");
            e.type = "text/javascript";
            if (window.location.host == _preZ) {
                e.src = "https://" + _preZ + "/sites/zweb/js/common/gdprcompliance.js"
            } else {
                e.src = "https://www.zohowebstatic.com/sites/zweb/js/common/gdprcompliance.js"
            }
            document.getElementsByTagName("head")[0].appendChild(e);
            clearInterval(a)
        } else {
            intervalCount++;
            if (intervalCount < 50) {
                CheckelEment()
            }
        }
    }, 500)
}
var intervalSignupCount = 0;
$(document).on("focus", ".globalcountrycode-signup", function() {
    $(".za-country-container").addClass("added-placeholder")
});
$(document).on("blur", ".globalcountrycode-signup", function() {
    $(".za-country-container").removeClass("added-placeholder")
});
function CheckelEmentSignup() {
    var a = setTimeout(function() {
        if ($(".signup-box form").length > 0) {
            if ($(".za-captcha-container").length > 0) {
                if ($(".za-country-container").length < 1) {
                    $(".za-captcha-container").after('<div class="za-country-container za-country-container-arrow"> <select class="form-input countryCnt za-country-select globalcountrycode-signup" name="country" id="country" placeholder="Select Country" aria-invalid="false"></select> </div>')
                }
                if ($(".za-newsletter-container").length > 0) {
                    $(".za-newsletter-container").html('<label for="newsletter" class="news-signup sign_agree"> <input tabindex="1" class="za-newsletter" type="checkbox" id="newsletter" name="newsletter" value="true" onclick="toggleNewsletterField()"> <span class="icon-medium" id="signup-newsletter"></span> <span>' + _txtIwould + "</span> </label>");
                    $(".za-newsletter-container").css("display", "none");
                    if (window.location.href.indexOf("mdm-cloud.html") > 0 && window.location.host == _preZ) {
                        $(".za-newsletter-container").addClass("zshow");
                        $(".icon-medium").addClass("checked");
                        $("#signupform [name='newsletter']").attr("checked", "true")
                    }
                }
            }
            if ($(".za-country-container").length > 0) {
                if ($(".za-country-container .placeholder").length < 1) {
                    $(".za-country-container").prepend('<span class="placeholder">' + Drupal.t("Country/Region") + "</span>")
                }
            }
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.src = "https://www.zohowebstatic.com/sites/zweb/js/common/gdpr-compliance-signup.js";
            if (window.location.host == _preZ) {
                e.src = "https://" + _preZ + "/sites/zweb/js/common/gdpr-compliance-signup.js"
            }
            document.getElementsByTagName("head")[0].appendChild(e);
            clearInterval(a)
        } else {
            intervalSignupCount++;
            if (intervalSignupCount < 500) {
                CheckelEmentSignup()
            }
        }
    }, 1)
}
$(document).ready(function() {
    if (typeof CheckelEment == "function") {
        CheckelEment()
    }
    if (customvar.mynewsignup.indexOf(customvar.productName) < 0) {
        if (typeof CheckelEmentSignup == "function") {
            if (currentUrlLang != "jp") {
                if (customvar.productName == "crm" || customvar.productName == "desk") {
                    CheckelEmentSignup()
                }
            }
        }
    }
});
$(document).on("click", ".umain .cta-btn.logged-in, .userinfo-details .userinfo-access", function(e) {
    if ($(this).attr("href").indexOf("_ga")) {
        e.preventDefault();
        window.location = $(this).attr("href").split("?_ga")[0]
    }
});
(function() {
    if (navigator.appName == "Microsoft Internet Explorer" || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || typeof $.browser !== "undefined" && $.browser.msie == 1) {
        $("body").addClass("IE")
    }
}
)();
var vidDataUrl = "";
$(document).on("click", ".vimvideo", function(e) {
    $(".zvim-model").remove();
    $("body").prepend('<div class="zvim-model"><a href="javascript:;" class="zvim-video-close"><svg class="icon-close-new" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M8.001 9.416l6.437 6.437a.497.497 0 0 0 .713-.001l.7-.7a.503.503 0 0 0 .002-.714L9.416 8.001l6.437-6.436a.497.497 0 0 0-.001-.713l-.7-.7a.503.503 0 0 0-.714-.002L8.001 6.587 1.565.15a.497.497 0 0 0-.713.001l-.7.7a.503.503 0 0 0-.002.714L6.587 8 .15 14.438a.497.497 0 0 0 .001.713l.7.7a.503.503 0 0 0 .714.002L8 9.416z"></path></svg></a><div class="zc-video-modalInner"><div class="zc-video-container"><div class="zc-video-box zvim-zc-video-box"></div></div></div></div>');
    $(".zvim-model").show();
    $("body").addClass("vimactive");
    $(".zvim-model").fadeIn();
    var a = $(this).data("video");
    vidDataUrl = "";
    if (typeof $(this).data("shareurl") != "undefined") {
        vidDataUrl = $(this).data("shareurl").split("embed/")[1]
    }
    var t = (a.indexOf("?") > 0 ? "&" : "?") + (a.indexOf("autopause=1") > 0 ? "" : "autopause=1&") + (a.indexOf("dnt=1") > 0 ? "" : "dnt=1&") + (a.indexOf("autoplay=1") > 0 ? "" : "autoplay=1") + '"width="3840"height="2160"frameborder="0"allow="autoplay;fullscreen;picture-in-picture"allowfullscreentitle="1-video.mp4';
    $(".zvim-zc-video-box").append('<iframe src="' + a + t + '" class="zc-video-iframe"></iframe><div class="zvim-share-icon"><div class="zvim-share-button" title="Share"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159.35 197.17" class="share-icon"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M152.53,118.26a6.81,6.81,0,0,0-6.81,6.82v40.51a18,18,0,0,1-17.94,17.94H31.58a18,18,0,0,1-17.95-17.94V69.39A18,18,0,0,1,31.58,51.45h94.85L97.64,80.63a6.81,6.81,0,0,0,4.85,11.6,6.75,6.75,0,0,0,4.85-2l40.8-41.34a6.81,6.81,0,0,0-.26-9.82L107.09,1.78a6.82,6.82,0,0,0-9.2,10.07l28.44,26H31.58A31.62,31.62,0,0,0,0,69.39v96.2a31.62,31.62,0,0,0,31.58,31.58h96.2a31.61,31.61,0,0,0,31.57-31.58V125.08A6.82,6.82,0,0,0,152.53,118.26Z" fill="#fff"></path></g></g></svg> </svg></div></div><div class="zvim-popup-share-overlay-wrapper"><div class="zvim-overlay-bg"></div><div class="zvim-popup-share-overlay-cell"> <section class="zvim-popup-share-section"><ul class="zvim-share-list"><li class="zvim-share-list-item"> <a class="zvim-share-twitter" href="https://twitter.com/intent/tweet?url=https://youtube.com/watch?v=' + vidDataUrl + '" rel="noopener" target="_blank" role="button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs></defs><path fill="#1da1f2" d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"></path></svg> </a></li><li class="zvim-share-list-item"> <a class="zvim-share-facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://youtube.com/watch?v=' + vidDataUrl + '" rel="noopener" target="_blank" role="button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><path fill="#0a66c2" d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"></path></svg> </a></li><li class="zvim-share-list-item"> <a class="zvim-share-linkedin" href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A//youtu.be/' + vidDataUrl + '" target="_blank" rel="noopener" role="button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs></defs><path fill="#1877f2" d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909C5.763 1.291 4.472 0 2.882 0z"></path></svg> </a></li></ul> </section></div><div class="zvim-share-close"> <svg class="icon-close-new" viewBox="0 0 16 16" preserveAspectRatio="xMidYMid" focusable="false"><path class="fill" d="M8.001 9.416l6.437 6.437a.497.497 0 0 0 .713-.001l.7-.7a.503.503 0 0 0 .002-.714L9.416 8.001l6.437-6.436a.497.497 0 0 0-.001-.713l-.7-.7a.503.503 0 0 0-.714-.002L8.001 6.587 1.565.15a.497.497 0 0 0-.713.001l-.7.7a.503.503 0 0 0-.002.714L6.587 8 .15 14.438a.497.497 0 0 0 .001.713l.7.7a.503.503 0 0 0 .714.002L8 9.416z"></path></svg> </button></div>');
    if (vidDataUrl == "") {
        $(".zvim-share-icon").addClass("hidden")
    }
});
$(document).on("click", ".zvim-model, .zvim-zc-video-box, .zvim-share-button, .zvim-share-close, .zvim-share-list-item", function(e) {
    e.stopPropagation();
    if ($(this).attr("class") == "zvim-model") {
        $(".zvim-model").remove();
        $("body").removeClass("vimactive")
    } else if ($(this).attr("class") == "zvim-share-button") {
        $(".zvim-popup-share-overlay-wrapper").addClass("active");
        $(".zvim-share-icon").addClass("hidden")
    } else if ($(this).attr("class") == "zvim-share-close") {
        $(".zvim-popup-share-overlay-wrapper").removeClass("active");
        $(".zvim-share-icon").removeClass("hidden")
    } else if ($(this).attr("class") == "zvim-share-list-item") {
        var a = $(this).find("a").attr("href");
        window.open(a + vidDataUrl, "Share Zoho", "height=500,width=800,resizable=1")
    }
});
$(document).on("click", ".nonvimvideo", function(e) {
    e.stopPropagation();
    if (typeof $(this).attr("data-iframe") != "undefined" || typeof $(this).attr("data-video") != "undefined") {
        $("body").prepend('<div class="zc-video-modal"><a href="javascript:;" class="zc-video-close"></a><div class="zc-video-modalInner"><div class="zc-video-container"><div class="zc-video-box"><div id="muteYouTubeVideoPlayer" class="zc-video-iframe"></div></div></div></div></div>');
        var a = typeof $(this).attr("data-video") != "undefined" ? $(this).attr("data-video") : $(this).attr("data-iframe");
        $(".zc-video-modal").fadeIn();
        $(".zc-video-box").append('<iframe src="' + a + '" frameborder="0" allowfullscreen="" class="zc-video-iframe"></iframe>');
        $(".zc-video-modal").addClass("zc-iframe-box");
        $("body").addClass("zclock")
    }
});
function nonvimvidClose() {
    $(".zc-video-modal").remove();
    $("body").removeClass("zclock");
    $(".zc-video-iframe").remove();
    $(".zc-video-modal").removeClass("click-out zc-iframe-box zc-media-box")
}
$(document).on("click", ".zc-video-close", function() {
    nonvimvidClose()
});
$(document).on("click", ".click-out", function() {
    nonvimvidClose()
});
$(document).keyup(function(e) {
    if (e.keyCode == 27) {
        $(".zvim-model").remove();
        $("body").removeClass("vimactive");
        if ($(".zc-video-modal").length > 0) {
            nonvimvidClose()
        }
    }
});
if (!$("body").hasClass("node-type-zoho-home") && !$("body").hasClass("node-type-zoho-home-3-0")) {
    var excludeitarr = ["nila", "qntrl", "vanihq"];
    if (!excludeitarr.includes(customvar.productName)) {
        var excludearr = ["crm", "crmplus"];
        if (currentUrlLang != "jp" || !excludearr.includes(customvar.productName)) {
            var zchf = document.createElement("script");
            if ($(".load-header").length <= 0 && !_lhref.includes("com/press.html")) {
                var newzchf = document.createElement("script");
                if (predomain) {
                    newzchf.src = customvar.ocmsprelink + "/sites/zweb/js/common/zc-headerfooter-v2.js"
                } else {
                    if (window.location.hostname == _preZ) {
                        newzchf.src = "/sites/zweb/js/common/zc-headerfooter-v2.js"
                    } else {
                        newzchf.src = "https://www.zohowebstatic.com/sites/zweb/js/common/zc-headerfooter-v2.js"
                    }
                }
                document.getElementsByTagName("head")[0].appendChild(newzchf)
            }
        }
    }
}
if ($(".zoholics-global-container").length > 0) {
    var zoholics_global = document.createElement("script");
    if (predomain) {
        zoholics_global.src = customvar.ocmsprelink + "/sites/zweb/js/common/zoholics-banner.js"
    } else {
        zoholics_global.src = "https://www.zohowebstatic.com/sites/zweb/js/common/zoholics-banner.js"
    }
    document.getElementsByTagName("head")[0].appendChild(zoholics_global)
}
if ($(".zpricegroup-common").length > 0 || $(".zpricegroup-common-sl").length > 0) {
    var zcprice = document.createElement("script");
    if (predomain) {
        zcprice.src = customvar.ocmsprelink + "/sites/zweb/js/common/zc-pricing.js"
    } else {
        zcprice.src = "https://www.zohowebstatic.com/sites/zweb/js/common/zc-pricing.js"
    }
    document.getElementsByTagName("head")[0].appendChild(zcprice)
}
var zcScrExist = false;
function zcPriInit(e) {
    if (!document.getElementById("zc-script-pricing")) {
        var a = document.createElement("script");
        if (getDomain == _preZ || getDomain == _preZC || getDomain == _zcmsZC) {
            a.src = "/sites/zweb/js/common/zc-dynamic-pricing.js"
        } else {
            a.src = "https://www.zohowebstatic.com/sites/zweb/js/common/zc-dynamic-pricing.js"
        }
        a.setAttribute("id", "zc-script-pricing");
        a.addEventListener("load", e);
        document.getElementsByTagName("head")[0].appendChild(a)
    } else {
        if (typeof zpSetPricingInfo !== "undefined" || typeof zpSetPricingInfo === "function") {
            e()
        } else {
            var t = setInterval(function() {
                if (typeof zpSetPricingInfo !== "undefined" || typeof zpSetPricingInfo === "function") {
                    clearInterval(t);
                    e()
                }
            }, 100)
        }
    }
}
if (currentUrlLang == "nl" || currentUrlLang == "fr" || currentUrlLang == "de") {
    var transjs = document.createElement("script");
    if (predomain) {
        transjs.src = customvar.ocmsprelink + "/sites/zweb/js/common/transfeedback.js"
    } else {
        transjs.src = "https://www.zohowebstatic.com/sites/zweb/js/common/transfeedback.js"
    }
    document.getElementsByTagName("head")[0].appendChild(transjs);
    var transcss = document.createElement("link");
    transcss.rel = "stylesheet";
    transcss.type = "text/css";
    if (predomain) {
        transcss.href = customvar.ocmsprelink + "/sites/zweb/css/common/transfeedback.css"
    } else {
        transcss.href = "https://www.zohowebstatic.com/sites/zweb/css/common/transfeedback.css"
    }
    document.getElementsByTagName("head")[0].appendChild(transcss)
}
customvar.singlescroll = false;
customvar.sscount = 0;
customvar.maxcount = 5;
if (window.location.hostname == _preZ) {
    $("body").on("mousewheel DOMMouseScroll", function(e) {
        if ($("body").attr("scrolled") != "1" && customvar.singlescroll) {
            if (typeof e.originalEvent.detail == "number" && e.originalEvent.detail !== 0) {
                if (e.originalEvent.detail > 0) {
                    customvar.sscount++
                } else if (e.originalEvent.detail < 0) {
                    customvar.sscount--
                }
            } else if (typeof e.originalEvent.wheelDelta == "number") {
                if (e.originalEvent.wheelDelta < 0) {
                    customvar.sscount++
                } else if (e.originalEvent.wheelDelta > 0) {
                    customvar.sscount--
                }
            }
            customvar.sscount < 0 ? customvar.sscount = 0 : "";
            customvar.sscount > customvar.maxcount ? customvar.sscount = customvar.maxcount : "";
            $("body").attr("scrolled", "1");
            setTimeout(function() {
                $("body").attr("scrolled", "0")
            }, 2e3)
        }
    })
}
var fromSearch = global_getUrlParam("zgs");
jQuery(document).ready(function() {
    if (fromSearch != "" && fromSearch == 1 && $("body").hasClass("node-type-just-html")) {
        $("a[href]").attr({
            target: "_blank",
            rel: "noopener"
        });
        var e = $("#block-system-main").clone();
        $("body").html(e)
    }
});
function getLazSrc(e, a, t, o, n, r) {
    if (typeof e.attr("data-screen") !== typeof undefined && e.attr("data-screen") !== false) {
        var i = e.attr("data-screen").split(",");
        if (i.length == 1) {
            if (a >= i[0]) {
                if (t == 1) {
                    setLazImgSrc(e, 1, o, n, r)
                } else if (t == 2) {
                    setLazVidSrc(e, r, 1)
                } else {
                    setLazImgSrc(e, 0, o, n, r)
                }
            }
        } else {
            if (a >= i[0] && a <= i[1]) {
                if (t == 1) {
                    setLazImgSrc(e, 1, o, n, r)
                } else if (t == 2) {
                    setLazVidSrc(e, r, 1)
                } else {
                    setLazImgSrc(e, 0, o, n, r)
                }
            }
        }
    } else {
        if (t == 1) {
            setLazImgSrc(e, 1, o, n, r)
        } else if (t == 2) {
            setLazVidSrc(e, r, 1)
        } else {
            setLazImgSrc(e, 0, o, n, r)
        }
    }
}
function setLazImgSrc(e, a, t, o, n) {
    if (a == 1) {
        for (g = 0; g < t.length; g++) {
            var r = $(t[g]);
            if (typeof r.attr("data-srcset") !== typeof undefined && r.attr("data-srcset") !== false) {
                r.attr("srcset", r.attr("data-srcset"));
                r.removeAttr("data-srcset")
            }
        }
    }
    if (typeof o !== typeof undefined && o !== false) {
        e.attr("srcset", o);
        e.removeAttr("data-srcset")
    }
    if (typeof n !== typeof undefined && n !== false) {
        e.attr("src", n);
        e.removeAttr("data-src");
        e.addClass("data-loaded")
    }
}
function setLazVidSrc(e, a, t) {
    if (typeof a !== typeof undefined && a !== false) {
        if (t == 1) {
            e.attr("poster", a)
        } else {
            e.attr("src", a)
        }
        e.removeAttr("data-src");
        e.addClass("data-loaded")
    }
}
function imgLazy(t, o, n, r) {
    var i = $("[data-lazy]");
    if (i.length) {
        for (a = 0; a < i.length; a++) {
            var s = $(i[a]);
            objIsHid = s.attr("data-lazy");
            thatObjOff = s.offset().top;
            if (thatObjOff >= 1 || objIsHid == "true" || objIsHid == "child") {
                if (r == 1 && thatObjOff <= n.height() * 2 || r == 0 && o + n.height() * 2 >= thatObjOff) {
                    if (!s.hasClass("data-loaded")) {
                        if (objIsHid == "child") {
                            if (thatObjOff >= 1) {
                                var l = s.find("picture");
                                var u = s.find("img");
                                var m = s.find("video");
                                var p = s.find("iframe");
                                var h = s.find("[data-src]");
                                if (l.length) {
                                    for (b = 0; b < l.length; b++) {
                                        getLazSrc($(l[b]), t, 1, $(l[b]).children("source"), $(l[b]).attr("data-srcset"), $(l[b]).attr("data-src"))
                                    }
                                }
                                if (u.length) {
                                    for (c = 0; c < u.length; c++) {
                                        getLazSrc($(u[c]), t, 0, $(u[c]).children("source"), $(u[c]).attr("data-srcset"), $(u[c]).attr("data-src"))
                                    }
                                }
                                if (m.length) {
                                    for (d = 0; d < m.length; d++) {
                                        getLazSrc($(m[d]), t, 2, $(m[d]).children("source"), $(m[d]).attr("data-srcset"), $(m[d]).attr("data-src"))
                                    }
                                }
                                if (p.length) {
                                    for (e = 0; e < p.length; e++) {
                                        setLazVidSrc($(p[e]), $(p[e]).attr("data-src"), 0)
                                    }
                                }
                                if (h.length) {
                                    for (f = 0; f < h.length; f++) {
                                        if (!$(h[f]).is("picture") && !$(h[f]).is("img") && !$(h[f]).is("video") && !$(h[f]).is("iframe")) {
                                            if (typeof $(h[f]).attr("data-src") !== typeof undefined && $(h[f]).attr("data-src") !== false) {
                                                $(h[f]).css("background-image", "url(" + $($(h[f])).attr("data-src") + ")");
                                                $(h[f]).removeAttr("data-src");
                                                $(h[f]).addClass("data-loaded")
                                            }
                                        }
                                    }
                                }
                                s.addClass("data-loaded")
                            }
                        } else {
                            var v = s.closest("picture").find("source");
                            var g = s.attr("data-srcset");
                            var y = s.attr("data-src");
                            if (s.parent().is("picture")) {
                                getLazSrc(s, t, 1, v, g, y)
                            } else if (s.is("img")) {
                                getLazSrc(s, t, 0, v, g, y)
                            } else if (s.is("video")) {
                                getLazSrc(s, t, 2, v, g, y)
                            } else if (s.is("iframe")) {
                                setLazVidSrc(s, y, 0)
                            } else {
                                if (typeof y !== typeof undefined && y !== false) {
                                    s.css("background-image", "url(" + y + ")");
                                    s.removeAttr("data-src");
                                    s.addClass("data-loaded")
                                } else {
                                    s.addClass("data-loaded")
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
zLzScW = $(window);
$(document).ready(function() {
    zLzScwW = zLzScW.outerWidth();
    imgLazy(zLzScwW, 0, zLzScW, 1)
});
zLzScW.resize(function() {
    zLzScwW = zLzScW.outerWidth();
    zLzScwS = zLzScW.scrollTop();
    imgLazy(zLzScwW, zLzScwS, zLzScW, 0)
});
zLzScW.scroll(function() {
    zLzScwW = zLzScW.outerWidth();
    zLzScwS = zLzScW.scrollTop();
    imgLazy(zLzScwW, zLzScwS, zLzScW, 0)
});
function zLazyOnTrigger() {
    zLzScwW = zLzScW.outerWidth();
    zLzScwS = zLzScW.scrollTop();
    imgLazy(zLzScwW, zLzScwS, zLzScW, 0)
}
if (currentUrlLang == "" || currentUrlLang == "jp") {
    if (customvar.browser == "ie" || customvar.browser == "IE") {
        var supportText = Drupal.t("This browser is no longer supported and some functionality may not work. Switch to another browser for the best Zoho experience.");
        $("body").append('<div class="br-ns-overlay"></div><div class="br-ns-outer"><div class="br-ns-contianer"><p>' + supportText + '</p><span class="br-ns-close"></span></div></div><div class="br-ns-fixed"><div class="br-ns-contianer"><p>' + supportText + '</p><span class="br-ns-close"></span></div></div>');
        $(".br-ns-overlay, .br-ns-close").on("click", function() {
            $(".br-ns-overlay, .br-ns-outer").hide()
        })
    }
}
var defColLineCount = 10;
if (getDomain != "www.zoho.com" && getDomain != "www.zoho.com.cn") {
    if (window.location.search.indexOf("hrLines") > 0) {
        $(document).keydown(function(e) {
            var a = $(".zwe-hrLine-box");
            if (e.keyCode == 27) {
                if (a.is(":visible")) {
                    a.css("display", "none")
                } else {
                    a.css("display", "grid")
                }
            }
        });
        $("head").append('<style type="text/css">.zwe-hrLine-box{position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background:rgb(0,0,0,.4);z-index:9999;display:grid;pointer-events:none}.zwe-hrLine-inner{counter-reset:counter 0;display:grid}.zwe-hrLine-box span{display:grid;align-content:end;position:relative;border-style:solid;border-color:#fff;border-width:1px 1px 0 1px}.zwe-hrLine-box span:last-child{border-bottom-width:1px}.zwe-hrLine-box span:after{counter-increment:counter 1;content:counter(counter);display:inline-block;font-size:10px;font-family:var(--primaryfont-bold);color:#fff;position:absolute;left:-1px;bottom:-8px;background:#000;width:25px;height:15px;padding:0 0 0 2px;z-index:99}.zwe-hrLine-box span:first-child:before{content:"0";position:absolute;left:-1px;top:-8px;font-size:10px;font-family:var(--primaryfont-bold);color:#fff;background:#000;width:25px;height:15px;padding:0 0 0 2px;z-index:99}.zwe-hrLine-inner .zwe-hrLine-bottom,.zwe-hrLine-inner .zwe-hrLine-middle,.zwe-hrLine-inner .zwe-hrLine-static,.zwe-hrLine-inner .zwe-hrLine-top{position:absolute;right:0;min-height:1px;border-bottom:1px solid #fff;width:100%}.zwe-hrLine-inner .zwe-hrLine-bottom:before,.zwe-hrLine-inner .zwe-hrLine-middle:before,.zwe-hrLine-inner .zwe-hrLine-static:before,.zwe-hrLine-inner .zwe-hrLine-top:before{display:inline-block;font-size:10px;font-family:var(--primaryfont-bold);color:#fff;position:absolute;top:-6px;right:0;background:#000;height:15px;padding:0 0 0 2px;z-index:99}.zwe-hrLine-inner .zwe-hrLine-top:before{content:"Top";width:22px}.zwe-hrLine-inner .zwe-hrLine-middle:before{content:"Middle";width:38px}.zwe-hrLine-inner .zwe-hrLine-bottom:before{content:"Bottom";width:40px}.zwe-hrLine-inner .zwe-hrLine-static:before{content:"Position";width:43px;left:0;right:inherit;padding:0 0 0 2px}</style>');
        $("body").append('<div class="zwe-hrLine-box"><div class="zwe-hrLine-inner"></div></div>');
        colLineCount = window.location.search.slice(9);
        if (colLineCount.split("/").length == 2) {
            if (colLineCount.split("/")[1] == "top" || colLineCount.split("/")[1] == "bottom") {
                $(".zwe-hrLine-inner").append('<div class="zwe-hrLine-static"></div>')
            }
        } else if (colLineCount >= 1 && colLineCount <= 100) {
            for (a = 1; a <= colLineCount; a++) {
                $(".zwe-hrLine-inner").append("<span></span>")
            }
        }
        $(".zwe-hrLine-inner").append('<div class="zwe-hrLine-top"></div><div class="zwe-hrLine-middle"></div><div class="zwe-hrLine-bottom"></div>')
    }
}
function zScrollOnPos(e, a) {
    if (e.is("video")) {
        if (!e.hasClass("zwe-op")) {
            if (typeof a !== typeof undefined && a !== false) {
                setTimeout(function() {
                    e.addClass("zwe-v-delay");
                    e.get(0).muted = true;
                    e.get(0).play()
                }, a)
            } else {
                e.get(0).muted = true;
                e.get(0).play()
            }
        }
    }
    e.addClass("zwe-op")
}
function zElmOnScroll(e, t, o, n) {
    if (getDomain != "www.zoho.com" && getDomain != "www.zoho.com.cn") {
        if (window.location.search.indexOf("hrLines") > 0) {
            colLineCount = window.location.search.slice(9);
            $(".zwe-hrLine-inner .zwe-hrLine-top").css("top", t / 3 / 2 * 1);
            $(".zwe-hrLine-inner .zwe-hrLine-middle").css("top", t / 3 / 2 * 3);
            $(".zwe-hrLine-inner .zwe-hrLine-bottom").css("top", t / 3 / 2 * 5);
            if (colLineCount.split("/").length == 2) {
                if (colLineCount.split("/")[1] == "top") {
                    $(".zwe-hrLine-inner .zwe-hrLine-static").css("top", Number(colLineCount.split("/")[0]))
                } else if (colLineCount.split("/")[1] == "bottom") {
                    $(".zwe-hrLine-inner .zwe-hrLine-static").css("top", t - Number(colLineCount.split("/")[0]))
                }
            }
        }
    }
    if (zAnimElm.length) {
        var r = o + t;
        for (a = 0; a < zAnimElm.length; a++) {
            var i = $(zAnimElm[a])
              , s = i.attr("data-onscroll")
              , l = i.attr("data-delay")
              , c = i.height()
              , u = i.offset().top
              , d = u + c;
            if (u >= 1) {
                if (n == 1 && d >= o - 50 && u <= r + 50 || n == 0 && d >= o - 150 && u <= r + 50) {
                    if (n == 1 || n == 0 && o + t / 3 / 2 * 1 >= u) {
                        i.addClass("zwe-ot")
                    }
                    if (n == 1 || n == 0 && o + t / 3 / 2 * 3 >= u) {
                        i.addClass("zwe-om")
                    }
                    if (n == 1 || n == 0 && o + t / 3 / 2 * 5 >= u) {
                        i.addClass("zwe-ob")
                    }
                    if (s != "") {
                        if (s.length <= 2 && s <= defColLineCount) {
                            if (n == 1 || n == 0 && o + t / defColLineCount * s >= u) {
                                zScrollOnPos(i, l)
                            }
                        } else if (s.length >= 3 && (s.endsWith("top") || s.endsWith("bottom"))) {
                            zElmOffset = Number(s.split("/")[0]);
                            zElmOffsetPostion = s.split("/")[1];
                            if (zElmOffsetPostion == "top") {
                                if (n == 1 || n == 0 && o + zElmOffset >= u) {
                                    zScrollOnPos(i, l)
                                }
                            } else {
                                if (n == 1 || n == 0 && r - zElmOffset >= u) {
                                    zScrollOnPos(i, l)
                                }
                            }
                        } else if (s.length >= 3 && !s.startsWith("{") && !s.endsWith("}") && !s.endsWith("top") && !s.endsWith("bottom")) {
                            zElmOffsetRow = Number(s.split("/")[0]);
                            zElmOffsetTotalRow = Number(s.split("/")[1]);
                            if (n == 1 || n == 0 && o + t / zElmOffsetTotalRow * zElmOffsetRow >= u) {
                                zScrollOnPos(i, l)
                            }
                        } else if (s.startsWith("{") && s.endsWith("}")) {
                            s = s.split("{").join("").split("}").join("");
                            for (b = 0; b < s.split(",").length; b++) {
                                zElmOffsetRes = s.split(",")[b].split(":")[0];
                                zElmOffsetRow = s.split(",")[b].split(":")[1];
                                if (zElmOffsetRow.split("/").length == 2) {
                                    zElmOffsetRows = Number(zElmOffsetRow.split("/")[0]);
                                    zElmOffsetTotalRows = zElmOffsetRow.split("/")[1];
                                    if (zElmOffsetRes.split("-").length == 1) {
                                        if (zElmOffsetTotalRows == "top" || zElmOffsetTotalRows == "bottom") {
                                            if (zElmOffsetTotalRows == "top") {
                                                if (e >= zElmOffsetRes.split("-")[0] && (n == 1 || n == 0 && o + zElmOffsetRows >= u)) {
                                                    zScrollOnPos(i, l)
                                                }
                                            } else {
                                                if (e >= zElmOffsetRes.split("-")[0] && (n == 1 || n == 0 && r - zElmOffsetRows >= u)) {
                                                    zScrollOnPos(i, l)
                                                }
                                            }
                                        } else {
                                            if (e >= zElmOffsetRes.split("-")[0] && (n == 1 || n == 0 && o + t / Number(zElmOffsetTotalRows) * zElmOffsetRows >= u)) {
                                                zScrollOnPos(i, l)
                                            }
                                        }
                                    } else {
                                        if (zElmOffsetTotalRows == "top" || zElmOffsetTotalRows == "bottom") {
                                            if (zElmOffsetTotalRows == "top") {
                                                if (e >= zElmOffsetRes.split("-")[0] && e <= zElmOffsetRes.split("-")[1] && (n == 1 || n == 0 && o + zElmOffsetRows >= u)) {
                                                    zScrollOnPos(i, l)
                                                }
                                            } else {
                                                if (e >= zElmOffsetRes.split("-")[0] && e <= zElmOffsetRes.split("-")[1] && (n == 1 || n == 0 && r - zElmOffsetRows >= u)) {
                                                    zScrollOnPos(i, l)
                                                }
                                            }
                                        } else {
                                            if (e >= zElmOffsetRes.split("-")[0] && e <= zElmOffsetRes.split("-")[1] && (n == 1 || n == 0 && o + t / Number(zElmOffsetTotalRows) * zElmOffsetRows >= u)) {
                                                zScrollOnPos(i, l)
                                            }
                                        }
                                    }
                                } else {
                                    if (zElmOffsetRes.split("-").length == 1) {
                                        if (e >= zElmOffsetRes.split("-")[0] && (n == 1 || n == 0 && o + t / defColLineCount * zElmOffsetRow >= u)) {
                                            zScrollOnPos(i, l)
                                        }
                                    } else {
                                        if (e >= zElmOffsetRes.split("-")[0] && e <= zElmOffsetRes.split("-")[1] && (n == 1 || n == 0 && o + t / defColLineCount * zElmOffsetRow >= u)) {
                                            zScrollOnPos(i, l)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
var zAnimElm = $("[data-onscroll]");
zElScW = $(window);
$(document).ready(function() {
    zElScwW = zElScW.outerWidth();
    zElScwH = zElScW.outerHeight();
    zElScwS = zElScW.scrollTop();
    zElmOnScroll(zElScwW, zElScwH, zElScwS, 1)
});
zElScW.resize(function() {
    zElScwW = zElScW.outerWidth();
    zElScwH = zElScW.outerHeight();
    zElScwS = zElScW.scrollTop();
    zElmOnScroll(zElScwW, zElScwH, zElScwS, 0)
});
zElScW.scroll(function() {
    zElScwW = zElScW.outerWidth();
    zElScwH = zElScW.outerHeight();
    zElScwS = zElScW.scrollTop();
    zElmOnScroll(zElScwW, zElScwH, zElScwS, 0)
});
function zElmOnTrigger() {
    zElScwW = zElScW.outerWidth();
    zElScwH = zElScW.outerHeight();
    zElScwS = zElScW.scrollTop();
    zElmOnScroll(zElScwW, zElScwH, zElScwS, 0)
}
$(document).on("click", ".za-tos", function() {
    if ($("#signup-termservice").attr("class") == "checked") {
        $(this).val(true)
    } else {
        $(this).val(false)
    }
});
customvar.scountrys = customvar.countries[1].indexOf(CountryCode) > -1 ? CountryCode : "US";
customvar.sstate = RegionName;
customvar.hiddenrmobileval = [];
customvar.counntrychangeed = 0;
customvar.nSignupArr = [[], [], [], [], []];
customvar.nSignupspanArr = [[], [], [], [], []];
customvar.nSignupdialArr = [[], [], [], [], []];
customvar.nSignupconfirmdialArr = [[], [], [], [], []];
customvar.visitedArry = [[], [], [], [], []];
customvar.validatetextArry = [[], [], [], [], []];
customvar.slectedradio = [];
customvar.creatingthePortal = Drupal.t("Creating Your Account...");
customvar.signupforFree = Drupal.t("Sign Up for Free");
customvar.onlyletters = Drupal.t("Only lower case letters and numbers are allowed here");
customvar.eOrgName = Drupal.t("Please enter your organization name");
customvar.eOrgRole = Drupal.t("Please enter your role in Organization");
customvar.eAboutYpurCompany = Drupal.t("Please enter about your company");
customvar.repasserr = Drupal.t("Password cannot be less than 8 characters");
customvar.repaswrongserr = Drupal.t("Wrong password confirmation");
customvar.teamNameTranslt = Drupal.t("Please enter the valid Team Name");
customvar.isValidTranslt = Drupal.t("Enter only a to z and 0 to 9");
customvar.isvalidName = Drupal.t("Only a to z and 0 to 9 are allowed");
customvar.isvalidAgency = Drupal.t("Please enter the Agency name");
customvar.numcharspl = Drupal.t("Only letters, numbers, underscores (_), dots (.) are allowed");
customvar.eLastName = Drupal.t("Please enter your last name");
customvar.rephoneNumber = Drupal.t("Re-enter your Mobile Number");
customvar.empCount = Drupal.t("Please select no.of Employees");
customvar.locationCount = Drupal.t("Please select no.of locations");
customvar.selectindustry = Drupal.t("Please select your industry");
customvar.eselectEdition = Drupal.t("Please select a edition");
customvar.registernum = Drupal.t("Please enter your university register number");
customvar.usersrequire = Drupal.t("Please enter the number of users");
customvar.eFormationState = Drupal.t("Please select a formation state");
customvar.nOfSignup = 0;
customvar.singaporeConsentchecked = false;
if (global_getUrlParam("isDarkMode") && ["true", "false"].includes(global_getUrlParam("isDarkMode").toLowerCase()) && JSON.parse(global_getUrlParam("isDarkMode").toLowerCase())) {
    $("body").addClass("zw-template-signup-dark")
}
customvar.redirectUrlLink;
customvar.websiteUrl,
customvar.couponCode,
customvar.creditsInfo = "false";
customvar.couponCode = global_getUrlParam("cn");
customvar.edirectUrl = global_getUrlParam("redirectUrl");
customvar.dataWebsiteUrl = customvar.absurl;
customvar.dataredirectUrl = $(".signup-box").attr("data-redirect");
customvar.creditsInfo = $(".signup-box").attr("creditsInfo") == undefined ? "false" : "true";
customvar.couponinputplaceholder = Drupal.t("Coupon");
customvar.couponCodeAvail = Drupal.t("You have availed this already");
customvar.couponError = Drupal.t("Invalid coupon");
customvar.redeemCreditsCta = Drupal.t("Proceed to redeem your credits");
customvar.zwProTerms = $(".signup-box").attr("data-zwProTerms");
customvar.zwProTerms = customvar.zwProTerms != undefined ? "/" + customvar.zwProTerms : "";
if (customvar.couponCode == "") {
    customvar.couponCode = $(".signup-box").attr("data-couponcode")
}
customvar.getWalletAttributes = function(e) {
    if (customvar.dataredirectUrl == "" || customvar.dataredirectUrl == undefined) {
        customvar.redirectUrlLink = "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne
    } else if (customvar.dataredirectUrl != "") {
        customvar.redirectUrlLink = customvar.dcadded(customvar.dataredirectUrl)
    } else {
        customvar.redirectUrlLink = customvar.redirectUrl
    }
    if (customvar.dataWebsiteUrl == undefined || customvar.dataWebsiteUrl == "") {
        customvar.websiteUrl = "https://www." + Zdomain + "." + dcdomainOne + "/" + (customvar.productName == "home" ? "wallet" : customvar.productName) + "/"
    } else {
        customvar.websiteUrl = customvar.dcadded(customvar.dataWebsiteUrl)
    }
    if (typeof dynamic_redirectUrlLink == "function") {
        try {
            customvar.redirectUrlLink = dynamic_redirectUrlLink()
        } catch (e) {
            customvar.redirectUrlLink = customvar.dataredirectUrl
        }
    }
}
;
$(window).on("load", function() {
    if ($(".creditelm #couponmail").length > 0) {
        customvar.showWalletForm()
    }
});
customvar.showWalletForm = function(e) {
    this.href = "https://home." + Zdomain + "." + dcdomainOne + "/";
    this.html = Drupal.t("Access Zoho") + " Home";
    var a = $("body").hasClass("body-umain") ? true : false;
    if (a) {
        if ($(".creditelm #couponmail").length > 0) {
            $(".creditelm #couponmail").val(getusername)
        }
        $(".creditelm").show();
        $(".zgh-userAccess a").attr("href", this.href).html(this.html)
    } else {
        $(".signup-box").show();
        $(".creditelm").hide()
    }
}
;
customvar.assignCredits = function(e) {
    customvar.getWalletAttributes();
    var a = $(".creditelm #couponname").val();
    if (a == "") {
        window.location.href = customvar.redirectUrlLink
    } else {
        $(".existingUser").attr("disabled", "disabled").addClass("disabled-z-signup");
        $(".coupon-error").html("");
        $(".existingUser").html(Drupal.t("connecting..."));
        $.ajax({
            type: "GET",
            url: "https://store." + Zdomain + "." + dcdomainOne + "/CreditsApi.do?hidMode=redeemCredits&coupon_name=" + a,
            dataType: "jsonp",
            jsonp: "callback",
            contentType: "application/json",
            jsonpCallback: "redeemCredits",
            cache: "true",
            async: true,
            xhrFields: {
                withCredentials: true
            },
            success: function(e) {
                if (e.code == 0) {
                    window.location.href = customvar.redirectUrlLink
                } else if (e.code == 402) {
                    $(".existingUser").removeAttr("disabled").removeClass("disabled-z-signup");
                    $(".coupon-error").html(customvar.couponCodeAvail)
                } else {
                    $(".existingUser").removeAttr("disabled").removeClass("disabled-z-signup");
                    $(".coupon-error").html(customvar.couponError)
                }
                $(".existingUser").html(customvar.redeemCreditsCta)
            },
            error: function() {
                $(".existingUser").html(customvar.redeemCreditsCta);
                $(".existingUser").removeAttr("disabled").removeClass("disabled-z-signup")
            },
            crossDomain: true
        })
    }
}
;
customvar.walletcreditelm = function(e) {
    customvar.getWalletAttributes();
    $(".creditelm").remove();
    $(".form-wrap").append('<div class="creditelm"> <div><input id="couponmail" class="sgnemail form-input" disabled="true" type="text" value="" placeholder="' + Drupal.t("Email Address") + '"> </div> <div><input id="couponname" class="sgnemail form-input" type="text" placeholder="' + Drupal.t("Coupon") + '" name="coupon" value=""></div><span class="coupon-error note"></span> <div><label class="note"><b> ' + Drupal.t("Note") + " : </b>" + Drupal.t("Please be informed that you will receive credits in the above mentioned Zoho account only.") + ' </label></div> <div><button class="existingUser" onclick="customvar.assignCredits();" id="existinguser">' + Drupal.t("Proceed to redeem your credits") + "</button></div> </div>");
    if ($(".form-wrap .signup-box .signupcontainer").length > 0) {
        if ($("#x_source").length < 1) {
            $(".form-wrap .signup-box .signupcontainer").append('<input id="x_source" type="hidden" name="x_source" value="wallet" mandate="false"><input type="hidden" value="coupon_page" name="x_r_page_source" mandate="false">')
        }
    }
    if (customvar.absurl.indexOf("notebook/notebook-for-samsung.html") > 0 && $(".form-wrap .signup-box .signupcontainer").length > 0) {
        $(".form-wrap .signup-box .signupcontainer").append("<input type='hidden' name='x_accountType' value='2'>")
    }
    $("#coupon").val(customvar.couponCode);
    $("#couponname").val(customvar.couponCode);
    customvar.showWalletForm();
    if (!customvar.redirectUrlLink) {
        customvar.redirectUrlLink = customvar.dcadded(customvar.signupObj.serviceurl)
    }
    var a = "https://store." + Zdomain + "." + dcdomainOne + "/CouponRedirect.do?creditsInfo=" + customvar.creditsInfo + "&redirectUrl=" + customvar.redirectUrlLink + "&websiteUrl=" + customvar.websiteUrl;
    customvar.signupObj.serviceurl = encodeURIComponent(a);
    var t = "https://accounts." + Zdomain + "." + dcdomainOne + "/signin?servicename=ZohoPayments&serviceurl=" + encodeURIComponent(a);
    $(".zw-login").attr("href", t)
}
;
customvar.OTP_based = function() {
    if (dcdomainOne == "in") {
        return true
    } else {
        return false
    }
}
;
customvar.mandatestart = function() {
    for (var e = 0; e <= $(".czone-dc input").length; e++) {
        if ($(".czone-dc .signupcontainer input").eq(e).attr("mandate") != "false") {
            if ($(".czone-dc .signupcontainer input").eq(e).attr("czone-asterix") && $(".czone-dc .signupcontainer input").eq(e).attr("czone-asterix") === "false") {
                return
            }
            if ($("#czone-home").length > 0) {
                if (typeof $(".czone-dc .signupcontainer input").eq(e).attr("placeholder") != "undefined") {
                    var a = $(".czone-dc .signupcontainer input").eq(e).attr("placeholder");
                    if (a.indexOf("*") < 1) {
                        $(".czone-dc .signupcontainer input").eq(e).attr("placeholder", a + " *")
                    }
                }
            } else {
                if (typeof $(".czone-dc .signupcontainer input").eq(e).siblings(".placeholder").html() != "undefined") {
                    var a = $(".czone-dc .signupcontainer input").eq(e).siblings(".placeholder").html();
                    if (a.indexOf("*") < 1) {
                        $(".czone-dc .signupcontainer input").eq(e).siblings(".placeholder").html(a + " *")
                    }
                }
                if (typeof $(".czone-dc .signupcontainer input").eq(e).attr("placeholder") != "undefined") {
                    var a = $(".czone-dc .signupcontainer input").eq(e).attr("placeholder");
                    if (a != "") {
                        if (a.indexOf("*") < 1) {
                            $(".czone-dc .signupcontainer input").eq(e).attr("placeholder", a + " *")
                        }
                    }
                }
            }
        } else {
            if ($("#czone-home").length > 0) {
                if (typeof $(".czone-dc .signupcontainer input").eq(e).attr("placeholder") != "undefined") {
                    var a = $(".czone-dc .signupcontainer input").eq(e).attr("placeholder");
                    if (a.indexOf("*") > 0) {
                        $(".czone-dc .signupcontainer input").eq(e).attr("placeholder", a.split("*").join(""))
                    }
                }
            } else {
                if (typeof $(".czone-dc .signupcontainer input").eq(e).siblings(".placeholder").html() != "undefined") {
                    var a = $(".czone-dc .signupcontainer input").eq(e).siblings(".placeholder").html();
                    if (a.indexOf("*") > 0) {
                        $(".czone-dc .signupcontainer input").eq(e).siblings(".placeholder").html(a.split("*").join(""))
                    }
                }
            }
        }
    }
}
;
customvar.newsletterhandle = function() {
    if ($(".globalcountrycode-signup option:selected").attr("newsletter_mode") > 1) {
        $(".za-newsletter-container").addClass("zshow");
        $(".icon-medium").removeClass("checked").addClass("unchecked");
        $("#signupform [name='newsletter']").removeAttr("checked")
    } else {
        $(".za-newsletter-container").removeClass("zshow");
        $(".icon-medium").removeClass("unchecked").addClass("checked");
        $("#signupform [name='newsletter']").attr("checked", "true")
    }
    if ($(".globalcountrycode-signup option:selected").attr("newsletter_mode") >= 2) {
        $(".za-newsletter-container").removeAttr("style")
    }
    if (countryEu.indexOf(customvar.scountrys) > -1 || customvar.scountrys == "AU" || customvar.scountrys == "ZA") {
        $(".za-newsletter-container").addClass("zshow");
        $(".icon-medium").removeClass("checked").addClass("unchecked");
        $("#signupform [name='newsletter']").removeAttr("checked")
    }
    if (customvar.scountrys == "SG" && customvar.singaporeConsentproductList.includes(customvar.productName)) {
        if ($(".signup-box .get-signup-plan #business").prop("checked")) {
            $(".icon-medium").removeClass("unchecked").addClass("checked");
            $("#signupform [name='newsletter']").attr("checked", "true");
            $(".za-newsletter-container").removeClass("zshow").addClass("zhide")
        } else {
            if ($('.signupcontainer [name="signup_edition"]').length) {
                $(".icon-medium").removeClass("checked").addClass("unchecked");
                $("#signupform [name='newsletter']").removeAttr("checked");
                $(".za-newsletter-container").removeClass("zhide").addClass("zshow");
                if (customvar.singaporeConsentchecked) {
                    $(".icon-medium").removeClass("unchecked").addClass("checked");
                    $("#signupform [name='newsletter']").attr("checked", "true")
                }
            } else {
                $(".za-newsletter-container").removeClass("zshow").addClass("zhide");
                $(".icon-medium").removeClass("unchecked").addClass("checked");
                $("#signupform [name='newsletter']").attr("checked", "true")
            }
        }
    }
}
;
function global_getValParam(o, e) {
    var n = {}
      , r = "";
    var a = e.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(e, a, t) {
        n[a] = t;
        if (a == o) {
            r = t
        }
    });
    return r
}
customvar.setcurrentCountry = function() {
    if (customvar.showchangecountry == "false") {
        if ($(".signup-box .globalcountrycode-signup").length > 0) {
            $(".signup-box .globalcountrycode-signup").val(CountryCode)
        }
    } else {
        $(".globalcountrycode-signup").val(customvar.scountrys)
    }
}
;
var zr_script = "";
function z_add_account_script_common() {
    customvar.setcurrentCountry();
    customvar.zDomainHandling();
    if ($(".signup-box #czone-wallet").length > 0) {
        if (_lhref.indexOf("recruit/lp/wallet-credits.html") > 0) {
            customvar.walletcreditelm()
        }
        if (typeof customvar.signupObj.couponinput != "undefined") {
            if (typeof customvar.signupObj.couponinput.required == "undefined" || customvar.signupObj.couponinput.required || customvar.signupObj.couponinput.required == "true") {
                customvar.walletcreditelm()
            }
        }
    }
    $("script#z-account-script").remove();
    var e = global_getUrlParam("serviceurl") != "" ? function() {
        return customvar.dcadded(global_getUrlParam("serviceurl"))
    }() : typeof customvar.signupObj.serviceurl != "undefined" ? function() {
        return customvar.dcadded(customvar.signupObj.serviceurl)
    }() : customvar.outproduct.indexOf(customvar.productName) > -1 ? "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne : "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne;
    var a = document.createElement("script");
    a.id = "z-account-script";
    if (customvar.outproduct.indexOf(customvar.productName) > -1) {
        a.src = "https://accounts." + (location.host.indexOf("localbigin") > 0 || location.host.indexOf("localqntrl") > 0 ? Zdomain : Zdomain) + "." + dcdomainOne + "/register/script?temp_redirect=true&" + customvar.clang + "load_country=false&servicename=" + ($(".signup-box #coupon.x_r_coupon").length > 0 ? "ZohoPayments" : customvar.signupObj.servicename) + "&loadcss=false" + (typeof customvar.signupObj.accountsparam != "undefined" ? customvar.dcadded(customvar.signupObj.accountsparam) : "") + (global_getUrlParam("ismobilesignup") != "" ? "&use_homeurl=true" : "") + "&serviceurl=" + e
    } else {
        a.src = "https://accounts." + Zdomain + "." + dcdomainOne + "/register/script?temp_redirect=true&" + customvar.clang + "load_country=false&servicename=" + ($(".signup-box #coupon.x_r_coupon").length > 0 ? "ZohoPayments" : customvar.signupObj.servicename) + "&loadcss=false" + (typeof customvar.signupObj.accountsparam != "undefined" ? customvar.dcadded(customvar.signupObj.accountsparam) : "") + (global_getUrlParam("ismobilesignup") != "" ? "&use_homeurl=true" : "") + "&serviceurl=" + e
    }
    if (window.location.host.includes(_lz) && customvar.productName == "learn" && _lhref.includes("/signup.html")) {
        a.src = "https://accounts-alpha." + _lz + ".com/register/script?mode=33&temp_redirect=true&" + customvar.clang + "load_country=false&servicename=" + ($(".signup-box #coupon.x_r_coupon").length > 0 ? "ZohoPayments" : customvar.signupObj.servicename) + "&loadcss=false" + (typeof customvar.signupObj.accountsparam != "undefined" ? customvar.dcadded(customvar.signupObj.accountsparam) : "") + (global_getUrlParam("ismobilesignup") != "" ? "&use_homeurl=true" : "") + "&serviceurl=" + e
    }
    if (a.src.indexOf("mode=20") < 0) {
        if (customvar.OTP_based()) {
            if ($(".signup-box .za-rmobile-container").length < 1) {
                if ($(".signup-box .mobile-container").length > 0) {
                    $(".signup-box .mobile-container").before(customvar.signupflow.rmobile)
                } else {
                    $(".signup-box .za-captcha-container").before(customvar.signupflow.rmobile)
                }
                if (typeof customvar.signupObj.rmobilelabel != "undefined") {
                    if ($(".signup-box .za-rmobile-container").length > 0) {
                        $(".signup-box .za-rmobile-container").prepend(customvar.signupObj.rmobilelabel)
                    }
                }
                if (typeof customvar.signupObj.rplaceholder != "undefined") {
                    if ($(".signup-box #rmobile").length > 0) {
                        $(".signup-box #rmobile").attr("placeholder", customvar.signupObj.rplaceholder)
                    }
                }
            }
            if ($(".za-password-container").length < 1) {
                $(".za-rmobile-container").before(customvar.signupflow.password)
            }
            if (typeof $(".czone-dc").attr("id") != "undefined") {
                if ($(".czone-dc").attr("id") == "czone-signup") {
                    $(".czone-dc input").not(".langinput").attr("placeholder", "")
                } else {
                    $(".czone-dc .placeholder").remove()
                }
                if ($("#rmobile").siblings(".placeholder").length > 0) {
                    $("#rmobile").siblings(".placeholder").html(customvar.phoneNumber)
                } else {
                    if ($("#rmobile").attr("placeholder").length > 0) {
                        $("#rmobile").attr("placeholder", customvar.phoneNumber)
                    }
                }
            }
            $(".za_country_code").val("IN");
            $(".phone_countrycode").val("+91");
            $(".ccodediv").html("+91");
            setTimeout(function() {
                $(".za_country_code").val("IN");
                $(".phone_countrycode").val("+91");
                $(".ccodediv").html("+91")
            }, 150);
            $(".mobile-container").addClass("zhide-common");
            if (global_getValParam("mode", a.src) == "") {
                a.src = a.src + "&mode=24"
            } else {
                if (global_getValParam("mode", a.src) != "24") {
                    a.src = a.src.split("mode=" + global_getValParam("mode", a.src)).join("mode=24")
                }
            }
        } else {
            $(".za-rmobile-container").hide();
            $(".mobile-container").removeClass("zhide-common")
        }
    }
    if (a.src.indexOf("mode=24") > -1) {
        if ($(".signup-box .za-rmobile-container").length > 0 && $(".mobile-container").length < 1) {
            if ($('.signup-box input[name="r_address/1.phone"]').length < 1 && $('.signup-box input[name="r_address/2.phone"]').length < 1) {
                $(".signup-box .za-rmobile-container").after('<div class="zhide-common"><input class="rmobilevalue" mandate="false" name="r_address/1.phone" placeholder="" type="hidden"></div>')
            }
        }
    }
    $('.signupcontainer input[type="hidden"]').attr("mandate", "false");
    if ($(".signupotpcontainer .signupbtn").length > 0) {
        $(".signupotpcontainer .signupbtn").val(customvar.verify)
    }
    if (currentUrlLang != "jp") {
        customvar.mandatestart()
    }
    $(".signupotpcontainer .signupbtn").off("click");
    $(".signupotpcontainer .signupbtn").on("click", function() {
        if ($(".signupotpcontainer .signupbtn").length > 0) {
            $(".signupotpcontainer .signupbtn").val(customvar.verifying + "...");
            if (typeof customvar.submitotp != "undefined") {
                customvar.submitotp()
            }
        }
    });
    document.getElementsByTagName("head")[0].appendChild(a);
    customvar.newsletterhandle();
    customvar.showdcode();
    var t = "Based on your IP, you are in"
      , o = "Change"
      , n = "Your data will be in"
      , r = "data center"
      , i = "based on your IP"
      , s = "";
    if (typeof customvar.basedonip != "undefined") {
        t = customvar.basedonip
    }
    if (typeof customvar.basedon != "undefined") {
        i = customvar.basedon
    }
    if (typeof customvar.change != "undefined") {
        o = customvar.change
    }
    if (typeof customvar.datawillb != "undefined") {
        n = customvar.datawillb
    }
    if (typeof customvar.datacenter != "undefined") {
        r = customvar.datacenter
    }
    if (typeof customvar.transCName != "undefined") {
        s = customvar.transCName
    }
    if ($(".zcountry-info").length < 1) {
        if (customvar.showchangecountry == "true") {
            if (currentUrlLang == "jp") {
                $(".signup-box .signupcontainer .sgnbtnmn").before('<p class="zcountry-info zshow">' + t + '<span id="zip-countryname"> ' + s + ' </span><span class="dcset-jp"> ' + i + '</span><span id="zip-countryname-change">' + o + "</span></p>")
            } else {
                $(".signup-box .signupcontainer .sgnbtnmn").before('<p class="zcountry-info zshow">' + t + '<span id="zip-countryname"> ' + s + "</span><span> " + i + '</span>.<span id="zip-countryname-change">' + o + "</span></p>")
            }
        }
    }
    if ($(".dc-info").length < 1) {
        var l = "."
          , c = "US";
        if (typeof customvar.nsdctext != "undefined") {
            c = customvar.nsdctext()
        }
        if (currentUrlLang == "jp") {
            $(".signup-box .signupcontainer .sgnbtnmn").before('<p class="dc-info"><span class="accountstxt-jp">' + n + '</span><span class="dcset dcset-jp">' + c + '</span><span class="dcenter-jp">' + r + "</span></p>")
        } else {
            if (customvar.scountrys == "ES" && currentUrlLang == "es-xl") {
                n = "Sus datos se almacenarán en el centro de datos de";
                r = " "
            } else if ((customvar.scountrys == "NL" || customvar.scountrys == "AN") && currentUrlLang == "nl") {
                n = "Uw gegevens worden in het datacenter in";
                r = "opgeslagen"
            }
            r == " " ? r = "" : c = c + " ";
            $(".signup-box .signupcontainer .sgnbtnmn").before('<p class="dc-info">' + n + ' <span class="dcset">' + c + "</span>" + r + l + "</p>")
        }
    }
    statehandling($(".globalcountrycode-signup").val());
    zr_script = a
}
function statehandling(e) {
    var a = "";
    for (var t = 0; t < customvar.usstates.length; t++) {
        a += '<option value="' + customvar.usstates[t].toLowerCase() + '">' + customvar.usstates[t] + "</option>"
    }
    $(".signup-box .za-country-container").after('<div class="sgfrm za-state-container za-country_state-container zhide-common"><span class="zdd-downarrow zdd-state"></span><select aria-label="Change the State" class="za-globalstate-signup" name="country_state">' + a + "</select></div>");
    if (e == "US") {
        $(".za-globalstate-signup option").eq(0).remove();
        $(".za-state-container").removeClass("zhide-common").addClass("zshow-common");
        if (typeof RegionName != "undefined") {
            if ($(".za-globalstate-signup").length > 0) {
                if (e == "US") {
                    $(".za-globalstate-signup").val(RegionName.toLowerCase())
                }
                if ($(".za-globalstate-signup").val() == null) {
                    $(".za-globalstate-signup").val($(".za-globalstate-signup option").eq(0).val())
                }
            }
        }
    } else {
        $(".za-state-container").removeClass("zshow-common").addClass("zhide-common")
    }
    customvar.privacypolicylink(true)
}
$(document).on("change", ".signup-box #terms-check", function() {
    if ($(this).is(":checked") != false) {
        $(this).val(true);
        $(".tcheck").addClass("checked");
        $(this).closest(".terms-accept").find(".field-msg").remove()
    } else {
        $(".tcheck").removeClass("checked");
        $(this).val(false)
    }
});
$(document).on("click", "#zip-countryname-change", function() {
    $(".zcountry-info").addClass("zhide-common");
    $(".za-country-container").addClass("zshow");
    customvar.counntrychangeed = 1
});
$(document).on("click", ".signup-box .showhide", function() {
    if ($(".signup-box #password").attr("type") == "text") {
        $(".signup-box #password").attr("type", "password");
        $(this).removeClass("active")
    } else {
        $(".signup-box #password").attr("type", "text");
        $(this).addClass("active")
    }
});
customvar.getsfield = function() {
    for (var e = 0; e < $('.signup-box input[type="text"], .signup-box input[type="tel"], .signup-box input[type="email"]').length; e++) {
        if ($('.signup-box input[type="text"], .signup-box input[type="tel"], .signup-box input[type="email"]').eq(e).val() != "") {
            var a = $('.signup-box input[type="text"], .signup-box input[type="tel"], .signup-box input[type="email"]').eq(e).attr("id");
            customvar.nSignupArr[customvar.nOfSignup][e] = a + "::to::" + $('.signup-box input[type="text"], .signup-box input[type="tel"], .signup-box input[type="email"]').eq(e).val();
            customvar.validatetextArry[customvar.nOfSignup][e] = $("#" + a).siblings(".placetxt").attr("class")
        }
    }
    if ($("span.portal-input").length > 0) {
        customvar.nSignupspanArr[customvar.nOfSignup][0] = $("span.portal-input").html()
    }
    if ($(".za_country_code").length > 0) {
        customvar.nSignupdialArr[customvar.nOfSignup][0] = $(".za_country_code").val()
    }
    if ($(".za_confirm_country_code").length > 0) {
        customvar.nSignupconfirmdialArr[customvar.nOfSignup][0] = $(".za_confirm_country_code").val()
    }
    if ($(".signup-box .rmobilevalue").length > 0) {
        customvar.hiddenrmobileval[customvar.nOfSignup] = $(".signup-box .rmobilevalue").val()
    }
    customvar.visitedArry[customvar.nOfSignup][0] = "visited"
}
;
customvar.setsfield = function() {
    for (var e = 0; e < customvar.nSignupArr[customvar.nOfSignup].length; e++) {
        if (customvar.nSignupArr[customvar.nOfSignup][e] != "") {
            if (typeof customvar.nSignupArr[customvar.nOfSignup][e] != "undefined") {
                var a = customvar.nSignupArr[customvar.nOfSignup][e].split("::to::")[0];
                var t = customvar.nSignupArr[customvar.nOfSignup][e].split("::to::")[1];
                $("#" + a).parent().addClass("added-placeholder");
                $("#" + a).val(t);
                $("#" + a).siblings(".placetxt").addClass(customvar.validatetextArry[customvar.nOfSignup][e])
            }
        }
    }
    if ($("span.portal-input").length > 0) {
        if (typeof customvar.nSignupspanArr[customvar.nOfSignup][0] != "undefined") {
            $("span.portal-input").html(customvar.nSignupspanArr[customvar.nOfSignup][0])
        }
    }
    if ($(".signup-box .rmobilevalue").length > 0) {
        $(".signup-box .rmobilevalue").val(customvar.hiddenrmobileval[customvar.nOfSignup])
    }
    if (customvar.slectedradio[0] != "") {
        if ($(".radiooptions").length > 0) {
            $(".radiooptions").prop("checked", false);
            $(".radiooptions").eq(customvar.slectedradio[0]).prop("checked", true)
        }
        if ($('.signup-box input[name="x_optioncheck"]').length > 0) {
            $('.signup-box input[name="x_optioncheck"]').val(customvar.slectedradio[1])
        }
    }
    customvar.showdcode()
}
;
$(document).on("click", ".signup-box .radiogroup .radiooptions", function() {
    if ($('.signup-box input[name="x_optioncheck"]').length > 0) {
        $('.signup-box input[name="x_optioncheck"]').val("radiochecked")
    }
    customvar.slectedradio[0] = $(this).val();
    customvar.slectedradio[1] = "radiochecked"
});
customvar.getmadate = function(e) {
    if (e == "x_optioncheck") {
        if ($(".x_optioncheck").val() == "") {
            return false
        }
        return true
    }
    return typeof $("input[name='" + e + "']").attr("mandate") != "undefined" ? $("input[name='" + e + "']").attr("mandate") == "false" ? false : true : true
}
;
customvar.getsplmadate = function(e) {
    if (customvar.productName == "mail") {
        return true
    } else {
        return false
    }
}
;
customvar.validateRemote = function(e) {
    if (customvar.productName == "mail") {
        return true
    } else {
        return false
    }
}
;
customvar.nsdctext = function() {
    var e = "US";
    var a = customvar.dcObj;
    for (var t in a) {
        if (typeof a[t].countries != "undefind") {
            if (a[t].countries.indexOf(customvar.scountrys) > -1) {
                e = a[t].dctext
            }
        }
    }
    if (onlycom) {
        e = "US"
    }
    return e
}
,
customvar.nscountrypop = function(e) {
    this._data = "";
    this.arr = customvar.countries;
    for (var a = 0; a < customvar.countries[0].length; a++) {
        if (e == "dial") {
            this._data += '<option value="' + this.arr[1][a] + '" dialling_code="' + this.arr[2][a] + '">' + this.arr[0][a] + " (+" + this.arr[2][a] + ")</option>"
        } else {
            this._val = "0";
            customvar.optinArr.indexOf(this.arr[1][a]) > -1 ? this._val = "2" : customvar.optoutArr.indexOf(this.arr[1][a]) > -1 ? this._val = "2" : customvar.doubleoptinArr.indexOf(this.arr[1][a]) > -1 ? this._val = "3" : "";
            this._data += '<option value="' + this.arr[1][a] + '" newsletter_mode="' + this._val + '">' + this.arr[0][a] + "</option>"
        }
    }
    setTimeout(function() {
        $(".globalcountrycode-signup").val(customvar.scountrys);
        if (e == "dial") {
            $(".za_country_code, #confirm_country_code").val(customvar.scountrys);
            $(".ccodediv, .cccodediv").html("+" + $(".za_country_code option:selected").attr("dialling_code"));
            if ($(".confirm_ccodediv").length > 0) {
                if ($(".confirm_phone_countrycode").length > 0 && $(".za_confirm_country_code").length > 0) {
                    $(".confirm_phone_countrycode").val("+" + $(".za_confirm_country_code option:selected").attr("dialling_code"))
                }
                if ($(".confirm_phone_countrycode").length > 0 && $(".za_confirm_country_code").length > 0) {
                    $(".confirm_ccodediv").html("+" + $(".za_confirm_country_code option:selected").attr("dialling_code"))
                }
            }
        }
    }, 100);
    return this._data
}
;
function setcountryCode() {
    if (typeof customvar.scountrys != "undefined") {
        $(".za_country_code, #confirm_country_code").val(customvar.scountrys);
        changeCountrycode()
    }
}
function changeCountrycode(e) {
    if ($(".ccodediv").length > 0) {
        $(".phone_countrycode").val("+" + $(".za_country_code option:selected").attr("dialling_code"));
        $(".ccodediv").html("+" + $(".za_country_code option:selected").attr("dialling_code"))
    }
    if ($(".confirm_ccodediv").length > 0) {
        $(".confirm_phone_countrycode").val("+" + $(".za_confirm_country_code option:selected").attr("dialling_code"));
        $(".confirm_ccodediv").html("+" + $(".za_confirm_country_code option:selected").attr("dialling_code"))
    }
}
function passwordset() {
    var e = 16
      , a = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    var t = "";
    for (var o = 0; o < e; o++) {
        var n = Math.floor(Math.random() * a.length);
        t += a.charAt(n)
    }
    $("#password, #testpw").val(t);
    $("#password").parent().addClass("added-placeholder");
    $(".pcopy").removeClass("zhide-common");
    $(".pcopy").show();
    $(".gentext").removeClass("zhide-common");
    $(".gentext").css("display", "inline-block");
    var o = document.getElementById("password");
    o.type = "text";
    if ($(".zpassword-show.active").length < 1) {
        var r;
        clearInterval(r);
        r = setTimeout(function() {
            o.type = "password"
        }, 2e3)
    }
    window.pagesense = window.pagesense || [];
    window.pagesense.push(["trackEvent", "genpass"])
}
function copyToClipboard() {
    $(".pcopy").show();
    var e = $("#password").val();
    var a = document.createElement("textarea");
    a.value = e;
    document.body.appendChild(a);
    a.select();
    $(".t-text").html("Copied");
    try {
        var t = document.execCommand("copy");
        var o = t ? "successful" : "unsuccessful"
    } catch (e) {}
    document.body.removeChild(a);
    var n = document.getElementById("password");
    n.select()
}
customvar.showdcode = function() {
    if ($("#emailmoile").length > 0) {
        if (/^\d+$/.test($("#emailmoile").val())) {
            if ($("#emailmoile").val().length > 2) {
                $("#emailmoile").siblings(".za-country_code-container").css("display", "block");
                $(".za-emailormobile-container").addClass("dialactive")
            } else {
                $("#emailmoile").siblings(".za-country_code-container").css("display", "none");
                $(".za-emailormobile-container").removeClass("dialactive")
            }
        } else {
            $("#emailmoile").siblings(".za-country_code-container").css("display", "none");
            $(".za-emailormobile-container").removeClass("dialactive")
        }
        if ($("#emailmoile").val().indexOf("@") > -1) {
            $("#emailmoile").siblings(".za-country_code-container").css("display", "none");
            $(".za-emailormobile-container").removeClass("dialactive")
        }
    }
}
;
$(document).on("keyup", "#emailmoile", function() {
    customvar.showdcode()
});
$(document).on("keyup", '.za-password-container [name="password"]', function(e) {
    $(".password-strengths").removeClass("zhide-common");
    var a = $(".za-password-container .strengths-bar span")
      , t = $(".za-password-container .weak-pass")
      , o = 8
      , n = $(".za-password-container .strong-pass")
      , r = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225, 91];
    if (!r.includes(e.keyCode)) {
        if (!e.target.value.length) {
            a.css("width", "0%");
            t.css("display", "inline-block");
            n.css("display", "none")
        }
        if (e.target.value.length > 0 && e.target.value.length < o) {
            a.css("width", Math.round(e.target.value.length * 50 / o) + "%");
            a.removeClass("strong-bg");
            a.addClass("weak-bg");
            t.css("display", "inline-block");
            n.css("display", "none")
        }
        if (e.target.value.length >= o) {
            var i = 1;
            /[A-Z]/.test(e.target.value) && i++,
            /[a-z]/.test(e.target.value) && i++,
            /\d/.test(e.target.value) && i++,
            /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(e.target.value) && i++;
            a.css("width", i * 8 + 60 + "%");
            a.removeClass("weak-bg");
            a.addClass("strong-bg");
            n.css("display", "inline-block");
            t.css("display", "none")
        }
    }
});
$(document).on("keyup", ".signup-box .za-rmobile-container #rmobile", function() {
    var e = $(this).val();
    if ($('.signup-box input[name="x_phone"]').length > 0) {
        $('.signup-box input[name="x_phone"]').val(e)
    }
    if ($('.signup-box input[name="x_contactnumber"]').length > 0) {
        $('.signup-box input[name="x_contactnumber"]').val(e)
    }
    if ($("#mobile").length > 0) {
        $("#mobile").val(e)
    }
    if ($(".signup-box .rmobilevalue").length > 0) {
        $(".signup-box .rmobilevalue").val(e)
    }
});
$(document).on("keyup", ".signup-box .mobile-container #mobile", function() {
    var e = $(this).val();
    if ($('input[name="x_phone"]').length > 0) {
        $('input[name="x_phone"]').val(e)
    }
    if ($('input[name="x_contactnumber"]').length > 0) {
        $('input[name="x_contactnumber"]').val(e)
    }
});
$(document).on("click", ".signup-box .zpassword-show", function() {
    if ($(this).hasClass("active")) {
        $(".signup-box #password").attr("type", "password");
        $(this).removeClass("active")
    } else {
        $(".signup-box #password").attr("type", "text");
        $(this).addClass("active")
    }
});
function gobacktosignuptemp() {
    if ($("#otpfield").length > 0) {
        $("#otpfield").val("")
    }
    $(".signupcontainer").show();
    $(".signupotpcontainer").hide();
    $("#signupbtn").val(customvar.signupforFree);
    $("#signupbtn").removeClass("disabled-z-signup");
    $("#signupbtn").removeClass("zwc_creating_account");
    $("body").removeClass("zw_signup_otp_visible");
    if ($(".signup-box").parent().hasClass("form")) {
        $(".signup-box").parent().removeAttr("submitted")
    }
}
function zwc_gobacktosignup() {
    if (typeof gobacktosignup == "function") {
        gobacktosignup()
    }
    gobacktosignuptemp()
}
function dispportalName() {
    if ($(".p_name").length > 0) {
        var e = $(".p_name").val();
        e = e.replace(/[^A-Za-z0-9 \s]/gi, "").replace(/[_\s]/g, "");
        e = e.toLowerCase();
        if ($("#r_account").length > 0) {
            $("#r_account").val(e)
        }
        try {
            $(".portal-input").val(e)
        } catch (e) {}
        try {
            $(".portal-input").html(e)
        } catch (e) {}
    }
}
$(document).keyup(function(e) {
    if (e.keyCode == 13) {
        if ($(".czone-dc form .signupotpcontainer input").is(":focus")) {
            $(".za-submitbtn-otp .signupbtn").trigger("click")
        }
    }
});
$(document).on("blur", ".signup-box input", function() {
    var e = $(this);
    setTimeout(function() {
        if (e.parent().hasClass("field-error") || e.val() == "") {
            e.siblings(".placetxt").removeClass("zcr-msg-active").addClass("zcr-msg-grey")
        } else {
            e.siblings(".placetxt").removeClass("zcr-msg-grey").addClass("zcr-msg-active")
        }
        if (window.location.host == _preZ) {
            if (e.val() == "" || e.parent().hasClass("field-error")) {
                e.removeClass("czone-field-valid").addClass("czone-field-error")
            } else {
                e.removeClass("czone-field-error").addClass("czone-field-valid")
            }
        }
    }, 1e3)
});
$(document).on("change", "#newsletter", function() {
    if ($(".icon-medium").hasClass("checked")) {
        $("#signupform [name='newsletter']").attr("checked", "true");
        customvar.singaporeConsentchecked = true
    } else {
        $("#signupform [name='newsletter']").removeAttr("checked");
        customvar.singaporeConsentchecked = false
    }
});
$(document).on("change", ".globalcountrycode-signup", function() {
    if (customvar.showchangecountry == "false") {
        if ($(".signup-box .globalcountrycode-signup").length > 0) {
            $(".signup-box .globalcountrycode-signup").val(CountryCode)
        }
    }
    onlycom = false;
    if ((customvar.productName == "crm" || customvar.productName == "bigin" || customvar.productName == "zohobigin" || customvar.productName == "canvas" || customvar.productName == "desk") && currentUrlLang != "jp") {} else {
        var e = $(this).val();
        customvar.scountrys = e;
        var a = customvar.dcObj;
        dcdomainOne = "com";
        for (var t in a) {
            if (typeof a[t].countries != "undefind") {
                if (a[t].countries.indexOf(e) > -1) {
                    if (a[t].notavailable.indexOf(customvar.productName) > -1) {
                        dcdomainOne = "com";
                        onlycom = true
                    } else {
                        dcdomainOne = a[t].domain
                    }
                }
            }
        }
        customvar.zDomainHandling();
        addsignup(customvar.signupObj);
        if ($(".portName").length > 0) {
            $(".portName").html(customvar.dcadded($(".portName").html()))
        }
        $(".zcountry-info").addClass("zhide-common");
        $(".za-country-container").addClass("zshow")
    }
});
if (customvar.showchangecountry == "false") {}
function addsignup(e) {
    customvar.signupObj = e;
    customvar.signupflow = {
        customelement: typeof customvar.signupObj.customelement != "undefined" ? customvar.signupObj.customelement : "",
        customelementone: typeof customvar.signupObj.customelementone != "undefined" ? customvar.signupObj.customelementone : "",
        customelementtwo: typeof customvar.signupObj.customelementtwo != "undefined" ? customvar.signupObj.customelementtwo : "",
        username: '<div class="username-container sgfrm" id="usernmediv"><div class="wrap-elm"><span class="placeholder">' + Drupal.t("Email Address") + '</span><input class="dummyclass" id="username" name="username" placeholder="' + Drupal.t("Email Address") + '" type="text"><label class="defdomlabel" id="defdomdiv">@' + customvar.productName + "." + Zdomain + "." + dcdomainOne + "</label></div></div>",
        name: '<div class="sgfrm za-name-container"><div class="wrap-elm"><span class="placeholder">' + Drupal.t("Name") + '</span><input class="dummyclass" id="name" name="firstname" placeholder="' + Drupal.t("Name") + '" type="text"></div></div>',
        fullname: '<div class="sgfrm za-name-container"><div class="wrap-elm"><span class="placeholder">' + customvar.fullName + '</span><input class="dummyclass" id="fullname" name="firstname" placeholder="' + customvar.fullName + '" type="text"></div></div>',
        email: '<div class="za-email-container sgfrm"><div class="wrap-elm"><span class="placeholder">' + customvar.email + '</span><input class="dummyclass" id="email" name="email" placeholder="' + customvar.email + '" type="text"></div></div>',
        password: '<div class="za-password-container sgfrm"><div class="wrap-elm"><span class="placeholder">' + customvar.password + '</span><span class="zpassword-show"></span><input class="dummyclass" id="password" name="password" placeholder="' + customvar.password + '" type="password">' + (typeof customvar.signupObj.password != "undefined" ? typeof customvar.signupObj.password.showpassword != "undefined" ? customvar.signupObj.password.showpassword == true || customvar.signupObj.password.showpassword == "yes" ? '<span class="showhide"></span>' : "" : "" : "") + (typeof customvar.signupObj.password != "undefined" ? typeof customvar.signupObj.password.passwordstrength != "undefined" ? customvar.signupObj.password.passwordstrength == true || customvar.signupObj.password.passwordstrength == "yes" ? '<div class="password-strengths zhide-common"> <p> Password Strength ：<b class="weak-pass">Weak</b><b class="strong-pass">Strong</b></p> <div class="strengths-bar"> <span></span> </div> </div>' : "" : "" : "") + "</div></div>",
        repassword: '<div class="za-repassword-container sgfrm"><div class="wrap-elm"><span class="placeholder">' + Drupal.t("Confirm Password") + '</span><input class="dummyclass" id="repassword" name="repassword" placeholder="' + Drupal.t("Confirm Password") + '" type="password">' + (typeof customvar.signupObj.password != "undefined" ? typeof customvar.signupObj.password.showpassword != "undefined" ? customvar.signupObj.password.showpassword == true || customvar.signupObj.password.showpassword == "yes" ? '<span class="showhide"></span>' : "" : "" : "") + "</div></div>",
        companyname: '<div class="sgfrm za-company-container"><div class="wrap-elm"><span class="placeholder">' + customvar.companyName + '</span><input class="dummyclass" id="companyname" name="x_companyname" placeholder="' + customvar.companyName + '" type="text"></div></div>',
        contactnumber: '<div class="sgfrm mobile-container"><div class="wrap-elm"><span class="placeholder">' + customvar.phoneNumber + '</span><input class="dummyclass" id="mobile" type="text" placeholder="' + customvar.phoneNumber + '" name="r_address/1.phone"></div></div>',
        custominput: '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder">' + (typeof customvar.signupObj.custominput != "undefined" ? typeof customvar.signupObj.custominput.placeholder != "undefined" ? customvar.signupObj.custominput.placeholder : "" : "") + '</span><input id="custominput" class="dummyclass" type="' + (typeof customvar.signupObj.custominput != "undefined" ? typeof customvar.signupObj.custominput.type != "undefined" ? customvar.signupObj.custominput.type : "text" : "text") + '" placeholder="' + (typeof customvar.signupObj.custominput != "undefined" ? typeof customvar.signupObj.custominput.placeholder != "undefined" ? customvar.signupObj.custominput.placeholder : "" : "") + '" name="' + (typeof customvar.signupObj.custominput != "undefined" ? typeof customvar.signupObj.custominput.name != "undefined" ? customvar.signupObj.custominput.name : "" : "") + '"></div></div>',
        custominputone: '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder">' + (typeof customvar.signupObj.custominputone != "undefined" ? typeof customvar.signupObj.custominputone.placeholder != "undefined" ? customvar.signupObj.custominputone.placeholder : "" : "") + '</span><input id="custominputone" class="dummyclass" type="' + (typeof customvar.signupObj.custominputone != "undefined" ? typeof customvar.signupObj.custominputone.type != "undefined" ? customvar.signupObj.custominputone.type : "text" : "text") + '" placeholder="' + (typeof customvar.signupObj.custominputone != "undefined" ? typeof customvar.signupObj.custominputone.placeholder != "undefined" ? customvar.signupObj.custominputone.placeholder : "" : "") + '" name="' + (typeof customvar.signupObj.custominputone != "undefined" ? typeof customvar.signupObj.custominputone.name != "undefined" ? customvar.signupObj.custominputone.name : "" : "") + '"></div></div>',
        couponinput: '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder">' + (typeof customvar.signupObj.couponinput != "undefined" ? typeof customvar.signupObj.couponinput.placeholder != "undefined" ? customvar.signupObj.couponinput.placeholder : customvar.couponinputplaceholder : "") + '</span><input id="coupon" class="dummyclass" type="' + (typeof customvar.signupObj.couponinput != "undefined" ? typeof customvar.signupObj.couponinput.type != "undefined" ? customvar.signupObj.couponinput.type : "text" : "text") + '" placeholder="' + (typeof customvar.signupObj.couponinput != "undefined" ? typeof customvar.signupObj.couponinput.placeholder != "undefined" ? customvar.signupObj.couponinput.placeholder : customvar.couponinputplaceholder : "") + '" name="' + (typeof customvar.signupObj.couponinput != "undefined" ? typeof customvar.signupObj.couponinput.name != "undefined" ? customvar.signupObj.couponinput.name : "x_r_coupon" : "") + '"></div></div>',
        custominputtwo: '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder">' + (typeof customvar.signupObj.custominputtwo != "undefined" ? typeof customvar.signupObj.custominputtwo.placeholder != "undefined" ? customvar.signupObj.custominputtwo.placeholder : "" : "") + '</span><input id="custominputtwo" class="dummyclass" type="' + (typeof customvar.signupObj.custominputtwo != "undefined" ? typeof customvar.signupObj.custominputtwo.type != "undefined" ? customvar.signupObj.custominputtwo.type : "text" : "text") + '" placeholder="' + (typeof customvar.signupObj.custominputtwo != "undefined" ? typeof customvar.signupObj.custominputtwo.placeholder != "undefined" ? customvar.signupObj.custominputtwo.placeholder : "" : "") + '" name="' + (typeof customvar.signupObj.custominputtwo != "undefined" ? typeof customvar.signupObj.custominputtwo.name != "undefined" ? customvar.signupObj.custominputtwo.name : "" : "") + '"></div></div>',
        custominputthree: '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder">' + (typeof customvar.signupObj.custominputthree != "undefined" ? typeof customvar.signupObj.custominputthree.placeholder != "undefined" ? customvar.signupObj.custominputthree.placeholder : "" : "") + '</span><input id="custominputthree" class="dummyclass" type="' + (typeof customvar.signupObj.custominputthree != "undefined" ? typeof customvar.signupObj.custominputthree.type != "undefined" ? customvar.signupObj.custominputthree.type : "text" : "text") + '" placeholder="' + (typeof customvar.signupObj.custominputthree != "undefined" ? typeof customvar.signupObj.custominputthree.placeholder != "undefined" ? customvar.signupObj.custominputthree.placeholder : "" : "") + '" name="' + (typeof customvar.signupObj.custominputthree != "undefined" ? typeof customvar.signupObj.custominputthree.name != "undefined" ? customvar.signupObj.custominputthree.name : "" : "") + '"></div></div>',
        orgname: '<div class="sgfrm"><div class="wrap-elm"><span class="placeholder">' + Drupal.t("Organization Name") + '</span><input class="dummyclass" id="orgname" name="x_orgname" placeholder=' + Drupal.t("Organization Name") + ' type="text"></div></div>',
        dialcodecontactnumber: '<div class="mobile-container sgfrm mobile-ccode"><div class="wrap-elm"><div align="left" class="za-country_code-container"> <select class="za_country_code" id="country_code" onchange="changeCountrycode(this)" name="country_code">' + customvar.nscountrypop("dial") + '</select><input id="dialcodecontactnumber" class="phone_countrycode" name="x_phone_countrycode" type="hidden" value=""><div class="ccodelabel" id="countryCodeDiv"><div class="ccodediv" id="ccodediv"></div></div><span class="dialphonenum placeholder">' + (typeof customvar.signupObj.dialcodecontactnumber != "undefined" ? typeof customvar.signupObj.dialcodecontactnumber.placeholder != "undefined" ? customvar.signupObj.dialcodecontactnumber.placeholder : customvar.phoneNumber : customvar.phoneNumber) + '</span><input class="dummyclass dialphone" id="mobile" name="r_address/1.phone" placeholder="' + (typeof customvar.signupObj.dialcodecontactnumber != "undefined" ? typeof customvar.signupObj.dialcodecontactnumber.placeholder != "undefined" ? customvar.signupObj.dialcodecontactnumber.placeholder : customvar.phoneNumber : customvar.phoneNumber) + '" spellcheck="false" type="text" /> </div></div></div>',
        redialcodecontactnumber: '<div class="za-remobile-container sgfrm mobile-ccode"><div class="wrap-elm"><div align="left" class="za-ccountry_code-container"> <select class="za_confirm_country_code" id="confirm_country_code" onchange="changeCountrycode(this)" name="confirm_country_code">' + customvar.nscountrypop("dial") + '</select><input id="redialcodecontactnumber" class="confirm_phone_countrycode" name="x_confirm_phone_countrycode" type="hidden" value=""><div class="ccodelabel" id="countryconfirmCodeDiv"><div class="confirm_ccodediv" id="ccodediv"></div></div><span class="placeholder dialphonenum">' + (typeof customvar.signupObj.redialcodecontactnumber != "undefined" ? typeof customvar.signupObj.redialcodecontactnumber.placeholder != "undefined" ? customvar.signupObj.redialcodecontactnumber.placeholder : customvar.rephoneNumber : customvar.rephoneNumber) + '</span><input class="dummyclass dialphone" id="confirmMobile" name="confirmMobile" placeholder="' + (typeof customvar.signupObj.redialcodecontactnumber != "undefined" ? typeof customvar.signupObj.redialcodecontactnumber.placeholder != "undefined" ? customvar.signupObj.redialcodecontactnumber.placeholder : customvar.rephoneNumber : customvar.rephoneNumber) + '" spellcheck="false" type="text" /> </div></div></div>',
        emailormobile: '<div class="sgfrm za-email-container" style="display:none"><span class="placeholder">' + customvar.email + '</span><input type="text" id="email" name="email" placeholder="' + customvar.email + '"></div> <div class="sgfrm za-emailormobile-container mobile-ccode"><div class="wrap-elm"><div align="left" class="za-country_code-container" style="display:none"><select data-zcqa="sgnp-mob-countryCode" class="za_country_code" id="country_code" name="country_code" aria-label="Enter your country code" onchange="changeCountrycode(this)">' + customvar.nscountrypop("dial") + '</select><div class="ccodelabel" id="countryCodeDiv"><div class="ccodediv" id="ccodediv"></div></div></div><span class="placeholder">' + Drupal.t("Email") + " / " + Drupal.t("Phone") + '</span><input type="text" name="emailormobile" class="dummyclass" id="emailmoile" axlength="100" placeholder="' + Drupal.t("Email") + " / " + Drupal.t("Phone") + '"> </div></div> <div class="sgfrm za-mobile-container" style="display:none"> <div> <div class="za-country_code-container"> <div> <div class="ccdivtext"><span class="ccdiv"></span></div> <select class="form-input1 countryCnt1 za-country-select-code" name="country_code" id="country-code" tabindex="1"></select> </div> </div> <input type="text" name="mobile" id="phonenumber"> <label id="mobile_label">Phone Number</label> </div> </div>',
        rmobile: '<div class="za-rmobile-container sgfrm rmobiledisabled"><div class="wrap-elm"><div align="left" class="za-country_code-container "> <select class="za_country_code" id="country_code_rmobile" onchange="changeCountrycode()" name="country_code">' + customvar.nscountrypop("dial") + '</select><input class="phone_countrycode" name="x_phone_countrycode" type="hidden" value="+91"><div class="ccodelabel" id="countryCodeDiv"><div class="ccodediv" id="ccodediv">+91</div></div><span class="dialphonenum placeholder">' + (typeof customvar.signupObj.rmobile != "undefined" ? typeof customvar.signupObj.rmobile.placeholder != "undefined" ? customvar.signupObj.rmobile.placeholder : customvar.phoneNumber : customvar.phoneNumber) + '</span><input id="rmobile" class="dialphone" name="rmobile" placeholder="' + (typeof customvar.signupObj.dialcodecontactnumber != "undefined" ? typeof customvar.signupObj.dialcodecontactnumber.placeholder != "undefined" ? customvar.signupObj.dialcodecontactnumber.placeholder : customvar.phoneNumber : customvar.phoneNumber) + '" spellcheck="false" type="text" /> </div></div></div><input type="hidden" name="x_phone" value="">',
        portalcompanyname: '<div class="sgfrm za-company-container"> <div class="wrap-elm"><span class="placeholder">' + customvar.companyName + '</span><input type="text" id="portalcompanyname" placeholder="' + customvar.companyName + '" onkeyup="dispportalName()"  class="sgname sgnusrname p_name dummyclass" name="r_account.account_name" onblur="$(\'#x_portal\').trigger(\'blur\');"> </div></div>',
        portal: '<div class="sgfrm za-company-container"> <div class="wrap-elm"><div class="za-company-box"><span class="portal-id" id="sPortalInpId">' + "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne + '/portal/</span><input class="portal-input dummyclass" id="portal" name="x_portal" type="text"></div> </div></div>',
        companywithportal: '<div class="sgfrm za-company-container"><div class="wrap-elm"><span class="placeholder">' + customvar.companyName + '</span><input id="r_account" name="r_account.account_name" type="hidden" value=""><input class="sgnemail p_name dummyclass" id="companywithportal" name="x_portal.portal_name" onkeyup="dispportalName()" placeholder="' + customvar.companyName + '" type="text"><div class="portalName"><span class="portalink"><span class="portName">' + (typeof customvar.signupObj.portaltext != "undefined" ? customvar.signupObj.portaltext : "https://" + customvar.productName + "." + Zdomain + "." + dcdomainOne + "/") + '</span><span id="portal-input" class="portal-input"></div></div></div>',
        customselect: '<div class="sgfrm za-select-container"><div class="wrap-elm"><select id="customselect" class="dummyclass">' + (typeof customvar.signupObj.customselect != "undefined" ? customvar.signupObj.customselect.options : "") + "</select></div></div>",
        customselectone: '<div class="sgfrm za-select-container"><div class="wrap-elm"><select id="customselect" class="dummyclass">' + (typeof customvar.signupObj.customselectone != "undefined" ? customvar.signupObj.customselectone.options : "") + "</select></div></div>"
    };
    customvar.singleFieldSingupFlow = {
        email: '<div class="za-email-container sgfrm zwc_sfield"><div class="wrap-elm col"><span class="placeholder">' + customvar.email + '</span><input class="dummyclass" id="email" name="email" placeholder="' + customvar.email + '" type="text"></div></div>'
    };
    customvar.getsfield();
    customvar.nOfSignup = typeof customvar.signupObj.nunmberofsignup != "undefined" ? customvar.signupObj.nunmberofsignup : 0;
    $("#czone-home, #czone-signup, #czone-wallet").addClass("czone-dc");
    if ($("#czone-wallet").length > 0) {
        $("body").addClass("czone-iswallet-page")
    }
    $(".czone-dc").html("");
    if (window.location.host.includes(_lz) && customvar.productName == "learn" && _lhref.includes("/signup.html")) {
        $(".czone-dc").append('<form action="//accounts.zoho.com/accounts/register.ac" autocomplete="off" class="banner-signup" name="signupform" id="signupform" method="post" novalidate><input type="hidden" class="langinput" name="language" value="' + (currentUrlLang == "jp" ? "ja" : currentUrlLang == "zh-hant" ? "zh_tw" : currentUrlLang) + '"><div class="signupcontainer"></div></form>')
    } else {
        $(".czone-dc").append('<form action="//accounts.zoho.com/accounts/register.ac" autocomplete="off" class="banner-signup" name="signupform" id="signupform" method="post" novalidate><input type="hidden" class="langinput" name="language" value="' + (currentUrlLang == "jp" ? "ja" : currentUrlLang == "zh-hant" ? "zh_tw" : currentUrlLang) + '"><div class="signupcontainer"></div>' + customvar.otpEle + "</form>")
    }
    for (var a in customvar.signupObj) {
        var t = a.replace(/ +/g, "").toLowerCase();
        var o = typeof customvar.signupObj[a].required != "undefined" ? customvar.signupObj[a].required == true ? true : false : true;
        if (["customelement", "customelementone", "customelementtwo"].includes(a) && customvar.signupObj[a] == "") {
            o = false
        }
        if (typeof customvar.signupflow[t] != "undefined" && o) {
            if (t == "couponinput") {
                if (customvar.signupObj[a]["couponcode"]) {
                    customvar.couponCode = customvar.signupObj[a]["couponcode"]
                }
                if (customvar.signupObj[a]["redirecturl"]) {
                    customvar.dataredirectUrl = customvar.signupObj[a]["redirecturl"]
                }
                if (customvar.signupObj[a]["couponterms"]) {
                    customvar.zwProTerms = customvar.signupObj[a]["couponterms"]
                }
            }
            if (typeof customvar.signupObj.singlefield != "undefined" && customvar.signupObj.singlefield && customvar.singleFieldSingupFlow[t]) {
                $(".signupcontainer").append(customvar.singleFieldSingupFlow[t])
            } else {
                $(".signupcontainer").append(customvar.signupflow[t])
            }
            if (typeof customvar.signupObj[a].label != "undefined") {
                if ($(".dummyclass").length > 0) {
                    $(".dummyclass").before(customvar.signupObj[a].label)
                }
            }
            if (global_getUrlParam("ismobilesignup") != "") {
                if ($(".dummyclass").length > 0) {
                    $(".dummyclass").attr("autocapitalize", "none")
                }
            }
            for (var n in customvar.signupObj[a]) {
                var r = n.replace(/ +/g, "").toLowerCase();
                if (r == "nameattr") {
                    $(".dummyclass").attr("name", customvar.signupObj[a][n]);
                    $(".dummyclass").addClass(customvar.signupObj[a][n]);
                    if (customvar.signupObj[a][n] == "mobile" && customvar.productName == "mail") {
                        $(".dummyclass").parents().find(".mobile-container").addClass("za-mobile-container");
                        $(".dummyclass").parents().find(".za-mobile-container").removeClass("mobile-container")
                    }
                } else if (r == "placeholder") {
                    $(".dummyclass").siblings(".placeholder").html(customvar.signupObj[a][n]);
                    $(".dummyclass").attr("placeholder", customvar.signupObj[a][n])
                } else if (r == "id") {
                    $(".dummyclass").attr("id", customvar.signupObj[a][n])
                } else if (r == "class") {
                    $(".dummyclass").addClass(customvar.signupObj[a][n])
                } else if (r == "type") {
                    $(".dummyclass").attr("type", customvar.signupObj[a][n])
                } else if (r == "mandatory" || r == "mandatory-dc" || r == "mandatory-country") {
                    if (r == "mandatory-dc") {
                        if (customvar.signupObj[a][n].split(",").indexOf(dcdomainOne) > -1) {
                            $(".dummyclass").attr("mandate", true)
                        } else {
                            $(".dummyclass").attr("mandate", false)
                        }
                    } else if (r == "mandatory-country") {
                        if (customvar.signupObj[a][n].split(",").indexOf(customvar.scountrys.toLowerCase()) > -1) {
                            $(".dummyclass").attr("mandate", true)
                        } else {
                            $(".dummyclass").attr("mandate", false)
                        }
                    } else {
                        $(".dummyclass").attr("mandate", customvar.signupObj[a][n])
                    }
                } else if (r == "validatetext") {
                    $(".dummyclass").after('<span class="placetxt zcr-msg-grey">' + customvar.signupObj[a][n] + "</span>")
                }
                if (r == "asterix") {
                    $(".dummyclass").attr("czone-asterix", customvar.signupObj[a][n])
                }
            }
            $("input, select").removeClass("dummyclass")
        }
    }
    if (typeof $(".czone-dc").attr("id") != "undefined") {
        if ($(".czone-dc").attr("id") == "czone-signup") {
            $(".czone-dc input").not(".langinput").attr("placeholder", "")
        } else {
            $(".czone-dc .placeholder").remove()
        }
    }
    typeof customvar.signupObj.singlefield != "undefined" && customvar.signupObj.singlefield && $("#czone-home").length > 0 ? $(".signup-box").addClass("zsingle-field-form") : "";
    customvar.signupcommonelm = '<div class="za-captcha-container zs-ml34 sgfrm" style="display:none;"><input class="zs-txtfldnew zs-txtfldwidth" maxlength="15" name="captcha" placeholder="Enter the word seen in the below image" type="text" disabled="disabled"><div><img alt="Captcha" class="za-captcha" src="https://accounts.zoho.com/accounts/images/spacer.gif"><span class="za-refresh-captcha" onclick="changeHip(document.signupform)"></span></div></div><div class="sgfrm za-country-container za-country-container-arrow"> <span class="placecountryregion">' + Drupal.t("Country/Region") + '</span><select class="form-input countryCnt za-country-select globalcountrycode-signup" disabled="disabled" autocomplete="off" name="country" id="country" placeholder="Select Country" aria-invalid="false">' + customvar.nscountrypop() + '</select> </div><div class="sgnbtnmn"><div class="za-newsletter-container snews-letter" style="display: block;"><label for="newsletter" class="news-signup sign_agree"> <input tabindex="1" class="za-newsletter" type="checkbox" id="newsletter" name="newsletter" value="true" onclick="toggleNewsletterField()"> <span class="icon-medium" id="signup-newsletter"></span> <span>' + _txtIwould + "</span> </label></div>";
    customvar.signupcommonelm += typeof customvar.signupObj.additionalterms != "undefined" ? '<div class="terms-accept sgfrm"><label for="terms-check"><span class="tcheck">&nbsp;</span>' + (typeof customvar.signupObj.additionalterms.text != "undefined" ? customvar.signupObj.additionalterms.text : "") + '</label><input class="validatefield" id="terms-check" mandate=' + (typeof customvar.signupObj.additionalterms.mandatory != "undefined" ? customvar.signupObj.additionalterms.mandatory : true) + ' name="' + (typeof customvar.signupObj.additionalterms.nameAttr != "undefined" ? customvar.signupObj.additionalterms.nameAttr : "x_I_agree_to_the") + '" type="checkbox" value="false"></div>' : "";
    customvar.signupcommonelm += '<div class="za-tos-container"><label class="sign_agree" for="tos"><input class="za-tos" id="tos" name="tos" onclick="toggleTosField()"  type="checkbox" value="false"><span class="unchecked" id="signup-termservice">&nbsp;</span>' + (currentUrlLang == "jp" ? '<a class="stermslink" name="terms" href="https://www.zoho.com/jp/terms.html?src=crm-index" target="_blank" rel="noopener">サービス規約</a>および<a href="https://www.zoho.co.jp/privacy/" target="_blank" class="zrlink" rel="noopener">プライバシーポリシー</a>に同意します。' : typeof customvar.signupObj.globalagree != "undefined" ? customvar.signupObj.globalagree : Drupal.t("I agree to the ") + ' <a name="terms" href="' + ("https://www.zoho.com" + langsrc + "terms.html") + "" + '" target="_blank" rel="noopener" class="czone-signup-term">' + Drupal.t("Terms of Service") + "</a> " + Drupal.t("and") + ' <a class="zrlink" name="privacy" href="' + (typeof customvar.signupObj.privacylink != "undefined" ? customvar.signupObj.privacylink : "https://www.zoho.com" + langsrc + "privacy.html") + "" + (typeof customvar.signupObj.privacyparam != "undefined" ? customvar.signupObj.privacyparam : "") + '" target="_blank" rel="noopener">' + Drupal.t("Privacy Policy") + "</a>.") + "</label></div>";
    if ($(".signup-box").hasClass("zsingle-field-form")) {
        $(".zwc_sfield").append('<div class="sgnbtn col"><input class="signupbtn disabled-z-signup" onclick=" return zSignupPrevent();" id="signupbtn" type="submit" value="' + (typeof customvar.signupObj.btntext != "undefined" ? customvar.signupObj.btntext : Drupal.t("Sign Up for Free")) + '" style="opacity:0.3;"></div></div>')
    } else {
        customvar.signupcommonelm += '<div class="sgnbtn"><input class="signupbtn disabled-z-signup" onclick=" return zSignupPrevent();" id="signupbtn" type="submit" value="' + (typeof customvar.signupObj.btntext != "undefined" ? customvar.signupObj.btntext : Drupal.t("Sign Up for Free")) + '" style="opacity:0.3;"></div></div>'
    }
    customvar.signupcommonelm += '<div class="socl-signup" style="display:none;"> <p>' + (typeof customvar.signupObj.socialtxt != "undefined" ? customvar.signupObj.socialtxt == "true" || customvar.signupObj.socialtxt == true ? Drupal.t("or sign in using ") : "" : Drupal.t("or sign in using ")) + ' <span class="vi-apple sig-mac" onclick="FederatedSignIn.GO(\'APPLE\');zohoFedClickEvent(\'apple\');" title="apple"  style="display:none;">apple</span><span class="vi-google" onclick="FederatedSignIn.GO(\'GOOGLE\');zohoFedClickEvent(\'Google\');" title="Google" style="display:none;">Google</span><span class="vi-facebook" onclick="FederatedSignIn.GO(\'FACEBOOK\');zohoFedClickEvent(\'Facebook\');" title="Facebook" style="display:none;">Facebook</span><span class="vi-linkedin" onclick="FederatedSignIn.GO(\'LINKEDIN\');zohoFedClickEvent(\'Linkedin\');" title="Linkedin" style="display:none;">Linkedin</span><span class="vi-twitter" onclick="FederatedSignIn.GO(\'TWITTER\');zohoFedClickEvent(\'Twitter\');" title="Twitter" style="display:none;">Twitter</span><span class="vi-office365" onclick="FederatedSignIn.GO(\'AZURE\');zohoFedClickEvent(\'office365\');" title="Microsoft" style="display:none;">Office365</span><span class="vi-apple sig-android" onclick="FederatedSignIn.GO(\'APPLE\');zohoFedClickEvent(\'apple\');" style="display:none;" title="apple">apple</span><span class="vi-github" onclick="FederatedSignIn.GO(\'GITHUB\');zohoFedClickEvent(\'github\');" style="display:none;" title="github">github</span></p></div>';
    $(".signupcontainer").append((typeof customvar.signupObj.additionalfield != "undefined" ? customvar.signupObj.additionalfield : "") + customvar.signupcommonelm);
    if (global_getUrlParam("ismobilesignup") == "") {
        $(".signupcontainer").append('<input name="x_tempIpCountry" mandate="false" type="hidden" value="' + customvar.getGlobalCookie("zip") + '">')
    }
    $(".zrlink").length > 0 && "de" == currentUrlLang && "Datenschutzrichtlinie" == $(".zrlink").html() && $(".zrlink").after("<span> zu</span>");
    if (typeof customvar.signupObj.password != "undefined") {
        if (typeof customvar.signupObj.password.passwordgen != "undefined") {
            $("#password").after('<span class="gentext zhide-common">' + Drupal.t("Powered by Zoho Vault's") + " " + '<a href="/vault/password-generator/" target="_blank">' + Drupal.t("password generator.") + "</a> " + Drupal.t("The generated password will be copied when you click 'Sign up for free.'") + '</span><span onclick="passwordset();" class="pgen t-tip"><span>Generate password</span></span> <span onclick="copyToClipboard();" class="pcopy t-tip zhide-common">Copy<span class="t-text">Copy</span></span>');
            $(".t-tip").on("mouseover", function() {
                $(this).addClass("active")
            }).on("mouseout", function() {
                $(this).removeClass("active")
            });
            $("#password").on("keyup", function() {
                if ($("#password").val() == "") {
                    $(".pcopy").hide()
                }
            })
        }
    }
    if (typeof customvar.signupObj["social-icon"] != "undefined") {
        if (customvar.signupObj["social-icon"] != "") {
            $(".signup-box .socl-signup").show();
            var s = customvar.signupObj["social-icon"].split(",");
            for (i = 0; i <= s.length; i++) {
                $(".signup-box .socl-signup" + " ." + s[i]).show()
            }
        }
        if ($(".signup-box .socl-signup .vi-facebook").length > 0) {
            if (typeof $(".signup-box .socl-signup .vi-facebook").attr("style") != "undefined") {
                if ($(".signup-box .socl-signup .vi-facebook").attr("style").indexOf("display: inline") > -1) {
                    $(".signup-box .socl-signup .vi-facebook").hide()
                }
            }
        }
        $(".ccode-eucountries .czone-dc .vi-linkedin").hide()
    }
    $(".za-newsletter-container").css("display", "none");
    if (typeof customvar.signupformloaded != "undefined") {
        customvar.signupformloaded()
    }
    z_add_account_script_common();
    setcountryCode();
    if (customvar.counntrychangeed) {
        $(".zcountry-info").addClass("zhide-common");
        $(".za-country-container").addClass("zshow")
    }
    customvar.setsfield();
    customvar.privacypolicylink(true);
    customvar.termslink.setDefaultTerm(true)
}
customvar.signupEditionHandler = function(e, a) {
    var t = null;
    if (a) {
        t = a
    } else if (e) {
        t = e.target.value
    }
    if (t == "personal") {
        var o = $('.signupcontainer [name="signup_edition"]#personal').attr("checked");
        if (typeof customvar.personalsignup != "undefined" && !o) {
            customvar.personalsignup()
        }
    } else if (t == "business") {
        var n = $('.signupcontainer [name="signup_edition"]#business').attr("checked");
        if (typeof customvar.businesssignup != "undefined" && !n) {
            customvar.businesssignup()
        }
    }
    if ($(".socl-signup").length > 0) {
        $(".socl-signup p").contents().filter(function() {
            return this.nodeType === 3
        }).wrap("<b/>")
    }
    customvar.newsletterhandle()
}
;
$(document).on("click", '.signupcontainer [name="signup_edition"]', customvar.signupEditionHandler);
function onSignupReady() {
    var a = $("#signupbtn");
    $("#signupbtn, .za-tos-container").removeClass("disabled-z-signup");
    $(".globalcountrycode-signup, .za-tos, #signupbtn").removeAttr("disabled");
    a.css({
        opacity: 1
    });
    $(".signup-box").css({
        opacity: "1",
        visibility: "visible"
    });
    if ($("body").hasClass("ismobileapp") && customvar.productName == "desk") {
        $(".signup-box #email").attr("type", "email")
    }
    $.validator.addMethod("isValidPhone", function(e, a) {
        var t = /^[0-9\s\(\)\+\-]+$/;
        var o = /^[\-\+]+$/;
        if (e != "") {
            if (!o.test(e)) {
                if (!t.test(e)) {
                    return false
                }
            }
            if ($("#mobile").hasClass("dialphone")) {
                if (e.indexOf("+") > -1) {
                    return false
                }
            }
            if (e.length < 5) {
                return false
            }
        }
        if (window.location.host == "www.zoho.com.cn" || window.location.href.indexOf("/zh-hans/") > -1) {
            var t = /^1[34578]\d{9}$/;
            var o = /^[\-\+]+$/;
            if (e != "") {
                if (!o.test(e)) {
                    if (!t.test(e)) {
                        this.settings.messages[a.name] = "&#35831;&#36755;&#20837;&#26377;&#25928;&#30340;&#25163;&#26426;&#21495;";
                        return false
                    }
                }
            }
        }
        return true
    });
    $.validator.addMethod("isValidPortalName", function(e, a) {
        var t = /^[a-z0-9]+$/;
        if (!t.test(e)) {
            return false
        } else {
            return true
        }
    });
    $.validator.addMethod("numbersOnly", function(e, a) {
        var t = /^[0-9]+$/;
        if (e) {
            if (!t.test(e)) {
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    });
    $.validator.addMethod("accountNamevalidate", function(e, a) {
        if (e.length < 6) {
            return false
        }
        return true
    });
    $.validator.addMethod("isValidlastname", function(e, a) {
        var t = /^[A-Za-z0-9_\-\ \.]+$/;
        if (!t.test(e)) {
            return false
        }
        return true
    });
    $.validator.addMethod("repasscheck", function(e, a) {
        if ($("#password").val() != $("#repassword").val()) {
            return false
        }
        return true
    });
    $.validator.addMethod("isValid", function(e, a) {
        var t = /^[A-Za-z0-9 ]+$/;
        if (!t.test(e)) {
            return false
        } else {
            return true
        }
    });
    $.validator.addMethod("isreValidPhone", function(e, a) {
        if ($("#mobile").val() != e || $("#country_code").val() != $("#confirm_country_code").val()) {
            return false
        }
        return true
    });
    $.validator.addMethod("seletcheck", function(e, a) {
        if (e == "") {
            return false
        }
        return true
    });
    $.validator.addMethod("x_optioncheck", function(e, a) {
        if (e == "") {
            return false
        }
        return true
    });
    $.validator.addMethod("isValidUser", function(e, a) {
        if (e != "") {
            if (!/^[0-9]{1,10}$/.test(e) || e < "1") {
                return false
            }
        }
        return true
    });
    if (typeof WalletSignUpError == "function") {
        WalletSignUpError()
    }
    $("#signupform").zaSignUp({
        validator: {
            rules: {
                firstname: {
                    required: customvar.getmadate("firstname"),
                    isValidlastname: customvar.getsplmadate("firstname"),
                    validateRemote: customvar.validateRemote("firstname")
                },
                x_name: {
                    required: customvar.getmadate("x_name")
                },
                lastname: {
                    required: customvar.getmadate("lastname"),
                    isValidlastname: customvar.getsplmadate("lastname"),
                    validateRemote: customvar.validateRemote("lastname")
                },
                x_phone_number: {
                    required: customvar.getmadate("x_phone_number"),
                    isValidPhone: $("input[name='x_phone_number']").attr("type") == "hidden" ? false : true
                },
                x_phone: {
                    required: customvar.getmadate("x_phone"),
                    isValidPhone: $("input[name='x_phone']").attr("type") == "hidden" ? false : true
                },
                "r_address/1.phone": {
                    required: customvar.getmadate("r_address/1.phone"),
                    isValidPhone: $("input[name='r_address/1.phone']").attr("type") == "hidden" ? false : true
                },
                "r_address/1.company_name": {
                    required: customvar.getmadate("r_address/1.company_name")
                },
                x_contactnumber: {
                    required: customvar.getmadate("x_contactnumber"),
                    isValidPhone: $("input[name='x_contactnumber']").attr("type") == "hidden" ? false : true
                },
                confirmMobile: {
                    required: true,
                    isreValidPhone: true
                },
                "r_address/2.phone": {
                    required: customvar.getmadate("r_address/2.phone"),
                    isValidPhone: $("input[name='r_address/2.phone']").attr("type") == "hidden" ? false : true
                },
                "r_account.account_name": {
                    required: customvar.getmadate("r_account.account_name"),
                    validateRemote: {}
                },
                x_orgname: {
                    required: customvar.getmadate("x_orgname")
                },
                Organization_Name: {
                    required: customvar.getmadate("Organization_Name")
                },
                x_organization_name: {
                    required: customvar.getmadate("x_organization_name")
                },
                Role_in_organization: {
                    required: customvar.getmadate("Role_in_organization")
                },
                x_role_in_organization: {
                    required: customvar.getmadate("x_role_in_organization")
                },
                x_developer_experience: {
                    required: customvar.getmadate("x_developer_experience")
                },
                Developer_Experience: {
                    required: customvar.getmadate("Developer_Experience")
                },
                x_company_name: {
                    required: customvar.getmadate("x_company_name")
                },
                x_company: {
                    required: customvar.getmadate("x_company")
                },
                x_companyname: {
                    required: customvar.getmadate("x_companyname")
                },
                x_city: {
                    required: customvar.getmadate("x_city")
                },
                x_designation: {
                    required: customvar.getmadate("x_designation")
                },
                x_iamCompanyName: {
                    required: customvar.getmadate("x_iamCompanyName")
                },
                x_portal: {
                    required: true,
                    isValidPortalName: true,
                    validateRemote: {
                        success: function(e) {
                            var a = e["error"];
                            if (typeof customvar.siggnupremotevalidate != "undefined") {
                                customvar.siggnupremotevalidate(a)
                            }
                        }
                    }
                },
                repassword: {
                    required: true,
                    repasscheck: true
                },
                x_r_coupon: {
                    required: false,
                    validateRemote: {}
                },
                x_employee_count: {
                    required: customvar.getmadate("x_employee_count"),
                    seletcheck: CountryCode == "GB" && [_preZ, "www.zoho.com"].some(function(e) {
                        return window.location.href.startsWith("https://" + e + langsrc + "signup.html")
                    }) ? false : true,
                    numbersOnly: CountryCode == "GB" && [_preZ, "www.zoho.com"].some(function(e) {
                        return window.location.href.startsWith("https://" + e + langsrc + "signup.html")
                    }) ? true : false
                },
                x_location_count: {
                    required: customvar.getmadate("x_location_count"),
                    seletcheck: true
                },
                x_empCount: {
                    required: customvar.getmadate("x_empCount"),
                    seletcheck: true
                },
                x_industry: {
                    required: customvar.getmadate("x_industry"),
                    seletcheck: true
                },
                x_agteamname: {
                    required: true,
                    isValid: true,
                    validateRemote: {
                        success: function(e) {
                            var a = e.error;
                            if (typeof customvar.siggnupremotevalidate != "undefined") {
                                customvar.siggnupremotevalidate(a)
                            }
                        }
                    }
                },
                "x_portal.portal_name": {
                    required: true,
                    isValid: true,
                    validateRemote: {
                        success: function(e) {
                            var a = e["error"];
                            if (typeof customvar.siggnupremotevalidate != "undefined") {
                                customvar.siggnupremotevalidate(a)
                            }
                        }
                    }
                },
                x_portal_name: {
                    required: customvar.getmadate("x_portal_name"),
                    isValid: true,
                    validateRemote: {}
                },
                "x_portal.portal_agency_name": {
                    required: true,
                    isValid: true,
                    validateRemote: {
                        success: function(e) {
                            var a = e["error"];
                            if (typeof customvar.siggnupremotevalidate != "undefined") {
                                customvar.siggnupremotevalidate(a)
                            }
                        }
                    }
                },
                x_I_agree_to_the: {
                    required: customvar.getmadate("x_I_agree_to_the")
                },
                x_optioncheck: {
                    required: customvar.getmadate("x_optioncheck")
                },
                x_offer_code: {
                    validateRemote: true
                },
                x_register: {
                    required: customvar.getmadate("x_register")
                },
                x_API_Users: {
                    required: customvar.getmadate("x_API_Users"),
                    isValidUser: true
                },
                x_formation_state: {
                    required: customvar.getmadate("x_formation_state"),
                    seletcheck: true
                }
            },
            messages: {
                firstname: {
                    required: customvar.productName == "one" || customvar.productName == "publish" ? customvar.eFullName : customvar.eFirstName,
                    isValidlastname: customvar.numcharspl
                },
                x_name: {
                    required: customvar.eFullName
                },
                lastname: {
                    required: customvar.eLastName,
                    isValidlastname: customvar.numcharspl
                },
                x_phone_number: {
                    required: customvar.eMobileNumber,
                    isValidPhone: customvar.eValidPhoneNumber
                },
                x_phone: {
                    required: customvar.eMobileNumber,
                    isValidPhone: customvar.eValidPhoneNumber
                },
                "r_address/1.phone": {
                    required: customvar.eMobileNumber,
                    isValidPhone: customvar.eValidPhoneNumber
                },
                "r_address/1.company_name": {
                    required: customvar.eOrgName
                },
                x_contactnumber: {
                    required: customvar.eMobileNumber,
                    isValidPhone: customvar.eValidPhoneNumber
                },
                confirmMobile: {
                    required: customvar.eReMobileNumber,
                    isreValidPhone: customvar.eValidPhoneNumber
                },
                "r_address/2.phone": {
                    required: customvar.eMobileNumber,
                    isValidPhone: customvar.eValidPhoneNumber
                },
                "r_account.account_name": {
                    required: customvar.eCompanyName
                },
                x_orgname: {
                    required: customvar.eOrgName
                },
                Organization_Name: {
                    required: customvar.eOrgName
                },
                x_organization_name: {
                    required: customvar.eOrgName
                },
                Role_in_organization: {
                    required: customvar.eOrgRole
                },
                x_role_in_organization: {
                    required: customvar.eOrgRole
                },
                x_developer_experience: {
                    required: customvar.eAboutYpurCompany
                },
                Developer_Experience: {
                    required: customvar.eAboutYpurCompany
                },
                x_company_name: {
                    required: customvar.eCompanyName
                },
                x_company: {
                    required: customvar.eCompanyName
                },
                x_companyname: {
                    required: customvar.eCompanyName
                },
                x_city: {
                    required: customvar.eCity
                },
                x_designation: {
                    required: customvar.eDesignation
                },
                x_iamCompanyName: {
                    required: customvar.eCompanyName
                },
                x_portal: {
                    required: customvar.ePortalName,
                    isValidPortalName: customvar.onlyletters,
                    validateRemote: ""
                },
                repassword: {
                    required: customvar.repasserr,
                    repasscheck: customvar.repaswrongserr
                },
                x_r_coupon: {
                    required: "test",
                    validateRemote: {}
                },
                x_employee_count: {
                    required: customvar.empCount,
                    seletcheck: customvar.empCount,
                    numbersOnly: customvar.eNumbersOnly
                },
                x_location_count: {
                    required: customvar.locationCount,
                    seletcheck: customvar.locationCount
                },
                x_empCount: {
                    required: customvar.empCount,
                    seletcheck: customvar.empCount
                },
                x_industry: {
                    required: customvar.selectindustry,
                    seletcheck: customvar.selectindustry
                },
                x_agteamname: {
                    required: customvar.teamNameTranslt,
                    isValid: customvar.isValidTranslt,
                    validateRemote: ""
                },
                "x_portal.portal_name": {
                    required: customvar.eCompanyName,
                    isValid: customvar.isvalidName,
                    validateRemote: ""
                },
                x_portal_name: {
                    required: customvar.eCompanyName,
                    isValid: customvar.isvalidName
                },
                "x_portal.portal_agency_name": {
                    required: customvar.isvalidAgency,
                    isValid: customvar.isvalidName,
                    validateRemote: ""
                },
                x_optioncheck: {
                    required: customvar.eselectEdition
                },
                x_register: {
                    required: customvar.registernum
                },
                x_formation_state: {
                    required: customvar.eFormationState
                },
                x_API_Users: {
                    required: customvar.usersrequire,
                    isValidUser: customvar.usersrequire
                }
            }
        },
        onsubmit: function() {
            customvar.setcurrentCountry();
            a.val(customvar.creatingthePortal);
            $("#signupbtn").addClass("disabled-z-signup");
            $("#signupbtn").addClass("zwc_creating_account");
            if (CountryCode == "US") {
                if (typeof RegionName != "undefined") {
                    if ($(".signup-box .za-state-container").hasClass("zshow-common")) {
                        if ($(".signup-box .za-state-container .za-globalstate-signup").length > 0) {
                            try {
                                $zoho.salesiq.visitor.customaction('{"eventCategory":"state_change_dd","eventAction":"' + RegionName.toLowerCase() + "-" + $(".signup-box .za-state-container .za-globalstate-signup").val() + '","eventLabel":"' + customvar.productName.toLowerCase() + '"}')
                            } catch (e) {}
                        }
                    }
                }
            }
            zohoGASignupEvent();
            if (typeof customvar.signupObj.password != "undefined") {
                if (typeof customvar.signupObj.password.passwordgen != "undefined") {
                    copyToClipboard();
                    $(".pcopy.t-tip").addClass("active");
                    $(".t-text").html("Password Copied");
                    setTimeout(function() {
                        $(".pcopy.t-tip").removeClass("active")
                    }, 1e3)
                }
            }
            if (typeof customvar.signuphandleonsubmit != "undefined") {
                customvar.signuphandleonsubmit()
            }
        },
        handleConfirmation: function(e) {
            if (typeof customvar.signuphandleconfirm != "undefined") {
                customvar.signuphandleconfirm(e)
            }
            if (!_lhref.includes("creator/developers/signup.html")) {
                e.doAction()
            }
        },
        oncomplete: function(e) {
            if (e == $.fn.zaSignUp.SIGNUP_STATE.ERROR) {
                $("#signupbtn").removeClass("disabled-z-signup");
                $("#signupbtn").removeClass("zwc_creating_account");
                a.val(typeof customvar.signupObj.btntext != "undefined" ? customvar.signupObj.btntext : customvar.signupforFree);
                if (typeof customvar.signupcompleteError != "undefined") {
                    customvar.signupcompleteError(e)
                }
            } else if (e == jQuery.fn.zaSignUp.SIGNUP_STATE.SIGNUP_COMPLETED) {
                if (typeof customvar.signupcomplete != "undefined") {
                    customvar.signupcomplete(e)
                }
            }
            if (typeof customvar.signupJPConfirm != "undefined") {
                customvar.signupJPConfirm(e)
            }
            if (e == $.fn.zaSignUp.SIGNUP_STATE.OTP_INITIATED) {
                if (typeof customvar.otp_initiated != "undefined") {
                    customvar.otp_initiated(e)
                }
                $("body").addClass("zw_signup_otp_visible")
            } else if (e == $.fn.zaSignUp.SIGNUP_STATE.OTP_ERROR) {
                setTimeout(function() {
                    if ($(".signupotpcontainer .signupbtn").length > 0) {
                        $(".signupotpcontainer .signupbtn").val(customvar.verify)
                    }
                    if (typeof customvar.otp_error != "undefined") {
                        customvar.otp_error(e)
                    }
                }, 300)
            }
            if ($("#mobileotp").length > 0) {
                if ($(".form-input.countryCnt.za-country-select.globalcountrycode-signup").val() != "IN") {
                    if ($("#emailmoile").length && zr_script.src.indexOf("mode=23")) {
                        $("#mobileotp").html($("#emailmoile").val())
                    }
                }
                if ($("#mobileotp").html().indexOf("@") > 0) {
                    $(".verifyheader").html(customvar.enterotpemail)
                } else {
                    $(".verifyheader").html(customvar.enterotpmobile)
                }
            }
        }
    });
    if (typeof webformevent === "function") {
        webformevent()
    }
}
$(window).on("load", function() {
    if ($("#ref_value").length < 1) {
        if ($(".signup-box form").length > 0) {
            var e = customvar.czmr();
            var a = _lhref;
            if (customvar.czmr().indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
                e = customvar.czmr().split(".html")[0] + ".html"
            }
            if (a.indexOf(".html") > 0 && global_getUrlParam("ismobilesignup") != "") {
                a = customvar.absurl
            }
            a = a.length > 300 ? a.substring(0, 300) : a;
            $(".signup-box form").append('<input id="ref_value" name="ref_value" type="hidden" value="' + customvar.czms() + "," + e + "," + customvar.cuid() + "," + customvar.mydevice() + "," + a + '">')
        }
    }
});
class EventBus {
    constructor() {
        this.listeners = {}
    }
    on(e, a) {
        if (!this.listeners[e]) {
            this.listeners[e] = []
        }
        this.listeners[e].push(a)
    }
    off(e, a) {
        if (!this.listeners[e])
            return;
        this.listeners[e] = this.listeners[e].filter(e=>e !== a)
    }
    emit(e, a) {
        if (!this.listeners[e])
            return;
        this.listeners[e].forEach(e=>e(a))
    }
}
const crmEventBus = new EventBus;