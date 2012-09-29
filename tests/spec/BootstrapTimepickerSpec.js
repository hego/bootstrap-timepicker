describe("Timepicker", function() {
    var inputElement;

    beforeEach(function() {
        var div;
        div = $('<div class="input-append bootstrap-timepicker-component"><input type="text" class="timepicker-default input-small"><span class="add-on"><i class="icon-time"></i></span></div>');
        inputElement = div.find('input.timepicker-default');
        inputElement.timepicker();
    });
    
    it('should have a data attribute', function() {
        expect(inputElement.data()).toBeTruthy();
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