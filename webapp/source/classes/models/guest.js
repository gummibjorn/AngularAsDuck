define(['app/services/uuidService'], function (UuidService) {
  "use strict"

  var Guest = function (id) {
    if (!id) {
      this.id = UuidService.getRandomUuid();
    } else {
      this.id = id;
    }
    this.name = ''
    this.contribution = ''
    this.comment = ''
    this.canceled = false
  };

  Guest.createFromJson = function (guestJson) {
    var guest = new Guest(guestJson.id);
    guest.name = guestJson.name;
    guest.contribution = guestJson.contribution;
    guest.comment = guestJson.comment;
    guest.canceled = guestJson.canceled;
    return guest;
  };

  return Guest;
});
