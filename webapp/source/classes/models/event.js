define([], function(){
  "use strict"

  return function(){
    this.id = '0'
    this.name = ''
    this.description = ''
    this.targetGroup = ''
    this.contributionsDescription = ''
    this.maximalAmountOfGuests = ''
    this.location={name:'', street:'', zipCode:'', city:''};
    this.times={begin:0, end:0};
    this.guests = [];

    Object.defineProperty(this, "end", { 
      get: function () { return this.times.end },
      set: function(end) { this.times.end = end }
    }); 

    Object.defineProperty(this, "begin", { 
      get: function () { return this.times.begin },
      set: function(begin) { this.times.begin = begin }
    }); 
  }
});
