"use strict";
exports.__esModule = true;
var cruddl_1 = require("cruddl");
var project = new cruddl_1.Project([{
        name: 'schema.graphqls',
        body: "\n    \n    type events @rootEntity {     \n      eventName : String\n\t\teventId  : String\n\t\timageURL  : String\n\t\tcreatedBy  : String\n\t\tstartDate  : String\n\t\tendDate  : String\n\t\treadMoreContent  : String\n\t\tdeliverables  : [String]\n\t\tfaqs  : [faq] @relation\n    users : [String]\n    leaderboards : [leaderboard] @relation\n}\n\n\ntype faq @rootEntity {     \n  qes : String\nans  : String\n\n}\ntype users @rootEntity { \n  email  : String\n  name:String\n  pwd  : String\t\t\n  status  : String\n  goldBadge: String\n  silverBadge: String\t\t\n  bronzeBadge: String\n  achievements : achievement @relation\n  skills :[skill] @relation\n  totalExp:String\n  companies :[String]\n  college:[String]\t\n  \n}\n\ntype achievement @rootEntity {\n\nevent:  [events] @relation\nrank: String\n\n}\n\ntype skill @rootEntity {\n\nskillName: String\n}\n\ntype leaderboard  @rootEntity \n{\nrank:String\nparticipants : String \t\ntotalScore : String\nattempts : \tString\nlastSubmitted : String\n}\n\n\n  "
    }, {
        name: 'permission-profiles.json',
        body: JSON.stringify({
            permissionProfiles: {
                "default": {
                    permissions: [{
                            roles: ['users'],
                            access: 'readWrite'
                        }]
                }
            }
        })
    }]);
exports.project = project;
exports["default"] = project;
