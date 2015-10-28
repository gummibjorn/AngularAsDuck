"use strict"

function Event(){
  this.id = '0'
  this.name = ''
  this.description = ''
  this.targetGroup = ''
  this.contributionsDescription = ''
  this.maximalAmountOfGuests = ''
  this.location={name:'', street:'', zipCode:'', city:''};
  this.times={begin:0, end:0};
  this.guests;

  Object.defineProperty(this, "end" { 
    get: function () { return times.get }
    set: function(end) { times.end = end }
  }); 

  Object.defineProperty(this, "begin" { 
    get: function () { return times.begin }
    set: function(begin) { times.begin = begin }
  }); 
}
