define(["./config"],function(){window.env=require.toUrl(".").indexOf("build")>0?"prod":"dev",require(["rentsomefolks"])});