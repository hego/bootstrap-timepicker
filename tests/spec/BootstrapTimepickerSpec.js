describe("Timepicker", function() {
    var div, inputElement, timepicker;

    beforeEach(function() {
        div = $('<div class="input-append bootstrap-timepicker-component"><input type="text" class="timepicker-default input-small"><span class="add-on"><i class="icon-time"></i></span></div>');
        inputElement = div.find('input.timepicker-default');
        inputElement.val('08:00');
        inputElement.timepicker({
            showMeridian: false
        });
        timepicker = inputElement.data('timepicker');
    });
    
    it('should have a data attribute', function() {
        expect(timepicker).toBeTruthy();
    });
    
    it('should set its internal values from the input value', function() {
        expect(timepicker.getTime()).toEqual('08:00');
    });
    
    
    
    describe('calling method', function() {
        describe('setHour(10)', function() {
            beforeEach(function() {
                timepicker.setHour(10);
            });
            it('sets the time to 10:00', function() {
                expect(timepicker.getTime()).toEqual('10:00');
            });
            
            it('sets the input element\'s value to 10:00', function() {
                expect(inputElement.val()).toEqual('10:00');
            });
        });
        
        it('setMinute(30) sets the time to 08:30', function() {
            timepicker.setMinute(30);
            expect(timepicker.getTime()).toEqual('08:30');
        });
        
        it('setMinute(60) sets the time to 09:00', function() {
            timepicker.setMinute(60);
            expect(timepicker.getTime()).toEqual('09:00');
        });
        
        it('setMinute(75) sets the time to 09:15', function() {
            timepicker.setMinute(75);
            expect(timepicker.getTime()).toEqual('09:15');
        });
        
        it('setMinute(150) sets the time to 10:30', function() {
            timepicker.setMinute(150);
            expect(timepicker.getTime()).toEqual('10:30');
        });
    });
    
    describe('event', function() {
        var triggerCount;
        describe('timeChange not triggered', function() {
            it('', function() {
                timepicker.setHour(8);
            })
        });
        
        describe('timeChange triggered', function() {
            beforeEach(function() {
                triggerCount = 0;

                inputElement.on('timeChange', function() {
                    triggerCount++;
                })
            });
            
            afterEach(function() {
                inputElement.off('timeChange');
            });
            
            describe('zero times by calling', function () {
                afterEach(function () {
                    expect(triggerCount).toBe(0);
                });
                
                it('setHour() with the same value it already has', function () {
                    var hour = timepicker.hour;
                    timepicker.setHour(hour);
                });
            });
            
            describe('once by calling', function () {
                afterEach(function(){
                    expect(triggerCount).toBe(1);
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
});