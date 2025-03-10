function skillsMember() {}

skillsMember.prototype = {
  get: function (memberId) {
    return this.request('GET', '/members/' + memberId);
  },

  update: function (memberId, data) {
    return this.request('PUT', '/members/' + memberId, data);
  },

  delete: function (memberId) {
    return this.request('DELETE', '/members/' + memberId);
  },
};

module.exports = skillsMember;