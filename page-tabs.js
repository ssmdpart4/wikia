;(function(mw, $, window, pageTabs){
	var page_tabs = $.extend(pageTabs, {
		page: mw.config.get('wgPageName', wgPageName),
		self: mw.config.get('wgUserName', wgUserName),
		$base: $('#page-tabs-wrapper')
	});
})(this.mediaWiki, this.jQuery, this == window ? this : window, this.PageTabs = this.PageTabs || {});
