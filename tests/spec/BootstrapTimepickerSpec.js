describe("Timepicker", function() {
    var div, inputElement, timepicker;

    beforeEach(function() {
        div = $('<div class="input-append bootstrap-timepicker-component"><input type="text" class="timepicker-default input-small"><span class="add-on"><i class="icon-time"></i></span></div>');
        inputElement = div.find('input.timepicker-default');
        inputElement.val('08:00');
        inputElement.timepicker({showMeridian: false});
        timepicker = inputElement.data('timepicker');
    });
    
    it('should have a data attribute', function() {
        expect(timepicker).toBeTruthy();
    });
    
    it('should set its internal values from the input value', function() {
        expect(timepicker.getTime()).toEqual('08:00');
    });
    
    describe('calling method', function() {
        it('setHour(10) sets the time to 10:00', function() {
            timepicker.setHour(10);
            expect(timepicker.getTime()).toEqual('10:00');
        });
        
        it('setMinute(30) sets the time to 08:30', function() {
            timepicker.setMinute(30);
            expect(timepicker.getTime()).toEqual('08:30');
        });
    });
    
    describe('event', function() {
        var triggerCount;
        
        describe('timeChange triggered once by calling', function() {
            beforeEach(function() {
                triggerCount = 0;

                inputElement.on('timeChange', function() {
                    triggerCount++;
                })
            });

            afterEach(function() {
                expect(triggerCount).toBe(1);
                inputElement.off('timeChange');
            });

            it('incrementHour()', function() {
                timepicker.incrementHour();
            });

            it('decrementHour()', function() {
                timepicker.decrementHour();
            });
            
            it('incrementMinute()', function() {
                timepicker.incrementMinute();
            });
            
            it('decrementMinute()', function() {
                timepicker.decrementMinute();
            });
        });

    });
    
    describe('Widget', function() {
        var $widget;
        
        beforeEach(function() {
            $widget = timepicker.$widget;
        });
        
        it('should not be visible when initialized', function() {
            expect($widget.is(':visible')).not.toBe(true);
        });
        
        it('showWidget() should make widget visible', function() {
            timepicker.showWidget();
            expect($widget.is(':visible')).toBe(true);
        });
        
        it('hideWidget() should hide widget', function() {
            timepicker.showWidget();
            timepicker.hideWidget();
            expect($widget.is(':visible')).not.toBe(true);
        });
        
        
    });
//
//  it("should be able to play a Song", function() {
//    player.play(song);
//    expect(player.currentlyPlayingSong).toEqual(song);
//
//    //demonstrates use of custom matcher
//    expect(player).toBePlaying(song);
//  });
//
//  describe("when song has been paused", function() {
//    beforeEach(function() {
//      player.play(song);
//      player.pause();
//    });
//
//    it("should indicate that the song is currently paused", function() {
//      expect(player.isPlaying).toBeFalsy();
//
//      // demonstrates use of 'not' with a custom matcher
//      expect(player).not.toBePlaying(song);
//    });
//
//    it("should be possible to resume", function() {
//      player.resume();
//      expect(player.isPlaying).toBeTruthy();
//      expect(player.currentlyPlayingSong).toEqual(song);
//    });
//  });
//
//  // demonstrates use of spies to intercept and test method calls
//  it("tells the current song if the user has made it a favorite", function() {
//    spyOn(song, 'persistFavoriteStatus');
//
//    player.play(song);
//    player.makeFavorite();
//
//    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//  });
//
//  //demonstrates use of expected exceptions
//  describe("#resume", function() {
//    it("should throw an exception if song is already playing", function() {
//      player.play(song);
//
//      expect(function() {
//        player.resume();
//      }).toThrow("song is already playing");
//    });
//  });
});