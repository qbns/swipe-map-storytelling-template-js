define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "../utils/_MakeSingleton"
], function(
    declare,
    lang,
    _MakeSingleton
) {
    return _MakeSingleton(declare(null, {
        // Summary
        //      LocationService allows to provide current GPS position
        //      of the client device
        
        currentPosition: {
            longitude: null,
            latitude: null,
            accuracy: null
        },

        positionWatcherID: null,

        active: false,


        start: function(){
            if (this.actvie){
                return;
            }
            this.positionWatcherID = navigator.geolocation.watchPosition(
                lang.hitch(this, "_refreshGeolocation"),
                lang.hitch(this, "_geolocationError"), {
                    frequency: 1000,
                    timeout: 60000,
                    maximumAge: 0,
                    enableHighAccuracy: true
                });
            this.active = true;

        },

        stop: function(){
            navigator.geolocation.clearWatch(this.positionWatcherID);
            this.active = false;
        },

        _refreshGeolocation: function(position) {
            if (position.coords.accuracy < 20 || !this.currentPosition.latitude) {
                this.currentPosition = position.coords;
            }            
        },

        _geolocationError: function(error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.error("GPS. Location not provided");
                    break;
                case error.POSITION_UNAVAILABLE:
                    console.error("GPS. Current location not available");
                    break;
                case error.TIMEOUT:
                    console.error("GPS. Timeout");
                    break;
                default:
                    console.error("GPS. unknown error");
                    break;
            }
        }

    }));
});