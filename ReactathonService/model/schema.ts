import { Project } from 'cruddl';
const project = new Project([{
  name: 'schema.graphqls',
  body: `
    
    type events @rootEntity {     
      eventName : String
		eventId  : String
		imageURL  : String
		createdBy  : String
		startDate  : String
		endDate  : String
		readMoreContent  : String
		deliverables  : [String]
		faqs  : [faq] @relation
    users : [String]
    leaderboards : [leaderboard] @relation
}

type discussion @rootEntity {     
user: String
Qus : String
dated:String

}

type faq @rootEntity {     
  qes : String
ans  : String

}
type users @rootEntity { 
  email  : String
  name:String
  pwd  : String		
  status  : String
  goldBadge: String
  silverBadge: String		
  bronzeBadge: String
  achievements : achievement @relation
  skills :[skill] @relation
  totalExp:String
  companies :[String]
  college:[String]	
  
}

type achievement @rootEntity {

event:  [events] @relation
rank: String

}

type skill @rootEntity {

skillName: String
}

type leaderboard  @rootEntity 
{
rank:String
participants : String 	
totalScore : String
attempts : 	String
lastSubmitted : String
}


  `
}, {
  name: 'permission-profiles.json',
  body: JSON.stringify({
    permissionProfiles: {
      default: {
        permissions: [{
          roles: ['users'],
          access: 'readWrite'
        }]
      }
    }
  })
}]);

 export default project;
export { project };
