mixpanel.track_links("a", "Clicked link", function(ele) { return { 'mp_note': $(ele).attr('href')};});