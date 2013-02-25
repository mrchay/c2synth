(function(){$.getScript("userscript.js")
.done(function(script,textStatus){
console.log("inject done:" +textStatus);
})
.fail(function(jqxhr,settings,exception){
console.log("triggered ajax error handler");
});
})();
