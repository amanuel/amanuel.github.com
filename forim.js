mixpanel.track_links("a", "Clicked link", function(ele) { return { type: $(ele).attr('type')};});