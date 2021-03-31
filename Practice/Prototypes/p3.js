function StopWatch(){
    let startTime,endTime,running, duration=0;
    
    Object.defineProperty(this, 'startTime', {
        get: function() { return startTime; }
      });
    Object.defineProperty(this, 'endTime', {
        get: function() { return endTime; }
      });
    Object.defineProperty(this, 'running', {
        get: function() { return running; }
      });
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; },
        set: function(value) {duration=value; }
      });
}

StopWatch.prototype.start=function(){
    if(this.running)
    throw new Error('Already started');

    running=true;
    this.startTime=new Date();
}

StopWatch.prototype.stop=function(){
    if(!this.running)
    throw new Error('Not started');

    this.running=false;
    this.endTime=new Date();
    let seconds=(endTime.getTime()-startTime.getTime())/1000;
    this.duration+=seconds;
}

StopWatch.prototype.reset=function(){
    this.startTime=null;
    this.endTime=null;
    this.duration=0;
    this.running=false;
}