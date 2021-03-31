function StopWatch(){
    let startTime,endTime,running, duration=0;
    this.start=function(){
        if(running)
        throw new Error('Already started');

        running=true;
        startTime=new Date();
    };
    this.stop=function(){
        if(!running)
        throw new Error('Not started');

        running=false;
        endTime=new Date();
        let seconds=(endTime.getTime()-startTime.getTime())/1000;
        duration+=seconds;
    };
    this.reset=function(){
        startTime=null;
        endTime=null;
        duration=0;
        running=false;
    };
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
      });
}