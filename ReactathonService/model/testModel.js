"use strict";
exports.__esModule = true;
var cruddl_1 = require("cruddl");
var project = new cruddl_1.Project([{
        name: 'schema.graphqls',
        body: "\n    \n    type events @rootEntity {     \n      eventName : String\n\t\teventId  : String\n\t\timageURL  : String\n\t\tcreatedBy  : String\n\t\tstartDate  : String\n\t\tendDate  : String\n\t\treadMoreContent  : String\n\t\tdeliverables  : String\n\t\tfaq  : String\n\t\tusers : [String]\n}\n\ntype users @rootEntity {     \n  userId : String\nemail  : String\npwd  : String\t\t\nstatus  : String\n}\n\n  "
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
